(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(25).concat([function(e,t,a){e.exports=a.p+"static/media/sign.164fc85d.png"},,,function(e,t,a){e.exports=a.p+"static/media/menu.927aa9e2.svg"},function(e,t,a){e.exports=a.p+"static/media/pic3.c95eb45e.jpg"},function(e,t,a){e.exports=a.p+"static/media/instagram.26631a40.png"},function(e,t,a){e.exports=a.p+"static/media/facebook.8f5ce275.png"},function(e,t,a){e.exports=a.p+"static/media/pic0.ac2a1653.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic1.fd8b9131.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic2.c470af27.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic4.614251d3.jpg"},function(e,t,a){e.exports=a.p+"static/media/pic5.fd3a92c1.jpg"},function(e,t,a){e.exports=a(63)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/email.b9a50da0.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),s=a.n(i),o=(a(42),a(5)),c=a(6),l=a(8),p=a(7),m=a(9),h=(a(43),a(13)),d=a(25),u=a.n(d),f=(a(44),a(10));a(45);var g=function(e){var t=e.link,a=e.name,n=e.pic;return n?r.a.createElement("div",{className:"nav-item--pic"},r.a.createElement(f.b,{to:t},r.a.createElement("button",{className:"pic-btn"},n))):r.a.createElement("div",{className:"nav-item"},r.a.createElement(f.b,{to:t},r.a.createElement("button",{className:"btn"},a)))},b=a(28),v=a.n(b);var x=function(){var e=Object(n.useContext)(ie),t=e.isOpen,a=e.changeMenuStatus,i=Object(n.useState)(null),s=Object(h.a)(i,2),o=s[0],c=s[1],l=window.innerWidth;Object(n.useEffect)(function(){t!==o&&(p(),c(t))},[t]);var p=function(){Array.from(document.querySelectorAll(".nav-items")[0].children).forEach(function(e){for(var a=e.classList;a.length>0;)a.remove(a[a.length-1]);t||a.add("nav-visible")})};return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"navbar-icon"}),r.a.createElement("div",{className:"navbar"},r.a.createElement(g,{link:"/",pic:r.a.createElement("img",{className:"home",src:u.a})}),l<500?r.a.createElement("img",{className:"navbar-homepic",src:v.a,onClick:function(){return a(!t)}}):null,r.a.createElement("div",{className:"nav-items"},r.a.createElement(g,{link:"/me",name:"Me"}),r.a.createElement(g,{link:"/gallery",name:"Gallery"}),r.a.createElement(g,{link:"/contacts",name:"Contacts"}))))};var E=function(e){return e.children};function w(e){return r.a.createElement(E,null,r.a.createElement(x,null),e.children)}var y=a(11),T=(a(54),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:this.props.containerStyles},r.a.createElement("div",{style:{display:"inline-block",position:"absolute",left:"50%",top:"50%"}},this.props.emptyMessage))}}]),t}(r.a.Component)),O={LEFT:"LEFT",CENTER:"CENTER",RIGHT:"RIGHT",REMOVED_LEFT:"REMOVED_LEFT",REMOVED_RIGHT:"REMOVED_RIGHT"},I=a(12),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).cssTransform=a.cssTransform.bind(Object(I.a)(Object(I.a)(a))),a.cssTransformVertical=a.cssTransformVertical.bind(Object(I.a)(Object(I.a)(a))),a.state={tempTransform:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t={backgroundImage:"url('".concat(this.props.imgUrl,"')"),left:"calc(50% - ".concat(this.props.width,"px / 2)"),top:"calc(50% - ".concat(this.props.height,"px / 2)"),width:"".concat(this.props.width,"px"),height:"".concat(this.props.height,"px"),backgroundSize:"".concat(this.props.width,"px ").concat(this.props.height,"px"),display:"inline-block",position:"absolute",backgroundColor:"white",transitionTimingFunction:"ease-in-out",transition:"transform 750ms",boxShadow:"30px 5px 15px -10px rgba(0,0,0,.15), -30px 5px 15px -10px rgba(0,0,0,.15)"};this.props.side!==O.CENTER&&(""!==this.state.tempTransform?t.transform=this.state.tempTransform:"vertical"===this.props.direction?t.transform=this.cssTransformVertical(this.props.side,this.props.distance):t.transform=this.cssTransform(this.props.side,this.props.distance)),this.props.side===O.CENTER?t.zIndex=this.props.zIndex:this.props.side===O.RIGHT?t.zIndex=this.props.zIndex-this.props.distance:this.props.side===O.REMOVED_RIGHT&&(t.zIndex=this.props.zIndex-this.props.distance-1);var a="";return null!==this.props.label&&(a=r.a.createElement("div",{onClick:function(){return e.props.handleClick(e.props.index)},style:{background:"rgba(0,0,0,0.5)",color:"white",padding:"5px",bottom:"0",position:"absolute",width:"100%",boxSizing:"border-box",userSelect:"none"}},this.props.label)),r.a.createElement("div",{style:t,onClick:function(){e.props.selectItem(e.props.index)}},a)}},{key:"componentDidMount",value:function(){var e,t=this;e="vertical"===this.props.direction?this.props.side===O.LEFT||this.props.side===O.RIGHT?this.cssTransformVertical(this.props.side,this.props.max):"":this.props.side===O.LEFT||this.props.side===O.RIGHT?this.cssTransform(this.props.side,this.props.max):"",this.setState({tempTransform:e}),this.timeout=setTimeout(function(){t.setState({tempTransform:""})},100)}},{key:"componentWillUnmount",value:function(){var e;this.timeout&&clearTimeout(this.timeout),e="vertical"===this.props.direction?this.props.side===O.LEFT||this.props.side===O.RIGHT?this.cssTransformVertical(this.props.side,this.props.max):"":this.props.side===O.LEFT||this.props.side===O.RIGHT?this.cssTransform(this.props.side,this.props.max):"",this.setState({tempTransform:e})}},{key:"cssTransform",value:function(e,t){var a=function(e,t,a){return"rotateY(".concat(e,"deg) translate3d(").concat(t,"px, 0px, ").concat(a,"px)")},n=Math.floor(this.props.width/3),r=1.08*(-1*n*t-n),i={deg:25,x:-1*n*t,z:r},s={deg:-25,x:n*t,z:r};if(e===O.LEFT)return a(i.deg,i.x,i.z);if(e===O.RIGHT)return a(s.deg,s.x,s.z);if(e===O.REMOVED_LEFT)return this.cssTransform(O.LEFT,this.props.max);if(e===O.REMOVED_RIGHT)return this.cssTransform(O.RIGHT,this.props.max);throw"Error: side is undefined or invalid."}},{key:"cssTransformVertical",value:function(e,t){var a=function(e,t,a){return"rotateX(".concat(e,"deg) translate3d(0px, ").concat(t,"px, ").concat(a,"px)")},n=Math.floor(this.props.height/3),r=1.08*(-1*n*t-n),i={deg:-45,y:-1*n*t,z:r},s={deg:45,y:n*t,z:r};if(e===O.LEFT)return a(i.deg,i.y,i.z);if(e===O.RIGHT)return a(s.deg,s.y,s.z);if(e===O.REMOVED_LEFT)return this.cssTransformVertical(O.LEFT,this.props.max);if(e===O.REMOVED_RIGHT)return this.cssTransformVertical(O.RIGHT,this.props.max);throw"Error: side is undefined or invalid."}}]),t}(r.a.Component);k.defaultProps={zIndex:100};var j=k,S=a(18),N=a.n(S),R=a(15),M=a.n(R),C=a(19),A=a.n(C),z=(a(58),function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).next=function(){var e=a.state.selectedIndex;e+1<a.props.imagesArr.length&&a.selectItem(e+1)},a.previous=function(){var e=a.state.selectedIndex;e>0&&a.selectItem(e-1)},a.selectItem=function(e){a.setState(function(t){return{selectedIndex:e,prevIndex:t.selectedIndex}}),a.props.handleSelect&&a.props.handleSelect(e)},a.prepareItems=function(){if(0===a.props.imagesArr.length)return[];var e=a.calcItemsAmountToRender(),t=Math.floor(e/2),n=a.state.selectedIndex,r=a.props.imagesArr,i=r.map(function(e,t){return{imgUrl:e.src,index:t,ratio:e.ratio,label:e.label}});i[n].side=O.CENTER,i[n].distance=0;for(var s=Math.max(0,n-t),o=Math.min(r.length,n+t+1),c=s;c<n;c++)i[c].side=O.LEFT,i[c].distance=n-c;for(var l=n+1;l<o;l++)i[l].side=O.RIGHT,i[l].distance=l-n;if(i.length<e)return i;var p=n-a.state.prevIndex;if(p>0&&s>t){for(var m=s-p;m<s;m++)i[m].side=O.REMOVED_LEFT,i[m].distance=n-m;s-=p}else if(p<0&&o+(p*=-1)<i.length){for(var h=o;h<o+p;h++)i[h],i[h].side=O.REMOVED_RIGHT,i[h].distance=h-n;o+=p}return i.slice(s,o)},a.calcIndex=function(){var e=a.props.imagesArr.length;return 0===e?-1:e>10?5:parseInt(a.props.imagesArr.length/2,10)},a.calcItemDimensions=function(e){var t,n,r={},i=e.split(":").map(function(e){return parseFloat(e)}),s=Object(h.a)(i,2);return r.x=s[0],r.y=s[1],"vertical"===a.props.direction?n=(t=a.props.width-70)*r.y/r.x:t=(n=a.props.height-60)*r.x/r.y,[t,n]},a.calcItemsAmountToRender=function(){var e;if("vertical"===a.props.direction){var t,n=a.props.height,r=a.calcItemDimensions("2:1");t=Object(h.a)(r,2)[1],e=2*Math.floor(n/t)-4}else{var i,s=a.props.width,o=a.calcItemDimensions("2:1");i=Object(h.a)(o,1)[0],e=2*Math.floor(s/i)-3}return e<3?e=3:e>11&&(e=11),Math.min(e,a.props.imagesArr.length)};var n=a.calcIndex();a.state={selectedIndex:n,prevIndex:n,pauseWheelEvent:!1};var r={left:a.previous,right:a.next,up:a.next,down:a.previous},i={left:a.next,right:a.previous,up:a.next,down:a.previous};return N.a.config(i),M.a.config(i),A.a.config(r),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,a=this,n=this.prepareItems();return r.a.createElement("div",Object.assign({tabIndex:"0",style:this.props.containerStyles},N.a.events,M.a.events,A.a.events,{ref:function(e){a.coverflow=e}}),"horizontal"===this.props.direction?r.a.createElement("div",{id:"left",onClick:this.previous,style:{width:"100px",height:"100px",position:"absolute",left:"calc(30% - ".concat(this.props.width,"px /2)"),bottom:"calc(100% - ".concat(this.props.height,"px / 2)")}}):null,n.map(function(n){var i=a.calcItemDimensions(n.ratio),s=Object(h.a)(i,2);return e=s[0],t=s[1],r.a.createElement(j,{handleClick:a.props.handleClick,side:n.side,max:Math.floor(a.calcItemsAmountToRender()/2),distance:n.distance,imgUrl:n.imgUrl,selectItem:a.selectItem,index:n.index,zIndex:a.props.zIndex,height:t,width:e,label:n.label,direction:a.props.direction,key:n.index})}),"horizontal"===this.props.direction?r.a.createElement("div",{id:"right",onClick:this.next,style:{width:"100px",height:"100px",position:"absolute",left:"calc(60% + ".concat(this.props.width,"px /2)"),bottom:"calc(100% - ".concat(this.props.height,"px / 2)")}}):null)}},{key:"componentDidMount",value:function(){this.coverflow.focus()}},{key:"componentWillUnmount",value:function(){M.a.clearTimeout()}}]),t}(r.a.Component)),H=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t;"vertical"===this.props.direction?(e=isNaN(this.props.width)?250:this.props.width,t=isNaN(this.props.height)?document.body.offsetHeight:this.props.height):(t=isNaN(this.props.height)?250:this.props.height,e=isNaN(this.props.width)?document.body.offsetWidth:this.props.width);var a={textAlign:"center",perspective:"400px",margin:"0px",position:"relative",height:"".concat(t,"px"),width:"".concat(e,"px"),display:"inline-block",boxSizing:"border-box",padding:"25px",outline:"transparent",background:this.props.background,border:this.props.border,boxShadow:this.props.boxShadow};return 0===this.props.imagesArr.length?r.a.createElement(T,{containerStyles:a,emptyMessage:this.props.emptyMessage,height:this.props.height,width:this.props.width,background:this.props.background,border:this.props.border,boxShadow:this.props.boxShadow}):r.a.createElement(z,{handleClick:this.props.handleClick,containerStyles:a,imagesArr:this.props.imagesArr,labelsArr:this.props.labelsArr,itemRatio:this.props.itemRatio,zIndex:this.props.zIndex,handleSelect:this.props.handleSelect,height:t,width:e,background:this.props.background,border:this.props.border,boxShadow:this.props.boxShadow,direction:this.props.direction})}}]),t}(r.a.Component);H.defaultProps={zIndex:100,direction:"horizontal",border:"none",boxShadow:"none",emptyMessage:"No items to show.",itemRatio:"8:5",labelsArr:[]};var B=H;function V(e){var t=Object(n.useContext)(ie),a=window.innerWidth,i=window.innerHeight;return r.a.createElement(B,{handleClick:e.handleClick,imagesArr:t.data,direction:a>500?"horizontal":"vertical",height:.6*i,width:.6*a})}var G=function(e){var t=Object(n.useContext)(ie),a=window.innerWidth;return Object(n.useEffect)(function(){return t.toggleBlur(),a<500&&t.changeMenuStatus(!1),t.toggleBlur},[]),r.a.createElement("div",{className:"body-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement(V,{handleClick:function(t){var a=e.history,n=e.match;a.push(n.url+"/"+t)}})))},D=a(29),L=a.n(D);a(59);var W=function(e){var t=Object(n.useContext)(ie),a=window.innerWidth;return Object(n.useEffect)(function(){return t.toggleBlur(),a<500&&t.changeMenuStatus(!1),t.toggleBlur},[]),r.a.createElement("div",{className:"me-wrapper"},r.a.createElement("div",{className:"me-container"},r.a.createElement("img",{src:L.a,className:"me-pic"}),r.a.createElement("p",null,r.a.createElement("span",{className:"me-text"},"Thank you for visiting, welcome.")),r.a.createElement("p",null,r.a.createElement("span",{className:"me-text"},"Im Barbara from Moscow, currently based in Barcelona. I express myself thru visual arts since 3 y.o.")),r.a.createElement("p",null,r.a.createElement("span",{className:"me-text"},"CV:")),r.a.createElement("p",null,r.a.createElement("span",{className:"me-text"},"- Moscow Watercolor school of Sergey Andriyaka")),r.a.createElement("p",null,r.a.createElement("span",{className:"me-text"},"- Moscow Stroganov Academy of Arts and Industry")),r.a.createElement("p",null,r.a.createElement("span",{className:"me-text"},"- Bratislava Academy of Arts and Design")),r.a.createElement("p",null,r.a.createElement("span",{className:"me-text"},"- ELISAVA Barcelona Academy of Arts and Design"))))},F=(a(60),function(e){var t=e.match.params.id,a=Object(n.useContext)(ie),i=window.innerWidth;return Object(n.useEffect)(function(){return a.toggleBlur(),i<500&&a.changeMenuStatus(!1),a.toggleBlur},[]),r.a.createElement("div",{className:"fullpic-container"},r.a.createElement(f.b,{to:"/gallery"},r.a.createElement("button",{className:"btn"},"back to gallery")),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",{className:"fullpic-text"},a.data[t].info))),r.a.createElement("img",{className:"fullpic-pic",src:a.data[t].src}))}),_=a(30),U=a.n(_),X=a(31),P=a.n(X),q=(a(61),a(62),function(){var e=Object(n.useContext)(ie),t=window.innerWidth;return Object(n.useEffect)(function(){return e.toggleBlur(),t<500&&e.changeMenuStatus(!1),e.toggleBlur},[]),r.a.createElement("div",null,r.a.createElement("p",{style:{marginBottom:"50px"}},r.a.createElement("span",{className:"contact-text"},"barbarashik.art@gmail.com")),r.a.createElement("a",{href:"https://www.instagram.com/barbarashik/"},r.a.createElement("p",{style:{marginBottom:"50px"}},r.a.createElement("img",{style:{width:"50px"},src:U.a}))),r.a.createElement("a",{href:"https://www.facebook.com/barbara.shilova"},r.a.createElement("p",{style:{marginBottom:"50px"}},r.a.createElement("img",{style:{width:"50px"},src:P.a}))))}),J=a(32),Y=a.n(J),$=a(33),K=a.n($),Q=a(34),Z=a.n(Q),ee=a(35),te=a.n(ee),ae=a(36),ne=a.n(ae),re=[{src:Y.a,ratio:"70:100",label:"SHOW",info:'"Girlplant" 70X100; oil, canvas'},{src:K.a,ratio:"70:100",label:"SHOW",info:'"Aloe" 70X100; oil, canvas'},{src:Z.a,ratio:"120:80",label:"SHOW",info:'"Towers" 120X80; oil, canvas'},{src:te.a,ratio:"60:80",label:"SHOW",info:'"Nazare" 60X80; oil, canvas'},{src:ne.a,ratio:"40:50",label:"SHOW",info:'"Windmill" 40X50; oil, canvas'}],ie=r.a.createContext({isOpen:!0,toggleBlur:function(){return null},changeMenuStatus:function(){return null},data:{}}),se=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!0},a.toggleBlur=function(){var e=document.querySelector("#bg").classList;e[0]?"blurred"===e[0]?(e.remove("blurred"),e.toggle("clear")):(e.remove("clear"),e.toggle("blurred")):e.toggle("blurred")},a.changeMenuStatus=function(e){a.setState({isOpen:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"bg"}),r.a.createElement(ie.Provider,{value:{isOpen:this.state.isOpen,toggleBlur:this.toggleBlur,changeMenuStatus:this.changeMenuStatus,data:re}},r.a.createElement(w,null,r.a.createElement(y.a,{path:"/gallery",exact:!0,component:G}),r.a.createElement(y.a,{path:"/gallery/:id",component:F}),r.a.createElement(y.a,{path:"/contacts",component:q}),r.a.createElement(y.a,{path:"/me",exact:!0,component:W}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=r.a.createElement(f.a,null,r.a.createElement(se,null));s.a.render(oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[37,1,2]]]);
//# sourceMappingURL=main.08ceee41.chunk.js.map