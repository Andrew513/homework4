(this.webpackJsonphomework5=this.webpackJsonphomework5||[]).push([[0],{18:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var s=n(0),r=n.n(s),i=n(4),o=n.n(i),c=(n(18),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),s(t),r(t),i(t),o(t)}))}),a=n(6),h=n(7),u=n(12),l=n(11),b=n(8),j=n.n(b),d=n(9),p=n.n(d),m=n(1),O=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(a.a)(this,n),(s=e.call(this,t)).state={username:"",githubtUrl:"",avatarUrl:"",subscriptions_url:"",location:"",bio:""},s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;j.a.get(this.props.source,(function(e){console.log(e);var n=e;n&&t.setState({username:n.name,githubUrl:n.html_url,avatarUrl:n.avatar_url,bio:n.bio,location:n.location,repos:n.public_repos})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:this.state.avatarUrl}),Object(m.jsx)("br",{}),Object(m.jsxs)("h3",{children:["Name:",this.state.username]}),Object(m.jsxs)("h3",{children:["Location:",this.state.location]}),Object(m.jsxs)("h3",{children:["Bio:",this.state.bio]}),Object(m.jsx)(p.a,{}),Object(m.jsx)("a",{href:this.state.githubtUrl,children:"https://github.com/Andrew513"}),Object(m.jsxs)("h3",{children:["Amount of repositories:",this.state.repos]})]})}}]),n}(r.a.Component);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)("center",{children:Object(m.jsx)(O,{source:"https://api.github.com/users/Andrew513"})})}),document.getElementById("root")),c()}},[[29,1,2]]]);
//# sourceMappingURL=main.5f426d27.chunk.js.map