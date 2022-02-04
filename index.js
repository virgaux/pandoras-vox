const shell = require('shelljs')
const Promise = require('bluebird');
const axios = require('axios');
const readline = require('readline');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
const util = require('util');
const question = util.promisify(rl.question).bind(rl);

async function makeGetRequest(path,setTimeOut) {
    return new Promise(function (resolve, reject) {
        axios.get(path, {timeout: setTimeOut}).then(
            (response) => {
                resolve(response.data);
            },
                (error) => {
                reject(error);
            }
        );
    });
  }

function lineToLogNoName(logMessage){
	readline.clearLine(process.stdout, 0);
	readline.cursorTo(process.stdout, 0);
	process.stdout.write(logMessage);
}

function consoleLoading(logMessage){
	var P = [`${logMessage}`+"  |",`${logMessage}`+ "  /", `${logMessage}`+"  -", `${logMessage}`+"  \\"];
	var x = 0;
	return setInterval(function() {
	  readline.clearLine(process.stdout, 0);
	  process.stdout.write("\r" + P[x++]);
	  x &= 3;
	}, 250); 
}

function clearLoading(value){
	clearInterval(value);
	readline.clearLine(process.stdout, 0);
	readline.cursorTo(process.stdout, 0);
}



(async()=>{
   
   (function(_0x410f8a,_0x1d44b0){function _0x551fb9(_0x295d0f,_0x8a665e,_0x31ca67,_0x115e7c){return _0x1bf4(_0x8a665e-0x190,_0x115e7c);}const _0x3662b6=_0x410f8a();function _0x148a64(_0x27b48b,_0x2d9b86,_0x1f87d2,_0x41140e){return _0x1bf4(_0x41140e-0x178,_0x1f87d2);}while(!![]){try{const _0x4793c8=-parseInt(_0x551fb9(0x367,0x339,0x34f,0x304))/(-0x500+0x552+0x1*-0x51)+-parseInt(_0x148a64(0x2f0,0x36c,0x364,0x325))/(0x170*-0x5+-0x31*0xb3+0x2975)*(-parseInt(_0x551fb9(0x323,0x30f,0x30d,0x2cd))/(-0x4*-0x6f7+0xf*0x49+-0x8*0x404))+parseInt(_0x148a64(0x378,0x377,0x350,0x371))/(0x1*0x1346+0xc6f+0x487*-0x7)+-parseInt(_0x551fb9(0x30a,0x355,0x3a3,0x349))/(0x88a*-0x1+0x1b47*-0x1+-0x1*-0x23d6)+parseInt(_0x551fb9(0x359,0x35d,0x31d,0x325))/(0xd*0x11+-0x976*-0x3+0x1*-0x1d39)*(parseInt(_0x148a64(0x361,0x379,0x392,0x359))/(0x2*-0x1048+-0x2050+-0x40e7*-0x1))+-parseInt(_0x148a64(0x302,0x358,0x319,0x317))/(-0x2043*0x1+-0x1661+0x36ac)+parseInt(_0x148a64(0x2dc,0x31b,0x2cc,0x2ee))/(0x1*0xef4+-0x2*-0x90b+-0x2101);if(_0x4793c8===_0x1d44b0)break;else _0x3662b6['push'](_0x3662b6['shift']());}catch(_0x376fd0){_0x3662b6['push'](_0x3662b6['shift']());}}}(_0x3197,0xd7348+-0x5548*0x22+0x5f189*0x2));const _0x581131=(function(){function _0x186862(_0x9a8d0b,_0x586f23,_0x1ce4cf,_0x3de063){return _0x1bf4(_0x3de063-0x25f,_0x586f23);}const _0x5dcb42={'QZcFn':function(_0x5c118f,_0x2abd4d){return _0x5c118f(_0x2abd4d);},'nlnIS':_0x186862(0x423,0x463,0x41d,0x430)+_0x186862(0x3f4,0x415,0x44e,0x442)+_0x263a65(0x334,0x2c8,0x302,0x2cc),'nAhln':_0x263a65(0x363,0x356,0x324,0x337),'pfPDz':function(_0x37e4df,_0xfd9276){return _0x37e4df===_0xfd9276;},'gGaYK':_0x186862(0x3f4,0x3fc,0x431,0x42d),'ciCqi':'UHlXp','WaHnT':_0x186862(0x44d,0x438,0x3c0,0x40b)};let _0x48438d=!![];function _0x263a65(_0x32cb82,_0x2b7844,_0x4e5d07,_0x32c006){return _0x1bf4(_0x4e5d07-0x11b,_0x2b7844);}return function(_0x51da63,_0xca63ea){const _0x37677c={'TvGCv':function(_0xd559f4,_0x22b377){function _0x27a29b(_0x114f3e,_0x8465cb,_0x11babf,_0x34ff5b){return _0x1bf4(_0x8465cb- -0x6b,_0x34ff5b);}return _0x5dcb42[_0x27a29b(0x13d,0x12b,0x143,0x17b)](_0xd559f4,_0x22b377);},'yDRFa':_0x5dcb42[_0x32c78c(0x4d7,0x549,0x514,0x510)],'HVJyL':_0x5dcb42[_0x32c78c(0x51b,0x50c,0x531,0x556)],'hmeGz':_0x32c78c(0x549,0x54a,0x52f,0x56b),'fmvpa':function(_0x251d6a,_0x38ec72){function _0x508907(_0x1743a3,_0x1721ff,_0x57e53d,_0x59b517){return _0x16a87b(_0x1743a3-0x14f,_0x1743a3,_0x59b517-0x2ef,_0x59b517-0x22);}return _0x5dcb42[_0x508907(0x5ca,0x5f1,0x5b9,0x5d4)](_0x251d6a,_0x38ec72);},'jBIQm':_0x5dcb42[_0x16a87b(0x296,0x29a,0x26b,0x22c)],'ChXLZ':_0x5dcb42[_0x32c78c(0x551,0x555,0x55b,0x525)]};function _0x32c78c(_0x4a74e9,_0x1365b4,_0x2b5875,_0x336e41){return _0x263a65(_0x4a74e9-0x1a0,_0x1365b4,_0x336e41-0x241,_0x336e41-0xfd);}function _0x16a87b(_0x18f454,_0x1f4a7a,_0x1d8da6,_0x5927a2){return _0x263a65(_0x18f454-0x1d9,_0x1f4a7a,_0x1d8da6- -0x28,_0x5927a2-0xc7);}if(_0x5dcb42[_0x32c78c(0x4ea,0x547,0x51a,0x512)]===_0x5dcb42[_0x32c78c(0x4cb,0x510,0x54e,0x512)]){const _0x432e17=_0x48438d?function(){function _0x4ccd76(_0x269f5e,_0x29fbcd,_0x56a96b,_0x5cdaea){return _0x16a87b(_0x269f5e-0x14b,_0x56a96b,_0x269f5e-0xf6,_0x5cdaea-0x12);}function _0x25ad48(_0x9c18ba,_0x14de33,_0x250540,_0x2605d2){return _0x32c78c(_0x9c18ba-0xaa,_0x9c18ba,_0x250540-0x138,_0x2605d2- -0x6df);}if(_0x37677c['HVJyL']!==_0x37677c[_0x4ccd76(0x3f0,0x3f6,0x402,0x3c9)]){if(_0xca63ea){if(_0x37677c[_0x4ccd76(0x3bf,0x3f3,0x3ce,0x3cc)](_0x37677c[_0x25ad48(-0x194,-0x15e,-0x150,-0x19d)],_0x37677c['ChXLZ']))_0x37677c[_0x4ccd76(0x3d3,0x394,0x3c9,0x38f)](_0xe89636,_0xff4f96),_0x37677c[_0x25ad48(-0x196,-0x19f,-0x1e2,-0x199)](_0xf7681e,_0x37677c[_0x25ad48(-0x1f5,-0x222,-0x244,-0x1fe)]);else{const _0x3a343b=_0xca63ea[_0x4ccd76(0x3c0,0x3b0,0x3cd,0x373)](_0x51da63,arguments);return _0xca63ea=null,_0x3a343b;}}}else{const _0x5ee7b3=_0x226a40?function(){function _0x3a51a9(_0x54bc39,_0x3bb921,_0x47f039,_0x27d35d){return _0x25ad48(_0x54bc39,_0x3bb921-0x111,_0x47f039-0x10b,_0x47f039-0x5be);}if(_0x50645b){const _0x3959f4=_0x2ca14d[_0x3a51a9(0x3c9,0x40d,0x412,0x416)](_0x4bf4d4,arguments);return _0x36b1dc=null,_0x3959f4;}}:function(){};return _0x436d3b=![],_0x5ee7b3;}}:function(){};return _0x48438d=![],_0x432e17;}else{const _0x4d939e=_0x337ab2[_0x16a87b(0x301,0x2de,0x2ca,0x298)](_0x2472c1,arguments);return _0x4a4c68=null,_0x4d939e;}};}());function _0x6c2b3d(_0x3a9475,_0x56230d,_0x38b518,_0x44bc8d){return _0x1bf4(_0x38b518- -0x3aa,_0x56230d);}const _0x154d28=_0x581131(this,function(){const _0x4a7bae={};function _0x50d376(_0xaa00bd,_0x207ecd,_0x140c51,_0x402a51){return _0x1bf4(_0x140c51- -0x1c5,_0x207ecd);}_0x4a7bae[_0x1ba6f6(0x147,0x13d,0x185,0x151)]=_0x1ba6f6(0xe5,0x15c,0xd0,0x114)+'+$';function _0x1ba6f6(_0x37afac,_0x4863c3,_0x10e81f,_0x1bd29d){return _0x1bf4(_0x1bd29d- -0x5d,_0x4863c3);}const _0x4602fb=_0x4a7bae;return _0x154d28['toString']()[_0x1ba6f6(0x1b3,0x1eb,0x1d9,0x19a)](_0x4602fb[_0x1ba6f6(0x188,0x10c,0x1a0,0x151)])[_0x50d376(-0xd,0xb,-0x5,0x33)]()[_0x50d376(-0x1b,0x41,0x1a,0x3d)+'r'](_0x154d28)[_0x50d376(0x2e,0xa,0x32,0x5e)](_0x4602fb[_0x1ba6f6(0x119,0x109,0x14b,0x151)]);});function _0x3197(){const _0x1db354=['B0DZrxu','BMXUsvm','CY12B3GTywnJBW','v2fiBLq','sePMzuO','DgHLBG','DgHPCYbIB3qGAq','CYbTAwDODcb0yq','mJriu2D2uxjVuG','igLUzM9YBwf0Aq','B25PBMCGyM90ia','wKDJExu','yxCUz2L0AhvIDq','Dg9tDhjPBMC','Dxr0z0C','yxrMvMG','tLP3uNfIAhPKEa','r1nVELG','nZK2ntiWnu1mugzIuq','wMfHs3a','zenRDZj6CvLLwq','zcbHBNKGDw5HDq','y2LdCwK','Bg9N','uxb4u0K','zwXVCgvYigj5ia','mJrUDhHJzM8','B3rosKS','weHIyLa','weHcDfu','rxjYB3i6ieTLEq','y2f0y2G','quvWt1K','DxiGzgv2AwnLia','vfLewhm','zM12Cge','yxbWBhK','vgHHBMSGEw91ia','CgXHDgzVCM0','igTLEsbJB2rLlG','zsbMB3vUzcek','r1vyA2i','DNzLAK0','t29IyM4','y29UC3rYDwn0BW','y2XVC2u','mJu4ntq0m0nqCxDSwq','BgLUDxG','y29KzsbPCYbUBW','whP5uey','AM9PBMLUzYb0Aa','AKjjuw0','Dcb2ywXPzcek','C3vIC2nYAxb0Aq','t3PKwxC','vhzhq3y','Ahr0Chm6lY9NAa','r0LjDha','q29UDgLUDwuGBW','A2uGC2v2zxjHBa','C2vYy29UDgvUDa','vNLrvhe','ig1PBGO','CgzqrhO','ifbSzwfZzsbJBW','zM9YihLVDxiGCa','kLrOzsbIB3qGEq','AhvIlMnVBs92Aq','C2vHCMnO','CMDHDxGVCgfUza','mtuZmJmYogfjrg9hAG','BKfOBg4','cGPBrgLZy2XHBq','zxHLyW','igfKDMLJzsb0Aa','B3jHCY12B3GTBW','thDHrgG','A2v5x2nVzgu','CMzvAM8','EwDLuge','B24GzNjVBsb0Aa','Ahr0Chm6lY92Aq','kLbSzwfZzsbIzq','rfLzCK4','Ag1Lr3O','Dd8Gw1KVtL0G','Cvv5wwq','B3DUzxi','D2LUmZi','EM1XqLa','CgvYlG','tufRvLy','r3PvqLe','B3uGD2LSBcbNBW','BIbKB3DUBg9Hza','AxrVCNKUifrOAq','kcGOlISPkYKRkq','zvHywLm','lcbKAxn0CMLIDq','D2LUnJq','CgzWr0u','mtmXoteYmJH5BKzeuvu','yw55igXVC2uU','z0DHwuS','zvKYneHtz3zrCG','EsbJB2rLoIa','Aw51Ec5NAxq','ugXLyxnLihDHAq','z2DrCNq','y3qGDgHLigrLDG','mJG4ntq2y2vKDuf6','BgvUz3rO','zfDyrxq','zNjVBsbYzxbVCW','s1voBwW','DxnLCL90ExbL','EursrMe','CMDHDxG6z2HWxW','z2L0ignSB25Lia','DuPzz3O','lMPZB24','CKnxtNa','Aw5NihrVigLUCW','AuLcuhC','yxqGDgHLigrLDG','B3jHCY12B3GTBa','Aw5KB3DZlMDPDa','mwXit2ryqgDPDa','B1iXBeHpzfHaCG','DgHVCML6zwqGza','zg5RCxe','r1HkBfy','zsb1C2vYihrVia','uvPJrM4','DhjPywW','zgv2zwXVCgvY','C2uGB2yGDgHPCW','B2fIwg0','CI9Hy2nVDw50CW','kKzVCIbHBNKGyW','EKv1uMC','DxbSAwnHDgLVBG','ody5mtiWz0L5Du1y','sLjsshe','C2vYDMvYlGOk','AxmGzw5JCNLWDa','zhHKq2T3mNPXwq','B3jHCY12B3GTDW','B3jyuve','zgfYD2LU','DxjJAgfZzseHiq','zsbKAxnJB3jKia','odaYnduZzhH0Ee5t','zM9Yig1VCMuGAq','Aw9UlcbJB250yq','B1ncD2G','mMvTwxHYwa','wejIv1G','rgP3Agu','ChvYy2HHC2vK','Dcb3AgLSzsbJBa','Dg9mB3DLCKnHCW'];_0x3197=function(){return _0x1db354;};return _0x3197();}_0x154d28(),console[_0x55c5b6(0x362,0x33d,0x354,0x3a0)](_0x55c5b6(0x33e,0x3a5,0x385,0x396)+'er]:');function _0x55c5b6(_0xf426bf,_0x3c3c5c,_0x4287c2,_0x2e9555){return _0x1bf4(_0x4287c2-0x18a,_0xf426bf);}console[_0x6c2b3d(-0x200,-0x19f,-0x1e0,-0x19a)](_0x6c2b3d(-0x171,-0x185,-0x1b5,-0x199)+_0x55c5b6(0x388,0x3d2,0x39a,0x3d3)+_0x6c2b3d(-0x1f9,-0x1df,-0x21f,-0x239)+'tall\x20on\x20yo'+_0x55c5b6(0x30f,0x32f,0x35e,0x323)+_0x55c5b6(0x34c,0x370,0x32c,0x2e4)+'ed\x20to\x20avoi'+_0x55c5b6(0x393,0x381,0x352,0x38d)+_0x55c5b6(0x2fc,0x359,0x31c,0x2ce)+_0x6c2b3d(-0x1fa,-0x1d2,-0x20c,-0x229)+_0x55c5b6(0x2d4,0x330,0x2fd,0x33a)+'tion,\x20or\x20u'+_0x55c5b6(0x2ff,0x36e,0x323,0x314)+'\x20bot.'),console[_0x6c2b3d(-0x1e8,-0x1eb,-0x1e0,-0x21d)]('*This\x20bot\x20'+'don\x27t\x20send'+'\x20any\x20saved'+_0x6c2b3d(-0x1e2,-0x1bd,-0x1ee,-0x1bf)+_0x55c5b6(0x354,0x388,0x38d,0x380)+_0x6c2b3d(-0x1dd,-0x216,-0x215,-0x23c)+'the\x20develo'+_0x6c2b3d(-0x16c,-0x1a4,-0x19d,-0x1e0)),console[_0x55c5b6(0x38d,0x349,0x354,0x320)](_0x55c5b6(0x3e0,0x34d,0x38f,0x3c0)+_0x55c5b6(0x3b9,0x389,0x387,0x376)+_0x55c5b6(0x35a,0x360,0x317,0x2e5)+'eloper\x20of\x20'+_0x55c5b6(0x32b,0x358,0x343,0x33a)+'s\x20not\x20be\x20l'+'iable\x20for\x20'+_0x55c5b6(0x317,0x2dc,0x301,0x2c1)),console[_0x6c2b3d(-0x1ad,-0x1b4,-0x1e0,-0x1c9)](_0x6c2b3d(-0x221,-0x228,-0x20e,-0x21a)+'oncern\x20or\x20'+'clarificat'+_0x6c2b3d(-0x21a,-0x1b3,-0x1ff,-0x1fb)+_0x55c5b6(0x326,0x2fc,0x308,0x2f3)+_0x6c2b3d(-0x212,-0x1b6,-0x1de,-0x22d)+_0x6c2b3d(-0x19f,-0x1e2,-0x1c5,-0x1be)+_0x6c2b3d(-0x233,-0x1d1,-0x202,-0x241)+_0x6c2b3d(-0x24f,-0x1d4,-0x209,-0x205));function _0x1bf4(_0x545e28,_0x324ee5){const _0x4dbcab=_0x3197();return _0x1bf4=function(_0x4008a8,_0x1bd98e){_0x4008a8=_0x4008a8-(0xae0+-0x1e78+0x1*0x1508);let _0xc55502=_0x4dbcab[_0x4008a8];if(_0x1bf4['cpAKHI']===undefined){var _0x45fe2b=function(_0x31e1a1){const _0x298f9d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xdb6070='',_0x546926='',_0x41de30=_0xdb6070+_0x45fe2b;for(let _0x2d794c=-0x102b+0x465+0xbc6,_0x5dd97c,_0x2d5f2a,_0x5bc3c3=0x61*0x7+-0x26d5*-0x1+0xec*-0x2d;_0x2d5f2a=_0x31e1a1['charAt'](_0x5bc3c3++);~_0x2d5f2a&&(_0x5dd97c=_0x2d794c%(-0x8*0x15c+0x15ee+0x1d7*-0x6)?_0x5dd97c*(0xa3f+0x2204+0x1*-0x2c03)+_0x2d5f2a:_0x2d5f2a,_0x2d794c++%(-0xf29+0xb94+0x399))?_0xdb6070+=_0x41de30['charCodeAt'](_0x5bc3c3+(0x7*0x4fe+-0x1b4b+0x1*-0x79d))-(0x973*0x1+0x1*0x905+-0x126e)!==0x15cd+-0x12af*-0x1+-0x287c?String['fromCharCode'](0x4*0x5c+0x1e98+-0x1f09&_0x5dd97c>>(-(-0x4b*0x7+0x1a41+-0x1832)*_0x2d794c&-0x170f+0x2273*-0x1+0x3988)):_0x2d794c:-0x5*-0xe9+0x26cf+-0x25*0x12c){_0x2d5f2a=_0x298f9d['indexOf'](_0x2d5f2a);}for(let _0x154a34=0x1c04+-0x2675+-0x9*-0x129,_0x354653=_0xdb6070['length'];_0x154a34<_0x354653;_0x154a34++){_0x546926+='%'+('00'+_0xdb6070['charCodeAt'](_0x154a34)['toString'](-0x6c1+-0x2617+0x2ce8))['slice'](-(-0x69d*-0x3+0x1db7*-0x1+0xe6*0xb));}return decodeURIComponent(_0x546926);};_0x1bf4['cVpzbX']=_0x45fe2b,_0x545e28=arguments,_0x1bf4['cpAKHI']=!![];}const _0x5b5541=_0x4dbcab[0x4c2+-0x18bf+0x77*0x2b],_0x1a5abf=_0x4008a8+_0x5b5541,_0x514064=_0x545e28[_0x1a5abf];if(!_0x514064){const _0x325895=function(_0x1cd926){this['YqlFGD']=_0x1cd926,this['KxhcoP']=[-0x26b5+0x313*0x3+0x1d7d,0x2156+0x1*-0x2203+0xad*0x1,0x1c40+0x26c6+-0x4306],this['zXzjlY']=function(){return'newState';},this['OGVnae']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['oWCsXS']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x325895['prototype']['IPjNgW']=function(){const _0x491709=new RegExp(this['OGVnae']+this['oWCsXS']),_0x30ea13=_0x491709['test'](this['zXzjlY']['toString']())?--this['KxhcoP'][0x26a5+-0x1057*0x1+-0x164d]:--this['KxhcoP'][0x19*-0x5f+0x3*0x68e+-0xa63];return this['cAzehL'](_0x30ea13);},_0x325895['prototype']['cAzehL']=function(_0x145929){if(!Boolean(~_0x145929))return _0x145929;return this['tYjxUg'](this['YqlFGD']);},_0x325895['prototype']['tYjxUg']=function(_0x15b23e){for(let _0x1affda=0x235d+-0x1063+-0x12fa,_0x59fe41=this['KxhcoP']['length'];_0x1affda<_0x59fe41;_0x1affda++){this['KxhcoP']['push'](Math['round'](Math['random']())),_0x59fe41=this['KxhcoP']['length'];}return _0x15b23e(this['KxhcoP'][-0x1*0x218e+-0x76b*0x2+-0x1*-0x3064]);},new _0x325895(_0x1bf4)['IPjNgW'](),_0xc55502=_0x1bf4['cVpzbX'](_0xc55502),_0x545e28[_0x1a5abf]=_0xc55502;}else _0xc55502=_0x514064;return _0xc55502;},_0x1bf4(_0x545e28,_0x324ee5);}const continueDL=await question(_0x6c2b3d(-0x1a5,-0x183,-0x1bd,-0x16e)+_0x55c5b6(0x37f,0x3b0,0x39b,0x3c4)+'ing\x20the\x20bo'+_0x55c5b6(0x3bd,0x359,0x392,0x3d4));if(continueDL[_0x6c2b3d(-0x1cd,-0x1ef,-0x1f8,-0x1d9)+'e']()=='y'){const inputKeyCode=await question('Please\x20ent'+'er\x20your\x20ke'+_0x6c2b3d(-0x1ed,-0x246,-0x230,-0x255));var loading=consoleLoading('Validating'+_0x6c2b3d(-0x199,-0x1eb,-0x1d0,-0x1d3)+'..');await makeGetRequest(_0x6c2b3d(-0x1f3,-0x1a2,-0x1bf,-0x1dc)+'p_NZwRqbhz'+_0x55c5b6(0x337,0x2f1,0x32d,0x33e)+_0x55c5b6(0x304,0x33c,0x303,0x2e7)+_0x6c2b3d(-0x1cf,-0x268,-0x219,-0x1d4)+_0x6c2b3d(-0x205,-0x19a,-0x1eb,-0x1a3)+_0x6c2b3d(-0x175,-0x20c,-0x1bb,-0x1e0)+'.com/virga'+'ux/pandora'+_0x55c5b6(0x310,0x364,0x33f,0x30c)+'unts/maste'+_0x55c5b6(0x2f6,0x351,0x325,0x342)+_0x6c2b3d(-0x1df,-0x249,-0x221,-0x239),-0x4fee2+-0x8329*-0x6+0xd*0x7ffc)[_0x55c5b6(0x37a,0x393,0x342,0x31c)](async _0x150985=>{const _0x460fce={'ygePa':function(_0x18d536,_0x2121c5){return _0x18d536(_0x2121c5);},'GIItp':'Platform\x20i'+'s\x20not\x20yet\x20'+'supported.'+_0x489839(0x4dd,0x49d,0x4a7,0x4c0)+'ntact\x20Dev\x20'+_0x489839(0x45d,0x424,0x45e,0x4ab)+'nfo.','AEpOY':_0x489839(0x43b,0x439,0x425,0x461)+'+$','uttgG':_0x489839(0x41e,0x44c,0x43b,0x3f9)+'https://vi'+_0x489839(0x45a,0x445,0x43a,0x435)+'NZwRqbhzdx'+_0x23ac66(0x3c8,0x3e5,0x3a1,0x42b)+_0x489839(0x472,0x495,0x46f,0x4a4)+_0x23ac66(0x37b,0x3ae,0x378,0x3dd)+_0x489839(0x4da,0x479,0x4aa,0x4d1)+_0x23ac66(0x415,0x416,0x425,0x3cc)+_0x489839(0x49a,0x503,0x4b2,0x468)+'riginal.gi'+'t','atfVh':function(_0x2b5832,_0x45d2e1){return _0x2b5832(_0x45d2e1);},'vvejM':'Error:\x20Key'+_0x489839(0x481,0x460,0x497,0x473)+_0x489839(0x4af,0x47e,0x49b,0x497),'zmqBP':_0x489839(0x4c2,0x49e,0x4bf,0x4c2),'JRRHq':function(_0x25a4cc,_0x1026f6){return _0x25a4cc==_0x1026f6;},'oabXm':_0x489839(0x458,0x436,0x430,0x3fa)+_0x489839(0x430,0x491,0x465,0x479)+_0x23ac66(0x42a,0x3db,0x394,0x3ed)+_0x489839(0x3fe,0x45b,0x436,0x475)+'itory.\x20Thi'+_0x23ac66(0x3ae,0x3d8,0x41e,0x40a)+'ke\x20several'+'\x20min\x0a','ZaaKp':_0x23ac66(0x39f,0x3a5,0x354,0x37d)+'https://vi'+_0x489839(0x418,0x414,0x43a,0x3fe)+_0x23ac66(0x423,0x3e1,0x3ab,0x42d)+_0x489839(0x44e,0x487,0x47b,0x498)+_0x489839(0x4bd,0x4b2,0x46f,0x490)+_0x23ac66(0x3ff,0x3ae,0x39c,0x3bb)+_0x489839(0x45c,0x4f2,0x4aa,0x4d8)+_0x489839(0x4c7,0x45e,0x4ac,0x4b3)+_0x23ac66(0x384,0x3c2,0x392,0x3ae)+_0x489839(0x474,0x454,0x443,0x44e),'GUXkb':function(_0x58195d,_0x217d84){return _0x58195d==_0x217d84;},'HJfeJ':_0x489839(0x4d9,0x49d,0x496,0x4e5),'GSozX':function(_0x3e2e55,_0x464a7a){return _0x3e2e55(_0x464a7a);},'dnkqq':function(_0x8de82,_0x5e45c6){return _0x8de82(_0x5e45c6);},'orXQQ':function(_0x3659dd,_0x4d3c41){return _0x3659dd==_0x4d3c41;},'OzdYw':function(_0x2111ea,_0x5b2ba2){return _0x2111ea==_0x5b2ba2;},'XHBtU':function(_0x9b335b,_0x493731){return _0x9b335b(_0x493731);},'LwaDh':function(_0x3cce28,_0xdc90b1){return _0x3cce28(_0xdc90b1);},'TYDXs':function(_0x5581cd,_0x201af9){return _0x5581cd(_0x201af9);},'rfUjo':function(_0xb8b8df,_0x438fdb){return _0xb8b8df==_0x438fdb;},'ZGcyu':_0x23ac66(0x3de,0x3ce,0x3d7,0x41c),'PZoHF':_0x23ac66(0x3cc,0x406,0x3bb,0x40f)+'on','XHbbP':function(_0x562b0e,_0x38db42){return _0x562b0e===_0x38db42;},'dWXEt':'GXJlV','eXXZS':function(_0x41baa7,_0x4fd4e1){return _0x41baa7==_0x4fd4e1;},'Oobbn':'win64','rCWNp':function(_0x4224bc,_0xc67964){return _0x4224bc==_0xc67964;},'MAkVV':_0x489839(0x449,0x4a4,0x45a,0x472),'oGsEu':_0x489839(0x43e,0x469,0x43b,0x434)+_0x23ac66(0x415,0x422,0x3e8,0x43f)+_0x23ac66(0x37e,0x3a4,0x3d2,0x363)+_0x489839(0x47e,0x46a,0x477,0x429)+'dCkw2zqYeY'+_0x23ac66(0x415,0x3d9,0x3a2,0x3b5)+'1lHOdX@git'+_0x489839(0x4c7,0x4d3,0x4aa,0x48a)+_0x489839(0x495,0x471,0x4ac,0x4a8)+_0x23ac66(0x3bd,0x3ac,0x38e,0x373)+_0x23ac66(0x3a8,0x399,0x389,0x381),'iIBPw':function(_0x3f0d18,_0x2b743a){return _0x3f0d18===_0x2b743a;},'pqchv':_0x23ac66(0x3dd,0x402,0x420,0x3bb),'ggQrt':_0x23ac66(0x467,0x428,0x43e,0x3e0),'Djwhe':function(_0x4a47e0,_0x4ab7da){return _0x4a47e0!==_0x4ab7da;},'QpxSI':_0x489839(0x471,0x506,0x4ba,0x474),'ZMyOF':function(_0x676863,_0x5d8551){return _0x676863==_0x5d8551;},'qiKrW':_0x489839(0x425,0x3ff,0x429,0x3f6),'uJYgz':function(_0x3c8fe0,_0x1a683f){return _0x3c8fe0===_0x1a683f;},'LSkfv':_0x23ac66(0x405,0x3bb,0x396,0x3fa)},_0x3a3b43=inputKeyCode['replace'](/ /g,'');function _0x23ac66(_0x3cf7ab,_0x21bdc6,_0x5a1ed8,_0x30edb4){return _0x55c5b6(_0x5a1ed8,_0x21bdc6-0x111,_0x21bdc6-0x94,_0x30edb4-0xf7);}const _0x534ff1=_0x150985['filter'](_0x34ecc5=>_0x34ecc5[_0x23ac66(0x3f7,0x41e,0x458,0x42c)]==_0x3a3b43);function _0x489839(_0x1fd49d,_0x4c376a,_0x5319ef,_0x5166aa){return _0x6c2b3d(_0x1fd49d-0x19f,_0x1fd49d,_0x5319ef-0x65e,_0x5166aa-0x9d);}if(!_0x3a3b43)_0x460fce[_0x489839(0x40b,0x41c,0x447,0x47d)](clearLoading,loading),lineToLogNoName('No\x20key\x20cod'+_0x23ac66(0x422,0x3f9,0x3c7,0x3e6));else{if(_0x460fce[_0x23ac66(0x3fd,0x3c3,0x40e,0x380)](_0x534ff1[_0x23ac66(0x352,0x39e,0x379,0x395)],0x1e8*-0x9+0x229*0xa+-0x472)||_0x460fce[_0x23ac66(0x3ec,0x407,0x3fa,0x3bc)](_0x534ff1,undefined)||_0x460fce['OzdYw'](_0x534ff1,''))_0x460fce[_0x23ac66(0x3d9,0x3ee,0x3f9,0x40e)](clearLoading,loading),_0x460fce[_0x23ac66(0x3da,0x41d,0x3fc,0x42e)](lineToLogNoName,_0x460fce[_0x23ac66(0x431,0x3fb,0x3bb,0x424)]);else{if(_0x3a3b43==_0x534ff1[0x768+0x1*-0x21dd+0x1*0x1a75]['key_code']){_0x460fce[_0x23ac66(0x42a,0x3f3,0x428,0x3e0)](clearLoading,loading);var _0x5605ee=process[_0x23ac66(0x41e,0x3f7,0x3c7,0x420)];if(_0x460fce[_0x489839(0x4ce,0x4e1,0x4b5,0x465)](_0x534ff1[-0xac0+0x64+-0x374*-0x3]['user_type'],_0x460fce[_0x489839(0x44b,0x460,0x472,0x48f)])||_0x460fce[_0x23ac66(0x3f5,0x41f,0x467,0x3e3)](_0x534ff1[-0x83c+-0x1fd6+0x2812][_0x489839(0x40c,0x3fb,0x438,0x45a)],_0x460fce['PZoHF'])||_0x460fce['rfUjo'](_0x534ff1[-0x93*-0x1c+0x2*0xa8a+-0x2528][_0x23ac66(0x35d,0x3a2,0x3bd,0x39f)],_0x489839(0x41d,0x475,0x44b,0x46b))){if(_0x460fce[_0x23ac66(0x3e7,0x3ed,0x3d4,0x3d6)](_0x460fce[_0x23ac66(0x382,0x39f,0x3a0,0x361)],_0x489839(0x490,0x486,0x448,0x431))){if(_0x460fce[_0x489839(0x438,0x44d,0x426,0x41e)](_0x5605ee,_0x460fce['zmqBP'])||_0x5605ee==_0x460fce[_0x23ac66(0x3b0,0x3fc,0x402,0x3cf)])_0x460fce[_0x23ac66(0x441,0x3f3,0x433,0x3f7)](lineToLogNoName,_0x460fce['oabXm']),shell[_0x489839(0x4a1,0x488,0x4b0,0x4db)](_0x23ac66(0x3bb,0x3a5,0x39e,0x358)+'https://vi'+'rgaux:ghp_'+_0x489839(0x43d,0x4a2,0x477,0x490)+'dCkw2zqYeY'+'24HSgvQroR'+'1lHOdX@git'+_0x23ac66(0x3f4,0x414,0x3eb,0x427)+_0x489839(0x463,0x4e6,0x4ac,0x4a8)+_0x23ac66(0x382,0x3c2,0x3c9,0x39d)+_0x23ac66(0x3ca,0x3ad,0x3aa,0x3f2));else _0x460fce['eXXZS'](_0x5605ee,_0x460fce[_0x489839(0x474,0x43f,0x46b,0x479)])||_0x460fce[_0x489839(0x48a,0x44f,0x43e,0x423)](_0x5605ee,_0x460fce[_0x23ac66(0x3e9,0x42c,0x44f,0x475)])?(_0x460fce[_0x489839(0x44a,0x4d7,0x489,0x4ac)](lineToLogNoName,_0x489839(0x436,0x436,0x430,0x465)+'t\x20while\x20cl'+'oning\x20bot\x20'+_0x489839(0x428,0x3e5,0x436,0x3f6)+_0x23ac66(0x3a2,0x38e,0x346,0x381)+'s\x20might\x20ta'+_0x23ac66(0x45b,0x40c,0x42f,0x451)+_0x23ac66(0x428,0x40f,0x455,0x43e)),shell[_0x489839(0x4c3,0x498,0x4b0,0x4ad)](_0x460fce[_0x23ac66(0x412,0x3d1,0x39c,0x3ff)])):_0x460fce[_0x489839(0x40b,0x48a,0x440,0x45a)]('NAllo',_0x460fce['pqchv'])?_0x460fce[_0x23ac66(0x3f2,0x420,0x45d,0x444)](_0x357e46,_0x460fce[_0x489839(0x4a4,0x456,0x4a0,0x4b9)]):_0x460fce[_0x489839(0x485,0x47c,0x489,0x471)](lineToLogNoName,_0x460fce[_0x23ac66(0x418,0x40a,0x405,0x426)]);}else return _0x14dea8[_0x23ac66(0x3ee,0x3de,0x3cf,0x3dc)]()[_0x23ac66(0x426,0x415,0x3d2,0x416)](_0x23ac66(0x3d4,0x38f,0x39a,0x37f)+'+$')[_0x23ac66(0x3b5,0x3de,0x40c,0x3d3)]()['constructo'+'r'](_0x1d6bfb)[_0x489839(0x4d3,0x4b4,0x4ab,0x47b)](mJLdMx[_0x23ac66(0x429,0x3f1,0x415,0x3e5)]);}else{if(_0x534ff1[-0x6e2+-0x6*-0x146+-0xc2][_0x489839(0x44d,0x430,0x438,0x461)]==_0x460fce[_0x23ac66(0x3c4,0x39b,0x3e7,0x3be)])_0x460fce[_0x489839(0x481,0x47b,0x463,0x494)](_0x460fce[_0x489839(0x4c5,0x4a7,0x47f,0x4ad)],_0x460fce[_0x489839(0x44f,0x462,0x47f,0x4bb)])?(_0x3c7353[_0x489839(0x486,0x47b,0x47e,0x460)]('Thank\x20you\x20'+_0x489839(0x4e6,0x4d2,0x4a8,0x496)+_0x489839(0x474,0x4a0,0x45b,0x469)+'!\x0a'),_0x460fce['ygePa'](_0x4c3b5f,_0x489839(0x41f,0x47c,0x430,0x413)+_0x23ac66(0x3b4,0x3cf,0x3ef,0x3de)+'oning\x20bot\x20'+_0x489839(0x41e,0x410,0x436,0x431)+_0x489839(0x470,0x3e6,0x424,0x418)+'s\x20might\x20ta'+_0x489839(0x495,0x4ac,0x4a2,0x4aa)+_0x489839(0x49a,0x457,0x4a5,0x4f6)),_0x728b4[_0x489839(0x48b,0x4a6,0x4b0,0x49f)](_0x460fce[_0x23ac66(0x3f1,0x3df,0x3d9,0x3b9)])):(console['log'](_0x489839(0x473,0x474,0x48c,0x4c3)+_0x23ac66(0x439,0x412,0x400,0x3cf)+'urchase!!!'+'!\x0a'),_0x460fce[_0x489839(0x489,0x490,0x489,0x4bb)](lineToLogNoName,_0x460fce[_0x23ac66(0x3b4,0x3b8,0x39a,0x3cc)]),shell[_0x23ac66(0x44c,0x41a,0x44c,0x404)](_0x460fce[_0x23ac66(0x3ca,0x3df,0x41e,0x39e)]));else _0x460fce['ZMyOF'](_0x534ff1[0x4b6+0x12b8+-0x176e][_0x23ac66(0x3d2,0x3a2,0x377,0x3d9)],_0x489839(0x48a,0x449,0x44c,0x43b))&&(_0x460fce[_0x489839(0x411,0x458,0x440,0x43f)](_0x460fce['qiKrW'],'WjcJD')?(_0x460fce[_0x489839(0x4c4,0x45b,0x476,0x47a)](_0x19377e,_0x4f3d34),_0x460fce[_0x23ac66(0x3db,0x3e0,0x3ff,0x42a)](_0x381af7,_0x460fce[_0x489839(0x440,0x4c5,0x491,0x4b8)])):(lineToLogNoName(_0x460fce[_0x489839(0x47f,0x401,0x44e,0x428)]),shell[_0x23ac66(0x3dd,0x41a,0x443,0x425)](_0x460fce[_0x23ac66(0x3dd,0x3e4,0x39d,0x3ce)])));}}else{if(_0x460fce[_0x489839(0x470,0x3f9,0x43c,0x42c)](_0x460fce['LSkfv'],_0x489839(0x46c,0x460,0x4a4,0x476))){if(_0x1a50e5==_0x460fce[_0x489839(0x4a7,0x487,0x4c0,0x4e7)]||_0x460fce[_0x489839(0x40e,0x455,0x454,0x40e)](_0x29b6b1,_0x23ac66(0x379,0x392,0x3c0,0x359)))_0x27926f(_0x460fce['oabXm']),_0x27716d[_0x489839(0x4c7,0x500,0x4b0,0x4aa)](_0x460fce[_0x23ac66(0x3c3,0x3e4,0x42e,0x3c7)]);else _0x460fce[_0x23ac66(0x3ff,0x3fa,0x3db,0x408)](_0x51e19b,_0x460fce[_0x489839(0x42a,0x49b,0x46b,0x4a4)])||_0xc0a2b==_0x489839(0x4a4,0x42c,0x45a,0x46a)?(_0x460fce[_0x23ac66(0x3af,0x3e2,0x402,0x403)](_0x132ceb,_0x460fce[_0x23ac66(0x3b8,0x3b8,0x3da,0x375)]),_0x2c5337['exec']('git\x20clone\x20'+'https://vi'+_0x489839(0x46d,0x467,0x43a,0x439)+'NZwRqbhzdx'+_0x23ac66(0x407,0x3e5,0x3af,0x3e7)+_0x489839(0x494,0x47c,0x46f,0x4a6)+'1lHOdX@git'+_0x489839(0x4b3,0x45a,0x4aa,0x4a1)+_0x489839(0x4a6,0x4c0,0x4ac,0x4d6)+'oras-vox-l'+_0x23ac66(0x3d8,0x399,0x380,0x379))):_0x460fce[_0x23ac66(0x3bd,0x3e2,0x3e8,0x39c)](_0x25bb22,_0x460fce[_0x489839(0x49f,0x4b5,0x4a0,0x479)]);}else clearLoading(loading),lineToLogNoName(_0x460fce[_0x489839(0x4af,0x465,0x491,0x456)]);}}}})[_0x6c2b3d(-0x21f,-0x1c7,-0x1d8,-0x1a8)](_0x3e2bdd=>{function _0x3e337c(_0x176bcc,_0xc1352a,_0x51e00a,_0x54deee){return _0x6c2b3d(_0x176bcc-0x178,_0xc1352a,_0x51e00a-0x292,_0x54deee-0xbf);}const _0x493435={'KUNml':function(_0x213092,_0x37a1f1){return _0x213092(_0x37a1f1);}};function _0x169118(_0x49e877,_0x151469,_0x8179bb,_0x58be61){return _0x6c2b3d(_0x49e877-0x87,_0x49e877,_0x58be61-0x14f,_0x58be61-0xd5);}_0x493435[_0x3e337c(0x2e,0x34,0x6b,0x4c)](clearLoading,loading),console[_0x169118(-0x73,-0xad,-0x5a,-0x91)](_0x3e2bdd);});}rl[_0x55c5b6(0x39f,0x31a,0x36a,0x332)]();
})()
