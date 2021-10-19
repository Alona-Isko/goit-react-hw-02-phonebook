(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"App_container__3g1St",container__title:"App_container__title__2wLgS",Contacts__title:"App_Contacts__title__3ja7s"}},12:function(t,e,n){t.exports={Filter__text:"Filter_Filter__text__2JSSt",Filter__input:"Filter_Filter__input__2pCmz"}},13:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},2:function(t,e,n){t.exports={form__title:"ContactForm_form__title__2TbGR",form__input:"ContactForm_form__input__2iPoX",form__button:"ContactForm_form__button__FkEtQ"}},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(14),i=n.n(c),o=(n(21),n(16)),s=n(6),l=n(7),_=n(9),u=n(8),m=n(15),b=n(2),d=n.n(b),h=n(3),p=n.n(h),j=n(0),f=function(t){Object(_.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameId=p.a.generate(),t.numberId=p.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{className:d.a.form__title,htmlFor:this.nameId,children:"Name"}),Object(j.jsx)("input",{type:"text",className:d.a.form__input,name:"name",id:this.nameId,value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter name",required:!0}),Object(j.jsx)("label",{className:d.a.form__title,htmlFor:this.numberId,children:"Number"}),Object(j.jsx)("input",{type:"tel",className:d.a.form__input,name:"number",id:this.numberId,value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Enter phone number",required:!0}),Object(j.jsx)("button",{className:d.a.form__button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=f,x=n(4),O=n.n(x);var v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:O.a.ContactList__container,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(j.jsxs)("li",{className:O.a.ContactList__item,children:[Object(j.jsxs)("p",{className:O.a.ContactList__text,children:[a,": ",r]}),Object(j.jsx)("button",{className:O.a.ContactList__button,onClick:function(){return n(e)},children:"X"})]},e)}))})},g=n(12),L=n.n(g),N=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:L.a.Filter__text,children:["Find contacts by name",Object(j.jsx)("input",{type:"text",className:L.a.Filter__input,value:e,onChange:n})]})},F=n(13),S=n(10),y=n.n(S),A=function(t){Object(_.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:F,filter:""},t.addContact=function(e){var n=e.name,a=e.number,r={id:p.a.generate(),name:n,number:a,completed:!1};F.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(o.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:y.a.container,children:[Object(j.jsx)("h1",{className:y.a.container__title,children:"Phonebook"}),Object(j.jsx)(C,{onSubmit:this.addContact}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:y.a.Contacts__title,children:"Contacts"}),Object(j.jsx)(N,{value:this.state.filter,onChange:this.changeFilter}),Object(j.jsx)(v,{contacts:this.visibleContacts(),onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component),w=A;i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={ContactList__container:"ContactList_ContactList__container__506Bx",ContactList__item:"ContactList_ContactList__item__2Ahpw",ContactList__text:"ContactList_ContactList__text__1q0Ng",ContactList__button:"ContactList_ContactList__button__eUpPv"}}},[[31,1,2]]]);
//# sourceMappingURL=main.582a615b.chunk.js.map