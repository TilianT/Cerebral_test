(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(n,e,t){},47:function(n,e,t){n.exports=t(77)},52:function(n,e,t){},77:function(n,e,t){"use strict";t.r(e);var a=t(1),i=t.n(a),r=t(27),o=t.n(r),u=(t(52),t(14)),s=t(15),c=t(18),l=t(16),m=t(19),d=t(4),p=t(6),f=t(17),b=t(5);function v(){var n=Object(d.a)(["\n  padding: 15px 35px;\n  \n  outline: none;\n  cursor: pointer;\n  \n  transition: all 0.2s ease;\n  \n  border-radius: 5px;\n  background: none;\n  border: 1px solid #f3f3f3;\n  \n  :hover {\n    transform: scale(1.02);\n    border-color: aqua;\n  }\n  :active {\n    transform: scale(0.98);\n  }\n  \n"]);return v=function(){return n},n}function h(){var n=Object(d.a)(["openModal"]);return h=function(){return n},n}var x=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(c.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(i)))).clickHandler=function(){t.props.openModal({id:t.props.id})},t}return Object(m.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return i.a.createElement(O,{onClick:this.clickHandler},"More")}}]),e}(a.Component),j=Object(f.connect)({openModal:Object(p.sequences)(h())},x),O=b.a.button(v());function q(){var n=Object(d.a)(["\n    text-align: left;\n  "]);return q=function(){return n},n}var g=function(n){var e=n.title,t=n.id;return i.a.createElement(w,null,i.a.createElement("h2",null,e),i.a.createElement(j,{id:t},"More"))},w=b.a.div(q());function E(){var n=Object(d.a)(["\n  width: 100px;\n  height: 100px;\n  position: fixed;\n  top: calc((100% - 100px)/2);\n  left: calc((100% - 100px)/2);\n  \n  border-radius: 50%;\n  border: 3px solid deepskyblue;\n  "]);return E=function(){return n},n}var y=function(){return i.a.createElement(A,null)},A=b.a.div(E());function k(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 768px;\n  margin: 0 auto;\n"]);return k=function(){return n},n}function M(){var n=Object(d.a)(["openPostsPage"]);return M=function(){return n},n}function P(){var n=Object(d.a)(["posts"]);return P=function(){return n},n}var C=Object(f.connect)({posts:Object(p.state)(P()),loadPosts:Object(p.sequences)(M())},function(n){function e(){return Object(u.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){var n=this.props,e=n.loadPosts;0===n.posts.length&&e()}},{key:"render",value:function(){var n=this.props.posts;return i.a.createElement(Y,null,0===n.length?i.a.createElement(y,null):n.map(function(n){return i.a.createElement(g,{title:n.title,id:n.id,key:n.id})}))}}]),e}(a.Component)),Y=b.a.div(k());function L(){var n=Object(d.a)(["\n  width: 100%;\n  margin: 0 auto;\n  max-width: 768px;\n  display: flex;\n  \n  text-align: left;\n  \n  color: #333;\n  "]);return L=function(){return n},n}var N=function(){return window.scrollTo(0,0),i.a.createElement(z,null,i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci enim eos est eum, eveniet explicabo illo ipsa iste laborum libero nemo odit ratione sint temporibus, ullam vitae voluptate. A, accusantium amet aut corporis est facilis harum laborum maiores nesciunt quas quibusdam quisquam, quos suscipit voluptates voluptatum? Aliquam distinctio et nihil repudiandae vel. Asperiores, autem hic laudantium minima, molestiae perspiciatis, quaerat quas quos recusandae rem reprehenderit sit? Ab beatae blanditiis dolor harum pariatur qui vitae, voluptas? Alias aliquam aliquid animi aperiam asperiores aspernatur dignissimos dolorem, ducimus eos error esse facere fugiat illum ipsam iusto laborum magni minus modi nam odio officiis omnis possimus quibusdam repellendus rerum tempore ut vitae, voluptas voluptates voluptatum! Animi aut dicta error, excepturi fuga illum numquam vitae voluptatum. Consequuntur deserunt dignissimos distinctio impedit ipsum laborum minus natus nihil nisi, porro sed sint ullam unde. Accusantium ad aliquid assumenda cum deleniti doloremque eligendi esse id in ipsa iure nesciunt pariatur perferendis, perspiciatis quaerat quam sed sequi sunt voluptatibus voluptatum? Eum inventore modi nemo nesciunt, perspiciatis sed ut. Accusantium ad amet autem dicta dolor eius, ex, hic id labore placeat quo sint. Ab ad blanditiis commodi consequatur dignissimos distinctio doloribus fugit incidunt maiores maxime neque numquam officia perferendis qui quis tenetur ut, veritatis voluptatem? Aspernatur blanditiis dignissimos dolore, est harum ipsam molestias nobis nulla numquam perferendis quam qui, quis quisquam quo quod sit sunt! Accusamus aliquid amet atque commodi culpa delectus, deleniti dolore ducimus est eum facere fuga hic ipsum iste laboriosam modi molestiae mollitia natus neque nobis omnis pariatur provident quidem sit temporibus voluptatibus voluptatum. Accusamus assumenda, deserunt dicta enim explicabo illo itaque magnam minima nisi porro praesentium, recusandae reiciendis repellat soluta unde? Blanditiis distinctio ducimus nam sequi voluptatum. Ab accusamus, aut, ea earum eligendi error et excepturi expedita fuga laudantium magni modi mollitia nostrum numquam odio omnis, provident quia quo ullam velit! Alias culpa eius hic magnam nisi numquam praesentium qui repudiandae! Asperiores beatae consequatur cupiditate, dolore ducimus illo iste laborum magni minima, molestiae non nulla perspiciatis quisquam recusandae, rerum sapiente sequi ullam ut veritatis voluptas. Autem beatae debitis deserunt doloremque et expedita inventore ipsa, labore modi nulla quam quibusdam suscipit, voluptate! Accusantium at atque consequatur culpa cumque deleniti dicta facere facilis fuga fugiat in inventore minus nisi nobis non odio perferendis porro quasi, repudiandae sapiente similique sit ut veniam vero voluptatibus. Amet blanditiis debitis dolores earum et eum eveniet incidunt laboriosam minus necessitatibus obcaecati, pariatur possimus praesentium quaerat quod ratione reiciendis sed sequi suscipit totam ullam, unde voluptatibus. Ab autem consectetur culpa, doloribus explicabo illo iure neque, nihil obcaecati praesentium quasi quis vel. Ab aliquam aliquid animi asperiores aut consectetur consequatur culpa doloribus eius enim eos et ex, exercitationem fugiat incidunt iure, maiores numquam obcaecati perspiciatis praesentium ratione repellat repudiandae temporibus ullam vitae! A adipisci amet animi architecto consectetur delectus dicta dignissimos doloribus dolorum eligendi eos ex expedita facilis fugiat illo impedit iste itaque iure laudantium magni molestias natus officia omnis perferendis placeat quae, recusandae soluta, totam voluptas voluptate! Accusantium consequuntur doloremque ipsam maxime sed."))},z=b.a.div(L());function X(){var n=Object(d.a)(["\n  width: 350px;\n  font-size: 42px;\n  animation: "," 8s ease infinite;\n"]);return X=function(){return n},n}function I(){var n=Object(d.a)(["\n  width: 50px;\n  font-size: 50px;\n  animation: "," 5s ease infinite;\n"]);return I=function(){return n},n}function H(){var n=Object(d.a)(["\n  width: 50px;\n  font-size: 30px;\n  animation: "," 7s ease infinite;\n"]);return H=function(){return n},n}function T(){var n=Object(d.a)(["\n  width: 200px;\n  font-size: 70px;\n  animation: "," 2s ease infinite;\n"]);return T=function(){return n},n}function D(){var n=Object(d.a)(["\n  width: 500px;\n  font-size: 30px;\n  animation: "," 10s ease infinite;\n"]);return D=function(){return n},n}function S(){var n=Object(d.a)(["\n  width: 10px;\n  animation: "," 3s ease-in-out infinite;\n"]);return S=function(){return n},n}function B(){var n=Object(d.a)(["\n  width: 400px;\n  animation: "," 4s ease infinite;\n"]);return B=function(){return n},n}function J(){var n=Object(d.a)(["\n  from {\n    color: rosybrown;\n    transform: rotate(-100deg);\n  }\n\n  to {\n    color: teal;\n    transform: rotate(2760deg);\n  }\n"]);return J=function(){return n},n}function R(){var n=Object(d.a)(["\n  0% {\n    color: rosybrown;\n    transform: translateY(150px);\n    transform: translateX(-150px);\n  }\n  25% {\n    transform: translateY(250px);\n    transform: translateX(150px);\n  }\n  50% {\n    transform: translateY(650px);\n  }\n  100% {\n    color: teal;\n    transform: translateY(10px);\n    transform: translateX(-50px);\n  }\n"]);return R=function(){return n},n}function U(){var n=Object(d.a)(["\n  0% {\n    color: rosybrown;\n    transform: translateY(-150px);\n    transform: translateX(-150px);\n  }\n  25% {\n    transform: translate(450px);\n  }\n  50% {\n    transform: translateY(350px);\n  }\n  100% {\n    color: teal;\n    transform: translateY(0%);\n    transform: translateX(50%);\n  }\n"]);return U=function(){return n},n}function W(){var n=Object(d.a)(["\n  0% {\n    color: rosybrown;\n    transform: translateY(-50%);\n    transform: translate(-50%);\n  }\n  25% {\n    transform: translate(150%);\n  }\n  50% {\n    transform: translateY(350px);\n  }\n  100% {\n    color: teal;\n    transform: translateY(0%);\n    transform: translateX(-50%);\n  }\n"]);return W=function(){return n},n}function F(){var n=Object(d.a)(["\n  from {\n    color: chartreuse;\n    transform: rotate(0deg);\n  }\n\n  to {\n    color: fuchsia;\n    transform: rotate(-370deg);\n  }\n"]);return F=function(){return n},n}function G(){var n=Object(d.a)(["\n  from {\n    color: violet;\n    transform: rotate(0deg);\n  }\n\n  to {\n    color: cyan;\n    transform: rotate(360deg);\n  }\n"]);return G=function(){return n},n}function K(){var n=Object(d.a)(["\n  width: 100%;\n  margin: 0 auto;\n  max-width: 768px;\n  display: flex;\n  flex-direction: column;\n  \n  text-align: left;\n  \n  color: #333;\n"]);return K=function(){return n},n}function Q(){var n=Object(d.a)(["\n  display: block;\n"]);return Q=function(){return n},n}var V=function(){return window.scrollTo(0,0),i.a.createElement($,null,i.a.createElement("h1",null,i.a.createElement(on,null,i.a.createElement(mn,null,"Privacy"))," ",i.a.createElement(un,null,i.a.createElement(dn,null,"Policy"))),i.a.createElement(Z,null,i.a.createElement(sn,null,i.a.createElement(ln,null,"Lorem")),i.a.createElement(cn,null,"Lorem")))},Z=b.a.div(Q()),$=b.a.div(K()),_=Object(b.b)(G()),nn=Object(b.b)(F()),en=Object(b.b)(W()),tn=Object(b.b)(U()),an=Object(b.b)(R()),rn=Object(b.b)(J()),on=b.a.div(B(),_),un=b.a.div(S(),nn),sn=b.a.div(D(),en),cn=b.a.div(T(),rn),ln=b.a.div(H(),rn),mn=b.a.div(I(),tn),dn=b.a.div(X(),an),pn=t(32),fn=t.n(pn);function bn(){var n=Object(d.a)(["closeModal"]);return bn=function(){return n},n}function vn(){var n=Object(d.a)(["posts"]);return vn=function(){return n},n}function hn(){var n=Object(d.a)(["postModal"]);return hn=function(){return n},n}function xn(){var n=Object(d.a)(['\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 40px;\n  top: 0px;\n  right: 0;\n  \n  cursor: pointer;\n  \n  :hover {\n    transform: scale(1.05);\n  }\n  :active {\n    transform: scale(0.95);\n  }\n  \n  ::after,\n  ::before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 50%;\n    width: 40px;\n    height: 4px;\n   \n    background: #c5c5c5;\n    border-radius: 2px;\n  }\n  ::after {\n    transform: rotate(-45deg);\n  }\n  ::before {\n    transform: rotate(45deg);\n  }\n']);return xn=function(){return n},n}fn.a.setAppElement("#root");var jn={overlay:{zIndex:100},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)"}},On=b.a.div(xn()),qn=Object(f.connect)({modalInfo:Object(p.state)(hn()),posts:Object(p.state)(vn()),closeModal:Object(p.sequences)(bn())},function(n){var e=n.modalInfo,t=n.closeModal,a=n.posts[e.id-1],r=void 0===a?"nope":a.title,o=void 0===a?"nope":a.body;return i.a.createElement(fn.a,{isOpen:e.show,onRequestClose:function(){return t()},contentLabel:"Example Modal",style:jn},i.a.createElement("h3",null,r),i.a.createElement("p",null,o),i.a.createElement(On,{onClick:function(){return t()}}))}),gn=t(79);t(37);function wn(){var n=Object(d.a)(["\n  width: 100%;\n  max-width: 768px;\n  display: flex;\n  "]);return wn=function(){return n},n}function En(){var n=Object(d.a)(["\n  width: 100%;\n  padding: 10px 0;\n  display: flex;\n  justify-content: center;\n  \n  background: rgba(50,50,50,0.8);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: 1px 0 5px 2px #ccc;\n  "]);return En=function(){return n},n}var yn=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(c.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(i)))).handleScroll=function(){console.log("window Y: ",window.pageYOffset)},t}return Object(m.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),console.log("header Height",this.headerNode.offsetHeight)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var n=this;return window.scrollTo(0,0),i.a.createElement("div",{ref:function(e){return n.headerNode=e},className:"header"},i.a.createElement(kn,null,i.a.createElement(Mn,null,i.a.createElement(gn.a,{style:An,activeClassName:"link--active",exact:!0,to:"/"},"home"),i.a.createElement(gn.a,{style:An,activeClassName:"link--active",to:"/about"},"about"),i.a.createElement(gn.a,{style:An,activeClassName:"link--active",to:"/policy"},"policy"))))}}]),e}(i.a.Component),An={padding:"5px 10px",cursor:"pointer",transition:"all 0.2s ease",textDecoration:"none",textTransform:"uppercase",color:"rgba(150, 150, 250, 1)"},kn=b.a.header(En()),Mn=b.a.div(wn()),Pn=t(81),Cn=t(78),Yn=function(n){function e(){return Object(u.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(yn,null),i.a.createElement(Pn.a,null,i.a.createElement(Cn.a,{exact:!0,path:"/",component:C}),i.a.createElement(Cn.a,{exact:!0,path:"/about/",component:N}),i.a.createElement(Cn.a,{exact:!0,path:"/policy/",component:V})),i.a.createElement(qn,null))}}]),e}(a.Component),Ln=t(46),Nn={api:{getPosts:function(){return fetch("".concat("https://jsonplaceholder.typicode.com","/posts")).then(function(n){return n.json()})}}};function zn(){var n=Object(d.a)(["postModal"]);return zn=function(){return n},n}function Xn(){var n=Object(d.a)(["postModal"]);return Xn=function(){return n},n}function In(){var n=Object(d.a)(["isLoadingPosts"]);return In=function(){return n},n}function Hn(){var n=Object(d.a)(["posts"]);return Hn=function(){return n},n}function Tn(){var n=Object(d.a)(["posts"]);return Tn=function(){return n},n}function Dn(){var n=Object(d.a)(["isLoadingPosts"]);return Dn=function(){return n},n}var Sn={openPostsPage:[function(n){return n.store.set(Object(p.state)(Dn()),!0)},function(n){return n.api.getPosts().then(function(n){return{posts:n}})},function(n){return n.store.set(Object(p.state)(Tn()),Object(p.props)(Hn()))},function(n){n.store.set(Object(p.state)(In()),!1)}],openModal:[function(n){var e=n.store,t=n.props;e.set(Object(p.state)(Xn()),{show:!0,id:t.id})}],closeModal:[function(n){return n.store.set(Object(p.state)(zn()),{show:!1,id:null})}]},Bn=Object(p.default)({state:{title:"My Project",posts:[],postModal:{show:!1,id:null},isLoadingItems:!1},sequences:Sn,providers:Nn,devtools:Object(Ln.a)({host:"localhost:8585"})}),Jn=t(80),Rn=t(45),Un=t.n(Rn)()();o.a.render(i.a.createElement(Jn.a,{history:Un},i.a.createElement(f.Container,{app:Bn},i.a.createElement(Yn,null))),document.getElementById("root"))}},[[47,2,1]]]);
//# sourceMappingURL=main.dfd2dd2d.chunk.js.map