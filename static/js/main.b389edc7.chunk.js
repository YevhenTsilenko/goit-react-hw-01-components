(this.webpackJsonpwebpack=this.webpackJsonpwebpack||[]).push([[0],[,function(a,e,t){a.exports={profile:"profile_profile__3mfXe",description:"profile_description__1qhgt",avatar:"profile_avatar__1YVjt",name:"profile_name__1APTD",tag:"profile_tag__3R3Un",location:"profile_location__3ZnvS",stats:"profile_stats__3SaVN",stats_item:"profile_stats_item__3lJ1R",label:"profile_label__t3_l3",quantity:"profile_quantity__1U_E8"}},function(a,e,t){a.exports={friend_list:"friends_friend_list__eXGz5",item:"friends_item__3NNV6",online:"friends_online__236i-",offline:"friends_offline__22HgZ",avatar:"friends_avatar__1T-U1",name:"friends_name__2JReG"}},function(a,e,t){a.exports={statistics:"statistics_statistics__mtkd4",title:"statistics_title__3OtBC",stat_list:"statistics_stat_list__2bS0K",item:"statistics_item__3II8S"}},function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,function(a){a.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(a){a.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},,,,,function(a,e,t){},function(a,e,t){},,function(a,e,t){"use strict";t.r(e);var s=t(5),i=t.n(s),c=t(9),n=t.n(c),r=(t(15),t(16),t(10)),l=t(2),d=t.n(l),o=t(0);var b=function(a){var e=a.avatar,t=a.name,s=a.isOnline,i=a.id;return Object(o.jsxs)("li",{className:d.a.item,children:[s?Object(o.jsx)("span",{className:d.a.online}):Object(o.jsx)("span",{className:d.a.offline}),Object(o.jsx)("img",{className:d.a.avatar,src:e,alt:t,width:"48"}),Object(o.jsx)("p",{className:d.a.name,children:t})]},i)};var m=function(a){var e=a.friends;return Object(o.jsx)("ul",{className:d.a.friend_list,children:e.map((function(a){return Object(o.jsx)(b,{avatar:a.avatar,name:a.name,isOnline:a.isOnline},a.id)}))})},f=t(4),p=t(1),u=t.n(p);var j=function(a){var e=a.name,t=a.tag,s=a.location,i=a.avatar,c=a.stats;return Object(o.jsxs)("div",{className:u.a.profile,children:[Object(o.jsxs)("div",{className:u.a.description,children:[Object(o.jsx)("img",{src:i,alt:e,className:u.a.avatar}),Object(o.jsx)("p",{className:u.a.name,children:e}),Object(o.jsx)("p",{className:u.a.tag,children:t}),Object(o.jsx)("p",{className:u.a.location,children:s})]}),Object(o.jsxs)("ul",{className:u.a.stats,children:[Object(o.jsxs)("li",{className:u.a.stats_item,children:[Object(o.jsx)("span",{className:u.a.label,children:"Followers"}),Object(o.jsx)("span",{className:u.a.quantity,children:c.followers})]}),Object(o.jsxs)("li",{className:u.a.stats_item,children:[Object(o.jsx)("span",{className:u.a.label,children:"Views"}),Object(o.jsx)("span",{className:u.a.quantity,children:c.views})]}),Object(o.jsxs)("li",{className:u.a.stats_item,children:[Object(o.jsx)("span",{className:u.a.label,children:"Likes"}),Object(o.jsx)("span",{className:u.a.quantity,children:c.likes})]})]})]})},_=t(8),v=t(3),O=t.n(v);var h=function(a){var e=a.title,t=a.stats;return Object(o.jsxs)("section",{className:O.a.statistics,children:[e&&Object(o.jsx)("h2",{className:O.a.title,children:e}),Object(o.jsx)("ul",{className:O.a.stat_list,children:t.map((function(a){return Object(o.jsxs)("li",{className:O.a.item,children:[Object(o.jsx)("span",{className:O.a.label,children:a.label}),Object(o.jsx)("span",{className:O.a.percentage,children:a.percentage})]},a.id)}))})]})},y=t(6);var x=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h2",{className:"title",children:"-------Prifile-------"}),Object(o.jsx)(j,{name:f.name,tag:f.tag,location:f.location,avatar:f.avatar,stats:f.stats}),Object(o.jsx)("h2",{className:"title",children:"-------Statistics-------"}),Object(o.jsx)(h,{title:"Upload stats",stats:_}),";",Object(o.jsx)(h,{stats:_}),";",Object(o.jsx)("h2",{className:"title",children:"-------Friends list-------"}),Object(o.jsx)(m,{friends:r}),Object(o.jsx)(y,{items:y}),";"]})},g=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(e){var t=e.getCLS,s=e.getFID,i=e.getFCP,c=e.getLCP,n=e.getTTFB;t(a),s(a),i(a),c(a),n(a)}))};n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.b389edc7.chunk.js.map