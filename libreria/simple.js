const _0x5c7e65=_0x2995;(function(_0x5c81a8,_0x400143){const _0x20e097=_0x2995,_0x4f4113=_0x5c81a8();while(!![]){try{const _0x4b9f5a=parseInt(_0x20e097(0x2ac))/0x1*(-parseInt(_0x20e097(0x22a))/0x2)+parseInt(_0x20e097(0x21b))/0x3*(parseInt(_0x20e097(0x279))/0x4)+-parseInt(_0x20e097(0x22b))/0x5*(parseInt(_0x20e097(0x1cf))/0x6)+-parseInt(_0x20e097(0x206))/0x7+-parseInt(_0x20e097(0x246))/0x8*(-parseInt(_0x20e097(0x1eb))/0x9)+parseInt(_0x20e097(0x231))/0xa+-parseInt(_0x20e097(0x257))/0xb*(-parseInt(_0x20e097(0x1f0))/0xc);if(_0x4b9f5a===_0x400143)break;else _0x4f4113['push'](_0x4f4113['shift']());}catch(_0x286083){_0x4f4113['push'](_0x4f4113['shift']());}}}(_0x47ec,0x83fdd));const fs=require('fs'),util=require(_0x5c7e65(0x256)),path=require(_0x5c7e65(0x2b2)),request=require(_0x5c7e65(0x2a9)),FileType=require(_0x5c7e65(0x2bb)),fetch=require(_0x5c7e65(0x2b5)),got=require(_0x5c7e65(0x28d)),{exec}=require(_0x5c7e65(0x29c)),{tmpdir}=require('os'),{MessageType,WAMessageProto,DEFAULT_ORIGIN,getAudioDuration,MessageTypeProto,MediaPathMap,Mimetype,MimetypeMap,compressImage,generateMessageID,randomBytes,getMediaKeys,aesEncrypWithIV,hmacSign,sha256,encryptedStream}=require(_0x5c7e65(0x292)),{toAudio,toPTT,toVideo}=require(_0x5c7e65(0x283)),{WAConnection}=require(_0x5c7e65(0x23c));function _0x2995(_0x23a098,_0x351225){const _0x47ec02=_0x47ec();return _0x2995=function(_0x29954d,_0x6950eb){_0x29954d=_0x29954d-0x1c7;let _0x355e67=_0x47ec02[_0x29954d];return _0x355e67;},_0x2995(_0x23a098,_0x351225);}exports[_0x5c7e65(0x269)]=_0x133b7e=>{const _0x307eaa=_0x5c7e65;class _0x5d0974 extends _0x133b7e{constructor(..._0x932f6){const _0x5f72c4=_0x2995;super(..._0x932f6);if(!Array[_0x5f72c4(0x259)](this[_0x5f72c4(0x27b)][_0x5f72c4(0x243)]))this[_0x5f72c4(0x27b)][_0x5f72c4(0x243)]=[this['_events'][_0x5f72c4(0x243)]];else this['_events'][_0x5f72c4(0x243)]=[this[_0x5f72c4(0x27b)][_0x5f72c4(0x243)][_0x5f72c4(0x1c9)]()];this['_events'][_0x5f72c4(0x243)][_0x5f72c4(0x235)](async function(_0x3af63e){const _0x42fb52=_0x5f72c4;try{let _0x1c6636=_0x3af63e[0x2][0x0][0x2];if(_0x1c6636[_0x42fb52(0x278)]&&_0x1c6636[_0x42fb52(0x278)]['protocolMessage']&&_0x1c6636['message'][_0x42fb52(0x208)]['type']==0x0){let _0x129c3e=_0x1c6636[_0x42fb52(0x278)]['protocolMessage'][_0x42fb52(0x23d)],_0xba98d1=this['chats'][_0x42fb52(0x290)](_0x129c3e['remoteJid']),_0x11ffff=_0xba98d1[_0x42fb52(0x274)]['dict'][_0x129c3e['id']+'|'+(_0x129c3e['fromMe']?0x1:0x0)],_0x248361=_0x129c3e[_0x42fb52(0x237)]?this[_0x42fb52(0x22f)]['jid']:_0x11ffff['participant']?_0x11ffff[_0x42fb52(0x266)]:_0x129c3e[_0x42fb52(0x1d9)],_0x506417=WAMessageProto[_0x42fb52(0x258)];this[_0x42fb52(0x209)](_0x42fb52(0x27c),{'key':_0x129c3e,'participant':_0x248361,'message':_0x506417[_0x42fb52(0x299)](_0x506417[_0x42fb52(0x281)](_0x11ffff))});}}catch(_0x360924){}}),this['on'](_0x5f72c4(0x239),_0x50b769=>{const _0x1956a1=_0x5f72c4;this['battery']=Object[_0x1956a1(0x202)](Object[_0x1956a1(0x24a)](_0x50b769[0x2][0x0][0x1])['map'](_0x128160=>[_0x128160[0x0],eval(_0x128160[0x1])]));}),this[_0x5f72c4(0x244)]=this['sendFileFromURL']=this[_0x5f72c4(0x21d)];}async['copyNForward'](_0x575b0e,_0x5ea918,_0xca5b3=![],_0x55954a={}){const _0x56310d=_0x2995;let _0x2709d5;_0x55954a[_0x56310d(0x225)]&&(_0x5ea918[_0x56310d(0x278)]=_0x5ea918['message']&&_0x5ea918[_0x56310d(0x278)]['ephemeralMessage']&&_0x5ea918['message'][_0x56310d(0x28a)]['message']?_0x5ea918[_0x56310d(0x278)]['ephemeralMessage']['message']:_0x5ea918[_0x56310d(0x278)]||undefined,_0x2709d5=Object[_0x56310d(0x1d8)](_0x5ea918['message'][_0x56310d(0x20d)]['message'])[0x0],delete(_0x5ea918[_0x56310d(0x278)]&&_0x5ea918[_0x56310d(0x278)][_0x56310d(0x24f)]?_0x5ea918[_0x56310d(0x278)]['ignore']:_0x5ea918[_0x56310d(0x278)]||undefined),delete _0x5ea918[_0x56310d(0x278)][_0x56310d(0x20d)][_0x56310d(0x278)][_0x2709d5][_0x56310d(0x236)],_0x5ea918[_0x56310d(0x278)]={..._0x5ea918[_0x56310d(0x278)][_0x56310d(0x20d)][_0x56310d(0x278)]});let _0x31823b=Object['keys'](_0x5ea918[_0x56310d(0x278)])[0x0],_0x168d71=await this[_0x56310d(0x211)](_0x5ea918,_0xca5b3),_0x262f50=Object['keys'](_0x168d71)[0x0],_0x313303={};if(_0x31823b!=MessageType[_0x56310d(0x23f)])_0x313303=_0x5ea918[_0x56310d(0x278)][_0x31823b]['contextInfo'];_0x168d71[_0x262f50]['contextInfo']={..._0x313303,..._0x168d71[_0x262f50]['contextInfo']};const _0x4cac76=await this[_0x56310d(0x224)](_0x575b0e,_0x168d71,_0x55954a?{..._0x168d71[_0x262f50],..._0x55954a,..._0x55954a[_0x56310d(0x28b)]?{'contextInfo':{..._0x168d71[_0x262f50][_0x56310d(0x28b)],..._0x55954a[_0x56310d(0x28b)]}}:{}}:{});return await this[_0x56310d(0x2a7)](_0x4cac76),_0x4cac76;}[_0x307eaa(0x2b4)](_0x2312c8,_0x195591,_0x39685c='',_0x1965af=this['user'][_0x307eaa(0x28e)],_0x41fba4={}){const _0xff1579=_0x307eaa;let _0x136b67=_0x195591[_0xff1579(0x29e)](),_0x349fa5=Object[_0xff1579(0x1d8)](_0x136b67[_0xff1579(0x278)])[0x0],_0x5ba936=_0x349fa5===_0xff1579(0x28a);_0x5ba936&&(_0x349fa5=Object[_0xff1579(0x1d8)](_0x136b67[_0xff1579(0x278)][_0xff1579(0x28a)][_0xff1579(0x278)])[0x0]);let _0x32be2a=_0x5ba936?_0x136b67[_0xff1579(0x278)][_0xff1579(0x28a)]['message']:_0x136b67['message'],_0x16a2f0=_0x32be2a[_0x349fa5];if(typeof _0x16a2f0==='string')_0x32be2a[_0x349fa5]=_0x39685c||_0x16a2f0;else{if(_0x16a2f0['caption'])_0x16a2f0[_0xff1579(0x27e)]=_0x39685c||_0x16a2f0[_0xff1579(0x27e)];else{if(_0x16a2f0['text'])_0x16a2f0[_0xff1579(0x23f)]=_0x39685c||_0x16a2f0[_0xff1579(0x23f)];}}if(typeof _0x16a2f0!==_0xff1579(0x1fc))_0x32be2a[_0x349fa5]={..._0x16a2f0,..._0x41fba4};if(_0x136b67[_0xff1579(0x266)])_0x1965af=_0x136b67[_0xff1579(0x266)]=_0x1965af||_0x136b67[_0xff1579(0x266)];else{if(_0x136b67['key'][_0xff1579(0x266)])_0x1965af=_0x136b67[_0xff1579(0x23d)][_0xff1579(0x266)]=_0x1965af||_0x136b67['key'][_0xff1579(0x266)];}if(_0x136b67[_0xff1579(0x23d)][_0xff1579(0x1d9)][_0xff1579(0x205)](_0xff1579(0x2af)))_0x1965af=_0x1965af||_0x136b67[_0xff1579(0x23d)][_0xff1579(0x1d9)];else{if(_0x136b67[_0xff1579(0x23d)][_0xff1579(0x1d9)][_0xff1579(0x205)](_0xff1579(0x247)))_0x1965af=_0x1965af||_0x136b67['key'][_0xff1579(0x1d9)];}return _0x136b67[_0xff1579(0x23d)]['remoteJid']=_0x2312c8,_0x136b67[_0xff1579(0x23d)][_0xff1579(0x237)]=_0x1965af===this[_0xff1579(0x22f)]['jid'],WAMessageProto[_0xff1579(0x258)][_0xff1579(0x299)](_0x136b67);}async[_0x307eaa(0x1ef)](_0x36455c,_0x4c5e2e){const _0x43d14c=_0x307eaa;let _0x4cd6bf={};switch(type){case MessageType[_0x43d14c(0x23f)]:case MessageType['extendedText']:if(typeof _0x36455c==='string')_0x36455c={'text':_0x36455c};_0x4cd6bf['extendedTextMessage']=WAMessageProto[_0x43d14c(0x22c)]['fromObject'](_0x36455c);break;case MessageType[_0x43d14c(0x226)]:case MessageType[_0x43d14c(0x1f9)]:_0x4cd6bf[_0x43d14c(0x2a5)]=WAMessageProto[_0x43d14c(0x1f1)][_0x43d14c(0x299)](_0x36455c);break;case MessageType['contact']:_0x4cd6bf[_0x43d14c(0x27a)]=WAMessageProto['ContactMessage'][_0x43d14c(0x299)](_0x36455c);break;case MessageType[_0x43d14c(0x210)]:_0x4cd6bf[_0x43d14c(0x1e8)]=WAMessageProto[_0x43d14c(0x28c)][_0x43d14c(0x299)](_0x36455c);break;case MessageType[_0x43d14c(0x240)]:_0x4cd6bf[_0x43d14c(0x240)]=WAMessageProto['GroupInviteMessage'][_0x43d14c(0x299)](_0x36455c);break;case MessageType['listMessage']:_0x4cd6bf['listMessage']=WAMessageProto[_0x43d14c(0x1da)][_0x43d14c(0x299)](_0x36455c);break;case MessageType[_0x43d14c(0x270)]:_0x4cd6bf[_0x43d14c(0x270)]=WAMessageProto['ButtonsMessage']['fromObject'](_0x36455c);break;case MessageType[_0x43d14c(0x1fd)]:case MessageType[_0x43d14c(0x253)]:case MessageType[_0x43d14c(0x28f)]:case MessageType[_0x43d14c(0x1fb)]:case MessageType['audio']:_0x4cd6bf=await this[_0x43d14c(0x242)](_0x36455c,type,_0x4c5e2e);break;case _0x43d14c(0x2a2):_0x4cd6bf[_0x43d14c(0x2a2)]=WAMessageProto[_0x43d14c(0x2ab)][_0x43d14c(0x299)](_0x36455c);}return WAMessageProto[_0x43d14c(0x21e)][_0x43d14c(0x299)](_0x4cd6bf);}[_0x307eaa(0x20c)](_0x257a38,_0xf9e1e2=()=>!![],_0x1fffab=0x19){return new Promise((_0x37754a,_0x15ddb4)=>{let _0x5ca7f5=0x0,_0x306125=(..._0x14dfbb)=>{const _0xde5fb1=_0x2995;if(++_0x5ca7f5>_0x1fffab)_0x15ddb4(_0xde5fb1(0x277));else _0xf9e1e2()&&(this['off'](_0x257a38,_0x306125),_0x37754a(..._0x14dfbb));};this['on'](_0x257a38,_0x306125);});}async[_0x307eaa(0x29f)](_0x1dfda6,_0x35b380,_0x9d9749,_0x25de9d,_0x3428ae){const _0x3ef5c1=_0x307eaa;_0x35b380=_0x35b380[_0x3ef5c1(0x203)](/[^0-9]/g,'');let _0x204bd1=_0x35b380+_0x3ef5c1(0x2af),{isBusiness:_0x44f8b7}=await this[_0x3ef5c1(0x26d)](_0x204bd1)||{'isBusiness':![]},_0x30bbc5=(_0x3ef5c1(0x288)+_0x9d9749[_0x3ef5c1(0x203)](/\n/g,'\x5cn')+_0x3ef5c1(0x1f2)+_0x9d9749[_0x3ef5c1(0x203)](/\n/g,'\x5cn')+_0x3ef5c1(0x227)+_0x35b380+':'+PhoneNumber('+'+_0x35b380)['getNumber'](_0x3ef5c1(0x22d))+(_0x44f8b7?_0x3ef5c1(0x204)+(this[_0x3ef5c1(0x2b1)][_0x204bd1][_0x3ef5c1(0x1c8)]||this['getName'](_0x204bd1))[_0x3ef5c1(0x203)](/\n/,'\x5cn')+_0x3ef5c1(0x234)+((await this[_0x3ef5c1(0x251)](_0x204bd1))['description']||'')['replace'](/\n/g,'\x5cn')+'\x0a':'')+_0x3ef5c1(0x1db))[_0x3ef5c1(0x1c7)]();return await this[_0x3ef5c1(0x25c)](_0x1dfda6,{'displayName':_0x9d9749,'vcard':_0x30bbc5},MessageType[_0x3ef5c1(0x26b)],{'quoted':_0x25de9d,..._0x3428ae});}async['sendGroupV4Invite'](_0x188fc8,_0x158b09,_0x39dadf,_0x3428ed,_0x47f198='unknown\x20subject',_0x4b8942=_0x307eaa(0x27d),_0x4fb897={}){const _0x32e714=_0x307eaa;let _0x50341b=WAMessageProto[_0x32e714(0x21e)][_0x32e714(0x299)]({'groupInviteMessage':WAMessageProto['GroupInviteMessage']['fromObject']({'inviteCode':_0x39dadf,'inviteExpiration':parseInt(_0x3428ed)||+new Date(new Date()+0x3*0x5265c00),'groupJid':_0x188fc8,'groupName':_0x47f198?_0x47f198:this[_0x32e714(0x241)](_0x188fc8),'caption':_0x4b8942})}),_0xf40fe0=await this[_0x32e714(0x224)](_0x158b09,_0x50341b,_0x4fb897);return await this[_0x32e714(0x2a7)](_0xf40fe0),_0xf40fe0;}['fetchRequest']=async(_0x1f5fb6,_0x2007a1=_0x307eaa(0x1e3),_0x3317e0,_0xaa8360,_0x82420,_0x5032a8=_0x307eaa(0x20b))=>{const _0x343d61=_0x307eaa;try{let _0x218a0b=await fetch(_0x1f5fb6,{'method':_0x2007a1,'body':_0x3317e0,'redirect':_0x5032a8,'headers':{'Origin':DEFAULT_ORIGIN,..._0x82420||{}},'agent':_0xaa8360||this[_0x343d61(0x271)][_0x343d61(0x284)]});return await _0x218a0b[_0x343d61(0x29a)]();}catch(_0xb8fb64){console[_0x343d61(0x1e1)](_0xb8fb64);let _0x13ed39=await got(_0x1f5fb6,{'method':_0x2007a1,'body':_0x3317e0,'followRedirect':_0x5032a8==_0x343d61(0x20b)?!![]:![],'headers':{'Origin':DEFAULT_ORIGIN,..._0x82420||{}},'agent':{'https':_0xaa8360||this[_0x343d61(0x271)][_0x343d61(0x284)]}});return JSON['parse'](_0x13ed39['body']);}};async[_0x307eaa(0x242)](_0x323649,_0x31ad3f,_0x340203={}){const _0x211c90=_0x307eaa;await this['waitForConnection']();if(_0x31ad3f===MessageType[_0x211c90(0x28f)]&&!_0x340203[_0x211c90(0x25b)])throw new Error(_0x211c90(0x24c));if(_0x31ad3f===MessageType[_0x211c90(0x253)]&&_0x340203[_0x211c90(0x27e)])throw new Error(_0x211c90(0x25f));if(!(_0x31ad3f===MessageType['image']||_0x31ad3f===MessageType[_0x211c90(0x1fb)])&&_0x340203[_0x211c90(0x236)])throw new Error(_0x211c90(0x223)+_0x31ad3f+'\x20as\x20a\x20viewOnceMessage');!_0x340203[_0x211c90(0x25b)]&&(_0x340203[_0x211c90(0x25b)]=MimetypeMap[_0x31ad3f]);let _0x3c9349=![];_0x340203[_0x211c90(0x25b)]===Mimetype[_0x211c90(0x249)]&&(_0x3c9349=!![],_0x340203[_0x211c90(0x25b)]=MimetypeMap[MessageType['video']]);const _0x1833b8=(_0x31ad3f===MessageType[_0x211c90(0x1fd)]||_0x31ad3f===MessageType[_0x211c90(0x1fb)])&&!(_0x211c90(0x1d0)in _0x340203),_0x56a710=_0x31ad3f===MessageType[_0x211c90(0x2ba)]&&!_0x340203[_0x211c90(0x24b)],_0x8f7f18=_0x56a710||_0x1833b8,_0x12ff58=randomBytes(0x20),_0x5825c6=getMediaKeys(_0x12ff58,_0x31ad3f),_0x186de8=aesEncrypWithIV(_0x323649,_0x5825c6[_0x211c90(0x1ee)],_0x5825c6['iv']),_0x17f541=hmacSign(Buffer[_0x211c90(0x286)]([_0x5825c6['iv'],_0x186de8]),_0x5825c6['macKey'])[_0x211c90(0x293)](0x0,0xa),_0x12d31d=Buffer[_0x211c90(0x286)]([_0x186de8,_0x17f541]),_0x4c8394=sha256(_0x323649),_0x423732=sha256(_0x12d31d),{encBodyPath:_0x4d01dd,bodyPath:_0x2c0fb2,fileLength:_0x757cc5,didSaveToTmpPath:_0x2d5f33}=await encryptedStream(_0x323649,_0x31ad3f,_0x8f7f18),_0x2d9581=encodeURIComponent(_0x423732[_0x211c90(0x26e)]('base64')['replace'](/\+/g,'-')[_0x211c90(0x203)](/\//g,'_')[_0x211c90(0x203)](/\=+$/,''));if(_0x1833b8)await generateThumbnail(_0x2c0fb2,_0x31ad3f,_0x340203);if(_0x56a710)try{_0x340203['duration']=await getAudioDuration(_0x2c0fb2);}catch(_0x284e88){this['logger'][_0x211c90(0x273)]({'error':_0x284e88},'failed\x20to\x20obtain\x20audio\x20duration:\x20'+_0x284e88[_0x211c90(0x278)]);}let _0x57914a=await this['refreshMediaConn'](_0x340203[_0x211c90(0x2aa)]),_0xf66118='';for(let _0x1d6e83 of _0x57914a[_0x211c90(0x1d6)]){const _0x573385=encodeURIComponent(_0x57914a['auth']),_0x4a6e5b=_0x211c90(0x2a0)+_0x1d6e83['hostname']+MediaPathMap[_0x31ad3f]+'/'+_0x2d9581+_0x211c90(0x23e)+_0x573385+'&token='+_0x2d9581;try{const _0x165219=await this[_0x211c90(0x1dc)](_0x4a6e5b,_0x211c90(0x287),_0x12d31d,_0x340203[_0x211c90(0x254)],{'Content-Type':_0x211c90(0x27f)});_0xf66118=_0x165219&&_0x165219['url']?_0x165219[_0x211c90(0x1e2)]:undefined;if(_0xf66118)break;else{_0x57914a=await this[_0x211c90(0x291)](!![]);throw new Error(_0x211c90(0x1f7)+JSON['stringify'](_0x165219));}}catch(_0x450804){const _0x34072b=_0x1d6e83[_0x211c90(0x1f6)]===_0x57914a[_0x211c90(0x1d6)][_0x57914a[_0x211c90(0x1d6)][_0x211c90(0x1cc)]-0x1][_0x211c90(0x1f6)];this['logger'][_0x211c90(0x1e1)](_0x211c90(0x25d)+_0x1d6e83['hostname']+(_0x34072b?'':_0x211c90(0x1f8)));}}if(!_0xf66118)throw new Error('Media\x20upload\x20failed\x20on\x20all\x20hosts');await Promise[_0x211c90(0x220)]([fs[_0x211c90(0x20e)][_0x211c90(0x1fe)](_0x4d01dd),_0x2d5f33&&_0x2c0fb2&&fs[_0x211c90(0x20e)][_0x211c90(0x1fe)](_0x2c0fb2)][_0x211c90(0x1e9)](_0xcf760d=>typeof _0xcf760d=='boolean'));const _0x201545={[_0x31ad3f]:MessageTypeProto[_0x31ad3f][_0x211c90(0x299)]({'url':_0xf66118,'mediaKey':_0x12ff58,'mimetype':_0x340203[_0x211c90(0x25b)],'fileEncSha256':_0x423732,'fileSha256':_0x4c8394,'fileLength':_0x757cc5,'seconds':_0x340203['duration'],'fileName':_0x340203[_0x211c90(0x1df)]||_0x211c90(0x217),'gifPlayback':_0x3c9349||undefined,'caption':_0x340203[_0x211c90(0x27e)],'ptt':_0x340203[_0x211c90(0x1dd)],'viewOnce':_0x340203[_0x211c90(0x236)]})};return WAMessageProto['Message'][_0x211c90(0x299)](_0x201545);}async[_0x307eaa(0x255)](_0x3670b2){const _0x2b3e1f=_0x307eaa;let _0x3d75bf,_0x74856a=Buffer[_0x2b3e1f(0x2b9)](_0x3670b2)?_0x3670b2:/^data:.*?\/.*?;base64,/i[_0x2b3e1f(0x250)](_0x3670b2)?Buffer[_0x2b3e1f(0x23b)](_0x3670b2[_0x2b3e1f(0x2b6)]`,`[0x1],_0x2b3e1f(0x1ca)):/^https?:\/\//['test'](_0x3670b2)?await(_0x3d75bf=await fetch(_0x3670b2))['buffer']():fs['existsSync'](_0x3670b2)?fs[_0x2b3e1f(0x26c)](_0x3670b2):typeof _0x3670b2===_0x2b3e1f(0x1fc)?_0x3670b2:Buffer[_0x2b3e1f(0x2a6)](0x0);if(!Buffer[_0x2b3e1f(0x2b9)](_0x74856a))throw new TypeError('Result\x20is\x20not\x20a\x20buffer');let _0x2e8fd7=await FileType[_0x2b3e1f(0x2a1)](_0x74856a)||{'mime':_0x2b3e1f(0x27f),'ext':'.bin'};return{'res':_0x3d75bf,..._0x2e8fd7,'data':_0x74856a};}async[_0x307eaa(0x1ff)](_0x5d43bd,_0x4f9a5a,_0x44882f,_0x80c4c0,_0x4fb962){const _0x47ca0e=_0x307eaa;await download(_0x4f9a5a,_0x47ca0e(0x1d4),async({buffer:_0x21fc89,filename:_0x2e3cc3})=>{const _0x3f2300=_0x47ca0e;let _0x620b2c;if(fs[_0x3f2300(0x20a)](_0x2e3cc3)){_0x620b2c=await(await this[_0x3f2300(0x255)](_0x2e3cc3))['data'];if(!Buffer['isBuffer'](_0x620b2c))_0x620b2c=await fs[_0x3f2300(0x26c)](_0x2e3cc3);}else{if(Buffer[_0x3f2300(0x2b9)](_0x21fc89))_0x620b2c=await _0x21fc89;}if(!Buffer[_0x3f2300(0x2b9)](_0x620b2c))throw new TypeError(_0x3f2300(0x289));return await this[_0x3f2300(0x25c)](_0x5d43bd,_0x620b2c,MessageType[_0x3f2300(0x1fb)],{'caption':_0x44882f,'quoted':_0x80c4c0,..._0x4fb962});});}async[_0x307eaa(0x282)](_0x13d26e,_0x4afc40,_0x2803b3,_0x208283,_0x2a2752,_0x18dd40={}){const _0x428096=_0x307eaa,_0x53b57e=[{'buttonId':_0x2a2752,'buttonText':{'displayText':_0x208283},'type':0x1}],_0xd7e573={'contentText':_0x4afc40,'footerText':_0x2803b3,'buttons':_0x53b57e,'headerType':0x1};await this[_0x428096(0x25c)](_0x13d26e,_0xd7e573,MessageType[_0x428096(0x270)],{..._0x18dd40});}async['sendButtonImg'](_0x35b15e,_0x4f1f56,_0x2d5b5f,_0x1035d7,_0x490d6f,_0x2f3682,_0x5a410d={}){const _0x35e0b4=_0x307eaa,_0x3e2d60=await this[_0x35e0b4(0x263)](_0x35b15e,_0x2d5b5f,MessageType[_0x35e0b4(0x1fd)]),_0x34b7d8=[{'buttonId':_0x2f3682,'buttonText':{'displayText':_0x490d6f},'type':0x1}],_0x1bdff7={'contentText':_0x4f1f56,'footerText':_0x1035d7,'buttons':_0x34b7d8,'headerType':0x4,'imageMessage':_0x3e2d60[_0x35e0b4(0x278)][_0x35e0b4(0x248)]};await this[_0x35e0b4(0x25c)](_0x35b15e,_0x1bdff7,MessageType[_0x35e0b4(0x270)],{..._0x5a410d});}async[_0x307eaa(0x29b)](_0x1fcf60,_0x3ae0ba,_0x54ca44,_0x341e9a,_0x3c2b85,_0x37823b,_0x4b681b,_0x375348,_0x5b494c={}){const _0x30e5f5=_0x307eaa,_0x46c02f=await this[_0x30e5f5(0x263)](_0x1fcf60,_0x54ca44,MessageType['image']),_0x23a8bb=[{'buttonId':_0x37823b,'buttonText':{'displayText':_0x3c2b85},'type':0x1},{'buttonId':_0x375348,'buttonText':{'displayText':_0x4b681b},'type':0x1}],_0x457fb1={'contentText':_0x3ae0ba,'footerText':_0x341e9a,'buttons':_0x23a8bb,'headerType':0x4,'imageMessage':_0x46c02f[_0x30e5f5(0x278)][_0x30e5f5(0x248)]};await this[_0x30e5f5(0x25c)](_0x1fcf60,_0x457fb1,MessageType[_0x30e5f5(0x270)],{..._0x5b494c});}async[_0x307eaa(0x280)](_0x4d937d,_0xc25a2e,_0x46424b,_0x5499aa,_0x3d23c5,_0x1d58d2,_0xddc1a2,_0x4b68d0={}){const _0x373361=_0x307eaa,_0x3d6e5c=[{'buttonId':_0x3d23c5,'buttonText':{'displayText':_0x5499aa},'type':0x1},{'buttonId':_0xddc1a2,'buttonText':{'displayText':_0x1d58d2},'type':0x1}],_0x242296={'contentText':_0xc25a2e,'footerText':_0x46424b,'buttons':_0x3d6e5c,'headerType':0x1};await this[_0x373361(0x25c)](_0x4d937d,_0x242296,MessageType[_0x373361(0x270)],{..._0x4b68d0});}async[_0x307eaa(0x1e4)](_0x4ed29d,_0x1e8935,_0x308b95,_0x1e55e9,_0x5b527f,_0x2c1ec5,_0x3d583e,_0x473a52,_0x51b60c,_0x8e10c9={}){const _0xa9a8f9=_0x307eaa,_0x35eacf=[{'buttonId':_0x5b527f,'buttonText':{'displayText':_0x1e55e9},'type':0x1},{'buttonId':_0x3d583e,'buttonText':{'displayText':_0x2c1ec5},'type':0x1},{'buttonId':_0x51b60c,'buttonText':{'displayText':_0x473a52},'type':0x1}],_0x20d57f={'contentText':_0x1e8935,'footerText':_0x308b95,'buttons':_0x35eacf,'headerType':0x1};await this[_0xa9a8f9(0x25c)](_0x4ed29d,_0x20d57f,MessageType[_0xa9a8f9(0x270)],{..._0x8e10c9});}async[_0x307eaa(0x21d)](_0x1bba1e,_0x38ce10,_0x231d9f='',_0x3b5b6b='',_0x589aa7,_0x4b71fd=![],_0x1bbfc2={}){const _0x2a12a8=_0x307eaa;let _0x5aad34=await this[_0x2a12a8(0x255)](_0x38ce10),{res:_0x3675d6,data:_0x462d6e}=_0x5aad34;if(_0x3675d6&&_0x3675d6['status']!==0xc8||_0x462d6e[_0x2a12a8(0x1cc)]<=0x10000)try{throw{'json':JSON['parse'](_0x462d6e[_0x2a12a8(0x26e)]())};}catch(_0x3a48c4){if(_0x3a48c4[_0x2a12a8(0x29a)])throw _0x3a48c4['json'];}let _0x5ba73e={'filename':_0x231d9f,'caption':_0x3b5b6b};if(_0x589aa7)_0x5ba73e[_0x2a12a8(0x245)]=_0x589aa7;if(!_0x5aad34){if(_0x1bbfc2['asDocument'])_0x1bbfc2[_0x2a12a8(0x1ce)]=!![];}let _0xdc8fc0='';if(_0x1bbfc2['asSticker'])_0xdc8fc0=MessageType['sticker'];else{if(!_0x1bbfc2['asDocument']&&!_0x1bbfc2[_0x2a12a8(0x297)]){if(_0x1bbfc2['force'])_0x462d6e=_0x462d6e;else{if(/audio/[_0x2a12a8(0x250)](_0x5aad34[_0x2a12a8(0x2b8)]))_0x462d6e=await(_0x4b71fd?toPTT:toAudio)(_0x462d6e,_0x5aad34[_0x2a12a8(0x214)]);}if(/webp/[_0x2a12a8(0x250)](_0x5aad34[_0x2a12a8(0x2b8)])&&_0x462d6e['length']<=0x1<<0x14)_0xdc8fc0=MessageType[_0x2a12a8(0x253)];else{if(/image/[_0x2a12a8(0x250)](_0x5aad34[_0x2a12a8(0x2b8)]))_0xdc8fc0=MessageType['image'];else{if(/video/[_0x2a12a8(0x250)](_0x5aad34[_0x2a12a8(0x2b8)]))try{return await this['sendVideo'](_0x1bba1e,_0x462d6e,_0x3b5b6b,_0x589aa7,{..._0x5ba73e,..._0x1bbfc2});}catch(_0x548f09){console[_0x2a12a8(0x1e1)](_0x2a12a8(0x212),_0x548f09),_0x462d6e=await toVideo(_0x462d6e,_0x5aad34[_0x2a12a8(0x214)]),_0xdc8fc0=MessageType[_0x2a12a8(0x1fb)];}else _0x5ba73e[_0x2a12a8(0x1d7)]=_0x5ba73e[_0x2a12a8(0x27e)]=_0x231d9f;}}if(_0x1bbfc2[_0x2a12a8(0x215)]&&_0xdc8fc0===MessageType[_0x2a12a8(0x1fb)])_0xdc8fc0=MessageType[_0x2a12a8(0x249)];if(/audio/[_0x2a12a8(0x250)](_0x5aad34[_0x2a12a8(0x2b8)])){_0xdc8fc0=MessageType[_0x2a12a8(0x2ba)];if(!_0x4b71fd)_0x5ba73e[_0x2a12a8(0x25b)]='audio/mp4';_0x5ba73e['ptt']=_0x4b71fd;}else{if(/pdf/['test'](_0x5aad34[_0x2a12a8(0x214)]))_0xdc8fc0=MessageType[_0x2a12a8(0x268)];else!_0xdc8fc0&&(_0xdc8fc0=MessageType[_0x2a12a8(0x28f)],_0x5ba73e['mimetype']=_0x5aad34[_0x2a12a8(0x2b8)]);}}else _0xdc8fc0=_0x1bbfc2[_0x2a12a8(0x297)]?_0x1bbfc2['type']:MessageType[_0x2a12a8(0x28f)],_0x5ba73e[_0x2a12a8(0x25b)]=_0x5aad34[_0x2a12a8(0x2b8)];}delete _0x1bbfc2[_0x2a12a8(0x1ce)],delete _0x1bbfc2[_0x2a12a8(0x215)],delete _0x1bbfc2[_0x2a12a8(0x1ec)],delete _0x1bbfc2[_0x2a12a8(0x297)];if(_0xdc8fc0===MessageType[_0x2a12a8(0x28f)])_0x5ba73e[_0x2a12a8(0x221)]=_0x231d9f;if(_0xdc8fc0===MessageType[_0x2a12a8(0x253)]||!_0x5ba73e[_0x2a12a8(0x27e)])delete _0x5ba73e[_0x2a12a8(0x27e)];return await this[_0x2a12a8(0x25c)](_0x1bba1e,_0x462d6e,_0xdc8fc0,{..._0x5ba73e,..._0x1bbfc2});}[_0x307eaa(0x1ea)](_0x4b4068,_0x56372f,_0x5420bc,_0x22b69a){const _0x150d96=_0x307eaa;return Buffer['isBuffer'](_0x56372f)?this[_0x150d96(0x21d)](_0x4b4068,_0x56372f,'file','',_0x5420bc,![],_0x22b69a):this[_0x150d96(0x25c)](_0x4b4068,_0x56372f,MessageType['extendedText'],{'contextInfo':{'mentionedJid':this['parseMention'](_0x56372f)},'quoted':_0x5420bc,..._0x22b69a});}[_0x307eaa(0x2b7)](_0x2669ec,_0x163d8d='',_0x5a3b4c=this[_0x307eaa(0x22f)]['jid'],_0x57e1fc='',_0x489193,_0x595924){const _0x51fadc=_0x307eaa;return this[_0x51fadc(0x1ea)](_0x2669ec,_0x163d8d,{'key':{'fromMe':_0x5a3b4c==this[_0x51fadc(0x22f)][_0x51fadc(0x28e)],'participant':_0x5a3b4c,..._0x489193?{'remoteJid':_0x489193}:{}},'message':{'conversation':_0x57e1fc},..._0x595924});}async[_0x307eaa(0x298)](_0x410cac,_0x33a0e0,_0x1838cf,_0x1a6a81,_0x53cfe6,_0x51f625,_0x7b233f={},_0xc38fbe={},_0x5b5f6b){const _0x39e92a=_0x307eaa;let _0x4dc581=await this[_0x39e92a(0x263)](_0x410cac,_0x53cfe6,_0x51f625,_0xc38fbe);_0x4dc581=this['cMod'](_0x410cac,_0x4dc581,undefined,_0x1a6a81);if(_0x5b5f6b)_0x4dc581[_0x39e92a(0x23d)][_0x39e92a(0x1d9)]=_0x5b5f6b;else delete _0x4dc581[_0x39e92a(0x23d)][_0x39e92a(0x1d9)];return await this[_0x39e92a(0x263)](_0x410cac,_0x33a0e0,_0x1838cf,{'quoted':_0x4dc581,..._0x7b233f});}[_0x307eaa(0x1e6)](_0x3500d3=''){const _0x18ae1d=_0x307eaa;return[..._0x3500d3[_0x18ae1d(0x20f)](/@([0-9]{5,16}|0)/g)]['map'](_0x4af9c6=>_0x4af9c6[0x1]+_0x18ae1d(0x2af));}[_0x307eaa(0x241)](_0x587fd6,_0x46bdaa=![]){const _0x32b66a=_0x307eaa;_0x46bdaa=this[_0x32b66a(0x2ad)]||_0x46bdaa;let _0x10cb2e,_0x447a36=_0x587fd6[_0x32b66a(0x213)](_0x32b66a(0x233))?(_0x10cb2e=this[_0x32b66a(0x2a3)][_0x32b66a(0x290)](_0x587fd6)||{})&&_0x10cb2e[_0x32b66a(0x29d)]||{}:_0x587fd6===_0x32b66a(0x1f4)?{'jid':_0x587fd6,'vname':_0x32b66a(0x1ed)}:_0x587fd6===this['user'][_0x32b66a(0x28e)]?this['user']:this[_0x32b66a(0x222)](_0x587fd6);return(_0x46bdaa?'':_0x447a36[_0x32b66a(0x275)])||_0x447a36['subject']||_0x447a36['vname']||_0x447a36[_0x32b66a(0x21f)]||PhoneNumber('+'+_0x587fd6[_0x32b66a(0x203)](_0x32b66a(0x2af),''))[_0x32b66a(0x232)](_0x32b66a(0x22d));}async[_0x307eaa(0x1e0)](_0x241c72){const _0x588536=_0x307eaa;if(!_0x241c72)return Buffer['alloc'](0x0);if(!_0x241c72[_0x588536(0x278)])_0x241c72[_0x588536(0x278)]={'m':_0x241c72};if(!_0x241c72[_0x588536(0x278)][Object[_0x588536(0x1d8)](_0x241c72[_0x588536(0x278)])[0x0]][_0x588536(0x1e2)])await this[_0x588536(0x2a4)](_0x241c72);return await this[_0x588536(0x24e)](_0x241c72);}[_0x307eaa(0x2ae)](_0xe817c4){const _0x31aa86=_0x307eaa;return exports[_0x31aa86(0x262)](this,_0xe817c4);}}return _0x5d0974;},exports[_0x5c7e65(0x262)]=(_0x27daea,_0x4560e5,_0x4b32d9)=>{const _0x54bb2d=_0x5c7e65;if(!_0x4560e5)return _0x4560e5;let _0x396fc6=WAMessageProto[_0x54bb2d(0x258)];_0x4560e5[_0x54bb2d(0x23d)]&&(_0x4560e5['id']=_0x4560e5[_0x54bb2d(0x23d)]['id'],_0x4560e5[_0x54bb2d(0x21c)]=_0x4560e5['id'][_0x54bb2d(0x1d2)]('3EB0')&&_0x4560e5['id'][_0x54bb2d(0x1cc)]===0xc,_0x4560e5['chat']=_0x4560e5['key']['remoteJid'],_0x4560e5['fromMe']=_0x4560e5[_0x54bb2d(0x23d)][_0x54bb2d(0x237)],_0x4560e5[_0x54bb2d(0x295)]=_0x4560e5['chat'][_0x54bb2d(0x213)](_0x54bb2d(0x233)),_0x4560e5[_0x54bb2d(0x218)]=_0x4560e5[_0x54bb2d(0x237)]?_0x27daea[_0x54bb2d(0x22f)][_0x54bb2d(0x28e)]:_0x4560e5['participant']?_0x4560e5[_0x54bb2d(0x266)]:_0x4560e5[_0x54bb2d(0x23d)][_0x54bb2d(0x266)]?_0x4560e5[_0x54bb2d(0x23d)][_0x54bb2d(0x266)]:_0x4560e5[_0x54bb2d(0x2b3)]);if(_0x4560e5[_0x54bb2d(0x278)]){_0x4560e5['mtype']=Object['keys'](_0x4560e5['message'])[0x0],_0x4560e5[_0x54bb2d(0x22e)]=_0x4560e5[_0x54bb2d(0x278)][_0x4560e5[_0x54bb2d(0x265)]];_0x4560e5[_0x54bb2d(0x265)]===_0x54bb2d(0x28a)&&(exports[_0x54bb2d(0x262)](_0x27daea,_0x4560e5[_0x54bb2d(0x22e)]),_0x4560e5[_0x54bb2d(0x265)]=_0x4560e5[_0x54bb2d(0x22e)][_0x54bb2d(0x265)],_0x4560e5['msg']=_0x4560e5[_0x54bb2d(0x22e)][_0x54bb2d(0x22e)]);let _0x1231b5=_0x4560e5[_0x54bb2d(0x245)]=_0x4560e5[_0x54bb2d(0x22e)][_0x54bb2d(0x28b)]?_0x4560e5['msg'][_0x54bb2d(0x28b)][_0x54bb2d(0x294)]:null;_0x4560e5[_0x54bb2d(0x261)]=_0x4560e5[_0x54bb2d(0x22e)]['contextInfo']?_0x4560e5['msg'][_0x54bb2d(0x28b)][_0x54bb2d(0x261)]:[];if(_0x4560e5[_0x54bb2d(0x245)]){let _0x397d6b=Object[_0x54bb2d(0x1d8)](_0x4560e5[_0x54bb2d(0x245)])[0x0];_0x4560e5['quoted']=_0x4560e5[_0x54bb2d(0x245)][_0x397d6b];[_0x54bb2d(0x296)][_0x54bb2d(0x205)](_0x397d6b)&&(_0x397d6b=Object[_0x54bb2d(0x1d8)](_0x4560e5[_0x54bb2d(0x245)])[0x0],_0x4560e5['quoted']=_0x4560e5['quoted'][_0x397d6b]);if(typeof _0x4560e5[_0x54bb2d(0x245)]==='string')_0x4560e5[_0x54bb2d(0x245)]={'text':_0x4560e5[_0x54bb2d(0x245)]};_0x4560e5['quoted'][_0x54bb2d(0x265)]=_0x397d6b,_0x4560e5[_0x54bb2d(0x245)]['id']=_0x4560e5[_0x54bb2d(0x22e)][_0x54bb2d(0x28b)][_0x54bb2d(0x276)],_0x4560e5[_0x54bb2d(0x245)][_0x54bb2d(0x2b3)]=_0x4560e5[_0x54bb2d(0x22e)][_0x54bb2d(0x28b)][_0x54bb2d(0x1d9)]||_0x4560e5[_0x54bb2d(0x2b3)],_0x4560e5[_0x54bb2d(0x245)][_0x54bb2d(0x21c)]=_0x4560e5[_0x54bb2d(0x245)]['id']?_0x4560e5[_0x54bb2d(0x245)]['id'][_0x54bb2d(0x1d2)]('3EB0')&&_0x4560e5[_0x54bb2d(0x245)]['id'][_0x54bb2d(0x1cc)]===0xc:![],_0x4560e5['quoted']['sender']=_0x4560e5['msg'][_0x54bb2d(0x28b)][_0x54bb2d(0x266)],_0x4560e5[_0x54bb2d(0x245)]['fromMe']=_0x4560e5['quoted'][_0x54bb2d(0x218)]===(_0x27daea['user']&&_0x27daea[_0x54bb2d(0x22f)][_0x54bb2d(0x28e)]),_0x4560e5['quoted'][_0x54bb2d(0x23f)]=_0x4560e5[_0x54bb2d(0x245)]['text']||_0x4560e5[_0x54bb2d(0x245)][_0x54bb2d(0x27e)]||'',_0x4560e5[_0x54bb2d(0x245)][_0x54bb2d(0x261)]=_0x4560e5[_0x54bb2d(0x245)]['contextInfo']?_0x4560e5[_0x54bb2d(0x245)][_0x54bb2d(0x28b)][_0x54bb2d(0x261)]:[],_0x4560e5[_0x54bb2d(0x1d1)]=_0x4560e5['getQuotedMessage']=async()=>{const _0x495851=_0x54bb2d;if(!_0x4560e5[_0x495851(0x245)]['id'])return![];let _0x2c9ddd=await _0x27daea['loadMessage'](_0x4560e5['chat'],_0x4560e5[_0x495851(0x245)]['id']);return exports[_0x495851(0x262)](_0x27daea,_0x2c9ddd);};let _0x490c83=_0x4560e5[_0x54bb2d(0x245)]['fakeObj']=_0x396fc6[_0x54bb2d(0x299)]({'key':{'fromMe':_0x4560e5['quoted'][_0x54bb2d(0x237)],'remoteJid':_0x4560e5[_0x54bb2d(0x245)]['chat'],'id':_0x4560e5[_0x54bb2d(0x245)]['id']},'message':_0x1231b5,..._0x4560e5[_0x54bb2d(0x295)]?{'participant':_0x4560e5[_0x54bb2d(0x245)][_0x54bb2d(0x218)]}:{}});if(_0x4560e5[_0x54bb2d(0x245)][_0x54bb2d(0x1e2)])_0x4560e5[_0x54bb2d(0x245)][_0x54bb2d(0x1cd)]=(_0x44511a=_0x54bb2d(0x200))=>_0x27daea[_0x54bb2d(0x1e0)](_0x490c83,_0x44511a);_0x4560e5[_0x54bb2d(0x245)]['reply']=(_0x38b0d2,_0x25d0c5,_0x3a3a79)=>_0x27daea[_0x54bb2d(0x1ea)](_0x25d0c5?_0x25d0c5:_0x4560e5['chat'],_0x38b0d2,_0x490c83,_0x3a3a79),_0x4560e5['quoted']['copy']=()=>exports['smsg'](_0x27daea,_0x396fc6[_0x54bb2d(0x299)](_0x396fc6[_0x54bb2d(0x281)](_0x490c83))),_0x4560e5[_0x54bb2d(0x245)]['forward']=(_0x27b3bb,_0x3588fe=![])=>_0x27daea[_0x54bb2d(0x219)](_0x27b3bb,_0x490c83,_0x3588fe),_0x4560e5['quoted'][_0x54bb2d(0x229)]=(_0x482e22,_0x47faed=![],_0x2ff59f={})=>_0x27daea['copyNForward'](_0x482e22,_0x490c83,_0x47faed,_0x2ff59f),_0x4560e5[_0x54bb2d(0x245)][_0x54bb2d(0x2b4)]=(_0x22aa8c,_0x289b00='',_0x549bcf=_0x4560e5[_0x54bb2d(0x245)][_0x54bb2d(0x218)],_0x1dbcb1={})=>_0x27daea['cMod'](_0x22aa8c,_0x490c83,_0x289b00,_0x549bcf,_0x1dbcb1),_0x4560e5[_0x54bb2d(0x245)][_0x54bb2d(0x1cb)]=()=>_0x27daea[_0x54bb2d(0x2a8)](_0x4560e5[_0x54bb2d(0x245)]['chat'],_0x490c83[_0x54bb2d(0x23d)]);}if(_0x4560e5[_0x54bb2d(0x22e)][_0x54bb2d(0x1e2)])_0x4560e5[_0x54bb2d(0x1cd)]=(_0x536bd5=_0x54bb2d(0x200))=>_0x27daea[_0x54bb2d(0x1e0)](_0x4560e5,_0x536bd5);_0x4560e5[_0x54bb2d(0x23f)]=(_0x4560e5[_0x54bb2d(0x265)]==_0x54bb2d(0x1e5)?_0x4560e5[_0x54bb2d(0x22e)][_0x54bb2d(0x24d)][_0x54bb2d(0x201)]:'')||_0x4560e5[_0x54bb2d(0x22e)][_0x54bb2d(0x23f)]||_0x4560e5['msg'][_0x54bb2d(0x27e)]||_0x4560e5['msg']||'',_0x4560e5[_0x54bb2d(0x1ea)]=(_0x257688,_0xb3e5c1,_0x1a2b23)=>_0x27daea[_0x54bb2d(0x1ea)](_0xb3e5c1?_0xb3e5c1:_0x4560e5[_0x54bb2d(0x2b3)],_0x257688,_0x4560e5,_0x1a2b23),_0x4560e5[_0x54bb2d(0x238)]=()=>exports[_0x54bb2d(0x262)](_0x27daea,_0x396fc6[_0x54bb2d(0x299)](_0x396fc6[_0x54bb2d(0x281)](_0x4560e5))),_0x4560e5[_0x54bb2d(0x230)]=(_0x335f8b=_0x4560e5[_0x54bb2d(0x2b3)],_0x2635b8=![])=>_0x27daea[_0x54bb2d(0x219)](_0x335f8b,_0x4560e5,_0x2635b8),_0x4560e5['copyNForward']=(_0x1ff3fd=_0x4560e5[_0x54bb2d(0x2b3)],_0x44c106=![],_0x28617f={})=>_0x27daea[_0x54bb2d(0x229)](_0x1ff3fd,_0x4560e5,_0x44c106,_0x28617f),_0x4560e5[_0x54bb2d(0x2b4)]=(_0x550bd4,_0x2d8052='',_0x33c19a=_0x4560e5['sender'],_0x323493={})=>_0x27daea[_0x54bb2d(0x2b4)](_0x550bd4,_0x4560e5,_0x2d8052,_0x33c19a,_0x323493);}return _0x4560e5;},exports[_0x5c7e65(0x26f)]=(_0x5c3b16,_0xb611da,_0x155967)=>{const _0x3b3e7b=_0x5c7e65;if(_0xb611da[_0x3b3e7b(0x1cc)]!==_0x155967['length'])throw new Error(_0x3b3e7b(0x1d3));for(let _0x3b38c2 in _0xb611da)if(util['isDeepStrictEqual'](_0x5c3b16,_0xb611da[_0x3b38c2]))return _0x155967[_0x3b38c2];return null;};async function generateThumbnail(_0x38bfb4,_0x5adcfd,_0x9eb306){const _0x5bd130=_0x5c7e65,_0x21ec2a=Buffer[_0x5bd130(0x2a6)](0x1)[_0x5bd130(0x26e)](_0x5bd130(0x1ca));if(_0x5bd130(0x1d0)in _0x9eb306){if(_0x5adcfd===MessageType[_0x5bd130(0x2ba)])throw new Error(_0x5bd130(0x1de));}else{if(_0x5adcfd===MessageType[_0x5bd130(0x1fd)])try{const _0x2fb8fa=await compressImage(_0x38bfb4);_0x9eb306[_0x5bd130(0x1d0)]=_0x2fb8fa[_0x5bd130(0x26e)](_0x5bd130(0x1ca));}catch(_0x420f34){console[_0x5bd130(0x1e1)](_0x420f34),_0x9eb306[_0x5bd130(0x1d0)]=_0x21ec2a;}else{if(_0x5adcfd===MessageType[_0x5bd130(0x1fb)]){const _0x2556b4=path[_0x5bd130(0x25e)](tmpdir(),generateMessageID()+_0x5bd130(0x1f3));try{try{await extractVideoThumb(_0x38bfb4,_0x2556b4,_0x5bd130(0x1d5),{'width':0x30,'height':0x30});const _0x31d30d=await fs[_0x5bd130(0x20e)][_0x5bd130(0x21a)](_0x2556b4);_0x9eb306[_0x5bd130(0x1d0)]=_0x31d30d['toString'](_0x5bd130(0x1ca)),await fs['promises']['unlink'](_0x2556b4);}catch(_0xe2901){console['error'](_0xe2901),_0x9eb306[_0x5bd130(0x1d0)]=_0x21ec2a;}}catch(_0x502665){console[_0x5bd130(0x23a)](_0x5bd130(0x216)+_0x502665);}}}}}const extractVideoThumb=async(_0x2545c0,_0x299447,_0x327df1,_0x441829={})=>new Promise((_0xf84dd3,_0x22fb2a)=>{const _0x432404=_0x5c7e65,_0x3c57d7=_0x432404(0x260)+_0x327df1+_0x432404(0x272)+_0x2545c0+_0x432404(0x1e7)+_0x441829[_0x432404(0x264)]+'x'+_0x441829[_0x432404(0x228)]+_0x432404(0x1fa)+_0x299447;exec(_0x3c57d7,_0x5b094f=>{if(_0x5b094f)_0x22fb2a(_0x5b094f);else _0xf84dd3();});});async function download(_0x25effe,_0x15c959,_0x411f35){const _0x395d03=_0x5c7e65;if(Buffer[_0x395d03(0x2b9)](_0x25effe)){if(typeof _0x411f35==_0x395d03(0x26a))await _0x411f35({'buffer':_0x25effe,'filename':''});return _0x25effe;}let _0x205af=path['join'](__dirname,_0x395d03(0x25a)+new Date()*0x1+'.'+_0x15c959),_0x2f4daa;try{let _0x53e82a=0x0;await request(_0x25effe)[_0x395d03(0x267)](await fs[_0x395d03(0x252)](_0x205af))['on'](_0x395d03(0x2b0),async()=>{const _0x470ba6=_0x395d03;_0x2f4daa=await fs['readFileSync'](_0x205af);if(typeof _0x411f35==_0x470ba6(0x26a))await _0x411f35({'buffer':_0x2f4daa,'filename':_0x205af});});if(fs['existsSync'](_0x205af))await fs[_0x395d03(0x285)](_0x205af);return _0x205af;}catch(_0x143875){try{let _0x362076=await fetch(_0x25effe);await _0x362076[_0x395d03(0x207)][_0x395d03(0x267)](await fs[_0x395d03(0x252)](_0x205af))['on'](_0x395d03(0x2b0),async()=>{const _0x9b930b=_0x395d03;_0x2f4daa=await fs['readFileSync'](_0x205af);if(typeof _0x411f35==_0x9b930b(0x26a))await _0x411f35({'buffer':_0x2f4daa,'filename':_0x205af});});if(fs[_0x395d03(0x20a)](_0x205af))await fs['unlinkSync'](_0x205af);return _0x205af;}catch(_0x382d11){throw _0x382d11;}}return _0x205af;}function delay(_0x433f1e){return new Promise((_0x3aeb72,_0x453302)=>setTimeout(_0x3aeb72,_0x433f1e));}function format(..._0x1ef233){const _0xd1f93=_0x5c7e65;return util[_0xd1f93(0x1f5)](..._0x1ef233);}function _0x47ec(){const _0x37e804=['alloc','relayWAMessage','deleteMessage','request','forceNewMediaOptions','OrderMessage','1lvQBeL','withoutContact','serializeM','@s.whatsapp.net','finish','contacts','path','chat','cMod','node-fetch','split','fakeReply','mime','isBuffer','audio','file-type','trim','vname','pop','base64','delete','length','download','asDocument','38058zONSgz','thumbnail','getQuotedObj','startsWith','Input\x20and\x20Output\x20must\x20have\x20same\x20length','mp4','00:00:00','hosts','displayName','keys','remoteJid','ListMessage','\x0aEND:VCARD\x0a','fetchRequest','ptt','audio\x20messages\x20cannot\x20have\x20thumbnails','filename','downloadM','error','url','GET','send3Button','listResponseMessage','parseMention','\x20-y\x20-s\x20','contactsArrayMessage','filter','reply','1043514QmwKrs','asSticker','WhatsApp','cipherKey','genOrderMessage','5100FKkgDk','LocationMessage',';;;\x0aFN:','.jpg','0@s.whatsapp.net','format','hostname','upload\x20failed,\x20reason:\x20',',\x20retrying...','liveLocation','\x20-vframes\x201\x20-f\x20image2\x20','video','string','image','unlink','sendVideo','buffer','selectedRowId','fromEntries','replace','\x0aX-WA-BIZ-NAME:','includes','4145708vcEYCG','body','protocolMessage','emit','existsSync','follow','waitEvent','viewOnceMessage','promises','matchAll','contactsArray','generateForwardMessageContent','Error\x20send\x20video\x20using\x20sendVideo,\x20retrying\x20using\x20sendMessage...\x20','endsWith','ext','asGIF','could\x20not\x20generate\x20video\x20thumb:\x20','file','sender','forwardMessage','readFile','52539kZliwY','isBaileys','sendFile','Message','notify','all','title','contactAddOrGet','cannot\x20send\x20a\x20','prepareMessageFromContent','readViewOnce','location','\x0aTEL;type=CELL;type=VOICE;waid=','height','copyNForward','1139998btlXbc','670xeldxe','ExtendedTextMessage','international','msg','user','forward','5325480PLSFaF','getNumber','@g.us','\x0aX-WA-BIZ-DESCRIPTION:','unshift','viewOnce','fromMe','copy','CB:action,,battery','log','from','@adiwajshing/baileys/lib/WAConnection/0.Base','key','?auth=','text','groupInviteMessage','getName','prepareMessageMedia','CB:action,add:relay,message','sendFileFromUrl','quoted','56uRZuuH','@broadcast','imageMessage','gif','entries','duration','mimetype\x20required\x20to\x20send\x20a\x20document','singleSelectReply','downloadMediaMessage','ignore','test','getBusinessProfile','createWriteStream','sticker','uploadAgent','getFile','util','22671KQbNbE','WebMessageInfo','isArray','../tmp/','mimetype','sendMessage','Error\x20in\x20uploading\x20to\x20','join','cannot\x20send\x20a\x20caption\x20with\x20a\x20sticker','ffmpeg\x20-ss\x20','mentionedJid','smsg','prepareMessage','width','mtype','participant','pipe','pdf','WAConnection','function','contact','readFileSync','isOnWhatsApp','toString','logic','buttonsMessage','connectOptions','\x20-i\x20','debug','messages','name','stanzaId','Max\x20tries\x20reached','message','76inxPPn','contactMessage','_events','message-delete','Invitation\x20to\x20join\x20my\x20WhatsApp\x20group','caption','application/octet-stream','send2Button','toObject','sendButton','./converter','fetchAgent','unlinkSync','concat','POST','\x0aBEGIN:VCARD\x0aVERSION:3.0\x0aN:;','Result\x20is\x20not\x20a\x20buffer','ephemeralMessage','contextInfo','ContactsArrayMessage','got','jid','document','get','refreshMediaConn','@adiwajshing/baileys','slice','quotedMessage','isGroup','productMessage','type','fakeReply2','fromObject','json','send2ButtonImg','child_process','metadata','toJSON','sendContact','https://','fromBuffer','orderMessage','chats','updateMediaMessage','locationMessage'];_0x47ec=function(){return _0x37e804;};return _0x47ec();}