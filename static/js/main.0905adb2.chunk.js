(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},18:function(e,t,n){e.exports={container:"Container_container__3RIox"}},19:function(e,t,n){e.exports={input:"Filter_input__2DoVp"}},27:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),i=n(8),o=n.n(i),s=(n(27),n(9)),u=n(10),l=n(13),b=n(11),d=n(18),j=n.n(d),m=n(1),h=function(e){var t=e.children;return Object(m.jsx)("div",{className:j.a.container,children:t})},f=n(6),p=n(5),O=n(14),_=n.n(O),x=n(38),C=n(3),g=Object(C.b)("phonebook/add",(function(e){return{payload:{id:Object(x.a)(),name:e.name,number:e.number}}})),v=Object(C.b)("phonebook/delete"),y=Object(C.b)("phonebook/filter",(function(e){return{payload:e.currentTarget.value}})),k=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,r=n.name,a=n.value;e.setState(Object(f.a)({},r,a))},e.nameCheked=function(e,t){return e.find((function(e){return t===e.name}))},e.onSubmit=function(t){t.preventDefault();var n=e.state,r=n.name,a=n.number,c=e.props,i=c.handlePhoneAdd,o=c.contacts,s={name:r,number:a};e.nameCheked(o.items,r)?alert("".concat(r," is already in Phonebook")):i(s)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:_.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Name",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{children:[Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:_.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Number",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:_.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),A=Object(p.b)((function(e){return e}),(function(e){return{handlePhoneAdd:function(t){return e(g(t))}}}))(k),N=n(19),F=n.n(N),L=Object(p.b)((function(e){return{filter:e.contacts.filter}}),(function(e){return{onChangeFilter:function(t){return e(y(t))}}}))((function(e){var t=e.filter,n=e.onChangeFilter;return Object(m.jsx)("form",{children:Object(m.jsx)("label",{children:Object(m.jsx)("input",{className:F.a.input,type:"text",name:"filter",value:t,onChange:n,placeholder:"Find person"})})})})),w=n(7),I=n.n(w),S=Object(p.b)((function(e){var t=e.contacts;if(t.filter){var n=t.filter.toLowerCase();return{renderedContacts:t.items.filter((function(e){return e.name.toLowerCase().includes(n)}))}}return{renderedContacts:t.items}}),(function(e){return{deletedContactbyId:function(t){e(v(t.currentTarget.id))}}}))((function(e){var t=e.renderedContacts,n=e.deletedContactbyId;return Object(m.jsx)("ul",{className:I.a.list,children:t.map((function(e){return Object(m.jsxs)("li",{className:I.a.list__item,children:[Object(m.jsxs)("span",{className:I.a.list__text,children:[e.name,": ",e.number]}),Object(m.jsx)("button",{id:e.id,className:I.a.list__button,type:"button",onClick:n,children:"delete"})]},e.id)}))})})),T=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(h,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(A,{}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(L,{}),Object(m.jsx)(S,{})]})}}]),n}(a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},z=n(12),B=n(20),Z=n.n(B),D=n(2),J=Object(C.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(r={},Object(f.a)(r,g,(function(e,t){var n=t.payload;return[].concat(Object(z.a)(e),[n])})),Object(f.a)(r,v,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),M=Object(C.c)("",Object(f.a)({},y,(function(e,t){return t.payload}))),q=Object(D.b)({items:J,filter:M}),E=n(4),K=n(21),R=n.n(K),V=[].concat(Object(z.a)(Object(C.d)({serializableCheck:{ignoredActions:[E.a,E.f,E.b,E.c,E.d,E.e]}})),[Z.a]),G={key:"contacts",storage:R.a,blacklist:["filter"]},H=Object(C.a)({reducer:{contacts:Object(E.g)(G,q)},middleware:V,devTools:!1}),$={store:H,persistor:Object(E.h)(H)},Q=n(22);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p.a,{store:$.store,children:Object(m.jsx)(Q.a,{loading:null,persistor:$.persistor,children:Object(m.jsx)(T,{})})})}),document.getElementById("root")),P()},7:function(e,t,n){e.exports={list:"ContactList_list__2T7aG",list__item:"ContactList_list__item__2uVIv",list__text:"ContactList_list__text__1taay",list__button:"ContactList_list__button__2Ij86"}}},[[36,1,2]]]);
//# sourceMappingURL=main.0905adb2.chunk.js.map