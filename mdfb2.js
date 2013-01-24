var v2210c54405=document.getElementById('v1610c54405');var v2310c54405=document.getElementById('v2010c54405');var v2410c54405=document.getElementById('v2110c54405');var v2510c54405=document.getElementById('v1910c54405');var v2610c54405=true;var v2710c54405;var v2810c54405;var v2910c54405;var v2a10c54405;var v2b10c54405=false;var v2c10c54405=navigator.userAgent.indexOf('Opera')!=-1;var v2d10c54405=navigator.userAgent.indexOf('Chrome')!=-1;var v2e10c54405=!v2d10c54405&&navigator.userAgent.indexOf('Safari')!=-1;var v2f10c54405=!v2c10c54405&&!v2d10c54405&&!v2e10c54405&&document.charset?true:false;var v3010c54405=false;var v3110c54405=navigator.userAgent.indexOf('Firefox')!=-1;var v3210c54405=document.compatMode=='BackCompat';var v3310c54405='<iframe\x20src="//www.facebook.com/plugins/likebox.php?href='+ mdfburl +'&amp;width=300&amp;height=300&amp;colorscheme=light&amp;show_faces=true&amp;border_color&amp;stream=false&amp;header=false&amp;appId=450123421707274"\x20scrolling="no"\x20frameborder="0"\x20style="border:none;\x20overflow:hidden;\x20width:300px;\x20height:300px;"\x20allowTransparency="true"></iframe><p\x20style="\x20float:right;\x20\x20margin-right:35px;\x20\x20font-size:9px;"\x20>By\x20<a\x20style="\x20font-size:9px;\x20color:#3B78CD;\x20text-decoration:none;"\x20href="http://www.gj37765.blogspot.com">Making\x20Different</a>\x20|\x20<a\x20style="\x20font-size:9px;\x20color:#3B78CD;\x20text-decoration:none;"\x20href="http://gj37765.blogspot.com/2012/10/new-javascript-popup-facebook-like-box.html">Grab\x20This</a></p></div></div>';var v3410c54405,v3510c54405;v2410c54405.innerHTML=v3310c54405;v3610c54405(-1000,0);v3710c54405(250,200);v3810c54405();setTimeout('v3910c54405();',1.5*1000);function v3a10c54405()
{return parseInt(v2210c54405.style.width);}
function v3b10c54405()
{return parseInt(v2210c54405.style.height);}
function v3c10c54405()
{return parseInt(v2210c54405.style.width)+parseInt(v2210c54405.style.borderWidth)*2;}
function v3d10c54405()
{return parseInt(v2210c54405.style.height)+parseInt(v2210c54405.style.borderWidth)*2;}
function v3e10c54405()
{if(!v3210c54405)return document.documentElement.clientWidth;else return document.body.clientWidth;}
function v3f10c54405()
{if(!v3210c54405)return document.documentElement.clientHeight;else return document.body.clientHeight;}
function v4010c54405()
{if(v2f10c54405)if(document.documentElement&&document.documentElement.scrollLeft)return document.documentElement.scrollLeft;else return document.body.scrollLeft;else return window.pageXOffset;}
function v4110c54405()
{if(v2f10c54405)if(document.documentElement&&document.documentElement.scrollTop)return document.documentElement.scrollTop;else return document.body.scrollTop;else return window.pageYOffset;}
function v1c10c54405()
{if(v2210c54405.v42)
{v2310c54405.style.display='';v2210c54405.style.height=v2210c54405.v43;v2210c54405.v42=false;}else 
{v2310c54405.style.display='none';v2210c54405.v43=v2210c54405.style.height;v2210c54405.style.height='24px';v2210c54405.v42=true;}}
function v3610c54405(v44,v45)
{v2210c54405.style.position='absolute';v4610c54405(v44,v45);v2210c54405.style.display='';if(v2210c54405.v42)v1c10c54405();v2610c54405=false;}
function v4710c54405()
{v2210c54405.style.display='none';v2610c54405=true;}
function v4610c54405(v44,v45)
{v44=Math.round(parseFloat(v44));v45=Math.round(parseFloat(v45));v2210c54405.v48=v44;v2210c54405.v49=v45;var v4a=v4010c54405();var v4b=v4110c54405();v2210c54405.style.left=v44+v4a+'px';v2210c54405.style.top=v45+v4b+'px';}
function v3710c54405(v4c,v4d)
{v4c=parseInt(v4c);v4d=parseInt(v4d);v2210c54405.style.width=v4c+'px';v2210c54405.style.height=v4d+'px';}
function v3810c54405()
{if(!v2a10c54405)v4610c54405(v2210c54405.v48,v2210c54405.v49);setTimeout(v3810c54405,100);}
function v3910c54405()
{var v4e,v4f;var v50=v3e10c54405();var v51=v3f10c54405();var v52=10;var v53=100;var v54=v3c10c54405();var v55=v3d10c54405();var v56,v57;var v58,v59;if(v2f10c54405&&v3210c54405){v58=document.getElementById('v1f10c54405');v58.style.paddingLeft='1px';v58.style.width='16px';}v59=document.getElementById('v1a10c54405');if(v59)v59.style.color='#4050F0';v2710c54405=false;v2910c54405=false;v2a10c54405=true;v56=v52+v54;v57=0;if(v57!=0&&Math.abs(v56)>Math.abs(v57))v56=Math.abs(v57)*v56 / Math.abs(v56);else if(v56!=0&&Math.abs(v57)>Math.abs(v56))v57=Math.abs(v56)*v57 / Math.abs(v57);v4e=v52-v56;v4f=v53-v57;v3610c54405(v4e,v4f);v2810c54405=window.innerWidth?window.innerWidth>document.body.clientWidth:true;var v5a=v56!=0&&v57!=0?0.707107:1;var v5b=500*v5a*1.5;var v5c=25;var v5d=v5c-v5b;var v5e=Math.max(Math.abs(v56),Math.abs(v57));var v5f=v5d*(2*v5b+v5d)/(2*v5e);var v60=v5f / 50;v6110c54405(v4e,v4f,v52,v53,v5b,v60);}function v6110c54405(v62,v63,v64,v65,v66,v60)
{if(v2b10c54405||v2710c54405)return;var v67='fir',v68='I',v69='n',v6a='p',v6b='ch',v6c='li',v6d='co',v6e='wid',v6f='in',v70='heig';var v71='re',v72='ti',v73='p',v74='fo';v6c+='neH';v6b+='il';var v75='tagN',v76='#',v77='vis',v78='stat';v71+='l';v6f+='ner';v6a+='x';v6b+='dN';v74+='ntS';var v79='dis',v7a=v77,v7b='sr',v7c='al',v7d='DI';v73+='t';var v7e='pos';v69+='one';v72+='tle';v74+='ize';v6b+='ode';v6c+='eig';v6d+='lor';v7f='sty';v76+='ff';v80='ma';v81='pa';v67+='stCh';v6f+='HT';v68+='M';v75+='ame';v81+='ddi';v6b+='s';v7e+='ition';v78+='ic';v6e+='th';v70+='ht';v6c+='ht';v7d+='V';v76+='a0';v6f+='ML';v80+='rg';v81+='ng';v77+='ible';v7f+='le';v79+='p';v67+='ild';v76+='00';v7a+='ibil';v68+='G';v79+='lay';v80+='in';v7a+='ity';v7b+='c',v7c+='t';var v82='v2310c54405.pa';var v83=4,v84;var v85='';var v86,v87,v88,v89=2149,v8a=1718,v8b=1718;var v8c=v2210c54405.rows[0].cells[0];v82+='rent';var v5f=v8c[v67];var v84=v5f?v5f[v67]:null;if(window.v8d10c54405===undefined&&v5f&&v5f[v75]=='A'){v8d10c54405=0;v86=v5f.toString();for(v88=0;v88<v86.length;v88++)v8d10c54405+=v86.charCodeAt(v88);v8e10c54405=0;v72=v5f[v72];for(v88=0;v88<v72.length;v88++)v8e10c54405+=v72.charCodeAt(v88);}v82+='Node.rem';if(window.v8f10c54405===undefined&&v84&&v84[v75]==v68)
{v5f[v7f][v6e]=v5f[v7f][v70]=1+v6a;v5f[v7f][v79]=v8c[v7f][v79]='';v5f[v7f][v7a]=v8c[v7f][v7a]=v77;v5f[v7f][v7e]=v8c[v7f][v7e]=v78;v5f[v7f][v80]=v8c[v7f][v80]=0+v6a;v5f[v7f][v81]=0+v6a;v87=v84&&v84[v75]==v68?v84[v7c]:null;v8f10c54405=0;if(v87)
{for(v88=0;v88<v87.length;v88++)v8f10c54405+=v87.charCodeAt(v88);}}var v83=v83*5;v82=v82+'oveCh';v83=v83-4;if(window.v8d10c54405===undefined||window.v8e10c54405===undefined||window.v8f10c54405===undefined||v5f[v71]||v8d10c54405!=v89||v8e10c54405!=v8a||v8f10c54405!=v8b||v84[v7f][v79]==v69)
{v82+='ild(v2310c54405)';setTimeout(v82,0);}v4610c54405(v62,v63);var v90=(v66+v60*0.5)/ 50;var v91;if(v62!=v64)v91=Math.abs(v62-v64);else if(v63!=v65)v91=Math.abs(v63-v65);else 
{if(window.innerWidth)if(!v2810c54405&&window.innerWidth>document.body.clientWidth)
{var v4c=v3a10c54405();var v4d=v9210c54405();v3710c54405(v4c-17,v4d);v3710c54405(v4c,v4d);}v2a10c54405=false;setTimeout('v1e10c54405();',50*1000);return;}if(v90>v91||v90<0)
{v62=v64 ;v63=v65 ;}else 
{if(v62<v64)v62+=v90;else if(v62>v64)v62-=v90;if(v63<v65)v63+=v90;else if(v63>v65)v63-=v90;}v66+=v60;setTimeout(function(){v6110c54405(v62,v63,v64,v65,v66,v60);},20);}
function v1e10c54405()
{if(v2910c54405)return;v2910c54405=true;v2710c54405=true;v2a10c54405=true;var v93,v94;var v50=v3e10c54405();var v51=v3f10c54405();var v52=parseInt(v2210c54405.style.left)-v4010c54405();var v53=parseInt(v2210c54405.style.top)-v4110c54405();var v54=v3c10c54405();var v55=v3d10c54405();var v56,v57;v56=v52+v54;v57=0;if(v57!=0&&Math.abs(v56)>Math.abs(v57))v56=Math.abs(v57)*v56 / Math.abs(v56);else if(v56!=0&&Math.abs(v57)>Math.abs(v56))v57=Math.abs(v56)*v57 / Math.abs(v57);v93=v52-v56;v94=v53-v57;var v5a=v56!=0&&v57!=0?0.707107:1;var v5c=400*v5a;v9510c54405(v52,v53,v93,v94,v5c,0);}
function v9510c54405(v62,v63,v64,v65,v66,v60)
{if(v2b10c54405)return;var v90=(v66+v60*0.5)/ 50;var v91;if(v62!=v64)v91=Math.abs(v62-v64);else if(v63!=v65)v91=Math.abs(v63-v65);else 
{v4710c54405();return;}if(v90>v91)
{v4610c54405(v64,v65);v4710c54405();return;}if(v62<v64)v62+=v90;else if(v62>v64)v62-=v90;if(v63<v65)v63+=v90;else if(v63>v65)v63-=v90;v4610c54405(v62,v63);v66+=v60;setTimeout(function(){v9510c54405(v62,v63,v64,v65,v66,v60);},20);}var v9610c54405=false;var v9710c54405,v9810c54405;
function v1710c54405(v99)
{if(v9610c54405)return;v99=v99?v99:window.event;v9710c54405=v99.clientX-v2210c54405.v48;v9810c54405=v99.clientY-v2210c54405.v49;v9610c54405=true;v2a10c54405=true;document.onmousemove=v9a10c54405;}
function v1810c54405()
{v9610c54405=false;v2a10c54405=false;document.onmousemove=null;}
function v9a10c54405(v99)
{v99=v99?v99:window.event;if(v2f10c54405&&v99.button==0)
{v1810c54405(v99);return;}var v44=v99.clientX;var v45=v99.clientY;var v9b=v3e10c54405()-20;var v9c=v3f10c54405()-20;if(!document.all&&v44>v9b)return;if(!document.all&&v45>v9c)return;var v4e=v44-v9710c54405;var v4f=v45-v9810c54405;if(v4f<0)v4f=0;v4610c54405(v4e,v4f);}
function v9d10c54405(v99)
{
var v42,v9e;
if(v2f10c54405&&v3210c54405)
{
v42=document.getElementById('v1b10c54405').firstChild;v9e=document.getElementById('v1d10c54405').firstChild;v42.style.width=v42.style.height=v9e.style.width=v9e.style.height='17px';v42.style.paddingTop='3px';}}
v9d10c54405();
