var _0xa82f=['innerWidth','aspect','337953tMkQsa','updateProjectionMatrix','getElementById','AnimationMixer','position','exteriorSection','render','slikaModra','Scene','toneMappingExposure','lookAt','Vector3','innerHeight','play','resize','slikaRdeca','PerspectiveCamera','142756VKHMPM','PMREMGenerator','domElement','texture','add','material','load','https://threejs.org/examples/textures/equirectangular/','zelenaPanthera','18155Hkrgcx','testIzbireSedezev','onclick','523149vDEiUO','update','animations','setPixelRatio','body','generateMipmaps','createElement','setSize','dispose','Tween','loop','visible','clipAction','compileEquirectangularShader','set','6QFPumC','fromEquirectangular','venice_sunset_1k.hdr','353428CQEmIf','ACESFilmicToneMapping','datoteke/pantherav7.gltf','appendChild','409288oHMgRm','addEventListener','scene','devicePixelRatio','clampWhenFinished','push','497910itodjt','sRGBEncoding','modraPanthera','LoopOnce'];var _0x537a=function(_0x2e0652,_0x2f16a4){_0x2e0652=_0x2e0652-0xe2;var _0xa82f95=_0xa82f[_0x2e0652];return _0xa82f95;};var _0x3cef41=_0x537a;(function(_0x211b37,_0x942228){var _0x4cd0e5=_0x537a;while(!![]){try{var _0x492694=parseInt(_0x4cd0e5(0xfc))+-parseInt(_0x4cd0e5(0x106))+parseInt(_0x4cd0e5(0xe7))*parseInt(_0x4cd0e5(0xf9))+-parseInt(_0x4cd0e5(0x11d))+parseInt(_0x4cd0e5(0xea))+-parseInt(_0x4cd0e5(0x100))+parseInt(_0x4cd0e5(0x10c));if(_0x492694===_0x942228)break;else _0x211b37['push'](_0x211b37['shift']());}catch(_0x51fc73){_0x211b37['push'](_0x211b37['shift']());}}}(_0xa82f,0x42c62));import*as _0x250213 from'https://threejs.org/build/three.module.js';import{OrbitControls}from'https://threejs.org/examples/jsm/controls/OrbitControls.js';import{GLTFLoader}from'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';import{RGBELoader}from'https://threejs.org/examples/jsm/loaders/RGBELoader.js';import{RoughnessMipmapper}from'https://threejs.org/examples/jsm/utils/RoughnessMipmapper.js';var container,controls,controls1,camera,scene,renderer,mixer,clock,camera1,exteriorCamera,interiorCamera,selectedCamera,selectedControls,action1,action2,action3,clip1,clip2,clip3,cameraPosition={'x':0x0,'y':0x0,'z':0x0},pogoj=![],cameraLook=new _0x250213[(_0x3cef41(0x117))](0x0,0x0,0x0),partsArray=[];scene=new _0x250213[(_0x3cef41(0x114))](),clock=new _0x250213['Clock'](),exteriorCamera=new _0x250213[(_0x3cef41(0x11c))](0x2d,window[_0x3cef41(0x10a)]/window[_0x3cef41(0x118)],0.25,0x14),interiorCamera=new _0x250213['PerspectiveCamera'](0x41,window[_0x3cef41(0x10a)]/window[_0x3cef41(0x118)],0.25,0x14),selectedCamera=exteriorCamera,container=document[_0x3cef41(0xf0)]('div'),document[_0x3cef41(0xee)]['appendChild'](container),renderer=new _0x250213['WebGLRenderer']({'antialias':![]}),renderer[_0x3cef41(0xed)](window[_0x3cef41(0x103)]),renderer['setSize'](window[_0x3cef41(0x10a)],window[_0x3cef41(0x118)]),renderer['toneMapping']=_0x250213[_0x3cef41(0xfd)],renderer[_0x3cef41(0x115)]=0.8,renderer['outputEncoding']=_0x250213[_0x3cef41(0x107)],container[_0x3cef41(0xff)](renderer[_0x3cef41(0x11f)]),controls=new OrbitControls(selectedCamera,renderer[_0x3cef41(0x11f)]),controls['minDistance']=0x2,controls['maxDistance']=0xa,controls['target']['set'](0x0,0x0,0x0),new RGBELoader()['setDataType'](_0x250213['UnsignedByteType'])['setPath'](_0x3cef41(0xe5))[_0x3cef41(0xe4)](_0x3cef41(0xfb),function(_0x4b481e){var _0x13738e=_0x3cef41,_0x36a6f7=pmremGenerator[_0x13738e(0xfa)](_0x4b481e)[_0x13738e(0x120)];scene['background']=_0x36a6f7,scene['environment']=_0x36a6f7,_0x4b481e[_0x13738e(0xf2)](),pmremGenerator[_0x13738e(0xf2)]();});var roughnessMipmapper=new RoughnessMipmapper(renderer),loader=new GLTFLoader();loader[_0x3cef41(0xe4)](_0x3cef41(0xfe),function(_0x4f71e3){var _0x3fc7e9=_0x3cef41;_0x4f71e3[_0x3fc7e9(0x102)]['traverse'](function(_0x1d874f){var _0xac8a21=_0x3fc7e9;partsArray[_0xac8a21(0x105)](_0x1d874f),_0x1d874f['isMesh']&&roughnessMipmapper[_0xac8a21(0xef)](_0x1d874f[_0xac8a21(0xe3)]);}),scene[_0x3fc7e9(0xe2)](_0x4f71e3[_0x3fc7e9(0x102)]),console['log']('5'),roughnessMipmapper[_0x3fc7e9(0xf2)](),mixer=new _0x250213[(_0x3fc7e9(0x10f))](_0x4f71e3['scene']),clip1=_0x4f71e3['animations'][0x1],action1=mixer['clipAction'](clip1),clip2=_0x4f71e3[_0x3fc7e9(0xec)][0x0],action2=mixer[_0x3fc7e9(0xf6)](clip2),clip3=_0x4f71e3['animations'][0x2],action3=mixer[_0x3fc7e9(0xf6)](clip3);});var pmremGenerator=new _0x250213[(_0x3cef41(0x11e))](renderer);pmremGenerator[_0x3cef41(0xf7)](),controls[_0x3cef41(0xeb)](),window[_0x3cef41(0x101)](_0x3cef41(0x11a),onWindowResize,![]);function onWindowResize(){var _0xb92031=_0x3cef41;selectedCamera[_0xb92031(0x10b)]=window['innerWidth']/window[_0xb92031(0x118)],selectedCamera[_0xb92031(0x10d)](),renderer[_0xb92031(0xf1)](window[_0xb92031(0x10a)],window[_0xb92031(0x118)]);}function animate(){var _0x11b507=_0x3cef41;requestAnimationFrame(animate);var _0x5ef336=clock['getDelta']();if(mixer)mixer[_0x11b507(0xeb)](_0x5ef336);TWEEN['update'](),pogoj&&(selectedCamera[_0x11b507(0x110)][_0x11b507(0xf8)](cameraPosition['x'],cameraPosition['y'],cameraPosition['z']),selectedCamera[_0x11b507(0x116)](cameraLook)),renderer[_0x11b507(0x112)](scene,selectedCamera);}function exteriorConfiguration(){var _0x43fce2=_0x3cef41;pogoj=!![],selectedCamera=exteriorCamera,cameraLook['x']=0x0,cameraLook['y']=0x0,cameraLook['z']=0x2,controls['target']['set'](0x0,0x0,0x2);var _0x6cd339={'x':-0x5,'y':1.3,'z':-0x5};cameraPosition['x']=selectedCamera[_0x43fce2(0x110)]['x'],cameraPosition['y']=selectedCamera[_0x43fce2(0x110)]['y'],cameraPosition['z']=selectedCamera[_0x43fce2(0x110)]['z'];const _0x4a2413=new TWEEN[(_0x43fce2(0xf3))](cameraPosition)['to'](_0x6cd339,0x7d0);_0x4a2413['start'](),setTimeout(()=>{pogoj=![];},0x7d0);}function seatsConfiguration(){var _0x5c2591=_0x3cef41;action1[_0x5c2591(0x104)]=!![],action1[_0x5c2591(0xf4)]=_0x250213[_0x5c2591(0x109)],action1['play'](),action2[_0x5c2591(0x104)]=!![],action2['loop']=_0x250213[_0x5c2591(0x109)],action2[_0x5c2591(0x119)](),action3[_0x5c2591(0x104)]=!![],action3[_0x5c2591(0xf4)]=_0x250213['LoopOnce'],action3[_0x5c2591(0x119)](),pogoj=!![],selectedCamera=exteriorCamera;var _0x2d5ad5={'x':-0x2,'y':1.37,'z':1.16};cameraPosition['x']=selectedCamera[_0x5c2591(0x110)]['x'],cameraPosition['y']=selectedCamera[_0x5c2591(0x110)]['y'],cameraPosition['z']=selectedCamera[_0x5c2591(0x110)]['z'];const _0x57c408=new TWEEN[(_0x5c2591(0xf3))](cameraPosition)['to'](_0x2d5ad5,0x7d0);_0x57c408['start'](),setTimeout(()=>{pogoj=![];},0x7d0);}function interiorConfiguration(){var _0x4d4bca=_0x3cef41;interiorCamera[_0x4d4bca(0x110)][_0x4d4bca(0xf8)](-0x1,0.6,-0x4);}document['getElementById'](_0x3cef41(0x111))[_0x3cef41(0xe9)]=function(){exteriorConfiguration();},document[_0x3cef41(0x10e)]('seatsSection')[_0x3cef41(0xe9)]=function(){seatsConfiguration();},document['getElementById'](_0x3cef41(0xe8))[_0x3cef41(0xe9)]=function(){},document[_0x3cef41(0x10e)](_0x3cef41(0x113))[_0x3cef41(0xe9)]=function(){var _0xdc406e=_0x3cef41;partsArray[0x22][_0xdc406e(0xf5)]=![],partsArray[0x24][_0xdc406e(0xf5)]=![],partsArray[0x23][_0xdc406e(0xf5)]=![];},document[_0x3cef41(0x10e)](_0x3cef41(0x11b))[_0x3cef41(0xe9)]=function(){var _0x54040c=_0x3cef41;partsArray[0x22]['visible']=!![],partsArray[0x24][_0x54040c(0xf5)]=!![],partsArray[0x23][_0x54040c(0xf5)]=!![];},document[_0x3cef41(0x10e)]('oranznaPanthera')[_0x3cef41(0xe9)]=function(){var _0x13c950=_0x3cef41;partsArray[0x21][_0x13c950(0xf5)]=!![],partsArray[0x20][_0x13c950(0xf5)]=![],partsArray[0x1f][_0x13c950(0xf5)]=![];},document['getElementById'](_0x3cef41(0xe6))[_0x3cef41(0xe9)]=function(){var _0x2dffa4=_0x3cef41;partsArray[0x21][_0x2dffa4(0xf5)]=![],partsArray[0x20][_0x2dffa4(0xf5)]=!![],partsArray[0x1f][_0x2dffa4(0xf5)]=![];},document[_0x3cef41(0x10e)](_0x3cef41(0x108))[_0x3cef41(0xe9)]=function(){var _0x43c21b=_0x3cef41;partsArray[0x21][_0x43c21b(0xf5)]=![],partsArray[0x20][_0x43c21b(0xf5)]=![],partsArray[0x1f][_0x43c21b(0xf5)]=!![];},document[_0x3cef41(0x10e)]('vijolicnaPanthera')['onclick']=function(){var _0xd25d9f=_0x3cef41;partsArray[0x21]['visible']=![],partsArray[0x20][_0xd25d9f(0xf5)]=![],partsArray[0x1f]['visible']=![];},animate();
