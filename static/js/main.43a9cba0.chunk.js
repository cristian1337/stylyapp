(this["webpackJsonpstyly-app"]=this["webpackJsonpstyly-app"]||[]).push([[0],{16:function(e,t,c){},28:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),a=c(18),n=c.n(a),r=c(7),o=c(2),j={cart:[],products:[{id:"1",image:"https://arepa.s3.amazonaws.com/camiseta.png",title:"Camiseta",price:25,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"3",image:"https://arepa.s3.amazonaws.com/mug.png",title:"Mug",price:10,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"4",image:"https://arepa.s3.amazonaws.com/pin.png",title:"Pin",price:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"5",image:"https://arepa.s3.amazonaws.com/stickers1.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"6",image:"https://arepa.s3.amazonaws.com/stickers2.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"7",image:"https://arepa.s3.amazonaws.com/hoodie.png",title:"Hoodie",price:35,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]},d=c.p+"static/media/background.7d1a374e.png",l=(c(16),c(0)),p=function(e){var t=e.product,c=e.handleAddToCart;return Object(l.jsxs)("div",{className:"container-product",style:{backgroundImage:"url(".concat(d,")"),backgroundRepeat:"no-repeat",backgroundPositionX:"110px",backgroundSize:"contain"},children:[Object(l.jsx)("div",{className:"product-image",children:Object(l.jsx)("img",{width:"100",src:t.image,alt:t.title})}),Object(l.jsxs)("div",{className:"info-product",children:[Object(l.jsxs)("div",{className:"title-price",children:[Object(l.jsx)("h3",{children:t.title}),Object(l.jsx)("span",{children:Object(l.jsxs)("strong",{children:["$",t.price]})})]}),Object(l.jsx)("div",{className:"description",children:Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur hic, libero facilis."})}),Object(l.jsxs)("div",{className:"time",onClick:c(t),children:[Object(l.jsx)("i",{class:"fas fa-cart-plus"}),Object(l.jsx)("p",{children:"Solicitar"})]})]})]})},m=i.a.createContext({}),b=function(){var e=Object(s.useContext)(m),t=e.state,c=e.addToCart,i=t.products,a=function(e){return function(){c(e)}};return Object(l.jsx)("div",{className:"container-products",children:i.map((function(e){return Object(l.jsx)(p,{product:e,handleAddToCart:a},e.id)}))})},u=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(b,{products:j.products})})},h=(c(28),function(){var e=Object(o.f)(),t=Object(s.useContext)(m).state.cart;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"back",onClick:e.goBack,children:[Object(l.jsx)("i",{class:"fas fa-arrow-left"}),Object(l.jsx)("p",{children:"Regresar"})]}),Object(l.jsx)("div",{className:"container-products-cart",children:t.map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"product-cart",children:[Object(l.jsx)("img",{width:"100",src:e.image,alt:"imagen producto"}),Object(l.jsxs)("div",{className:"description-cart",children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsxs)("p",{children:["$",e.price]})]}),Object(l.jsxs)("div",{className:"remove",children:[Object(l.jsx)("i",{class:"fas fa-trash-alt"}),Object(l.jsx)("p",{children:"Eliminar"})]})]})]})}))})]})}),x=function(){return Object(l.jsxs)("div",{className:"Information",children:[Object(l.jsxs)("div",{className:"Information-content",children:[Object(l.jsx)("div",{className:"Information-head",children:Object(l.jsx)("h2",{children:"Informaci\xf3n de contacto:"})}),Object(l.jsx)("div",{className:"Information-form",children:Object(l.jsxs)("form",{action:"",children:[Object(l.jsx)("input",{type:"text",placeholder:"Nombre completo",name:"name"}),Object(l.jsx)("input",{type:"text",placeholder:"Correo Electronico",name:"email"}),Object(l.jsx)("input",{type:"text",placeholder:"Direccion",name:"addres"}),Object(l.jsx)("input",{type:"text",placeholder:"apto",name:"apto"}),Object(l.jsx)("input",{type:"text",placeholder:"Ciudad",name:"city"}),Object(l.jsx)("input",{type:"text",placeholder:"Pais",name:"country"}),Object(l.jsx)("input",{type:"text",placeholder:"Estado",name:"state"}),Object(l.jsx)("input",{type:"text",placeholder:"Codigo postal",name:"cp"}),Object(l.jsx)("input",{type:"text",placeholder:"Telefono",name:"phone"})]})}),Object(l.jsxs)("div",{className:"Information-buttons",children:[Object(l.jsx)("div",{className:"Information-back",children:"Regresar"}),Object(l.jsx)("div",{className:"Information-next",children:"pagar"})]})]}),Object(l.jsxs)("div",{className:"Information-sidebar",children:[Object(l.jsx)("h3",{children:"Pedido:"}),Object(l.jsx)("div",{className:"Information-item",children:Object(l.jsxs)("div",{className:"Information-element",children:[Object(l.jsx)("h4",{children:"ITEM Name"}),Object(l.jsx)("span",{children:"$10"})]})})]})]})},O=function(){return Object(l.jsxs)("div",{className:"Payment",children:[Object(l.jsxs)("div",{className:"Payment-content",children:[Object(l.jsx)("h3",{children:"Resumen del pedido:"}),Object(l.jsx)("div",{className:"Payment-button",children:"Boton de pago con Paypal"})]}),Object(l.jsx)("div",{})]})},f=function(){return Object(l.jsx)("div",{className:"Succes",children:Object(l.jsxs)("div",{className:"Success-content",children:[Object(l.jsx)("h2",{children:"Nombre, Gracias por tu compra"}),Object(l.jsx)("span",{children:"Tu pedido llegara en 3 dias a tu direcci\xf3n:"}),Object(l.jsx)("div",{className:"Success-map",children:"Google Maps"})]})})},g=function(){return Object(l.jsx)("h1",{children:"404"})},v=(c(34),c.p+"static/media/logo.938e7687.svg"),N=function(){var e;return e=Object(s.useContext)(m).state.cart.length,Object(l.jsxs)("div",{className:"top-menu",children:[Object(l.jsx)("div",{className:"menu-burger",children:Object(l.jsx)("i",{class:"fas fa-bars"})}),Object(l.jsx)("img",{className:"logo",src:v,alt:"logo"}),Object(l.jsx)(r.b,{to:"/checkout",children:Object(l.jsxs)("div",{className:"cart",children:[Object(l.jsx)("i",{class:"fas fa-shopping-cart"}),Object(l.jsx)("span",{className:"count-product",children:e})]})})]})},y=(c(35),function(){return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"/",children:[Object(l.jsx)("i",{class:"fas fa-home"}),Object(l.jsx)("p",{children:"Inicio"})]})}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{class:"fas fa-shopping-bag"}),Object(l.jsx)("p",{children:"Servicios"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{class:"fas fa-user"}),Object(l.jsx)("p",{children:"Perfil"})]})]})})}),k=function(e){var t=e.children;return Object(l.jsxs)("div",{className:"Main",children:[Object(l.jsx)(N,{}),t,Object(l.jsx)(y,{})]})},C=c(21),I=c(11),P=c(22),w=function(){var e=Object(s.useState)(j),t=Object(P.a)(e,2),c=t[0],i=t[1];return{addToCart:function(e){i(Object(I.a)(Object(I.a)({},c),{},{cart:[].concat(Object(C.a)(c.cart),[e])}))},removeFromCart:function(e){i(Object(I.a)(Object(I.a)({},c),{},{cart:c.cart.filter((function(t){return t.id!==e.id}))}))},state:c}},S=function(){var e=w();return Object(l.jsx)(m.Provider,{value:e,children:Object(l.jsx)(r.a,{basename:"/stylyapp",children:Object(l.jsx)(k,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(o.a,{exact:!0,path:"/checkout",component:h}),Object(l.jsx)(o.a,{exact:!0,path:"/chekout/information",component:x}),Object(l.jsx)(o.a,{exact:!0,path:"/checkout/payment",component:O}),Object(l.jsx)(o.a,{exact:!0,path:"/checkout/success",component:f}),Object(l.jsx)(o.a,{component:g})]})})})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),a(e),n(e)}))};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),L()}},[[36,1,2]]]);
//# sourceMappingURL=main.43a9cba0.chunk.js.map