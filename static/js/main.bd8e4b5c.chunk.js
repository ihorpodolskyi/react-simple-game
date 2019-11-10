(this["webpackJsonpgame-react-redux"]=this["webpackJsonpgame-react-redux"]||[]).push([[0],{12:function(e,a,t){},20:function(e,a,t){e.exports=t(30)},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),l=t.n(o),c=t(10),s=t(3),d=t(2),i="TO_DAMAGE",p="TO_ADD_HEALTH",y="TO_GAME_OVER",m={players:[{playerFirstHealth:100,playerFirstAction:[],id:1},{playerSecondHealth:100,playerSecondAction:[],id:2}]};var u=t(19),h=t.n(u),f=(t(29),t(5)),b=t(6),g=t(8),O=t(7),v=t(9),H=(t(12),function(e){function a(){return Object(f.a)(this,a),Object(g.a)(this,Object(O.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props.playersStore.players;return r.a.createElement("ul",{className:"container-ul-score"},e.map((function(e,a){return r.a.createElement("li",{className:"players-score",key:a},e.playerFirstHealth,e.playerSecondHealth)})))}}]),a}(r.a.Component)),j=Object(s.b)((function(e){return{playersStore:e}}),(function(e){return{}}))(H),w=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(O.a)(a)).call.apply(e,[this].concat(o)))).modalWindow=function(e){return r.a.createElement("div",{id:"1",className:"container-modal-window"},r.a.createElement("h2",{className:"modal-window-text"},e),r.a.createElement("button",{className:"modal-window-button",onClick:function(){return t.closeModalWindow()}},"Close"))},t.closeModalWindow=function(){document.querySelectorAll(".container-modal-window")[0].style.display="none",t.props.onGameOver()},t}return Object(v.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props.players,a=!1,t="",n=[];return n=n.concat(e[0].playerFirstAction,e[1].playerSecondAction),e[0].playerFirstHealth<=0?(t="Game over. The second player won!",a=!0):e[1].playerSecondHealth<=0&&(t="Game over. The first player won!",a=!0),r.a.createElement("div",null,a&&this.modalWindow(t),r.a.createElement("ul",{className:"container-ul-actions"},n.map((function(e,a){return r.a.createElement("li",{className:"players-actions",key:a},e)}))))}}]),a}(r.a.Component),A=Object(s.b)((function(e){return{players:e.players}}),(function(e){return{onGameOver:function(){return e({type:y})}}}))(w),E=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(g.a)(this,Object(O.a)(a).call(this,e))).firtBtn=function(){t.onMovePlayer(1)},t.secondBtn=function(){t.onMovePlayer(2)},t.onMovePlayer=function(e){switch(Math.floor(Math.random()*(t.state.randomRange[1]-t.state.randomRange[0]+1)+t.state.randomRange[0])){case 1:var a=Math.floor(Math.random()*(t.state.randomRange[3]-t.state.randomRange[2]+1)+t.state.randomRange[2]);1===e?t.props.onChangeHealth({damage:a,player:e,comment:"Player first damage: ".concat(a)}):2===e&&t.props.onChangeHealth({damage:a,player:e,comment:"Player second damage: ".concat(a)});break;case 2:var n=Math.floor(Math.random()*(t.state.randomRange[5]-t.state.randomRange[4]+1)+t.state.randomRange[4]);1===e?t.props.onChangeHealth({damage:n,player:e,comment:"Player first damage: ".concat(n)}):2===e&&t.props.onChangeHealth({damage:n,player:e,comment:"Player second damage: ".concat(n)});break;case 3:var r=Math.floor(Math.random()*(t.state.randomRange[3]-t.state.randomRange[2]+1)+t.state.randomRange[2]);1===e?t.props.onChangeAddHealth({addHealth:r,player:e,comment:"Player first add health: ".concat(r)}):2===e&&t.props.onChangeAddHealth({addHealth:r,player:e,comment:"Player second add health: ".concat(r)});break;default:alert("Houston we have a problem :)")}},t.state={randomRange:[1,3,18,25,10,35]},t}return Object(v.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-btn"},r.a.createElement("button",{className:"btn",onClick:function(){return e.firtBtn()}},"Player1"),r.a.createElement("button",{className:"btn",onClick:function(){return e.secondBtn()}},"Player2")),r.a.createElement(j,null),r.a.createElement(A,null))}}]),a}(r.a.Component),S=Object(s.b)(null,(function(e){return{onChangeHealth:function(a){return e(function(e){var a=e.damage,t=e.player,n=e.comment;return{type:i,payload:{damage:a,player:t,comment:n,id:Date.now().toString()}}}(a))},onChangeAddHealth:function(a){return e(function(e){var a=e.addHealth,t=e.player,n=e.comment;return{type:p,payload:{addHealth:a,player:t,comment:n,id:Date.now().toString()}}}(a))}}}))(E),k=Object(c.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case i:if(1===a.payload.player)return{players:[{playerFirstHealth:e.players[0].playerFirstHealth-a.payload.damage,playerFirstAction:[].concat(Object(d.a)(e.players[0].playerFirstAction),[a.payload.comment]),id:a.payload.id}].concat(Object(d.a)(e.players.slice(1)))};if(2===a.payload.player)return{players:[].concat(Object(d.a)(e.players.slice(0,1)),[{playerSecondHealth:e.players[1].playerSecondHealth-a.payload.damage,playerSecondAction:[].concat(Object(d.a)(e.players[1].playerSecondAction),[a.payload.comment]),id:a.payload.id}])};break;case p:if(1===a.payload.player)return{players:[{playerFirstHealth:e.players[0].playerFirstHealth+a.payload.addHealth,playerFirstAction:[].concat(Object(d.a)(e.players[0].playerFirstAction),[a.payload.comment]),id:a.payload.id}].concat(Object(d.a)(e.players.slice(1)))};if(2===a.payload.player)return{players:[].concat(Object(d.a)(e.players.slice(0,1)),[{playerSecondHealth:e.players[1].playerSecondHealth+a.payload.addHealth,playerSecondAction:[].concat(Object(d.a)(e.players[1].playerSecondAction),[a.payload.comment]),id:a.payload.id}])};break;case y:return m;default:return e}}),Object(c.a)(h.a));l.a.render(r.a.createElement(s.a,{store:k},r.a.createElement(S,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.bd8e4b5c.chunk.js.map