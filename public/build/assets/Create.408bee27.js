var oe=Object.defineProperty,se=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var q=(u,e,r)=>e in u?oe(u,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[e]=r,b=(u,e)=>{for(var r in e||(e={}))re.call(e,r)&&q(u,r,e[r]);if(P)for(var r of P(e))ie.call(e,r)&&q(u,r,e[r]);return u},h=(u,e)=>se(u,le(e));import{g as me,u as ue,C as ce,i as x,k as p,m as T,n as de,p as pe,a4 as _e,q as ge,r as s,o as w,s as M,w as l,b as o,y as t,t as N,a0 as z,v as A,x as E,A as j,z as Ie,B as fe}from"./vendor.e9042f2c.js";import{p as ve,q as Be,g as be,c as $e,d as ye,e as Ve}from"./main.9d655092.js";import{_ as Se}from"./ItemUnitModal.2d909186.js";const he=["onSubmit"],Ce={setup(u){const e=ve(),r=Be(),$=be(),G=$e(),{t:_}=me(),y=ue(),L=ce(),D=ye(),I=x(!1),V=x(G.selectedCompanySettings.tax_per_item);let i=x(!1);e.$reset(),O();const v=p({get:()=>e.currentItem.price/100,set:n=>{e.currentItem.price=Math.round(n*100)}}),S=p({get:()=>{var n,a;return(a=(n=e==null?void 0:e.currentItem)==null?void 0:n.taxes)==null?void 0:a.map(d=>{if(d)return h(b({},d),{tax_type_id:d.id,tax_name:d.name+" ("+d.percent+"%)"})})},set:n=>{e.currentItem.taxes=n}}),B=p(()=>y.name==="items.edit"),C=p(()=>B.value?_("items.edit_item"):_("items.new_item")),R=p(()=>r.taxTypes.map(n=>h(b({},n),{tax_type_id:n.id,tax_name:n.name+" ("+n.percent+"%)"}))),Y=p(()=>V.value==="YES"),H=p(()=>({currentItem:{name:{required:T.withMessage(_("validation.required"),de),minLength:T.withMessage(_("validation.name_min_length",{count:3}),pe(3))},description:{maxLength:T.withMessage(_("validation.description_maxlength"),_e(65e3))}}})),c=ge(H,e);async function F(){$.openModal({title:_("settings.customization.items.add_item_unit"),componentName:"ItemUnitModal",size:"sm"})}async function O(){if(i.value=!0,await e.fetchItemUnits({limit:"all"}),D.hasAbilities(Ve.VIEW_TAX_TYPE)&&await r.fetchTaxTypes({limit:"all"}),B.value){let n=y.params.id;await e.fetchItem(n),e.currentItem.tax_per_item===1?V.value="YES":V.value="NO"}i.value=!1}async function W(){if(c.value.currentItem.$touch(),c.value.currentItem.$invalid)return!1;I.value=!0;try{let a=b({id:y.params.id},e.currentItem);e.currentItem&&e.currentItem.taxes&&(a.taxes=e.currentItem.taxes.map(g=>({tax_type_id:g.tax_type_id,amount:v.value*g.percent,percent:g.percent,name:g.name,collective_tax:0}))),await(B.value?e.updateItem:e.addItem)(a),I.value=!1,L.push("/admin/items"),n()}catch{I.value=!1;return}function n(){$.closeModal(),setTimeout(()=>{e.resetCurrentItem(),$.$reset(),c.value.$reset()},300)}}return(n,a)=>{const d=s("BaseBreadcrumbItem"),g=s("BaseBreadcrumb"),X=s("BasePageHeader"),J=s("BaseInput"),f=s("BaseInputGroup"),K=s("BaseMoney"),U=s("BaseIcon"),Q=s("BaseSelectAction"),k=s("BaseMultiselect"),Z=s("BaseTextarea"),ee=s("BaseButton"),te=s("BaseInputGrid"),ne=s("BaseCard"),ae=s("BasePage");return w(),M(ae,null,{default:l(()=>[o(X,{title:t(C)},{default:l(()=>[o(g,null,{default:l(()=>[o(d,{title:n.$t("general.home"),to:"dashboard"},null,8,["title"]),o(d,{title:n.$tc("items.item",2),to:"/admin/items"},null,8,["title"]),o(d,{title:t(C),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),o(Se),N("form",{class:"grid lg:grid-cols-2 mt-6",action:"submit",onSubmit:fe(W,["prevent"])},[o(ne,{class:"w-full"},{default:l(()=>[o(te,{layout:"one-column"},{default:l(()=>[o(f,{label:n.$t("items.name"),"content-loading":t(i),required:"",error:t(c).currentItem.name.$error&&t(c).currentItem.name.$errors[0].$message},{default:l(()=>[o(J,{modelValue:t(e).currentItem.name,"onUpdate:modelValue":a[0]||(a[0]=m=>t(e).currentItem.name=m),"content-loading":t(i),invalid:t(c).currentItem.name.$error,onInput:a[1]||(a[1]=m=>t(c).currentItem.name.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","error"]),o(f,{label:n.$t("items.price"),"content-loading":t(i)},{default:l(()=>[o(K,{modelValue:t(v),"onUpdate:modelValue":a[2]||(a[2]=m=>z(v)?v.value=m:null),"content-loading":t(i)},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),o(f,{"content-loading":t(i),label:n.$t("items.unit")},{default:l(()=>[o(k,{modelValue:t(e).currentItem.unit_id,"onUpdate:modelValue":a[3]||(a[3]=m=>t(e).currentItem.unit_id=m),"content-loading":t(i),label:"name",options:t(e).itemUnits,"value-prop":"id","can-deselect":!1,"can-clear":!1,placeholder:n.$t("items.select_a_unit"),searchable:"","track-by":"name"},{action:l(()=>[o(Q,{onClick:F},{default:l(()=>[o(U,{name:"PlusIcon",class:"h-4 mr-2 -ml-2 text-center text-primary-400"}),A(" "+E(n.$t("settings.customization.items.add_item_unit")),1)]),_:1})]),_:1},8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["content-loading","label"]),t(Y)?(w(),M(f,{key:0,label:n.$t("items.taxes"),"content-loading":t(i)},{default:l(()=>[o(k,{modelValue:t(S),"onUpdate:modelValue":a[4]||(a[4]=m=>z(S)?S.value=m:null),"content-loading":t(i),options:t(R),mode:"tags",label:"tax_name",class:"w-full","value-prop":"id","can-deselect":!1,"can-clear":!1,searchable:"","track-by":"tax_name",object:""},null,8,["modelValue","content-loading","options"])]),_:1},8,["label","content-loading"])):j("",!0),o(f,{label:n.$t("items.description"),"content-loading":t(i),error:t(c).currentItem.description.$error&&t(c).currentItem.description.$errors[0].$message},{default:l(()=>[o(Z,{modelValue:t(e).currentItem.description,"onUpdate:modelValue":a[5]||(a[5]=m=>t(e).currentItem.description=m),"content-loading":t(i),name:"description",row:2,rows:"2",onInput:a[6]||(a[6]=m=>t(c).currentItem.description.$touch())},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading","error"]),N("div",null,[o(ee,{"content-loading":t(i),type:"submit",loading:I.value},{left:l(m=>[I.value?j("",!0):(w(),M(U,{key:0,name:"SaveIcon",class:Ie(m.class)},null,8,["class"]))]),default:l(()=>[A(" "+E(t(B)?n.$t("items.update_item"):n.$t("items.save_item")),1)]),_:1},8,["content-loading","loading"])])]),_:1})]),_:1})],40,he)]),_:1})}}};export{Ce as default};
