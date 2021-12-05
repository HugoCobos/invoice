var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var j=(t,n,v)=>n in t?X(t,n,{enumerable:!0,configurable:!0,writable:!0,value:v}):t[n]=v,x=(t,n)=>{for(var v in n||(n={}))ee.call(n,v)&&j(t,v,n[v]);if(N)for(var v of N(n))ne.call(n,v)&&j(t,v,n[v]);return t},E=(t,n)=>Y(t,Z(n));import{u as P,i as F,j as te,k as R,D as O,M as ie,r as m,o as b,c as A,t as f,b as r,y as e,x as M,w as d,s as $,A as V,F as L,a9 as re,g as ae,C as oe,m as _,n as w,aU as D,O as le,q as se,z as ce,v as ue,B as de}from"./vendor.e9042f2c.js";import{_ as ve,a as ge,b as me,c as fe,d as _e,e as ye}from"./ItemModal.7737b478.js";import{B as G,m as pe,c as be,l as Ie}from"./main.9d655092.js";import{_ as $e}from"./ExchangeRateConverter.bb00b97f.js";import{_ as we}from"./CreateCustomFields.e6dfcefa.js";import{_ as qe}from"./TaxTypeModal.6600475a.js";import"./DragIcon.80bbb437.js";import"./SelectNotePopup.c192577c.js";import"./NoteModal.4c55688d.js";const Re={class:"col-span-5 pr-0"},Be={class:"flex mt-7"},he={class:"relative w-20 mt-8"},Ve={class:"ml-2"},Ce={class:"p-0 mb-1 leading-snug text-left text-black"},Se={class:"p-0 m-0 text-xs leading-tight text-left text-gray-500",style:{"max-width":"480px"}},Fe={class:"grid grid-cols-1 col-span-7 gap-4 mt-8 lg:gap-6 lg:mt-0 lg:grid-cols-2"},Me={props:{v:{type:Object,default:null},isLoading:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!1}},setup(t){const n=t,v=P(),i=G(),q=pe(),a=F(!1),g=F(!1),k=te([{label:"None",value:"NONE"},{label:"Date",value:"DATE"},{label:"Count",value:"COUNT"}]),B=R(()=>i.newRecurringInvoice.selectedFrequency&&i.newRecurringInvoice.selectedFrequency.value==="CUSTOM"),C=R(()=>n.isEdit?q.config.recurring_invoice_status.update_status:q.config.recurring_invoice_status.create_status);O(()=>i.newRecurringInvoice.selectedFrequency,s=>{s&&s.value!=="CUSTOM"?i.newRecurringInvoice.frequency=s.value:i.newRecurringInvoice.frequency=null}),ie(()=>{v.params.id||p()});function y(s){return i.newRecurringInvoice.limit_by===s}const T=re(()=>{p()},500);async function p(){const s=i.newRecurringInvoice.frequency;if(!s)return;g.value=!0;let o={starts_at:i.newRecurringInvoice.starts_at,frequency:s};try{await i.fetchRecurringInvoiceFrequencyDate(o)}catch(h){console.error(h),g.value=!1}g.value=!1}return(s,o)=>{const h=m("BaseCustomerSelectPopup"),U=m("BaseSwitch"),c=m("BaseDatePicker"),u=m("BaseInputGroup"),I=m("BaseMultiselect"),S=m("BaseInput");return b(),A(L,null,[f("div",Re,[r(h,{modelValue:e(i).newRecurringInvoice.customer,"onUpdate:modelValue":o[0]||(o[0]=l=>e(i).newRecurringInvoice.customer=l),valid:t.v.customer_id,"content-loading":a.value,type:"recurring-invoice"},null,8,["modelValue","valid","content-loading"]),f("div",Be,[f("div",he,[r(U,{modelValue:e(i).newRecurringInvoice.send_automatically,"onUpdate:modelValue":o[1]||(o[1]=l=>e(i).newRecurringInvoice.send_automatically=l),class:"absolute -top-4"},null,8,["modelValue"])]),f("div",Ve,[f("p",Ce,M(s.$t("recurring_invoices.send_automatically")),1),f("p",Se,M(s.$t("recurring_invoices.send_automatically_desc")),1)])])]),f("div",Fe,[r(u,{label:s.$t("recurring_invoices.starts_at"),"content-loading":a.value,required:"",error:t.v.starts_at.$error&&t.v.starts_at.$errors[0].$message},{default:d(()=>[r(c,{modelValue:e(i).newRecurringInvoice.starts_at,"onUpdate:modelValue":o[2]||(o[2]=l=>e(i).newRecurringInvoice.starts_at=l),"content-loading":a.value,"calendar-button":!0,"calendar-button-icon":"calendar",invalid:t.v.starts_at.$error,onChange:o[3]||(o[3]=l=>p())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","error"]),r(u,{label:s.$t("recurring_invoices.next_invoice_date"),"content-loading":a.value,required:""},{default:d(()=>[r(c,{modelValue:e(i).newRecurringInvoice.next_invoice_at,"onUpdate:modelValue":o[4]||(o[4]=l=>e(i).newRecurringInvoice.next_invoice_at=l),"content-loading":a.value,"calendar-button":!0,disabled:!0,loading:g.value,"calendar-button-icon":"calendar"},null,8,["modelValue","content-loading","loading"])]),_:1},8,["label","content-loading"]),r(u,{label:s.$t("recurring_invoices.limit_by"),"content-loading":a.value,class:"lg:mt-0",required:"",error:t.v.limit_by.$error&&t.v.limit_by.$errors[0].$message},{default:d(()=>[r(I,{modelValue:e(i).newRecurringInvoice.limit_by,"onUpdate:modelValue":o[5]||(o[5]=l=>e(i).newRecurringInvoice.limit_by=l),"content-loading":a.value,options:e(k),label:"label",invalid:t.v.limit_by.$error,"value-prop":"value"},null,8,["modelValue","content-loading","options","invalid"])]),_:1},8,["label","content-loading","error"]),y("DATE")?(b(),$(u,{key:0,label:s.$t("recurring_invoices.limit_date"),"content-loading":a.value,required:y("DATE"),error:t.v.limit_date.$error&&t.v.limit_date.$errors[0].$message},{default:d(()=>[r(c,{modelValue:e(i).newRecurringInvoice.limit_date,"onUpdate:modelValue":o[6]||(o[6]=l=>e(i).newRecurringInvoice.limit_date=l),"content-loading":a.value,invalid:t.v.limit_date.$error,"calendar-button-icon":"calendar"},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","required","error"])):V("",!0),y("COUNT")?(b(),$(u,{key:1,label:s.$t("recurring_invoices.count"),"content-loading":a.value,required:y("COUNT"),error:t.v.limit_count.$error&&t.v.limit_count.$errors[0].$message},{default:d(()=>[r(S,{modelValue:e(i).newRecurringInvoice.limit_count,"onUpdate:modelValue":o[7]||(o[7]=l=>e(i).newRecurringInvoice.limit_count=l),"content-loading":a.value,invalid:t.v.limit_count.$error,type:"number"},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","required","error"])):V("",!0),r(u,{label:s.$t("recurring_invoices.status"),required:"","content-loading":a.value,error:t.v.status.$error&&t.v.status.$errors[0].$message},{default:d(()=>[r(I,{modelValue:e(i).newRecurringInvoice.status,"onUpdate:modelValue":o[8]||(o[8]=l=>e(i).newRecurringInvoice.status=l),options:e(C),"content-loading":a.value,invalid:t.v.status.$error,placeholder:s.$t("recurring_invoices.select_a_status"),"value-prop":"value",label:"value"},null,8,["modelValue","options","content-loading","invalid","placeholder"])]),_:1},8,["label","content-loading","error"]),r(u,{label:s.$t("recurring_invoices.frequency.select_frequency"),required:"","content-loading":a.value,error:t.v.selectedFrequency.$error&&t.v.selectedFrequency.$errors[0].$message},{default:d(()=>[r(I,{modelValue:e(i).newRecurringInvoice.selectedFrequency,"onUpdate:modelValue":o[9]||(o[9]=l=>e(i).newRecurringInvoice.selectedFrequency=l),"content-loading":a.value,options:e(i).frequencies,label:"label",invalid:t.v.selectedFrequency.$error,object:"",onChange:p},null,8,["modelValue","content-loading","options","invalid"])]),_:1},8,["label","content-loading","error"]),e(B)?(b(),$(u,{key:2,label:s.$t("recurring_invoices.frequency.title"),"content-loading":a.value,required:"",error:t.v.frequency.$error&&t.v.frequency.$errors[0].$message},{default:d(()=>[r(S,{modelValue:e(i).newRecurringInvoice.frequency,"onUpdate:modelValue":[o[10]||(o[10]=l=>e(i).newRecurringInvoice.frequency=l),e(T)],"content-loading":a.value,disabled:!e(B),invalid:t.v.frequency.$error,loading:g.value},null,8,["modelValue","content-loading","disabled","invalid","loading","onUpdate:modelValue"])]),_:1},8,["label","content-loading","error"])):V("",!0),r($e,{store:e(i),"store-prop":"newRecurringInvoice",v:t.v,"is-loading":t.isLoading,"is-edit":t.isEdit,"customer-currency":e(i).newRecurringInvoice.currency_id},null,8,["store","v","is-loading","is-edit","customer-currency"])])],64)}}},ke=["onSubmit"],Te={class:"flex"},Ue={class:"grid-cols-12 gap-8 mt-6 mb-8 lg:grid"},De={class:"block mt-10 invoice-foot lg:flex lg:justify-between lg:items-start"},Ne={class:"w-full relative lg:w-1/2"},Je={setup(t){const n=G(),v=be(),i=Ie(),q="newRecurringInvoice",{t:a}=ae();let g=F(!1);const k=F(["customer","company","customerCustom","invoice","invoiceCustom"]);let B=P(),C=oe(),y=R(()=>n.isFetchingInvoice||n.isFetchingInitialSettings),T=R(()=>p.value?a("recurring_invoices.edit_invoice"):a("recurring_invoices.new_invoice")),p=R(()=>B.name==="recurring-invoices.edit");const s={starts_at:{required:_.withMessage(a("validation.required"),w)},status:{required:_.withMessage(a("validation.required"),w)},frequency:{required:_.withMessage(a("validation.required"),w)},limit_by:{required:_.withMessage(a("validation.required"),w)},limit_date:{required:_.withMessage(a("validation.required"),D(function(){return n.newRecurringInvoice.limit_by==="DATE"}))},limit_count:{required:_.withMessage(a("validation.required"),D(function(){return n.newRecurringInvoice.limit_by==="COUNT"}))},selectedFrequency:{required:_.withMessage(a("validation.required"),w)},customer_id:{required:_.withMessage(a("validation.required"),w)},exchange_rate:{required:D(function(){return _.withMessage(a("validation.required"),w),n.showExchangeRate}),decimal:_.withMessage(a("validation.valid_exchange_rate"),le)}},o=se(s,R(()=>n.newRecurringInvoice),{$scope:q});n.resetCurrentRecurringInvoice(),n.fetchRecurringInvoiceInitialSettings(p.value),i.resetCustomFields(),o.value.$reset,O(()=>n.newRecurringInvoice.customer,c=>{c&&c.currency?n.newRecurringInvoice.currency=c.currency:n.newRecurringInvoice.currency=v.selectedCompanyCurrency});async function h(){if(o.value.$touch(),o.value.$invalid)return!1;g.value=!0;let c=E(x({},n.newRecurringInvoice),{sub_total:n.getSubTotal,total:n.getTotal,tax:n.getTotalTax});B.params.id?n.updateRecurringInvoice(c).then(u=>{u.data.data&&C.push(`/admin/recurring-invoices/${u.data.data.id}/view`),g.value=!1}).catch(u=>{g.value=!1}):U(c)}function U(c){n.addRecurringInvoice(c).then(u=>{u.data.data&&C.push(`/admin/recurring-invoices/${u.data.data.id}/view`),g.value=!1}).catch(u=>{g.value=!1})}return(c,u)=>{const I=m("BaseBreadcrumbItem"),S=m("BaseBreadcrumb"),l=m("BaseButton"),z=m("router-link"),H=m("BaseIcon"),J=m("BasePageHeader"),K=m("BaseScrollPane"),Q=m("BasePage");return b(),A(L,null,[r(ve),r(ge),r(qe),r(Q,{class:"relative invoice-create-page"},{default:d(()=>[f("form",{onSubmit:de(h,["prevent"])},[r(J,{title:e(T)},{actions:d(()=>[r(z,{to:`/invoices/pdf/${e(n).newRecurringInvoice.unique_hash}`},{default:d(()=>[c.$route.name==="invoices.edit"?(b(),$(l,{key:0,target:"_blank",class:"mr-3",variant:"primary-outline",type:"button"},{default:d(()=>[f("span",Te,M(c.$t("general.view_pdf")),1)]),_:1})):V("",!0)]),_:1},8,["to"]),r(l,{loading:e(g),disabled:e(g),variant:"primary",type:"submit"},{left:d(W=>[e(g)?V("",!0):(b(),$(H,{key:0,name:"SaveIcon",class:ce(W.class)},null,8,["class"]))]),default:d(()=>[ue(" "+M(c.$t("recurring_invoices.save_invoice")),1)]),_:1},8,["loading","disabled"])]),default:d(()=>[r(S,null,{default:d(()=>[r(I,{title:c.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),r(I,{title:c.$t("recurring_invoices.title",2),to:"/admin/recurring-invoices"},null,8,["title"]),c.$route.name==="invoices.edit"?(b(),$(I,{key:0,title:c.$t("recurring_invoices.edit_invoice"),to:"#",active:""},null,8,["title"])):(b(),$(I,{key:1,title:c.$t("recurring_invoices.new_invoice"),to:"#",active:""},null,8,["title"]))]),_:1})]),_:1},8,["title"]),f("div",Ue,[r(Me,{v:e(o),"is-loading":e(y),"is-edit":e(p)},null,8,["v","is-loading","is-edit"])]),r(K,null,{default:d(()=>[r(me,{currency:e(n).newRecurringInvoice.currency,"is-loading":e(y),"item-validation-scope":q,store:e(n),"store-prop":"newRecurringInvoice"},null,8,["currency","is-loading","store"]),f("div",De,[f("div",Ne,[r(fe,{store:e(n),"store-prop":"newRecurringInvoice",fields:k.value,type:"Invoice"},null,8,["store","fields"]),r(we,{type:"Invoice","is-edit":e(p),"is-loading":e(y),store:e(n),"store-prop":"newRecurringInvoice","custom-field-scope":q,class:"mb-6"},null,8,["is-edit","is-loading","store"]),r(_e,{store:e(n),"store-prop":"newRecurringInvoice"},null,8,["store"])]),r(ye,{currency:e(n).newRecurringInvoice.currency,"is-loading":e(y),store:e(n),"store-prop":"newRecurringInvoice","tax-popup-type":"invoice"},null,8,["currency","is-loading","store"])])]),_:1})],40,ke)]),_:1})],64)}}};export{Je as default};
