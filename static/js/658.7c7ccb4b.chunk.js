"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[658],{658:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(689),o=r(714),f="CastList_castList__YQOUt",p="CastListItem_castListItem__XFFb8",l=r(184),h=function(t){var e=t.profilePath,r=t.originalName,n=t.name;return(0,l.jsxs)("li",{className:p,children:[(0,l.jsx)("img",{width:"200px",height:"300px",src:e?"https://image.tmdb.org/t/p/w300".concat(e):"https://fakeimg.pl/600x400?text=No+Image+Available",alt:r}),(0,l.jsx)("p",{children:n})]})},v=function(){var t=(0,i.UO)().movieId,e=(0,s.useState)([]),r=(0,a.Z)(e,2),c=r[0],p=r[1];return(0,s.useEffect)((function(){(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.uV)(t);case 3:r=e.sent,p(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[t]),(0,l.jsxs)(l.Fragment,{children:[0!==c.length&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Movie Cast"}),(0,l.jsx)("ul",{className:f,children:c.map((function(t){var e=t.id,r=t.profile_path,n=t.original_name,a=t.name;return(0,l.jsx)(h,{id:e,profilePath:r,originalName:n,name:a},e)}))})]}),0===c.length&&(0,l.jsx)("div",{children:"We don't have any cast for this movie."})]})}},714:function(t,e,r){r.d(e,{Hx:function(){return p},Y5:function(){return o},mv:function(){return i},uV:function(){return f},wr:function(){return s}});var n=r(861),a=r(757),c=r.n(a),u=r(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"aa5fbe63df27cb35c499720d745cf2f6"};var s=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=658.7c7ccb4b.chunk.js.map