(this.webpackJsonphpl_web=this.webpackJsonphpl_web||[]).push([[0],{17:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(18),r=a.n(i),l=(a(30),a(9)),o=a(2),c=a(14),d=a(5),h=a(6),u=a(4),m=a(8),j=a(7),b=(a(31),a.p+"static/media/loading.ced9a40b.svg"),p={LOGIN:"/api/login",LOGOUT:"/api/logout",CREATE_USER:"/api/new_user",GET_QUES:"/api/get_ques",GET_EXAM_CONFIG:"/api/get_exam_config",CREATE_NEW_EXAM_CONFIG:"/api/create_new_config",UPDATE_EXAM_CONFIG:"/api/update_config",GET_EXAM:"/api/exam",CREATE_RESULT:"/api/create_result",GET_RESULT:"/api/get_result",GET_STUDENT:"/api/get_student",UPDATE_STUDENT:"/api/update_student",ADD_STUDENT:"/api/add_student",DELETE_STUDENT:"/api/delete_student",DELETE_EXAM:"/api/delete_exam"},g=a(0),x=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",logined:!1},n.handlerValue=n.handlerValue.bind(Object(u.a)(n)),n.login=n.login.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"handlerValue",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){var t=this;e.preventDefault();var a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");var n=new URLSearchParams;n.append("email",this.state.email),n.append("password",this.state.password),fetch(p.LOGIN,{method:"POST",headers:a,body:n,redirect:"follow"}).then((function(e){if(console.log(e.status),422===e.status)throw alert("Fill all field!"),Error("");if(404===e.status)throw alert("Account is not existed!"),Error(e.status);return e.json()})).then((function(e){t.setState({logined:!0}),localStorage.setItem("ssid",e.ssid),localStorage.setItem("username",e.username),localStorage.setItem("roles",e.roles),localStorage.setItem("email",t.state.email),window.location.reload()})).catch((function(e){console.log("Error")}))}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"login_container",children:[Object(g.jsx)("div",{className:"loading_container",children:Object(g.jsx)("img",{width:"100%",className:"loadingLogo",src:b})}),Object(g.jsx)("div",{className:"login_form",children:Object(g.jsxs)("form",{className:"login_form-container",onSubmit:this.login,children:[Object(g.jsx)("input",{className:"form-control",value:this.state.email,name:"email",placeholder:"Email",type:"text",onChange:this.handlerValue}),Object(g.jsx)("input",{className:"form-control margin-top-20",value:this.state.password,name:"password",placeholder:"Password",type:"password",onChange:this.handlerValue}),Object(g.jsx)("input",{type:"submit",className:"btn-login margin-top-30",value:"Login"})]})})]})}}]),a}(s.a.Component),O=(a(33),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={data:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("email",localStorage.getItem("email")),a.append("ssid",localStorage.getItem("ssid")),a.append("roles",localStorage.getItem("roles")),fetch(p.GET_RESULT,{method:"POST",headers:t,body:a,redirect:"follow"}).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.msg})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){var e;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:0==this.state.data.length?"Have no result!":"Result:"}),Object(g.jsxs)("table",{id:"customers",style:{display:0==this.state.data.length?"none":"inline-table"},children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Email"}),Object(g.jsx)("th",(e={style:{textAlign:"right"}},Object(c.a)(e,"style",{textAlign:"right"}),Object(c.a)(e,"children","Result"),e)),Object(g.jsx)("th",{style:{textAlign:"right"},children:"Starttime"}),Object(g.jsx)("th",{style:{textAlign:"right"},children:"Endtime"})]})}),Object(g.jsx)("tbody",{children:this.state.data.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.email.replace(/\"/g,"")}),Object(g.jsx)("td",{style:{textAlign:"right"},children:e.result.replace(/\"/g,"")}),Object(g.jsx)("td",{style:{textAlign:"right"},children:e.starttime.replace(/\"/g,"")}),Object(g.jsx)("td",{style:{textAlign:"right"},children:e.endtime.replace(/\"/g,"")})]},e.id)}))})]})]})}}]),a}(s.a.Component)),f=(a(34),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"notfound_container",children:[Object(g.jsx)("h1",{children:"Oops!"}),Object(g.jsxs)("p",{children:["Seem you're lost. Let me's take you to ",Object(g.jsx)(l.b,{to:"/result",children:"result page!"})]})]})}}]),a}(s.a.Component)),v=a(20),w=a(25),y=["component","exact"],S=function(e){var t=e.component,a=(e.exact,Object(w.a)(e,y)),n=localStorage.getItem("ssid");return Object(g.jsx)(o.b,Object(v.a)(Object(v.a)({},a),{},{render:function(e){return n?Object(g.jsx)(t,Object(v.a)({},e)):Object(g.jsx)(o.a,{to:{pathname:"/",state:{from:e.location}}})}}))},E=(a(17),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).create_new=n.create_new.bind(Object(u.a)(n)),n.state={email:"",username:"",password:"",cfpw:"",dob:"",sex:"male",roles:"0",err:!1,createOK:!1,isedit:!1},n.handlerValue=n.handlerValue.bind(Object(u.a)(n)),n.getStudentInfo=n.getStudentInfo.bind(Object(u.a)(n)),e.location.pathname.indexOf("id")>-1?n.id=e.location.pathname.slice(e.location.pathname.indexOf("id")+3):n.id=null,n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){isNaN(Number(this.id))||null===this.id?this.setState({email:"",username:"",password:"",cfpw:"",dob:"",sex:"male",roles:"0",err:!1,createOK:!1,isedit:!1}):(this.getStudentInfo(this.id),this.setState({isedit:!0}))}},{key:"handlerValue",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"create_new",value:function(e){var t=this;if(e.preventDefault(),""==this.state.email.trim()||""==this.state.password.trim()||""==this.state.cfpw.trim()&&null===this.id||""==this.state.username.trim()||""==this.state.dob.trim()||""==this.state.sex.trim()||""==this.state.roles.trim())this.setState({err:!0});else{this.setState({err:!1});var a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");var n=new URLSearchParams;n.append("ssid",localStorage.getItem("ssid")),n.append("email",localStorage.getItem("email")),n.append("email_new",this.state.email),n.append("username",this.state.username),n.append("password",this.state.password),n.append("dob",this.state.dob),n.append("sex",this.state.sex),n.append("roles",this.state.roles),null!==this.id&&n.append("id",this.id);var s={method:"POST",headers:a,body:n,redirect:"follow"};null!==this.id?fetch(p.UPDATE_STUDENT,s).then((function(e){if(200!=e.status)throw 400==e.status&&alert("Email is existed!"),Error();return t.setState({createOK:!0}),e.json()})).catch((function(e){return console.log("error",e)})):fetch(p.ADD_STUDENT,s).then((function(e){if(200!=e.status)throw 400==e.status&&alert("Email is existed!"),Error();return t.setState({createOK:!0}),e.json()})).catch((function(e){return console.log("error",e)}))}}},{key:"getStudentInfo",value:function(e){var t=this,a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");var n=new URLSearchParams;n.append("ssid",localStorage.getItem("ssid")),n.append("email",localStorage.getItem("email")),n.append("id",e),fetch(p.GET_STUDENT,{method:"POST",headers:a,body:n,redirect:"follow"}).then((function(e){if(200!==e.status)throw Error();return e.json()})).then((function(e){t.setState({email:e.msg[0].email.replace(/\"/g,""),username:e.msg[0].username.replace(/\"/g,""),password:e.msg[0].password.replace(/\"/g,""),dob:e.msg[0].dob.replace(/\"/g,""),sex:e.msg[0].sex.replace(/\"/g,""),roles:e.msg[0].roles.replace(/\"/g,"")})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return this.state.createOK?Object(g.jsx)(o.a,{exact:!0,to:"/student_manager"}):Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{children:[null!==this.id?"Edit student:":"Add studdent:"," "]}),Object(g.jsxs)("form",{action:"#",className:"add_student_form-container",onSubmit:this.create_new,children:[Object(g.jsx)("small",{style:{color:"red",display:this.state.err?"inline":"none"},children:"* Fill all fields!"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"form-control margin-top-20",onChange:this.handlerValue,placeholder:"Email",name:"email",value:this.state.email}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"form-control margin-top-20",onChange:this.handlerValue,placeholder:"Username",name:"username",value:this.state.username}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"form-control margin-top-20",onChange:this.handlerValue,placeholder:"Password",type:"password",name:"password",value:this.state.password}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"form-control margin-top-20",style:{display:null!==this.id?"none":"inline"},onChange:this.handlerValue,placeholder:"Confirm Password",type:"password",name:"cfpw",value:this.state.cfpw}),Object(g.jsx)("br",{style:{display:null!==this.id?"none":"inline"}}),Object(g.jsxs)("span",{style:{color:"red",display:this.state.password==this.state.cfpw||null!==this.id?"none":"inline"},children:["* Password is not match!",Object(g.jsx)("br",{})]}),Object(g.jsx)("input",{className:"form-control margin-top-20",onChange:this.handlerValue,placeholder:"Date of birth",type:"date",name:"dob",value:this.state.dob}),Object(g.jsx)("br",{}),Object(g.jsxs)("select",{className:"form-control margin-top-20",onChange:this.handlerValue,style:{width:"346px"},name:"sex",value:this.state.sex,children:[Object(g.jsx)("option",{value:"male",defaultValue:!0,children:"Male"}),Object(g.jsx)("option",{value:"female",children:"Female"})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("select",{className:"form-control margin-top-20",onChange:this.handlerValue,style:{width:"346px"},name:"roles",value:this.state.roles,children:[Object(g.jsx)("option",{value:"0",defaultValue:!0,children:"Student"}),Object(g.jsx)("option",{value:"1",children:"Admin"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{className:"btn-o margin-top-20",style:{width:"100%",backgroundColor:"#1aa2a2",borderRadius:"8px"},type:"submit",children:"Submit"})]})]})}}]),a}(s.a.Component)),_=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={data:[]},n.deleteStudent=n.deleteStudent.bind(Object(u.a)(n)),n.getAllStudent=n.getAllStudent.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"deleteStudent",value:function(e){var t=this;if(window.confirm('Delete student "'+e.username.replace(/\"/g,"")+'" ?')){var a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");var n=new URLSearchParams;n.append("id",e.id),n.append("ssid",localStorage.getItem("ssid")),n.append("email",localStorage.getItem("email")),fetch(p.DELETE_STUDENT,{method:"POST",headers:a,body:n,redirect:"follow"}).then((function(e){return 200==e.status&&t.getAllStudent(),e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)}))}}},{key:"componentDidMount",value:function(){this.getAllStudent()}},{key:"getAllStudent",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("ssid",localStorage.getItem("ssid")),a.append("email",localStorage.getItem("email")),fetch(p.GET_STUDENT,{method:"POST",headers:t,body:a,redirect:"follow"}).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.msg})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:0==this.state.data.length?"Don't have student yet!":"Students manager:"}),Object(g.jsxs)("table",{id:"customers",style:{display:0==this.state.data.length?"none":"inline-table"},children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Email"}),Object(g.jsx)("th",{children:"Username"}),Object(g.jsx)("th",{children:"Date of birth"}),Object(g.jsx)("th",{children:"Sex"}),Object(g.jsx)("th",{style:{width:"300px"}})]})}),Object(g.jsx)("tbody",{children:this.state.data.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t.email.replace(/\"/g,"")}),Object(g.jsx)("td",{children:t.username.replace(/\"/g,"")}),Object(g.jsx)("td",{children:t.dob.replace(/\"/g,"")}),Object(g.jsx)("td",{children:t.sex.replace(/\"/g,"")}),Object(g.jsxs)("td",{style:{textAlign:"center"},children:[Object(g.jsx)(l.b,{className:"btn-o",style:{backgroundColor:"#259473"},to:{pathname:"/edit_student?id="+t.id},children:"Edit"}),Object(g.jsx)("button",{className:"btn-o",style:{backgroundColor:"#bd083e",marginLeft:"10px"},onClick:function(){e.deleteStudent(t)},children:"Detele"})]})]},t.id)}))})]})]})}}]),a}(s.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={data:[],redirect:!1},n.deleteExam=n.deleteExam.bind(Object(u.a)(n)),n.getAllExam=n.getAllExam.bind(Object(u.a)(n)),n.redirect2edit=n.redirect2edit.bind(Object(u.a)(n)),n.id=void 0,n}return Object(h.a)(a,[{key:"redirect2edit",value:function(e){this.id=e,this.setState({redirect:!0})}},{key:"deleteExam",value:function(e){var t=this;if(window.confirm("Delete exam "+e.name+"?")){var a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");var n=new URLSearchParams;n.append("id",e.id),n.append("ssid",localStorage.getItem("ssid")),n.append("email",localStorage.getItem("email")),fetch(p.DELETE_EXAM,{method:"POST",headers:a,body:n,redirect:"follow"}).then((function(e){return 200==e.status&&t.getAllExam(),e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)}))}}},{key:"componentDidMount",value:function(){this.getAllExam()}},{key:"getAllExam",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("ssid",localStorage.getItem("ssid")),a.append("email",localStorage.getItem("email")),fetch(p.GET_EXAM_CONFIG,{method:"POST",headers:t,body:a,redirect:"follow"}).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.msg})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){var e=this;return this.state.redirect?Object(g.jsx)(o.a,{to:{pathname:"/edit_exam?id=".concat(this.id)}}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:0==this.state.data.length?"Don't have exam config yet!":"Exam config manager:"}),Object(g.jsxs)("table",{id:"customers",style:{display:0==this.state.data.length?"none":"inline-table"},children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Name"}),Object(g.jsx)("th",{style:{textAlign:"right"},children:"Easy"}),Object(g.jsx)("th",{style:{textAlign:"right"},children:"Medium"}),Object(g.jsx)("th",{style:{textAlign:"right"},children:"Hard"}),Object(g.jsx)("th",{style:{textAlign:"right"},children:"Total questions"}),Object(g.jsx)("th",{style:{textAlign:"right"},children:"Time to finish"}),Object(g.jsx)("th",{style:{width:"300px"}})]})}),Object(g.jsx)("tbody",{children:this.state.data.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t.name.replace(/\"/g,"")}),Object(g.jsxs)("td",{style:{textAlign:"right"},children:[t.easy," %"]}),Object(g.jsxs)("td",{style:{textAlign:"right"},children:[t.medium," %"]}),Object(g.jsxs)("td",{style:{textAlign:"right"},children:[t.hard," %"]}),Object(g.jsx)("td",{style:{textAlign:"right"},children:t.total}),Object(g.jsxs)("td",{style:{textAlign:"right"},children:[t.time_exam," mins"]}),Object(g.jsxs)("td",{style:{textAlign:"center"},children:[Object(g.jsx)("button",{className:"btn-o",style:{backgroundColor:"#259473"},onClick:function(){return e.redirect2edit(t.id)},children:"Edit"}),Object(g.jsx)("button",{className:"btn-o",style:{backgroundColor:"#bd083e",marginLeft:"10px"},onClick:function(){e.deleteExam(t)},children:"Detele"})]})]},t.id)}))})]})]})}}]),a}(s.a.Component),T=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={name:"",easy:void 0,medium:void 0,hard:void 0,total:void 0,time:void 0,err:!1,createOK:!1,isedit:!1},n.handlerValue=n.handlerValue.bind(Object(u.a)(n)),n.create_new=n.create_new.bind(Object(u.a)(n)),n.getExamInfo=n.getExamInfo.bind(Object(u.a)(n)),e.location.pathname.indexOf("id")>-1?n.id=e.location.pathname.slice(e.location.pathname.indexOf("id")+3):n.id=null,console.log(n.id),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){isNaN(Number(this.id))||null===this.id?this.setState({name:"",easy:void 0,medium:void 0,hard:void 0,total:void 0,time:void 0,err:!1,createOK:!1,isedit:!1}):(this.getExamInfo(this.id),this.setState({isedit:!0}))}},{key:"handlerValue",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"create_new",value:function(e){var t=this;if(e.preventDefault(),console.log(this.state.easy+this.state.medium+this.state.hard),""==this.state.name.trim()||this.state.easy<-1||this.state.easy>100||void 0==this.state.easy||this.state.medium<-1||this.state.medium>100||void 0==this.state.medium||this.state.hard<-1||this.state.hard>100||void 0==this.state.hard||this.state.total<-1||void 0==this.state.total||this.state.time<-1||void 0==this.state.time||Number(this.state.easy)+Number(this.state.medium)+Number(this.state.hard)!=100)this.setState({err:!0});else{this.setState({err:!1});var a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");var n=new URLSearchParams;this.state.isedit&&n.append("id",this.id),n.append("ssid",localStorage.getItem("ssid")),n.append("email",localStorage.getItem("email")),n.append("name",this.state.name),n.append("easy",this.state.easy),n.append("medium",this.state.medium),n.append("hard",this.state.hard),n.append("total",this.state.total),n.append("time",this.state.time);var s={method:"POST",headers:a,body:n,redirect:"follow"};this.state.isedit?fetch(p.UPDATE_EXAM_CONFIG,s).then((function(e){if(200!==e.status)throw Error();t.setState({createOK:!0})})).catch((function(e){return console.log("error",e)})):fetch(p.CREATE_NEW_EXAM_CONFIG,s).then((function(e){if(200!==e.status)throw 403===e.status&&alert('Name "'+t.state.name+'" existed!'),Error();t.setState({createOK:!0})})).catch((function(e){return console.log("error",e)}))}}},{key:"getExamInfo",value:function(e){var t=this,a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");var n=new URLSearchParams;n.append("ssid",localStorage.getItem("ssid")),n.append("email",localStorage.getItem("email")),n.append("id",e),fetch(p.GET_EXAM_CONFIG,{method:"POST",headers:a,body:n,redirect:"follow"}).then((function(e){if(200!==e.status)throw 403===e.status&&alert('Name "'+t.state.name+'" existed!'),Error();return e.json()})).then((function(e){t.setState({name:e.msg[0].name.replace(/\"/g,""),easy:e.msg[0].easy,medium:e.msg[0].medium,hard:e.msg[0].hard,total:e.msg[0].total,time:e.msg[0].time_exam})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return this.state.createOK?(console.log("??"),Object(g.jsx)(o.a,{exact:!0,to:"/exam_manager"})):Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:null!==this.id?"Edit exam config No."+this.id:"Add exam config:"}),Object(g.jsxs)("form",{action:"#",className:"add_student_form-container",onSubmit:this.create_new,children:[Object(g.jsxs)("small",{style:{color:"red",display:this.state.err?"inline":"none"},children:["* Fill all fields",Object(g.jsx)("br",{})," and total of easy, meidum , hard must be equal 100%!"]}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"form-control margin-top-20",onChange:this.handlerValue,placeholder:"Name",name:"name",value:this.state.name}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"form-control margin-top-20",onChange:this.handlerValue,placeholder:"Easy (%)",type:"number",name:"easy",value:this.state.easy}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"form-control margin-top-20",onChange:this.handlerValue,placeholder:"Medium (%)",type:"number",name:"medium",value:this.state.medium}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"form-control margin-top-20",onChange:this.handlerValue,placeholder:"Hard (%)",type:"number",name:"hard",value:this.state.hard}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"form-control margin-top-20",onChange:this.handlerValue,placeholder:"Total (ques)",type:"number",name:"total",value:this.state.total}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"form-control margin-top-20",onChange:this.handlerValue,placeholder:"Time (mins)",type:"number",name:"time",value:this.state.time}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{className:"btn-o margin-top-20",style:{width:"100%",backgroundColor:"#1aa2a2",borderRadius:"8px"},type:"submit",children:"Submit"})]})]})}}]),a}(s.a.Component),C=(a(40),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={logouted:!1},n.logout=n.logout.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"logout",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("email",localStorage.getItem("email")),a.append("ssid",localStorage.getItem("ssid")),fetch(p.LOGOUT,{method:"POST",headers:t,body:a,redirect:"follow"}).then((function(e){e.json()})).then((function(t){e.setState({logouted:!0}),localStorage.clear(),window.location.reload()})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return this.state.logouted?Object(g.jsx)(o.a,{exact:!0,to:"/"}):localStorage.getItem("ssid")?0==Number(localStorage.getItem("roles"))?Object(g.jsxs)("div",{className:"navbar",children:[Object(g.jsx)(l.b,{to:"/result",children:"Result"}),Object(g.jsx)("div",{className:"btn",style:{float:"right",backgroundColor:"#d1406a"},onClick:this.logout,children:"Logout"})]}):1==Number(localStorage.getItem("roles"))?Object(g.jsxs)("div",{className:"navbar",children:[Object(g.jsx)(l.b,{to:"/result",children:"Result"}),Object(g.jsxs)("div",{className:"dropdown",children:[Object(g.jsx)("button",{className:"dropbtn",children:"Student"}),Object(g.jsxs)("div",{className:"dropdown-content",children:[Object(g.jsx)(l.b,{to:"/student_manager",children:"Student managers"}),Object(g.jsx)(l.b,{to:"/add_student",children:"Add Student"})]})]}),Object(g.jsxs)("div",{className:"dropdown",children:[Object(g.jsx)("button",{className:"dropbtn",children:"Exam"}),Object(g.jsxs)("div",{className:"dropdown-content",children:[Object(g.jsx)(l.b,{to:"/exam_manager",children:"Exam managers"}),Object(g.jsx)(l.b,{to:"/add_exam",children:"Add exam"})]})]}),Object(g.jsx)("div",{className:"btn",style:{float:"right",backgroundColor:"#d1406a"},onClick:this.logout,children:"Logout"})]}):void 0:null}}]),a}(s.a.Component));var A=function(){return Object(g.jsxs)(l.a,{children:[Object(g.jsx)(C,{}),Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{exact:!0,path:"/",children:localStorage.getItem("ssid")?Object(g.jsx)(o.a,{to:"/result"}):Object(g.jsx)(x,{})}),Object(g.jsx)(S,{path:"/result",component:O}),Object(g.jsx)(S,{path:"/add_student",component:E}),Object(g.jsx)(S,{path:"/edit_student?id=:id",exact:!0,component:E}),Object(g.jsx)(S,{path:"/student_manager",component:_}),Object(g.jsx)(S,{path:"/exam_manager",component:N}),Object(g.jsx)(S,{path:"/edit_exam?id=:id",exact:!0,component:T}),Object(g.jsx)(S,{path:"/add_exam",exact:!0,component:T}),Object(g.jsx)(o.b,{component:f})]})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};a(41);r.a.render(Object(g.jsx)(A,{}),document.getElementById("root")),I()}},[[42,1,2]]]);
//# sourceMappingURL=main.9cffa6aa.chunk.js.map