(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){e.exports=a(341)},142:function(e,t,a){},150:function(e,t,a){},292:function(e,t,a){},294:function(e,t,a){},341:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(41),i=a.n(s),o=(a(142),a(14)),c=a(15),m=a(29),p=a(28),u=a(30),l=a(344),h=a(343),d=a(126),f=a.n(d),g=(a(150),a(151),a(153),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).resize=function(e){var t=e.pageY-a.inputcontainer.current.getBoundingClientRect().top+"px";a.setState({inputHeight:t})},a.stopResize=function(e){window.removeEventListener("mousemove",a.resize)},a.inputcontainer=r.a.createRef(),a.resizer=r.a.createRef(),a.state={inputHeight:"100%"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.resizer.current.addEventListener("mousedown",function(t){window.addEventListener("mousemove",e.resize),window.addEventListener("mouseup",e.stopResize)})}},{key:"render",value:function(){var e=this.props,t=e.values,a=e.onChange;return r.a.createElement("div",{className:"inputcontainer",ref:this.inputcontainer},r.a.createElement(f.a,{mode:"java",width:"100%",height:this.state.inputHeight,theme:"solarized_dark",showPrintMargin:!1,wrapEnabled:!0,value:t,fontSize:"16px",onChange:a,name:"inputarea",editorProps:{$blockScrolling:!0},style:{fontFamily:"'Source Code Pro', monospace",minHeight:"100px"}}),r.a.createElement("div",{className:"resizer",ref:this.resizer}))}}]),t}(n.Component)),b=a(127),v=(a(292),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).getChartData=function(e){var t=a.props.data;return e.style.margin="auto",e.style.maxHeight="350px",e.style.maxWidth="90%",t.datasets.forEach(function(e,t){e.borderWidth=2,e.fill=!1,e.lineTension=0}),t},a.textarea=r.a.createRef(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"chartcontainer"},r.a.createElement(b.a,{options:{maintainAspectRatio:!1,title:{display:!1},legend:{position:"right"},scales:{xAxes:[{type:"time",time:{unit:"minute",displayFormats:{minute:"HH:mm:ss"}},ticks:{source:"data",beginAtZero:!0}}]}},data:this.getChartData}))}}]),t}(n.Component)),w="{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}\n{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000}\n{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}\n{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}\n{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}\n{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}\n{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}\n{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}\n{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}\n{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}\n{type: 'stop', timestamp: 1519862400000}",y=function(){function e(t){Object(o.a)(this,e),this.data=t,this.datasets=[],this.span={begin:"",end:""},this.group="",this.select="",this.streamStarted=!1,this.map=new Map}return Object(c.a)(e,[{key:"selectGroup",value:function(e,t){return e.map(function(e){if(t.hasOwnProperty(e))return t[e];throw Error("No property ".concat(e," found on the following event: ").concat(JSON.stringify(t)))}).join(" ")}},{key:"getDatasets",value:function(){var e=this;return this.map.forEach(function(t,a){var n=function(){var e=function(){return Math.floor(256*Math.random())},t=e(),a=e(),n=e();return"rgb(".concat(t,",").concat(a,",").concat(n,")")}(),r={label:a,backgroundColor:n,borderColor:n,data:t};e.datasets.push(r)}),this.datasets}},{key:"processData",value:function(){var e=this,t=this.data.trim().split("\n"),a=[];try{t.forEach(function(e){if(e.length){var t=e.replace(/(['"])?((([0-9]+)?[a-zA-Z_]+([0-9]+)?)+(\2?)|(['"][0-9]+))(['"])?/g,'"$2"');a.push(JSON.parse(t))}}),a.forEach(function(t){var a=t.type,n=t.select,r=t.group;switch(a){case"start":if(!r.length)throw Error("There should be a group in the start event.");if(!1!==e.streamStarted)throw Error("There's already an unfinished stream in progress. ");e.streamStarted=!0,e.group=r,e.select=n;break;case"span":if(e.span={begin:t.begin,end:t.end},e.span.begin>e.span.end)throw Error("Invalid span interval. End value must be greater than begin value");break;case"data":if(!e.streamStarted)throw Error("No Stream in progress.");if(t.timestamp>=e.span.begin&&t.timestamp<=e.span.end){var s=e.selectGroup(e.group,t);e.select.forEach(function(a){if(t.hasOwnProperty(a)){var n="".concat(s," ").concat(a.replace(/_/g," ")),r={x:t.timestamp-e.span.begin-756e5,y:t[a]};e.map.has(n)?e.map.get(n).push(r):e.map.set(n,[r])}})}break;case"stop":if(!0!==e.streamStarted)throw Error("No stream in progress to be stopped. ");e.streamStarted=!1;break;default:throw Error("Invalid event ".concat(JSON.stringify(t),"."))}})}catch(n){alert(n)}}}]),e}(),_=(a(293),a(294),l.a.Header),E=l.a.Footer,x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleInputs=function(){var e=new y(a.state.inputs);e.processData();var t=e.getDatasets();a.setState({data:{datasets:t}})},a.onClick=function(e){a.handleInputs()},a.onChange=function(e,t){a.setState({inputs:e})},a.inputarea=r.a.createRef(),a.state={data:{datasets:[]},inputs:w},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.handleInputs(this.inputs)}},{key:"render",value:function(){return r.a.createElement(l.a,null,r.a.createElement(_,{style:{background:"LightGray",color:"#444",fontSize:"28px"}},"Alex's Challenge"),r.a.createElement(g,{values:this.state.inputs,onChange:this.onChange}),r.a.createElement(v,{className:"chart",data:this.state.data}),r.a.createElement(E,{style:{background:"LightGray"}},r.a.createElement(h.a,{type:"primary",onClick:this.onClick},"GENERATE CHART")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,1,2]]]);
//# sourceMappingURL=main.058ee3bd.chunk.js.map