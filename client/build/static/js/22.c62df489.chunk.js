(this.webpackJsonpcinema=this.webpackJsonpcinema||[]).push([[22],{548:function(e,t,n){},606:function(e,t,n){"use strict";n.r(t);var c=n(585),s=n(602),a=n(101),i=n(588),A=n(595),l=n(586),b=n(549),r=n.n(b),d=n(135),j=n(69),m=n(0),v=n.n(m),O=n(445),o=n(529),h=n(530),u=n(27),x=n(37),p=n(54),f=(n(548),n(501)),Y=n.n(f),N=n(14),y=n(455),Z=n.n(y),W=n(100),w=n(3),G=(c.a.Panel,Date.now()+6e5);t.default=function(){var e,t,n,c,b,m=Object(p.c)(),f=Object(p.d)((function(e){return e.movieSlice})),y=f.showtime,L=f.isSuccess,M=f.isLoading,z=Object(u.i)()._id,X=function(){var e=v.a.useState([]),t=Object(j.a)(e,2),n=t[0],c=t[1];return{arraySeatSelected:n,handlePickSeat:function(e){var t=e._id,s=e.price,a=e.seat_number,i=n.findIndex((function(e){return e._id===t}));if(-1===i)c((function(e){return[].concat(Object(d.a)(e),[{_id:t,price:s,seat_number:a}])}));else{var A=Object(d.a)(n);A=A.filter((function(e){return e._id!==A[i]._id})),c(A)}}}}(),V=X.handlePickSeat,S=X.arraySeatSelected,k=Object(p.d)((function(e){return e.authSlice})).credential,q=v.a.useRef(!0),T=Object(u.g)();v.a.useEffect((function(){m(Object(x.m)({_id:z}))}),[z,m]),v.a.useEffect((function(){L&&!q.current&&Y.a.fire("Booking successfully!!","You can check this in your profile","success").then((function(){T.replace(N.b.HOME)}))}),[T,L]);var P=S.reduce((function(e,t,n){return e+t.price}),0);return Object(w.jsxs)("div",{className:"checkout",children:[Object(w.jsx)(s.a,{className:"page-header",onBack:function(){return T.goBack()},title:null===(e=y.movie)||void 0===e?void 0:e.title,extra:Object(w.jsx)(r.a,{value:G})}),Object(w.jsx)(O.a,{children:M?Object(w.jsx)(W.a,{}):Object(w.jsxs)(o.a,{children:[Object(w.jsx)(h.a,{lg:8,md:6,children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtoAAAA+CAYAAAAVpLyOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWFmZDM1NzktMWZiMS02YjQxLTlkZDgtOTViMmM2MTJkOThiIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZBOUFDQURGMjY3MjExRUFCODgwQ0RDNzc5MEY2NjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZBOUFDQURFMjY3MjExRUFCODgwQ0RDNzc5MEY2NjAwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM4YTA2MjY2LWE1M2ItNTU0Ni05OGFm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",alt:"",width:"100%"}),Object(w.jsx)("div",{className:"checkout__leftPanel",children:Object(w.jsx)("div",{children:null===(t=y.tickets)||void 0===t?void 0:t.map((function(e,t){var n=-1!==(null===S||void 0===S?void 0:S.findIndex((function(t){return t._id===e._id})));return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(a.a,{onClick:function(){V({_id:e._id,price:e.price,seat_number:e.seat_number})},disabled:!!e.status,className:"seat__btn ".concat((!n?"Vip"===e.type&&!e.status&&"seat__btn--vip":"seat__btn--selected")||!!e.status&&"seat__btn--sold"),children:e.seat_number},e._id),(t+1)%16===0?Object(w.jsx)("br",{}):""]})}))})}),Object(w.jsxs)(o.a,{children:[Object(w.jsx)(h.a,{md:3,style:{textAlign:"center"},children:Object(w.jsxs)(i.b,{align:"center",children:[Object(w.jsx)("div",{className:"seat__model seat__model--sold"}),Object(w.jsx)("span",{children:"Sold"})]})}),Object(w.jsx)(h.a,{md:3,style:{textAlign:"center"},children:Object(w.jsxs)(i.b,{align:"center",children:[Object(w.jsx)("div",{className:"seat__model seat__model--vip"}),Object(w.jsx)("span",{children:"Vip"})]})}),Object(w.jsx)(h.a,{md:3,style:{textAlign:"center"},children:Object(w.jsxs)(i.b,{align:"center",children:[Object(w.jsx)("div",{className:"seat__model seat__model--available"}),Object(w.jsx)("span",{children:"Available"})]})}),Object(w.jsx)(h.a,{md:3,style:{textAlign:"center"},children:Object(w.jsxs)(i.b,{align:"center",children:[Object(w.jsx)("div",{className:"seat__model seat__model--selected"}),Object(w.jsx)("span",{children:"Selected"})]})})]})]})}),Object(w.jsxs)(h.a,{lg:4,md:6,children:[Object(w.jsxs)("div",{className:"payment",children:[Object(w.jsx)("h1",{className:"payment__title",children:"BOOKING SUMMARY"}),Object(w.jsxs)("div",{className:"payment__info",children:[Object(w.jsx)("h1",{children:null===(n=y.movie)||void 0===n?void 0:n.title}),Object(w.jsxs)("p",{children:[null===(c=y.cinema)||void 0===c?void 0:c.cinema_name," "]}),Object(w.jsx)("p",{children:null===(b=y.cinema)||void 0===b?void 0:b.address}),Object(w.jsxs)("p",{className:"payment__info--datetime",children:[Z()(y.time).format("DD-MM-YYYY")," -"," ",Z()(y.time).format("hh:MM A")," "]})]}),Object(w.jsx)(A.a,{}),Object(w.jsx)("div",{className:"payment__item payment__item--userinfo",children:Object(w.jsxs)("span",{children:[Object(w.jsx)("p",{children:"Email"}),Object(w.jsx)("p",{className:"payment__text payment__text--email",children:null===k||void 0===k?void 0:k.email})]})}),Object(w.jsx)(A.a,{}),Object(w.jsxs)("div",{className:"payment__item payment__item--seats",children:[Object(w.jsxs)(i.b,{children:[Object(w.jsx)("span",{style:{width:50},children:"Seats"}),S.map((function(e){return Object(w.jsx)("span",{children:e.seat_number})}))]}),Object(w.jsx)("span",{className:"payment__item__price",children:P.toLocaleString()})]}),Object(w.jsx)(A.a,{}),Object(w.jsxs)("div",{className:"payment__item payment__item--subtotal",children:[Object(w.jsx)("span",{children:"Subtotal"}),Object(w.jsx)("span",{className:"payment__item__price",children:P.toLocaleString()})]}),Object(w.jsx)("span",{className:"circle-left"}),Object(w.jsx)("span",{className:"circle-right"})]}),Object(w.jsxs)(a.a,{className:"checkout__btn",onClick:function(){0!==S.length?Y.a.fire({title:"Booking now?",text:"The tickets cannot refund!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonText:"Cancel",cancelButtonColor:"#d33",confirmButtonText:"OK!"}).then((function(e){e.isConfirmed&&(!function(){var e={showtimeId:z,arrayTickets:S};m(Object(x.a)(e))}(),q.current=!1)})):l.b.warning("Please pick your seat before payment!")},children:[Object(w.jsxs)("div",{children:["Total: ",Object(w.jsx)("span",{children:P.toLocaleString()})]}),Object(w.jsx)("div",{children:Object(w.jsx)("span",{children:"Process"})})]})]})]})})]})}}}]);
//# sourceMappingURL=22.c62df489.chunk.js.map