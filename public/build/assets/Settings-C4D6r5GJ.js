var v=Object.defineProperty;var w=(n,e,t)=>e in n?v(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var g=(n,e,t)=>(w(n,typeof e!="symbol"?e+"":e,t),t);import{m as a,r as l,R as s,C as R,c as N}from"./CreateReactScript-BZNFBiYC.js";import{T,R as y,M as x}from"./Table-7H_SmTdZ.js";import{A as C}from"./Adminto-BunV6och.js";import{I as E}from"./InputFormGroup-BUOjBXeO.js";import{T as F}from"./TippyButton-cxVS3TbP.js";const S=(n,e)=>{n.root.innerHTML=e};class m{}g(m,"paginate",async e=>{const{result:t}=await a.Fetch("/api/settings/paginate",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});return t}),g(m,"save",async e=>{try{const{status:t,result:o}=await a.Fetch("/api/settings",{method:"POST",body:JSON.stringify(e)});if(!t)throw new Error((o==null?void 0:o.message)||"Ocurrio un error inesperado");return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Correcto",body:o.message,type:"success"}),!0}catch(t){return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Error",body:t.message,type:"danger"}),!1}}),g(m,"status",async({id:e,status:t})=>{try{const{status:o,result:i}=await a.Fetch("/api/settings/status",{method:"PATCH",body:JSON.stringify({id:e,status:t})});if(!o)throw new Error((i==null?void 0:i.message)??"Ocurrio un error inesperado");return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Correcto",body:i.message,type:"success"}),!0}catch(o){return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Error",body:o.message,type:"danger"}),!1}}),g(m,"delete",async e=>{try{const{status:t,result:o}=await a.Fetch(`/api/settings/${e}`,{method:"DELETE"});if(!t)throw new Error((o==null?void 0:o.message)??"Ocurrio un error inesperado");return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Correcto",body:o.message,type:"success"}),!0}catch(t){return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Error",body:t.message,type:"danger"}),!1}});const O=({col:n,label:e,eRef:t,value:o,required:i=!1,rows:d=3,theme:f="snow"})=>{const p=l.useRef();return l.useEffect(()=>{const c=new Quill(p.current,{theme:f,modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}]]}});c.on("text-change",()=>{t.current.value=c.root.innerHTML}),t.editor=c},[null]),s.createElement("div",{className:`form-group ${n} mb-2`,style:{height:"max-content"}},s.createElement("label",{htmlFor:""},e," ",i&&s.createElement("b",{className:"text-danger"},"*")),s.createElement("div",{ref:p,style:{height:"100px"}},o),s.createElement("input",{ref:t,type:"hidden",required:i,rows:d}))},A=({can:n})=>{const e=l.useRef(),t=l.useRef(),o=l.useRef(),i=l.useRef(),d=l.useRef(),f=l.useRef(),[p,c]=l.useState(!1),h=r=>{r!=null&&r.id?c(!0):c(!1),o.current.value=(r==null?void 0:r.id)||null,i.current.value=(r==null?void 0:r.name)||null,S(d.editor,(r==null?void 0:r.value)||null),f.current.value=(r==null?void 0:r.description)||null,$(t.current).modal("show")},b=async r=>{r.preventDefault();const u={id:o.current.value||void 0,name:i.current.value,value:d.current.value,description:f.current.value};await m.save(u)&&($(e.current).dxDataGrid("instance").refresh(),$(t.current).modal("hide"))};return s.createElement(s.Fragment,null,s.createElement(T,{gridRef:e,title:"Configuracion",rest:m,toolBar:r=>{r.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(e.current).dxDataGrid("instance").refresh()}}),r.unshift({widget:"dxButton",location:"after",options:{icon:"plus",hint:"Nuevo registro",onClick:()=>h()}})},columns:[{dataField:"id",caption:"ID",dataType:"number",sortOrder:"asc"},{dataField:"name",caption:"Estado de tabla"},{dataField:"description",caption:"Descripcion",cellTemplate:(r,{value:u})=>{u?y(r,u):y(r,s.createElement("i",{className:"text-muted"},"- Sin descripcion -"))}},{caption:"Acciones",cellTemplate:(r,{data:u})=>{n("settings","root","all","update")&&y(r,s.createElement(F,{className:"btn btn-xs btn-soft-primary",title:"Editar",onClick:()=>h(u)},s.createElement("i",{className:"fa fa-pen"})))},allowFiltering:!1,allowExporting:!1}]}),s.createElement(x,{modalRef:t,title:p?"Editar configuracion":"Agregar configuracion",onSubmit:b,size:"md"},s.createElement("div",{className:"row",id:"settings-crud-container"},s.createElement("input",{ref:o,type:"hidden"}),s.createElement(E,{eRef:i,label:"Alias",col:"col-12",required:!0}),s.createElement(E,{eRef:f,label:"Descripcion",col:"col-12"}),s.createElement(O,{eRef:d,label:"Valor",col:"col-12",theme:"bubble",required:!0}))))};R((n,e)=>{if(!e.can("settings","root","all","list"))return location.href="/";N(n).render(s.createElement(C,{...e,title:"Constantes de configuracion"},s.createElement(A,{...e})))});