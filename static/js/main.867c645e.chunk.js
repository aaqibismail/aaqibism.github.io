(this.webpackJsonpzuiz=this.webpackJsonpzuiz||[]).push([[0],{25:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/logo5.bfb4a450.png"},48:function(e,t,a){e.exports=a(66)},58:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),i=a.n(s),o=(a(37),a(5)),l=a(4),c=a(6),u=a(7),m=a(8),h=(a(38),a(13)),d=a(45),p=a.n(d),g=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("img",{className:"logo",src:p.a,alt:"Logo"}),r.a.createElement(h.b,{to:"/",style:{color:"white"}},r.a.createElement("h1",{className:"slogan"},"Date Night")),localStorage.getItem("food")?r.a.createElement(h.b,{to:"/results",style:{color:"white"},className:"links"},"Results"):""))}}]),t}(n.Component),f=a(18),b=a(15),E=(a(58),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t=a.props.suggestions,n=e.currentTarget.value;a.props.handleChange(e),localStorage.setItem("food",n);var r=t.filter((function(e){return e.toLowerCase().indexOf(n.toLowerCase())>-1}));a.setState({activeSuggestion:0,filteredSuggestions:r,showSuggestions:!0,userInput:e.currentTarget.value})},a.onClick=function(e){a.setState({activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:e.currentTarget.innerText}),a.props.handleChange(e),localStorage.setItem("food",e.currentTarget.innerText)},a.onKeyDown=function(e){var t=a.state,n=t.activeSuggestion,r=t.filteredSuggestions;if(13===e.keyCode)a.setState({activeSuggestion:0,showSuggestions:!1,userInput:r[n]});else if(38===e.keyCode){if(0===n)return;a.setState({activeSuggestion:n-1})}else if(40===e.keyCode){if(n-1===r.length)return;a.setState({activeSuggestion:n+1})}},a.onKeyUp=function(e){localStorage.setItem("food",a.state.userInput)},a.state={activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.onChange,a=this.onClick,s=this.onKeyDown,i=this.onKeyUp,o=this.state,l=o.activeSuggestion,c=o.filteredSuggestions,u=o.showSuggestions,m=o.userInput;return u&&m&&(e=c.length?r.a.createElement("ul",{className:"suggestions"},c.map((function(e,t){var n;return t===l&&(n="suggestion-active"),r.a.createElement("li",{className:n,key:e,onClick:a},e)}))):r.a.createElement("div",{className:"no-suggestions"},r.a.createElement("em",null,"No suggestions, you're on your own!"))),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"input"},r.a.createElement("h1",{className:"question"},this.props.question),r.a.createElement("input",{name:"food",type:"text",className:"answer",onChange:t,onKeyDown:s,onKeyUp:i,value:m,placeholder:"Enter type of food",required:!0}),e))}}]),t}(n.Component));E.defaultProps={suggestions:[]};var v=E,y=(a(40),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={List:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({List:this.props.suggestions})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"buttonGroup"},r.a.createElement(v,{question:this.props.question,suggestions:this.state.List,handleChange:this.props.handleChange})))}}]),t}(r.a.Component)),S=[{id:0,question:"What type of food would you like to eat?",answers:["Afghan","African","American","Arabian","Argentine","Australian","Barbeque","Brazilian","Bistros","Breakfast","Brunch","British","Buffets","Cajun","Carribean","Chicken Wings","Chinese","Comfort Food","Cuban","Curry","Danish","Dumplings","Ethiopian","Fast Food","Filipino","Fish & Chips","French","Gastropubs","Gluten-Free","German","Greek","Halal","Hawaiian","Hungarian","International","Indian","Irish","Italian","Japanese","Jewish","Korean","Kosher","Kurdish","Kebab","Laotian","Latin American","Malaysian","Mediterranean","Mexican","Middle Eastern","Lebanese","Moroccan","New Zealand","Nicaraguan","Noodles","Pakistani","Polynesian","Polish","Portugese","Pub Food","Russian","Rice","Salad","Sandwiches","Scandinavian","Schnitzel","Seafood","Singaporean","Soul Food","Soup","Southern","Spanish","Steakhouses","Taiwanese","Thai","Tex-Mex","Turkish","Ukranian","Vegan","Vegetarian","Vietnamese","Ramen","Wok","Wraps"]}],O=[{id:0,name:"commute",question:"How far are you willing to commute?",answers:["1 mile","5 miles","10 miles","15 miles","20 miles","25 miles","Delivery Please"]},{id:1,name:"casual",question:"Is this casual or formal/celebratory?",answers:["Casual","Formal"]},{id:2,name:"budget",question:"What is your budget?",answers:["$20","$50","$100","My Entire Paycheck"]},{id:3,name:"open",question:"Open Now?",answers:["yes","no"]},{id:4,name:"post",question:"What's happening after dinner?",answers:["Drinks","Ice Cream","Netflix and Chill","Nothing","Stargazing"]}],C=(a(25),a(30)),k=a(88),j=a(83),w=a(84),I=r.a.forwardRef((function(e,t){var a=Object(n.useState)(!1),s=Object(C.a)(a,2),i=s[0],o=s[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"cave"},r.a.createElement("button",{id:"cave",ref:t,onClick:function(){return o(!i)}},"Details")),r.a.createElement(k.a,{isOpen:i},r.a.createElement(j.a,{style:{fontSize:"1.2em"}},r.a.createElement(w.a,null,r.a.createElement("p",null,r.a.createElement("i",null,"Rating:")," ",e.rating),r.a.createElement("p",null,r.a.createElement("i",null,"Price:")," ",e.price),r.a.createElement("p",null,r.a.createElement("i",null,"Address:")," ",e.address," "),r.a.createElement("p",null,r.a.createElement("i",null,"Phone:")," ",e.phone),r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",null,"Yelp Page"))))))})),N=a(87),q=a(89),z=r.a.forwardRef((function(e,t){var a=r.a.useState(null),n=Object(C.a)(a,2),s=n[0],i=n[1],o=function(e){i(e.currentTarget)},l=function(){i(null)},c=Boolean(s),u=c?e.id:void 0;return r.a.createElement("div",null,r.a.createElement("div",{className:"popup"},r.a.createElement("button",{id:"popup","aria-describedby":u,ref:t,variant:"contained",onMouseEnter:o,onClick:o},"Details")),r.a.createElement(N.a,{id:u,open:c,anchorEl:s,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(q.a,{style:{padding:"1em",fontSize:"1.2em"},component:"h1",onMouseLeave:l},r.a.createElement("p",null,r.a.createElement("i",null,"Rating:")," ",e.rating),r.a.createElement("p",null,r.a.createElement("i",null,"Price:")," ",e.price),r.a.createElement("p",null,r.a.createElement("i",null,"Address:")," ",e.address," "),r.a.createElement("p",null,r.a.createElement("i",null,"Phone:")," ",e.phone),r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",null,"Yelp Page")))))})),x=a(28),R=a.n(x),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).createJson=function(e){var t="";return e.address1&&(t+=e.address1),e.address2&&(t+=" "+e.address2),e.address3&&(t+=" "+e.address3),e.city&&(t+=", "+e.city),e.state&&(t+=", "+e.state),e.zip_code&&(t+=" "+e.zip_code),t},a.popClick=function(){R()("#popup").is(":visible")?a.popButton.current.click():a.caveButton.current.click()},a.displayCategories=function(){return r.a.createElement("div",{className:"list-group"},a.state.categories.map((function(e){return r.a.createElement("p",{className:"category"},e.title)})))},a.formatDetails=function(){return a.state.isOpen?"Open":"Closed"},a.toggle=function(){return a.setState({collapse:!a.state.collapse})},a.state={id:"",rating:"",phone:"",isOpen:!0,price:"",categories:[],name:"",url:"",distance:"",image_url:"",location:{},address:"",collapse:!1},a.popButton=r.a.createRef(),a.caveButton=r.a.createRef(),a.popClick=a.popClick.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({id:this.props.id,rating:this.props.rating,phone:this.props.phone,isOpen:this.props.isOpen,price:this.props.price,categories:this.props.categories,name:this.props.name,url:this.props.url,distance:this.props.distance,image_url:this.props.image_url,location:this.props.location,address:this.createJson(this.props.location)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"restaurantContainer"},r.a.createElement("h3",{className:"restaurantTitle"},this.state.name),r.a.createElement("img",{src:this.state.image_url,className:"restaurantIMG",alt:"Restaurant Logo",onClick:this.popClick}),this.displayCategories(),r.a.createElement(I,{ref:this.caveButton,rating:this.state.rating,price:this.state.price,address:this.state.address,phone:this.state.phone,url:this.state.url}),r.a.createElement(z,{className:"uncontrolled",ref:this.popButton,id:this.state.id,rating:this.state.rating,price:this.state.price,address:this.state.address,phone:this.state.phone,url:this.state.url}))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={data:{total:0,businesses:[],ajaxError:!1,processed:!1,found:!0,updated:!1}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t;if("Delivery Please"===localStorage.getItem("commute"))e="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/transactions/delivery/search?term="+encodeURI(localStorage.getItem("food"));else{var a=1609*parseInt(localStorage.getItem("commute"));a>4e4&&(a=4e4),e="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=24&radius="+a+"&term="+encodeURI(localStorage.getItem("food"))}"Casual"===localStorage.getItem("casual")?e+=encodeURI(" food"):e+=encodeURI(" fancy restaurant"),localStorage.getItem("latitude")?e+="&latitude="+encodeURI(localStorage.getItem("latitude"))+"&longitude="+encodeURI(localStorage.getItem("longitude")):e+="&location="+encodeURI(localStorage.getItem("loc")),"$20"===localStorage.getItem("budget")?e+="&price=1,2":"$50"===localStorage.getItem("budget")?e+="&price=1,2,3":(localStorage.getItem("budget"),e+="&price=1,2,3,4"),"yes"===localStorage.getItem("open")&&(e+="&open_now=true"),console.log(e),R.a.ajax({url:e,headers:{Authorization:"Bearer M42T3szZIG5AZIws_n8Y2XvvAXGZa6x77mq-kLwHs7z9U7dTpVX7_vfW7Azy8uiDKYxipXM9CePFA8m2CzsRtSEXXgHF2Sc7WiBAWu3lh5OLWkx0K3mpxli5DJ5UXnYx"},method:"GET",dataType:"json",success:function(e){t=e,this.setState({data:t,total:t.length}),this.state.data.businesses.length||this.state.updated||this.setState({processed:!0,found:!1,updated:!0})}.bind(this),error:function(e){this.setState({ajaxError:!0})}.bind(this)})}},{key:"map",value:function(){return r.a.createElement("h1",null,"to be map")}},{key:"render",value:function(){var e,t="No results found, please complete the quiz again.",a=r.a.createElement("span",null,r.a.createElement("h1",{className:"text-danger error"},t));return this.state.ajaxError?e=r.a.createElement("span",null,r.a.createElement("h1",{className:"text-danger error"},"Sorry Server Error! Try again later.")):this.state.data.businesses.length?(e=this.state.data.businesses.map((function(e){return r.a.createElement(D,{key:e.id,id:e.id,rating:e.rating,phone:e.display_phone,isOpen:!e.is_closed,price:e.price,categories:e.categories,name:e.name,url:e.url,distance:e.distance,image_url:e.image_url,location:e.location})})),this.state.processed&&!this.state.found&&(a=r.a.createElement("span",null,r.a.createElement("h1",{className:"text-danger error"},t)))):e=r.a.createElement("span",null,r.a.createElement("h1",{className:"text-info error"},"Loading...")),r.a.createElement("div",null,r.a.createElement("h1",{className:"resultsTitle"},"Restaurant Finder Results"),r.a.createElement("hr",null),r.a.createElement("div",{className:"grid"},e,this.state.processed&&!this.state.found?a:""),r.a.createElement("hr",null))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.props.handleChange(e);var t=e.target,n=(t.name,t.value);a.setState({val:n})},a.state={val:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.options.map((function(e){return r.a.createElement("option",{value:e},e)}));return r.a.createElement("div",{className:"input"},r.a.createElement("h1",{className:"question"},this.props.question),r.a.createElement("select",{className:"select",name:this.props.name,value:this.state.val,onChange:this.handleChange,required:!0},e))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setSelect=function(){localStorage.setItem("commute",a.state.commute),localStorage.setItem("casual",a.state.casual),localStorage.setItem("budget",a.state.budget),localStorage.setItem("open",a.state.open),localStorage.setItem("post",a.state.open)},a.state={location:!1,food:"",loc:"",latitude:"",longitude:"",commute:"1 mile",casual:"Casual",budget:"$20",open:"yes",post:"Drinks"},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(f.a)({},a,n)),localStorage.setItem(a,n)}},{key:"handleSubmit",value:function(e){if(!(this.state.latitude&&this.state.longitude&&this.state.food||this.state.loc&&this.state.food))return alert("Fill out quiz completely"),!1}},{key:"componentDidMount",value:function(){var e=this;localStorage.clear(),this.setSelect(),navigator.geolocation.getCurrentPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude;e.setState({location:!0,latitude:a,longitude:n}),localStorage.setItem("latitude",a),localStorage.setItem("longitude",n)}),(function(e){console.log("No location given")}))}},{key:"render",value:function(){var e=this,t=S.map((function(t){return r.a.createElement(y,{key:t.id,question:t.question,suggestions:t.answers,handleChange:e.handleChange})})),a=O.map((function(t){return r.a.createElement(B,{key:t.id,name:t.name,question:t.question,options:t.answers,handleChange:e.handleChange})})),n=r.a.createElement("div",{className:"input"},r.a.createElement("h1",{className:"question"},"What city do you live in?"),r.a.createElement("input",{name:"loc",type:"text",placeholder:"City, State",onChange:this.handleChange,required:!0}));return r.a.createElement("div",null,r.a.createElement("h1",{className:"quizTitle"},"Restaurant Quiz"),r.a.createElement("div",{className:"top"},r.a.createElement("h5",null,r.a.createElement("strong",null,"Please share location to display restaurants around you.")),r.a.createElement("p",null,"Following each question, input your answer into the text box below it. Once you are finished with the quiz, click the submit button at the bottom to recieve your results!")),t,this.state.location?"":n,a,r.a.createElement("div",{className:"middle"},this.state.latitude&&this.state.longitude&&this.state.food||this.state.loc&&this.state.food?r.a.createElement(h.b,{to:"/results"},r.a.createElement("button",{type:"button",className:"sub submit",onClick:this.handleSubmit},"Submit")):r.a.createElement(h.b,{to:"/quiz"},r.a.createElement("button",{type:"button",className:"sub submit",onClick:this.handleSubmit},"Submit"))))}}]),t}(n.Component),F=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"img"},r.a.createElement("h1",{className:"title"},"Date Night Helper"),r.a.createElement("p",{className:"paragraph lead"},"Going on a date, but can't find a restaurant? Our online quiz allows you and your date to find the restaurant most compatible for the two of you. Click the link below to start!"),r.a.createElement(h.b,{to:"/quiz"},r.a.createElement("button",{className:"submit"},"Find Restaurants")),r.a.createElement("p",{style:{marginTop:"5%",color:"white"}},"Built by Aaqib Ismail and Josh Meidl")))}}]),t}(n.Component),M=a(20),A=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{basename:""},r.a.createElement("div",null,r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/quiz"},r.a.createElement(P,null)),r.a.createElement(M.a,{path:"/results"},r.a.createElement(T,null))))))}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{basename:""},r.a.createElement(g,null),r.a.createElement("div",null,r.a.createElement(M.c,null,r.a.createElement(M.a,{exact:!0,path:"/"},r.a.createElement(F,null)),r.a.createElement(M.a,{path:"/quiz"},r.a.createElement(A,null)),r.a.createElement(M.a,{path:"/results"},r.a.createElement(T,null))))))}}]),t}(n.Component),L=function(){return r.a.createElement("div",null,r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.867c645e.chunk.js.map