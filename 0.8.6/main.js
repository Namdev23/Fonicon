const _0x5df02d=_0x3350;(function(_0x2268f7,_0x4e434a){const _0x161252=_0x3350,_0x3ba881=_0x2268f7();while(!![]){try{const _0x2f9994=-parseInt(_0x161252(0x183))/0x1*(parseInt(_0x161252(0x192))/0x2)+parseInt(_0x161252(0x189))/0x3+-parseInt(_0x161252(0x1a9))/0x4*(-parseInt(_0x161252(0x174))/0x5)+parseInt(_0x161252(0x18c))/0x6+parseInt(_0x161252(0x18d))/0x7*(parseInt(_0x161252(0x1a8))/0x8)+parseInt(_0x161252(0x197))/0x9*(parseInt(_0x161252(0x170))/0xa)+parseInt(_0x161252(0x1aa))/0xb*(-parseInt(_0x161252(0x1a0))/0xc);if(_0x2f9994===_0x4e434a)break;else _0x3ba881['push'](_0x3ba881['shift']());}catch(_0x377b32){_0x3ba881['push'](_0x3ba881['shift']());}}}(_0x276b,0x5ee3b));import{db,dbFirestore}from'https://foricon-src.github.io/foricon-firebase/script.js';import{ref,onValue}from'//www.gstatic.com/firebasejs/10.12.2/firebase-database.js';import{doc,getDoc,setDoc}from'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';const gfi=document[_0x5df02d(0x186)](_0x5df02d(0x16c)),u=gfi[_0x5df02d(0x17d)](_0x5df02d(0x19b))['split']('#');function error(_0x4f65c5){const _0x25ee28=_0x5df02d;console[_0x25ee28(0x17e)](_0x4f65c5);}function _0x3350(_0xdf577e,_0x4257b2){const _0x276bf0=_0x276b();return _0x3350=function(_0x335044,_0x44ffae){_0x335044=_0x335044-0x166;let _0x5b32c2=_0x276bf0[_0x335044];return _0x5b32c2;},_0x3350(_0xdf577e,_0x4257b2);}if(!gfi)error(_0x5df02d(0x194));else{if(gfi[_0x5df02d(0x188)]!=_0x5df02d(0x19d))error('Element\x20with\x20\x22getForiconIcon\x22\x20id\x20is\x20not\x20<script>');else{if(u[_0x5df02d(0x177)]!=0x2)error(_0x5df02d(0x1a2));else gfi[_0x5df02d(0x16d)](),((async()=>{const _0x33803a=_0x5df02d;let _0x9feaa7=await getDoc(doc(dbFirestore,'users',u[0x1]));if(_0x9feaa7[_0x33803a(0x19c)]()){_0x9feaa7=_0x9feaa7[_0x33803a(0x19e)]();let _0x4bf898=new Date(),_0x14e5d1={'lite':0x1770,'plus':0x4e20,'plusBusiness':0xf4240},_0xc8a8d2={'month':_0x4bf898[_0x33803a(0x16a)]()+0x1,'year':_0x4bf898[_0x33803a(0x184)]()};!_0x9feaa7[_0x33803a(0x16b)]&&(_0x9feaa7['pageviewStart']=_0xc8a8d2);;if(_0xc8a8d2[_0x33803a(0x176)]>_0x9feaa7[_0x33803a(0x16b)]['month']||_0xc8a8d2[_0x33803a(0x1a7)]>_0x9feaa7[_0x33803a(0x16b)][_0x33803a(0x1a7)])_0x9feaa7['pageviewStart']=_0xc8a8d2,_0x9feaa7['pageviewCount']=0x1;else _0x9feaa7[_0x33803a(0x172)]++;try{await setDoc(doc(dbFirestore,'users',u[0x1]),{'pageviewCount':_0x9feaa7[_0x33803a(0x172)],'pageviewStart':_0x9feaa7[_0x33803a(0x16b)]},{'merge':!![]});}catch(_0x307211){_0x307211(_0x307211);};if(_0x9feaa7[_0x33803a(0x172)]>_0x14e5d1[_0x9feaa7[_0x33803a(0x1a3)]])console[_0x33803a(0x17e)](_0x33803a(0x166));else{if(_0x9feaa7['settings'][_0x33803a(0x18e)]['some'](_0x3d7b1f=>location[_0x33803a(0x1a5)]==_0x3d7b1f)){customElements[_0x33803a(0x16e)](_0x33803a(0x19a),class extends HTMLElement{['getIcon'](){const _0x408f7f=_0x33803a;return this[_0x408f7f(0x17d)]('icon');}['setIcon'](_0x44f2d6){const _0x15c786=_0x33803a;if(typeof _0x44f2d6==_0x15c786(0x17f))this[_0x15c786(0x181)](_0x15c786(0x168),_0x44f2d6);else error('Argument\x20must\x20be\x20a\x20valid\x20string');}[_0x33803a(0x167)](_0x2eb79d,_0xe8d6dd){const _0x5b3989=_0x33803a;if(arguments[_0x5b3989(0x177)]==0x2)this[_0x5b3989(0x17d)](_0x5b3989(0x168))==_0x2eb79d?this[_0x5b3989(0x181)]('icon',_0xe8d6dd):this[_0x5b3989(0x181)](_0x5b3989(0x168),_0x2eb79d);else error(_0x5b3989(0x190));}[_0x33803a(0x18b)](){const _0x50cce2=_0x33803a;return this[_0x50cce2(0x17d)](_0x50cce2(0x179));}['setStyle'](_0xc56d3){const _0x3c269d=_0x33803a;if(typeof iconName=='string')this[_0x3c269d(0x181)](_0x3c269d(0x179),_0xc56d3);else error(_0x3c269d(0x195));}[_0x33803a(0x18a)](_0x3463a7,_0x540c7e){const _0x326db7=_0x33803a;if(arguments['length']==0x2)this['getAttribute']('icon-style')==icon1Name?this[_0x326db7(0x181)](_0x326db7(0x179),_0x540c7e):this[_0x326db7(0x181)]('icon-style',_0x3463a7);else error(_0x326db7(0x190));}});let _0x389e0e=document[_0x33803a(0x18f)](_0x33803a(0x169));_0x389e0e[_0x33803a(0x171)]=':root\x20{\x0a\x20\x20--primary-color:\x20inherit;\x0a\x20\x20--secondary-color:\x20inherit;\x0a\x20\x20--primary-opacity:\x201;\x0a\x20\x20--secondary-opacity:\x200.4;\x0a}\x0a@font-face\x20{\x0a\x20\x20font-family:\x20\x22Foricon\x20Alpha\x208\x22;\x0a\x20\x20src:\x20url(\x22//foricon-src.github.io/main/0.8.6/font.ttf\x22);\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20font-style:\x20normal;\x0a}\x0a\x0af-icon\x20{\x0a\x20\x20animation:\x201s\x20ease\x20infinite;\x0a\x20\x20position:\x20relative;\x0a\x20\x20justify-content:\x20center;\x0a\x20\x20display:\x20inline-flex;\x0a}\x0af-icon::before,\x20f-icon::after\x20{\x0a\x20\x20font-family:\x20\x22Foricon\x20Alpha\x208\x22;\x0a\x20\x20line-height:\x201em;\x0a}\x0af-icon::before\x20{\x0a\x20\x20color:\x20var(--primary-color);\x0a}\x0af-icon[icon-style^=\x22duotone/\x22]::before,\x20f-icon[reversed][icon-style^=\x22duotone/\x22]::after\x20{\x0a\x20\x20opacity:\x20var(--primary-opacity);\x0a}\x0af-icon[icon-style^=\x22duotone/\x22]::after,\x20f-icon[reversed][icon-style^=\x22duotone/\x22]::before\x20{\x0a\x20\x20color:\x20var(--secondary-color);\x0a\x20\x20opacity:\x20var(--secondary-opacity);\x0a}\x0af-icon[icon-style^=\x22duotone/\x22]::after\x20{\x0a\x20\x20position:\x20absolute;\x0a}\x0a\x0af-icon[animation*=\x22-xxslow\x22]\x20{\x0a\x20\x20animation-duration:\x203s;\x0a}\x0af-icon[animation*=\x22-xslow\x22]\x20{\x0a\x20\x20animation-duration:\x202.5s;\x0a}\x0af-icon[animation*=\x22-slow\x22]\x20{\x0a\x20\x20animation-duration:\x202s;\x0a}\x0af-icon[animation*=\x22-semislow\x22]\x20{\x0a\x20\x20animation-duration:\x201.5s;\x0a}\x0af-icon[animation*=\x22-semifast\x22]\x20{\x0a\x20\x20animation-duration:\x20.75s;\x0a}\x0af-icon[animation*=\x22-fast\x22]\x20{\x0a\x20\x20animation-duration:\x20.5s;\x0a}\x0af-icon[animation*=\x22-xfast\x22]\x20{\x0a\x20\x20animation-duration:\x20.25s;\x0a}\x0af-icon[animation*=\x22-xxfast\x22]\x20{\x0a\x20\x20animation-duration:\x20.125s;\x0a}\x0a\x0af-icon[animation^=\x22spin\x22]\x20{\x0a\x20\x20animation-name:\x20spin;\x0a\x20\x20animation-timing-function:\x20linear;\x0a}\x0af-icon[animation^=\x22spin-reverse\x22]\x20{\x0a\x20\x20animation-direction:\x20reverse;\x0a}\x0af-icon[animation^=\x22ltfade\x22]\x20{\x0a\x20\x20animation-name:\x20ltfade;\x0a}\x0af-icon[animation^=\x22mdfade\x22],\x20f-icon[animation^=\x22fade\x22]\x20{\x0a\x20\x20animation-name:\x20mdfade;\x0a}\x0af-icon[animation^=\x22hvfade\x22]\x20{\x0a\x20\x20animation-name:\x20hvfade;\x0a}\x0af-icon[animation^=\x22ulfade\x22]\x20{\x0a\x20\x20animation-name:\x20ulfade;\x0a}\x0af-icon[animation^=\x22csfade\x22]\x20{\x0a\x20\x20animation-name:\x20csfade;\x0a}\x0af-icon[animation^=\x22smbeat\x22]\x20{\x0a\x20\x20animation-name:\x20smbeat;\x0a}\x0af-icon[animation^=\x22blbeat\x22],\x20f-icon[animation^=\x22beat\x22]\x20{\x0a\x20\x20animation-name:\x20blbeat;\x0a}\x0af-icon[animation^=\x22bgbeat\x22]\x20{\x0a\x20\x20animation-name:\x20bgbeat;\x0a}\x0af-icon[animation^=\x22fadebeat\x22]\x20{\x0a\x20\x20animation-name:\x20fadebeat;\x0a}\x0af-icon[animation^=\x22csbeat\x22]\x20{\x0a\x20\x20animation-name:\x20csbeat;\x0a}\x0af-icon[animation^=\x22flipX\x22]\x20{\x0a\x20\x20animation-name:\x20flipX;\x0a}\x0af-icon[animation^=\x22flipY\x22]\x20{\x0a\x20\x20animation-name:\x20flipY;\x0a}\x0af-icon[animation^=\x22flipXY\x22]\x20{\x0a\x20\x20animation-name:\x20flipXY;\x0a}\x0a\x0af-icon[size=\x22smallest\x22]\x20{\x0a\x20\x20font-size:\x20.25em\x20!important;\x0a}\x0af-icon[size=\x22smaller\x22]\x20{\x0a\x20\x20font-size:\x20.5em\x20!important;\x0a}\x0af-icon[size=\x22small\x22]\x20{\x0a\x20\x20font-size:\x20.75em\x20!important;\x0a}\x0af-icon[size=\x22large\x22]\x20{\x0a\x20\x20font-size:\x201.25em\x20!important;\x0a}\x0af-icon[size=\x22larger\x22]\x20{\x0a\x20\x20font-size:\x201.5em\x20!important;\x0a}\x0af-icon[size=\x22largest\x22]\x20{\x0a\x20\x20font-size:\x201.75em\x20!important;\x0a}\x0a\x0af-icon[scale=\x22xsmaller\x22]\x20{\x0a\x20\x20scale:\x20.5;\x0a}\x0af-icon[scale=\x22smaller\x22]\x20{\x0a\x20\x20scale:\x20.75;\x0a}\x0af-icon[scale=\x22larger\x22]\x20{\x0a\x20\x20scale:\x201.25;\x0a}\x0af-icon[scale=\x22xlarger\x22]\x20{\x0a\x20\x20scale:\x201.5;\x0a}\x0a\x0af-icon[rotate=\x2290\x22]\x20{\x0a\x20\x20rotate:\x2090deg;\x0a}\x0af-icon[rotate=\x22180\x22]\x20{\x0a\x20\x20rotate:\x20180deg;\x0a}\x0af-icon[rotate=\x22270\x22]\x20{\x0a\x20\x20rotate:\x20270deg;\x0a}\x0af-icon[rotate=\x22flipX\x22]\x20{\x0a\x20\x20transform:\x20rotateX(180deg);\x0a}\x0af-icon[rotate=\x22flipY\x22]\x20{\x0a\x20\x20transform:\x20rotateY(180deg);\x0a}\x0a\x0a@keyframes\x20spin\x20{\x0a\x20\x200%\x20{rotate:\x20z\x200}\x0a\x20\x20100%\x20{rotate:\x20z\x20360deg}\x0a}\x0a@keyframes\x20ltfade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200.75}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20mdfade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200.5}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20hvfade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200.25}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20ulfade\x20{\x0a\x20\x200%\x20{opacity:\x201}\x0a\x20\x2050%\x20{opacity:\x200}\x0a\x20\x20100%\x20{opacity:\x201}\x0a}\x0a@keyframes\x20csfade\x20{\x0a\x20\x200%\x20{opacity:\x20var(--max)}\x0a\x20\x2050%\x20{opacity:\x20var(--min)}\x0a\x20\x20100%\x20{opacity:\x20var(--max)}\x0a}\x0a@keyframes\x20smbeat\x20{\x0a\x20\x200%\x20{scale:\x201}\x0a\x20\x2050%\x20{scale:\x20.6}\x0a\x20\x20100%\x20{scale:\x201}\x0a}\x0a@keyframes\x20blbeat\x20{\x0a\x20\x200%\x20{scale:\x201.2}\x0a\x20\x2050%\x20{scale:\x20.8}\x0a\x20\x20100%\x20{scale:\x201.2}\x0a}\x0a@keyframes\x20bgbeat\x20{\x0a\x20\x200%\x20{scale:\x201.4}\x0a\x20\x2050%\x20{scale:\x201}\x0a\x20\x20100%\x20{scale:\x201.4}\x0a}\x0a@keyframes\x20fadebeat\x20{\x0a\x20\x200%\x20{opacity:\x201;\x20scale:\x201.2}\x0a\x20\x2050%\x20{opacity:\x200.5;\x20scale:\x20.8}\x0a\x20\x20100%\x20{opacity:\x201;\x20scale:\x201.2}\x0a}\x0a@keyframes\x20csbeat\x20{\x0a\x20\x200%\x20{scale:\x20var(--max)}\x0a\x20\x2050%\x20{scale:\x20var(--min)}\x0a\x20\x20100%\x20{scale:\x20var(--max)}\x0a}\x0a@keyframes\x20flipX\x20{\x0a\x20\x200%\x20{rotate:\x20x\x200;}\x0a\x20\x2050%\x20{rotate:\x20x\x20180deg;}\x0a\x20\x20100%\x20{rotate:\x20x\x20360deg;}\x0a}\x0a@keyframes\x20flipY\x20{\x0a\x20\x200%\x20{rotate:\x20y\x200;}\x0a\x20\x2050%\x20{rotate:\x20y\x20180deg;}\x0a\x20\x20100%\x20{rotate:\x20y\x20360deg;}\x0a}\x0a@keyframes\x20flipXY\x20{\x0a\x20\x200%\x20{transform:\x20rotateX(0deg)\x20rotateY(0deg);}\x0a\x20\x2050%\x20{transform:\x20rotateX(180deg)\x20rotateY(180deg);}\x0a\x20\x20100%\x20{transform:\x20rotateX(360deg)\x20rotateY(360deg);}\x0a}',onValue(ref(db,_0x33803a(0x196)),_0x396fec=>{const _0x4b45e7=_0x33803a,_0x296c13=_0x396fec[_0x4b45e7(0x17b)]();for(let _0x592d10 in _0x296c13){let _0x626937=_0x296c13[_0x592d10];_0x626937[_0x4b45e7(0x175)][_0x4b45e7(0x16f)](_0x65137=>{const _0x344c84=_0x4b45e7;let _0x1254cc,_0x2349dc=_0x626937[_0x344c84(0x1a4)]?.[_0x65137[_0x344c84(0x19f)]('/','-')];if(_0x65137['includes'](_0x344c84(0x180))){let _0xbd13bc=_0x2349dc?.[_0x344c84(0x187)]('|');_0x1254cc=_0x344c84(0x1a1)+_0x592d10+_0x344c84(0x199)+_0x65137+'\x22]::before\x20{\x20content:\x20\x22\x5c'+_0xbd13bc?.[0x0]+_0x344c84(0x198)+_0x592d10+_0x344c84(0x199)+_0x65137+_0x344c84(0x178)+_0xbd13bc?.[0x1]+'\x22}';}else _0x1254cc=_0x344c84(0x173)+_0x592d10+'\x22]'+(_0x65137==_0x344c84(0x1a6)?_0x344c84(0x185):'')+'::before\x20{\x20content:\x20\x22\x5c'+_0x2349dc+'\x22}';_0x389e0e['innerHTML']+=_0x1254cc;});};}),document[_0x33803a(0x193)](_0x33803a(0x17a))[_0x33803a(0x182)](_0x389e0e),console[_0x33803a(0x17c)](_0x33803a(0x191));}else error('This\x20site\x20cannot\x20access\x20to\x20Foricon\x20assets\x20because\x20the\x20user\x20has\x27t\x20allowed\x20this\x20domain\x20yet');};}else error(_0x33803a(0x1ab));})());}};function _0x276b(){const _0x8f8cfd=['SCRIPT','data','replace','60PIddHw','\x0af-icon[icon\x22','Invalid\x20src\x27s\x20value','plan','unicodes','hostname','outline','year','9112epJDFo','87476NKqEbW','3471545tQEgvN','Given\x20account\x20id\x20is\x20invalid','You\x20have\x20reached\x20the\x20limit\x20of\x20pageviews','toggleIcon','icon','style','getMonth','pageviewStart','getForiconIcon','remove','define','forEach','137090RoeFwX','innerHTML','pageviewCount','\x0af-icon[icon=\x22','155zFGGDV','styles','month','length','\x22]::after\x20{\x20content:\x20\x22\x5c','icon-style','head','val','log','getAttribute','error','string','duotone/','setAttribute','appendChild','1irRqau','getFullYear','[icon-style=\x22outline\x22]','getElementById','split','nodeName','1210521lYNfJj','toggleType','getStyle','3003696DOkgBL','1463rHUPUP','allowedDomains','createElement','There\x20are\x20must\x20be\x202\x20arguments','Foricon\x20assets\x20were\x20loaded\x20successfully','639154pYgjaY','querySelector','Element\x20with\x20\x22getForiconIcon\x22\x20id\x20is\x20undefined','Argument\x20must\x20be\x20a\x20valid\x20string','icons/','306iGLINv','\x22}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f-icon[icon\x22','\x22][icon-style=\x22','f-icon','src','exists'];_0x276b=function(){return _0x8f8cfd;};return _0x276b();}