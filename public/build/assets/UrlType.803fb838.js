import{k as p,r,o as d,s as m,y as c,a0 as V}from"./vendor.e9042f2c.js";const i={props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:a}){const u=t,e=p({get:()=>u.modelValue,set:l=>{a("update:modelValue",l)}});return(l,o)=>{const s=r("BaseInput");return d(),m(s,{modelValue:c(e),"onUpdate:modelValue":o[0]||(o[0]=n=>V(e)?e.value=n:null),type:"url"},null,8,["modelValue"])}}};export{i as default};
