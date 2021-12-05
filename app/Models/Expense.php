<?php

namespace Crater\Models;

use Carbon\Carbon;
use Crater\Traits\HasCustomFieldsTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Expense extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use HasCustomFieldsTrait;

    protected $guarded = ['id'];

    protected $appends = [
        'formattedExpenseDate',
        'formattedCreatedAt',
        'receipt',
        'receiptMeta'
    ];

    protected $casts = [
        'notes' => 'string',
        'exchange_rate' => 'float'
    ];

    public function setExpenseDateAttribute($value)
    {
        if ($value) {
            $this->attributes['expense_date'] = Carbon::createFromFormat('Y-m-d', $value);
        }
    }

    public function category()
    {
        return $this->belongsTo(ExpenseCategory::class, 'expense_category_id');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class);
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }

    public function creator()
    {
        return $this->belongsTo('Crater\Models\User', 'creator_id');
    }

    public function getFormattedExpenseDateAttribute($value)
    {
        $dateFormat = CompanySetting::getSetting('carbon_date_format', $this->company_id);

        return Carbon::parse($this->expense_date)->format($dateFormat);
    }

    public function getFormattedCreatedAtAttribute($value)
    {
        $dateFormat = CompanySetting::getSetting('carbon_date_format', $this->company_id);

        return Carbon::parse($this->created_at)->format($dateFormat);
    }

    public function getReceiptUrlAttribute($value)
    {
        $media = $this->getFirstMedia('receipts');

        if ($media) {
            return [
                'url' => $media->getFullUrl(),
                'type' => $media->type
            ];
        }

        return null;
    }

    public function getReceiptAttribute($value)
    {
        $media = $this->getFirstMedia('receipts');

        if ($media) {
            return $media->getPath();
        }

        return null;
    }

    public function getReceiptMetaAttribute($value)
    {
        $media = $this->getFirstMedia('receipts');

        if ($media) {
            return $media;
        }

        return null;
    }

    public function scopeExpensesBetween($query, $start, $end)
    {
        return $query->whereBetween(
            'expenses.expense_date',
            [$start->format('Y-m-d'), $end->format('Y-m-d')]
        );
    }

    public function scopeWhereCategoryName($query, $search)
    {
        foreach (explode(' ', $search) as $term) {
            $query->whereHas('category', function ($query) use ($term) {
                $query->where('name', 'LIKE', '%'.$term.'%');
            });
        }
    }

    public function scopeWhereNotes($query, $search)
    {
        $query->where('notes', 'LIKE', '%'.$search.'%');
    }

    public function scopeWhereCategory($query, $categoryId)
    {
        return $query->where('expenses.expense_category_id', $categoryId);
    }

    public function scopeWhereUser($query, $customer_id)
    {
        return $query->where('expenses.customer_id', $customer_id);
    }

    public function scopeApplyFilters($query, array $filters)
    {
        $filters = collect($filters);

        if ($filters->get('expense_category_id')) {
            $query->whereCategory($filters->get('expense_category_id'));
        }

        if ($filters->get('customer_id')) {
            $query->whereUser($filters->get('customer_id'));
        }

        if ($filters->get('expense_id')) {
            $query->whereExpense($filters->get('expense_id'));
        }

        if ($filters->get('from_date') && $filters->get('to_date')) {
            $start = Carbon::createFromFormat('Y-m-d', $filters->get('from_date'));
            $end = Carbon::createFromFormat('Y-m-d', $filters->get('to_date'));
            $query->expensesBetween($start, $end);
        }

        if ($filters->get('orderByField') || $filters->get('orderBy')) {
            $field = $filters->get('orderByField') ? $filters->get('orderByField') : 'expense_date';
            $orderBy = $filters->get('orderBy') ? $filters->get('orderBy') : 'asc';
            $query->whereOrder($field, $orderBy);
        }

        if ($filters->get('search')) {
            $query->whereSearch($filters->get('search'));
        }
    }

    public function scopeWhereExpense($query, $expense_id)
    {
        $query->orWhere('id', $expense_id);
    }

    public function scopeWhereSearch($query, $search)
    {
        foreach (explode(' ', $search) as $term) {
            $query->whereHas('category', function ($query) use ($term) {
                $query->where('name', 'LIKE', '%'.$term.'%');
            })
                ->orWhere('notes', 'LIKE', '%'.$term.'%');
        }
    }

    public function scopeWhereOrder($query, $orderByField, $orderBy)
    {
        $query->orderBy($orderByField, $orderBy);
    }

    public function scopeWhereCompany($query)
    {
        $query->where('expenses.company_id', request()->header('company'));
    }

    public function scopeWhereCompanyId($query, $company)
    {
        $query->where('expenses.company_id', $company);
    }

    public function scopePaginateData($query, $limit)
    {
        if ($limit == 'all') {
            return $query->get();
        }

        return $query->paginate($limit);
    }

    public function scopeExpensesAttributes($query)
    {
        $query->select(
            DB::raw('
                count(*) as expenses_count,
                sum(amount) as total_amount,
                expense_category_id')
        )
            ->groupBy('expense_category_id');
    }

    public static function createExpense($request)
    {
        $expense = self::create($request->getExpensePayload());

        $company_currency = CompanySetting::getSetting('currency', $request->header('company'));

        if ((string)$expense['currency_id'] !== $company_currency) {
            ExchangeRateLog::addExchangeRateLog($expense);
        }

        if ($request->hasFile('attachment_receipt')) {
            $expense->addMediaFromRequest('attachment_receipt')->toMediaCollection('receipts');
        }

        if ($request->customFields && empty($request->customFields)) {
            $expense->addCustomFields($request->customFields);
        }

        return $expense;
    }

    public function updateExpense($request)
    {
        $data = $request->getExpensePayload();

        $this->update($data);

        $company_currency = CompanySetting::getSetting('currency', $request->header('company'));

        if ((string)$data['currency_id'] !== $company_currency) {
            ExchangeRateLog::addExchangeRateLog($this);
        }

        if ($request->hasFile('attachment_receipt')) {
            $this->clearMediaCollection('receipts');
            $this->addMediaFromRequest('attachment_receipt')->toMediaCollection('receipts');
        }

        if ($request->customFields && empty($request->customFields)) {
            $this->updateCustomFields($request->customFields);
        }

        return true;
    }
}
