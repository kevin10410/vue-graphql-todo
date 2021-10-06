(function(t){function e(e){for(var n,s,o=e[0],l=e[1],d=e[2],c=0,p=[];c<o.length;c++)s=o[c],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/REPO_NAME/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,i,r,s,o=a("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"todoapp stack-large",attrs:{id:"app"}},[a("h1",[t._v("Vue GraphQL Todo")]),a("Form",{attrs:{name:t.name,error:t.addTaskError,loading:t.addTaskLoading},on:{addTask:t.addTaskHandler,inputChanged:t.inputChangedHandler}}),a("div",{staticClass:"filters btn-group stack-exception"},t._l(t.filterNames,(function(e){return a("FilterButton",{key:e,attrs:{name:e,isPressed:e===t.filter},on:{filterUpdated:t.filterUpdatedHandler}})})),1),a("h2",{attrs:{id:"list-heading"}},[t._v(" "+t._s(t.remainingTasksNumber)+" tasks remaining ")]),a("TaskList",{attrs:{tasks:t.tasks,error:t.$apollo.queries.queryTask.error,loading:t.$apollo.queries.queryTask.loading}})],1)},d=[],u=(a("b64b"),a("4de4"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.error?a("p",[t._v("Error...")]):t.loading?a("h2",{staticClass:"label-wrapper"},[a("FontAwesomeIcon",{attrs:{spin:"",size:"2x",icon:["fas","spinner"]}})],1):a("form",{on:{submit:t.submitHandler}},[t._m(0),a("input",{staticClass:"input input__lg",attrs:{id:"new-todo-input",type:"text",name:"text",autoComplete:"off"},domProps:{value:t.name},on:{change:function(e){return t.$emit("inputChanged",e)}}}),a("button",{staticClass:"btn btn__primary btn__lg",attrs:{type:"submit"}},[t._v(" Add ")])])])}),c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"label-wrapper"},[a("label",{staticClass:"label__lg",attrs:{htmlFor:"new-todo-input"}},[t._v(" What needs to be done? ")])])}],p=a("ad3d"),m={name:"Form",props:{error:{type:[Object,null]},loading:{type:Boolean},name:{type:String}},methods:{submitHandler:function(t){t.preventDefault(),this.$emit("addTask")}},components:{FontAwesomeIcon:p["a"]}},f=m,g=a("2877"),b=Object(g["a"])(f,u,c,!1,null,null,null),h=b.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"taskListWrapper"},[t.error?a("p",[t._v("Error...")]):t.loading?a("p",[t._v("Loading...")]):a("ul",{staticClass:"todo-list stack-large stack-exception",attrs:{"aria-labelledby":"list-heading"}},t._l(t.tasks,(function(t){return a("Task",{key:t.id,attrs:{id:t.id,name:t.title,completed:t.completed}})})),1)])},y=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"taskWrapper"},[t.isEditing?a("form",{staticClass:"stack-small",on:{submit:t.submitNewName}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"todo-label",attrs:{htmlFor:t.id}},[t._v("New name for "+t._s(t.name))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],staticClass:"todo-text",attrs:{type:"text",id:t.id},domProps:{value:t.newName},on:{input:function(e){e.target.composing||(t.newName=e.target.value)}}})]),a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn todo-cancel",attrs:{type:"button",disabled:t.updateLoading},on:{click:function(e){t.isEditing=!1}}},[t._v("Cancel "),a("span",{staticClass:"visually-hidden"},[t._v("renaming "+t._s(t.name))])]),a("button",{staticClass:"btn btn__primary todo-edit",attrs:{type:"submit",disabled:t.updateLoading||""===t.newName}},[t.updateLoading?a("FontAwesomeIcon",{attrs:{pulse:"",size:"1x",icon:["fas","spinner"]}}):a("span",[t._v("Save")])],1)])]):a("div",{staticClass:"stack-small"},[a("div",{staticClass:"c-cb"},[a("input",{attrs:{type:"checkbox",id:t.id,disabled:t.updateLoading},domProps:{checked:t.completed},on:{change:t.completedToggleHandler}}),a("label",{staticClass:"todo-label",attrs:{htmlFor:t.id}},[t._v(t._s(t.name))]),t.updateLoading?a("FontAwesomeIcon",{attrs:{pulse:"",size:"lg",icon:["fas","spinner"]}}):t._e()],1),a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn",attrs:{type:"button",disabled:t.deleteLoading},on:{click:function(e){t.isEditing=!0}}},[t._v("Edit "),a("span",{staticClass:"visually-hidden"},[t._v(t._s(t.name))])]),a("button",{staticClass:"btn btn__danger",attrs:{type:"button",disabled:t.deleteLoading},on:{click:t.deleteTaskHandler}},[t.deleteLoading?a("FontAwesomeIcon",{attrs:{pulse:"",size:"lg",icon:["fas","spinner"]}}):a("span",[t._v("Delete")])],1)])])])},_=[],T=(a("c740"),a("8785")),w=a("5184"),C=Object(w["a"])(n||(n=Object(T["a"])(["\n  {\n    queryTask {\n      id\n      title\n      completed\n    }\n  }\n"]))),L=Object(w["a"])(i||(i=Object(T["a"])(["\n  mutation addTask($title: String!) {\n    addTask(input: {title: $title, completed: false}) {\n      task {\n        id\n        title\n        completed\n      }\n    }\n  }\n"]))),q=Object(w["a"])(r||(r=Object(T["a"])(["\n  mutation deleteTask($id: [ID!]) {\n    deleteTask(filter: {id: $id}) {\n      task {\n        id\n      }\n    }\n  }\n"]))),O=Object(w["a"])(s||(s=Object(T["a"])(["\n  mutation updateTask($id: [ID!], $title: String, $completed: Boolean) {\n    updateTask(input: {filter: {id: $id}, set: {title: $title, completed: $completed}}) {\n      numUids\n    }\n  }\n"]))),$={name:"Task",props:{id:{type:String},name:{type:String},completed:{type:Boolean}},data:function(){return{newName:"",isEditing:!1,updateLoading:!1,deleteLoading:!1}},methods:{submitNewName:function(t){var e=this;t.preventDefault(),this.updateLoading=!0,this.$apollo.mutate({mutation:O,variables:{id:this.id,title:this.newName,completed:this.completed},update:function(t){var a=t.readQuery({query:C}),n=a.queryTask,i=n.findIndex((function(t){return t.id===e.id}));n[i].title=e.newName,t.writeQuery({query:C,data:{queryTask:n}})}}).then((function(){e.newName="",e.isEditing=!1,e.updateLoading=!1})).catch((function(t){console.log(t),e.updateLoading=!1}))},completedToggleHandler:function(){var t=this;this.updateLoading=!0,this.$apollo.mutate({mutation:O,variables:{id:this.id,title:this.name,completed:!this.completed},update:function(e){var a=e.readQuery({query:C}),n=a.queryTask,i=n.findIndex((function(e){return e.id===t.id}));n[i].completed=!t.completed,e.writeQuery({query:C,data:{queryTask:n}})}}).then((function(){t.updateLoading=!1})).catch((function(e){console.log(e),t.updateLoading=!1}))},deleteTaskHandler:function(){var t=this;this.deleteLoading=!0,this.$apollo.mutate({mutation:q,variables:{id:this.id},update:function(t,e){var a=e.data.deleteTask,n=t.readQuery({query:C}),i=n.queryTask;t.writeQuery({query:C,data:{queryTask:i.filter((function(t){return t.id!==a.task[0].id}))}})}}).then((function(){t.deleteLoading=!1})).catch((function(e){console.log(e),t.deleteLoading=!1}))}},components:{FontAwesomeIcon:p["a"]}},j=$,x=Object(g["a"])(j,k,_,!1,null,null,null),E=x.exports,N={name:"TaskList",props:{error:{type:[Object,null]},loading:{type:Boolean},tasks:{type:Array}},components:{Task:E}},F=N,P=Object(g["a"])(F,v,y,!1,null,null,null),A=P.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn toggle-btn",attrs:{type:"button","aria-pressed":t.isPressed},on:{click:function(e){return t.$emit("filterUpdated",t.name)}}},[a("span",{staticClass:"visually-hidden"},[t._v("Show ")]),a("span",[t._v(t._s(t.name))]),a("span",{staticClass:"visually-hidden"},[t._v(" tasks")])])},H=[],I={name:"FilterButton",props:{name:{type:String},isPressed:{type:Boolean}}},Q=I,B=Object(g["a"])(Q,S,H,!1,null,null,null),D=B.exports,M={All:function(){return!0},Active:function(t){return!t.completed},Completed:function(t){return t.completed}},U={name:"App",data:function(){return{name:"",filter:"All",queryTask:[],queryError:null,addTaskError:null,addTaskLoading:!1}},apollo:{queryTask:{query:C}},computed:{filterNames:function(){return Object.keys(M)},tasks:function(){return this.queryTask.filter(M[this.filter])},remainingTasksNumber:function(){var t=this.$apollo.queries.queryTask,e=t.error,a=t.loading;return a||e?0:this.queryTask.filter((function(t){var e=t.completed;return!1===e})).length}},methods:{filterUpdatedHandler:function(t){this.filter=t},inputChangedHandler:function(t){var e=t.target.value;this.name=e},addTaskHandler:function(){var t=this;this.addTaskError=null,this.addTaskLoading=!0,this.$apollo.mutate({mutation:L,variables:{title:this.name},update:function(t,e){var a=e.data.addTask,n=t.readQuery({query:C}),i=a.task;n.queryTask.push(i[0]),t.writeQuery({data:n,query:C})}}).then((function(){t.name="",t.addTaskLoading=!1})).catch((function(e){t.addTaskError=e,t.addTaskLoading=!1}))}},components:{Form:h,TaskList:A,FilterButton:D}},z=U,W=Object(g["a"])(z,l,d,!1,null,null,null),J=W.exports,G=a("ecee"),R=a("c074");G["c"].add(R["a"]);a("a766");var V=a("522d"),K=a("2c82"),X=new K["a"]({uri:"https://blue-surf-400060.us-east-1.aws.cloud.dgraph.io/graphql"}),Y=X;o["a"].use(V["a"]);var Z=new V["a"]({defaultClient:Y}),tt=Z;o["a"].config.productionTip=!1,new o["a"]({apolloProvider:tt,render:function(t){return t(J)}}).$mount("#app")},a766:function(t,e,a){}});
//# sourceMappingURL=app.f2de57ac.js.map