const _0x47c42e=_0x1ce4;(function(_0x3ccc6f,_0x270e6d){const _0x5966db=_0x1ce4,_0x5514a1=_0x3ccc6f();while(!![]){try{const _0x149d17=-parseInt(_0x5966db(0x1c2))/0x1*(parseInt(_0x5966db(0x1aa))/0x2)+-parseInt(_0x5966db(0x199))/0x3*(-parseInt(_0x5966db(0x1c7))/0x4)+parseInt(_0x5966db(0x1b1))/0x5*(-parseInt(_0x5966db(0x1d5))/0x6)+-parseInt(_0x5966db(0x196))/0x7+parseInt(_0x5966db(0x19f))/0x8*(-parseInt(_0x5966db(0x1bb))/0x9)+parseInt(_0x5966db(0x1a0))/0xa+-parseInt(_0x5966db(0x1ce))/0xb*(-parseInt(_0x5966db(0x1ab))/0xc);if(_0x149d17===_0x270e6d)break;else _0x5514a1['push'](_0x5514a1['shift']());}catch(_0x1d8599){_0x5514a1['push'](_0x5514a1['shift']());}}}(_0x4d4c,0xe80cb));function _0x1ce4(_0x3997ac,_0x595375){const _0x4d4cbd=_0x4d4c();return _0x1ce4=function(_0x1ce4ea,_0x4bcf7a){_0x1ce4ea=_0x1ce4ea-0x196;let _0xdf537b=_0x4d4cbd[_0x1ce4ea];return _0xdf537b;},_0x1ce4(_0x3997ac,_0x595375);}import{db,dbFirestore}from'https://foricon-src.github.io/foricon-firebase/script.js';import{ref,onValue}from'//www.gstatic.com/firebasejs/10.12.2/firebase-database.js';import{doc,getDoc,setDoc}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';const gfi=document[_0x47c42e(0x1d2)](_0x47c42e(0x1b9)),u=gfi[_0x47c42e(0x1a2)](_0x47c42e(0x1d4))[_0x47c42e(0x19c)]('#');function error(_0x594ba5){const _0x1f8d1b=_0x47c42e;console[_0x1f8d1b(0x1ca)](_0x594ba5);}if(!gfi)error('Element\x20with\x20\x22getForiconIcon\x22\x20id\x20is\x20undefined');else{if(gfi[_0x47c42e(0x1b0)]!=_0x47c42e(0x1be))error(_0x47c42e(0x1c8));else{if(u[_0x47c42e(0x1ac)]!=0x2)error(_0x47c42e(0x1d7));else gfi[_0x47c42e(0x1a4)](),((async()=>{const _0x4d025a=_0x47c42e;let _0x1fffd8=await getDoc(doc(dbFirestore,'users',u[0x1]));if(_0x1fffd8['exists']()){_0x1fffd8=_0x1fffd8[_0x4d025a(0x1d1)]();let _0x3fb0ca=new Date(),_0x4f4df0={'lite':0x1770,'plus':0x4e20,'plusBusiness':0xf4240},_0x24ea37={'month':_0x3fb0ca['getMonth']()+0x1,'year':_0x3fb0ca['getFullYear']()};!_0x1fffd8['pageviewStart']&&(_0x1fffd8['pageviewStart']=_0x24ea37);;if(_0x24ea37[_0x4d025a(0x198)]>_0x1fffd8[_0x4d025a(0x197)][_0x4d025a(0x198)]||_0x24ea37[_0x4d025a(0x1ad)]>_0x1fffd8[_0x4d025a(0x197)][_0x4d025a(0x1ad)])_0x1fffd8[_0x4d025a(0x197)]=_0x24ea37,_0x1fffd8[_0x4d025a(0x1ba)]=0x1;else _0x1fffd8[_0x4d025a(0x1ba)]++;try{await setDoc(doc(dbFirestore,'users',u[0x1]),{'pageviewCount':_0x1fffd8[_0x4d025a(0x1ba)],'pageviewStart':_0x1fffd8[_0x4d025a(0x197)]},{'merge':!![]});}catch(_0x2d82f2){_0x2d82f2(_0x2d82f2);};if(_0x1fffd8[_0x4d025a(0x1ba)]>_0x4f4df0[_0x1fffd8[_0x4d025a(0x1bc)]])console['error'](_0x4d025a(0x1d6));else{if(_0x1fffd8['settings'][_0x4d025a(0x1a3)][_0x4d025a(0x19b)](_0x2a4a9f=>location[_0x4d025a(0x19e)]==_0x2a4a9f)){customElements[_0x4d025a(0x1b2)](_0x4d025a(0x19a),class extends HTMLElement{[_0x4d025a(0x1b5)](){const _0x2f3724=_0x4d025a;return this[_0x2f3724(0x1a2)](_0x2f3724(0x1d0));}['setIcon'](_0x48188c){const _0x54a357=_0x4d025a;if(typeof _0x48188c==_0x54a357(0x1a1))this[_0x54a357(0x1a6)](_0x54a357(0x1d0),_0x48188c);else error('Argument\x20must\x20be\x20a\x20valid\x20string');}[_0x4d025a(0x1a7)](_0x3d7c82,_0x3f9876){const _0xee5b8a=_0x4d025a;if(arguments[_0xee5b8a(0x1ac)]==0x2)this[_0xee5b8a(0x1a2)]('icon')==_0x3d7c82?this[_0xee5b8a(0x1a6)]('icon',_0x3f9876):this[_0xee5b8a(0x1a6)](_0xee5b8a(0x1d0),_0x3d7c82);else error('There\x20are\x20must\x20be\x202\x20arguments');}['getStyle'](){const _0x164a87=_0x4d025a;return this[_0x164a87(0x1a2)](_0x164a87(0x1af));}[_0x4d025a(0x1cf)](_0x2be8ab){const _0x22e466=_0x4d025a;if(typeof iconName==_0x22e466(0x1a1))this[_0x22e466(0x1a6)](_0x22e466(0x1af),_0x2be8ab);else error(_0x22e466(0x1c9));}[_0x4d025a(0x19d)](_0x44d0cf,_0x92bc1d){const _0x58ca20=_0x4d025a;if(arguments[_0x58ca20(0x1ac)]==0x2)this[_0x58ca20(0x1a2)](_0x58ca20(0x1af))==icon1Name?this[_0x58ca20(0x1a6)](_0x58ca20(0x1af),_0x92bc1d):this['setAttribute'](_0x58ca20(0x1af),_0x44d0cf);else error('There\x20are\x20must\x20be\x202\x20arguments');}});let _0x45caa8=document[_0x4d025a(0x1bf)](_0x4d025a(0x1b8));_0x45caa8[_0x4d025a(0x1a8)]=':root\x20{\x0a\x20\x20--primary-color:\x20inherit;\x0a\x20\x20--secondary-color:\x20inherit;\x0a\x20\x20--primary-opacity:\x201;\x0a\x20\x20--secondary-opacity:\x200.4;\x0a}\x0a@font-face\x20{\x0a\x20\x20font-family:\x20\x22Foricon\x20Alpha\x208\x22;\x0a\x20\x20src:\x20url(\x22//foricon-src.github.io/main/0.8.6/font.ttf\x22);\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20font-style:\x20normal;\x0a}\x0a\x0af-icon\x20{\x0a\x20\x20animation:\x201s\x20ease\x20infinite;\x0a\x20\x20position:\x20relative;\x0a\x20\x20justify-content:\x20center;\x0a\x20\x20display:\x20inline-flex;\x0a}\x0af-icon::before,\x20f-icon::after\x20{\x0a\x20\x20font-family:\x20\x22Foricon\x20Alpha\x208\x22;\x0a\x20\x20line-height:\x201em;\x0a}\x0af-icon::before\x20{\x0a\x20\x20color:\x20var(--primary-color);\x0a}\x0af-icon[icon-style^=\x22duotone/\x22]::before,\x20f-icon[reversed][icon-style^=\x22duotone/\x22]::after\x20{\x0a\x20\x20opacity:\x20var(--primary-opacity);\x0a}\x0af-icon[icon-style^=\x22duotone/\x22]::after,\x20f-icon[reversed][icon-style^=\x22duotone/\x22]::before\x20{\x0a\x20\x20color:\x20var(--secondary-color);\x0a\x20\x20opacity:\x20var(--secondary-opacity);\x0a}\x0af-icon[icon-style^=\x22duotone/\x22]::after\x20{\x0a\x20\x20position:\x20absolute;\x0a}\x0a\x0af-icon[animation*=\x22-xxslow\x22]\x20{\x0a\x20\x20animation-duration:\x203s;\x0a}\x0af-icon[animation*=\x22-xslow\x22]\x20{\x0a\x20\x20animation-duration:\x202.5s;\x0a}\x0af-icon[animation*=\x22-slow\x22]\x20{\x0a\x20\x20animation-duration:\x202s;\x0a}\x0af-icon[animation*=\x22-semislow\x22]\x20{\x0a\x20\x20animation-duration:\x201.5s;\x0a}\x0af-icon[animation*=\x22-semifast\x22]\x20{\x0a\x20\x20animation-duration:\x20.75s;\x0a}\x0af-icon[animation*=\x22-fast\x22]\x20{\x0a\x20\x20animation-duration:\x20.5s;\x0a}\x0af-icon[animation*=\x22-xfast\x22]\x20{\x0a\x20\x20animation-duration:\x20.25s;\x0a}\x0af-icon[animation*=\x22-xxfast\x22]\x20{\x0a\x20\x20animation-duration:\x20.125s;\x0a}\x0a\x0af-icon[animation^=\x22spin\x22]\x20{\x0a\x20\x20animation-name:\x20spin;\x0a\x20\x20animation-timing-function:\x20linear;\x0a}\x0af-icon[animation^=\x22spin-reverse\x22]\x20{\x0a\x20\x20animation-direction:\x20reverse;\x0a}\x0af-icon[animation^=\x22ltfade\x22]\x20{\x0a\x20\x20animation-name:\x20ltfade;\x0a}\x0af-icon[animation^=\x22mdfade\x22],\x20f-icon[animation^=\x22fade\x22]\x20{\x0a\x20\x20animation-name:\x20mdfade;\x0a}\x0af-icon[animation^=\x22hvfade\x22]\x20{\x0a\x20\x20animation-name:\x20hvfade;\x0a}\x0af-icon[animation^=\x22ulfade\x22]\x20{\x0a\x20\x20animation-name:\x20ulfade;\x0a}\x0af-icon[animation^=\x22csfade\x22]\x20{\x0a\x20\x20animation-name:\x20csfade;\x0a}\x0af-icon[animation^=\x22smbeat\x22]\x20{\x0a\x20\x20animation-name:\x20smbeat;\x0a}\x0af-icon[animation^=\x22blbeat\x22],\x20f-icon[animation^=\x22beat\x22]\x20{\x0a\x20\x20animation-name:\x20blbeat;\x0a}\x0af-icon[animation^=\x22bgbeat\x22]\x20{\x0a\x20\x20animation-name:\x20bgbeat;\x0a}\x0af-icon[animation^=\x22fadebeat\x22]\x20{\x0a\x20\x20animation-name:\x20fadebeat;\x0a}\x0af-icon[animation^=\x22csbeat\x22]\x20{\x0a\x20\x20animation-name:\x20csbeat;\x0a}\x0af-icon[animation^=\x22flipX\x22]\x20{\x0a\x20\x20animation-name:\x20flipX;\x0a}\x0af-icon[animation^=\x22flipY\x22]\x20{\x0a\x20\x20animation-name:\x20flipY;\x0a}\x0af-icon[animation^=\x22flipXY\x22]\x20{\x0a\x20\x20animation-name:\x20flipXY;\x0a}\x0a\x0af-icon[size=\x22smallest\x22]\x20{\x0a\x20\x20font-size:\x20.25em\x20!important;\x0a}\x0af-icon[size=\x22smaller\x22]\x20{\x0a\x20\x20font-size:\x20.5em\x20!important;\x0a}\x0af-icon[size=\x22small\x22]\x20{\x0a\x20\x20font-size:\x20.75em\x20!important;\x0a}\x0af-icon[size=\x22large\x22]\x20{\x0a\x20\x20font-size:\x201.25em\x20!important;\x0a}\x0af-icon[size=\x22larger\x22]\x20{\x0a\x20\x20font-size:\x201.5em\x20!important;\x0a}\x0af-icon[size=\x22largest\x22]\x20{\x0a\x20\x20font-size:\x201.75em\x20!important;\x0a}\x0a\x0af-icon[scale=\x22xsmaller\x22]\x20{\x0a\x20\x20scale:\x20.5;\x0a}\x0af-icon[scale=\x22smaller\x22]\x20{\x0a\x20\x20scale:\x20.75;\x0a}\x0af-icon[scale=\x22larger\x22]\x20{\x0a\x20\x20scale:\x201.25;\x0a}\x0af-icon[scale=\x22xlarger\x22]\x20{\x0a\x20\x20scale:\x201.5;\x0a}\x0a\x0af-icon[rotate=\x2290\x22]\x20{\x0a\x20\x20rotate:\x2090deg;\x0a}\x0af-icon[rotate=\x22180\x22]\x20{\x0a\x20\x20rotate:\x20180deg;\x0a}\x0af-icon[rotate=\x22270\x22]\x20{\x0a\x20\x20rotate:\x20270deg;\x0a}\x0af-icon[rotate=\x22flipX\x22]\x20{\x0a\x20\x20transform:\x20rotateX(180deg);\x0a}\x0af-icon[rotate=\x22flipY\x22]\x20{\x0a\x20\x20transform:\x20rotateY(180deg);\x0a}\x0a\x0a@keyframes\x20spin\x20{\x0a\x20\x200%\x20{rotate:\x20z\x200}\x0a\x20\x20100%\x20{rotate:\x20z\x20360deg}\x0a}\x0a@keyframes\x20ltfade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200.75}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20mdfade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200.5}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20hvfade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200.25}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20ulfade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20csfade\x20{\x0a\x20\x200%\x20{opacity:\x20var(--max)}\x0a\x20\x2050%\x20{opacity:\x20var(--min)}\x0a\x20\x20100%\x20{opacity:\x20var(--max)}\x0a}\x0a@keyframes\x20smbeat\x20{\x0a\x20\x200%\x20{scale:\x201}\x0a\x20\x2050%\x20{scale:\x20.6}\x0a\x20\x20100%\x20{scale:\x201}\x0a}\x0a@keyframes\x20blbeat\x20{\x0a\x20\x200%\x20{scale:\x201.2}\x0a\x20\x2050%\x20{scale:\x20.8}\x0a\x20\x20100%\x20{scale:\x201.2}\x0a}\x0a@keyframes\x20bgbeat\x20{\x0a\x20\x200%\x20{scale:\x201.4}\x0a\x20\x2050%\x20{scale:\x201}\x0a\x20\x20100%\x20{scale:\x201.4}\x0a}\x0a@keyframes\x20fadebeat\x20{\x0a\x20\x200%\x20{opacity:\x201;\x20scale:\x201.2}\x0a\x20\x2050%\x20{opacity:\x200.5;\x20scale:\x20.8}\x0a\x20\x20100%\x20{opacity:\x201;\x20scale:\x201.2}\x0a}\x0a@keyframes\x20csbeat\x20{\x0a\x20\x200%\x20{scale:\x20var(--max)}\x0a\x20\x2050%\x20{scale:\x20var(--min)}\x0a\x20\x20100%\x20{scale:\x20var(--max)}\x0a}\x0a@keyframes\x20flipX\x20{\x0a\x20\x200%\x20{rotate:\x20x\x200;}\x0a\x20\x2050%\x20{rotate:\x20x\x20180deg;}\x0a\x20\x20100%\x20{rotate:\x20x\x20360deg;}\x0a}\x0a@keyframes\x20flipY\x20{\x0a\x20\x200%\x20{rotate:\x20y\x200;}\x0a\x20\x2050%\x20{rotate:\x20y\x20180deg;}\x0a\x20\x20100%\x20{rotate:\x20y\x20360deg;}\x0a}\x0a@keyframes\x20flipXY\x20{\x0a\x20\x200%\x20{transform:\x20rotateX(0deg)\x20rotateY(0deg);}\x0a\x20\x2050%\x20{transform:\x20rotateX(180deg)\x20rotateY(180deg);}\x0a\x20\x20100%\x20{transform:\x20rotateX(360deg)\x20rotateY(360deg);}\x0a}',onValue(ref(db,_0x4d025a(0x1cd)),_0x330690=>{const _0x2ab298=_0x4d025a,_0x39e6e4=_0x330690['val']();for(let _0x503a3a in _0x39e6e4){let _0x493c7a=_0x39e6e4[_0x503a3a];_0x493c7a[_0x2ab298(0x1cb)][_0x2ab298(0x1c4)](_0x4ab432=>{const _0xbd7c93=_0x2ab298;let _0x235107,_0x7113b0=_0x493c7a['unicodes']?.[_0x4ab432[_0xbd7c93(0x1ae)]('/','-')];if(_0x4ab432[_0xbd7c93(0x1b3)](_0xbd7c93(0x1c3))){let _0x422374=_0x7113b0?.['split']('|');_0x235107=_0xbd7c93(0x1d3)+_0x503a3a+_0xbd7c93(0x1c0)+_0x4ab432+_0xbd7c93(0x1c5)+_0x422374?.[0x0]+_0xbd7c93(0x1a5)+_0x503a3a+_0xbd7c93(0x1c0)+_0x4ab432+_0xbd7c93(0x1b4)+_0x422374?.[0x1]+'\x22}';}else _0x235107=_0xbd7c93(0x1d3)+_0x503a3a+'\x22]'+(_0x4ab432=='outline'?'[icon-style=\x22outline\x22]':'')+_0xbd7c93(0x1b6)+_0x7113b0+'\x22}';_0x45caa8[_0xbd7c93(0x1a8)]+=_0x235107;});};}),document['querySelector'](_0x4d025a(0x1bd))[_0x4d025a(0x1c1)](_0x45caa8),console[_0x4d025a(0x1cc)](_0x4d025a(0x1a9));}else error(_0x4d025a(0x1b7));};}else error(_0x4d025a(0x1c6));})());}}function _0x4d4c(){const _0x1be707=['Element\x20with\x20\x22getForiconIcon\x22\x20id\x20is\x20not\x20<script>','Argument\x20must\x20be\x20a\x20valid\x20string','error','styles','log','icons/','16587538lkyTaO','setStyle','icon','data','getElementById','\x0af-icon[icon=\x22','src','57216WKZJKK','You\x20have\x20reached\x20the\x20limit\x20of\x20pageviews','Invalid\x20src\x27s\x20value','1928220bOhhsl','pageviewStart','month','3165801ZqIjjC','f-icon','some','split','toggleType','hostname','7976QEmCUb','17209000UYjRoP','string','getAttribute','allowedDomains','remove','\x22}\x0af-icon[icon=\x22','setAttribute','toggleIcon','innerHTML','Foricon\x20assets\x20were\x20loaded\x20successfully','3734AOcHRe','12omAHku','length','year','replace','icon-style','nodeName','625MybzXR','define','includes','\x22]::after\x20{\x20content:\x20\x22\x5c','getIcon','::before\x20{\x20content:\x20\x22\x5c','This\x20site\x20cannot\x20access\x20to\x20Foricon\x20assets\x20because\x20the\x20user\x20has\x27t\x20allowed\x20this\x20domain\x20yet','style','getForiconIcon','pageviewCount','9279myFlaj','plan','head','SCRIPT','createElement','\x22][icon-style=\x22','appendChild','449CbDFAa','duotone/','forEach','\x22]::before\x20{\x20content:\x20\x22\x5c','Given\x20account\x20id\x20is\x20invalid','4UKzBkT'];_0x4d4c=function(){return _0x1be707;};return _0x4d4c();};