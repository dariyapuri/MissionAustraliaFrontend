(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{887:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},890:function(e,t,a){"use strict";var l=a(33),n=a(87),r=a(3),s=a.n(r),o=a(112),c=a.n(o),i=a(884),u=a.n(i),m=a(885),d={tag:m.m,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var t=e.className,a=e.cssModule,r=e.color,o=e.body,c=e.inverse,i=e.outline,d=e.tag,b=e.innerRef,E=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(m.i)(u()(t,"card",!!c&&"text-white",!!o&&"card-body",!!r&&(i?"border":"bg")+"-"+r),a);return s.a.createElement(d,Object(l.a)({},E,{className:f,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},t.a=b},891:function(e,t,a){"use strict";var l=a(33),n=a(87),r=a(3),s=a.n(r),o=a(112),c=a.n(o),i=a(884),u=a.n(i),m=a(885),d={tag:m.m,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,o=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.i)(u()(t,"card-body"),a);return s.a.createElement(o,Object(l.a)({},c,{className:i,ref:r}))};b.propTypes=d,b.defaultProps={tag:"div"},t.a=b},892:function(e,t,a){"use strict";var l=a(33),n=a(87),r=a(3),s=a.n(r),o=a(112),c=a.n(o),i=a(884),u=a.n(i),m=a(885),d={tag:m.m,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},b=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,o=e.tag,c=e.form,i=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.i)(u()(t,r?"no-gutters":null,c?"form-row":"row"),a);return s.a.createElement(o,Object(l.a)({},i,{className:d}))};b.propTypes=d,b.defaultProps={tag:"div"},t.a=b},893:function(e,t,a){"use strict";var l=a(33),n=a(87),r=a(887),s=a.n(r),o=a(3),c=a.n(o),i=a(112),u=a.n(i),m=a(884),d=a.n(m),b=a(885),E=u.a.oneOfType([u.a.number,u.a.string]),f=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:E,offset:E})]),g={tag:b.m,xs:f,sm:f,md:f,lg:f,xl:f,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},q=function(e){var t=e.className,a=e.cssModule,r=e.widths,o=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach(function(t,l){var n=e[t];if(delete i[t],n||""===n){var r=!l;if(s()(n)){var o,c=r?"-":"-"+t+"-",m=h(r,t,n.size);u.push(Object(b.i)(d()(((o={})[m]=n.size||""===n.size,o["order"+c+n.order]=n.order||0===n.order,o["offset"+c+n.offset]=n.offset||0===n.offset,o)),a))}else{var E=h(r,t,n);u.push(E)}}}),u.length||u.push("col");var m=Object(b.i)(d()(t,u),a);return c.a.createElement(o,Object(l.a)({},i,{className:m}))};q.propTypes=g,q.defaultProps=v,t.a=q},894:function(e,t,a){"use strict";var l=a(33),n=a(87),r=a(3),s=a.n(r),o=a(112),c=a.n(o),i=a(884),u=a.n(i),m=a(885),d={tag:m.m,className:c.a.string,cssModule:c.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),c=Object(m.i)(u()(t,"card-header"),a);return s.a.createElement(r,Object(l.a)({},o,{className:c}))};b.propTypes=d,b.defaultProps={tag:"div"},t.a=b},897:function(e,t,a){"use strict";var l=a(33),n=a(87),r=a(3),s=a.n(r),o=a(112),c=a.n(o),i=a(884),u=a.n(i),m=a(885),d={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:m.m,responsiveTag:m.m,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},b=function(e){var t=e.className,a=e.cssModule,r=e.size,o=e.bordered,c=e.borderless,i=e.striped,d=e.dark,b=e.hover,E=e.responsive,f=e.tag,g=e.responsiveTag,v=e.innerRef,h=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),q=Object(m.i)(u()(t,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!d&&"table-dark",!!b&&"table-hover"),a),p=s.a.createElement(f,Object(l.a)({},h,{ref:v,className:q}));if(E){var y=Object(m.i)(!0===E?"table-responsive":"table-responsive-"+E,a);return s.a.createElement(g,{className:y},p)}return p};b.propTypes=d,b.defaultProps={tag:"table",responsiveTag:"div"},t.a=b},982:function(e,t,a){"use strict";a.r(t);var l=a(227),n=a(228),r=a(230),s=a(229),o=a(233),c=a(231),i=a(3),u=a.n(i),m=a(892),d=a(893),b=a(890),E=a(894),f=a(891),g=a(897),v=a(989),h=a(958),q=a(959),p=a(86),y=new(a(889).a),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).state={surveys:[],isLoggedIn:!1,modalOpen:!1,age:"",email:"",name:"",q1:"",q2:"",q3:"",q4:"",q5:"",q6:"",q7:"",q8:"",q9:"",q10:"",q11:"",q12:"",q13:"",q14:"",q15:"",q16:""},a.fetchServeys=a.fetchServeys.bind(Object(o.a)(a)),a.toggleModal=a.toggleModal.bind(Object(o.a)(a)),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"toggleModal",value:function(e){this.setState({age:void 0===e.age?"":e.age,email:void 0===e.email?"":e.email,name:void 0===e.name?"":e.name,q1:void 0===e.q1?"":e.q1,q2:void 0===e.q2?"":e.q2,q3:void 0===e.q3?"":e.q3,q4:void 0===e.q4?"":e.q4,q5:void 0===e.q5?"":e.q5,q6:void 0===e.q6?"":e.q6,q7:void 0===e.q7?"":e.q7,q8:void 0===e.q8?"":e.q8,q9:void 0===e.q9?"":e.q9,q10:void 0===e.q10?"":e.q10,q11:void 0===e.q11?"":e.q11,q12:void 0===e.q12?"":e.q12,q13:void 0===e.q13?"":e.q13,q14:void 0===e.q14?"":e.q14,q15:void 0===e.q15?"":e.q15,q16:void 0===e.q16?"":e.q16,modalOpen:!this.state.modalOpen})}},{key:"fetchServeys",value:function(){var e=this;fetch("https://missionaustralia-back.herokuapp.com/getSurveys?token="+y.get("token")).then(function(e){return e.json()}).then(function(t){console.log(t.data),200===t.response?e.setState({surveys:t.data}):alert("Error fetching surveys")})}},{key:"componentWillMount",value:function(){void 0!==y.get("token")&&null!==y.get("token")&&this.setState({isLoggedIn:!0})}},{key:"componentDidMount",value:function(){this.fetchServeys()}},{key:"render",value:function(){var e=this;return this.state.isLoggedIn?u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m.a,null,u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Chats List"),u.a.createElement(f.a,null,u.a.createElement(g.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Age"),u.a.createElement("th",null,"Email"),u.a.createElement("th",null,"Details"))),u.a.createElement("tbody",null,this.state.surveys.map(function(t,a){return u.a.createElement("tr",{key:t._id},u.a.createElement("td",null,t.name),u.a.createElement("td",null,t.age),u.a.createElement("td",null,t.email),u.a.createElement("td",null,u.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){e.toggleModal(t)}},"Details")))}))))))),u.a.createElement(v.a,{isOpen:this.state.modalOpen,toggle:this.toggleModal,className:"modal-primary "+this.props.className},u.a.createElement(h.a,null,"Chat "),u.a.createElement(q.a,null,u.a.createElement("table",{style:{width:"100%"}},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Full name : ")),u.a.createElement("td",null,this.state.name)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Age : ")),u.a.createElement("td",null,this.state.age)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Email : ")),u.a.createElement("td",null,this.state.email)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Are you working currently? : ")),u.a.createElement("td",null,this.state.q1)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Which kind of work do you have? : ")),u.a.createElement("td",null,this.state.q2)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Are you facing any financial crisis currently? : ")),u.a.createElement("td",null,this.state.q3)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"If it is, can you briefly describe about your current financial situation? : ")),u.a.createElement("td",null,this.state.q4)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Are you living alone or with family? : ")),u.a.createElement("td",null,this.state.q5)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"In which kind of property you are living? : ")),u.a.createElement("td",null,this.state.q6)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Are you working currently? : ")),u.a.createElement("td",null,this.state.q7)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Do you have any accommodation problem? : ")),u.a.createElement("td",null,this.state.q8)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Where you were born, Australia or overseas? : ")),u.a.createElement("td",null,this.state.q9)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Are you comfortable in communicating English language? : ")),u.a.createElement("td",null,this.state.q10)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Are you facing any family breakdown problem? : ")),u.a.createElement("td",null,this.state.q11)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Are you suffering from domestic violence? : ")),u.a.createElement("td",null,this.state.q12)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Are you facing any health related issue? : ")),u.a.createElement("td",null,this.state.q13)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Can you briefly describe about your health issue? : ")),u.a.createElement("td",null,this.state.q14)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Are you addicted to any alcohol or drugs? : ")),u.a.createElement("td",null,this.state.q15)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("b",null,"Do you faced to any sexual assault in past? : ")),u.a.createElement("td",null,this.state.q16))))))):u.a.createElement(p.c,{to:"/login"})}}]),t}(i.Component);t.default=j}}]);
//# sourceMappingURL=18.fd7801c4.chunk.js.map