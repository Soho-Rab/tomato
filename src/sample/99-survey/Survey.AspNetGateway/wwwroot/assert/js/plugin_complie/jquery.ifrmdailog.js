(function(a){function h(a,b){return a.replace(/\$\{([\w]+)\}/g,function(a,d){var c=b[d];return typeof c!="undefined"?c:a})}if(!a.ShowIfrmDailog){a.escapeHTML=function(a){var b=document.createElement("div");b.appendChild(document.createTextNode(a));return b.innerHTML};a.documentCenter=function(d){d=a(d);d.css({position:"absolute",left:Math.max((document.documentElement.clientWidth-d.width())/2+document.documentElement.scrollLeft,0)+"px",top:Math.max((document.documentElement.clientHeight-d.height())/
2+document.documentElement.scrollTop,0)+"px"})};a.getMargins=function(a,b){var g=jQuery(a),e=g.css("marginTop")||"",c=g.css("marginRight")||"",f=g.css("marginBottom")||"",g=g.css("marginLeft")||"";return b?{t:parseInt(e)||0,r:parseInt(c)||0,b:parseInt(f)||0,l:parseInt(g)}:{t:e,r:c,b:f,l:g}};var i=!1;a.ShowIfrmDailog=function(d,b){function g(){return!1}if(!i){i=!0;var b=a.extend({width:600,height:400,caption:"",enabledrag:!0,type:1,onclose:null},b),e=(new Date).valueOf();b.newid=e;b.caption=a.escapeHTML(b.caption);
var c=14;if(b.type==1)var f=a("<div id='dailog_"+e+"' class='bbit-window bbit-window-plain'></div>"),l="<div id='dailog_head_${newid}' class='bbit-window-tl'><div class='bbit-window-tr'><div class='bbit-window-tc'><div style='mozuserselect: none; khtmluserselect: none' class='bbit-window-header' unselectable='on'><div class='bbit-tool bbit-tool-close'>&nbsp;</div><span class='bbit-window-header-text'>${caption}</span></div></div></div></div>",m="<div class='bbit-window-bwrap'><div class='bbit-window-ml'><div class='bbit-window-mr'><div class='bbit-window-mc'><div id='dailog_body_${newid}' style='width: ${width}px; height: ${height}px' class='bbit-window-body'>${iframehtml}</div></div></div></div><div class='bbit-window-bl'><div class='bbit-window-br'><div class='bbit-window-bc'><div class='bbit-window-footer'></div></div></div></div></div>";
else c=0,f=a("<div id='dailog_"+e+"' class='bbit-window bbit-window-dailog'></div>"),l="<div id='dailog_head_${newid}' class='bbit-dailog-tl'></div>",m="<div class='bbit-window-bwrap'><div id='dailog_body_${newid}' style='width: ${width}px; height: ${height}px' class='bbit-window-body'>${iframehtml}</div></div>";b.url=d+(d.indexOf("?")>-1?"&":"?")+"_="+(new Date).valueOf();var j=[];b.iframehtml=h('<iframe id="dailog_iframe_${newid}" border="0" frameBorder="0" src="${url}" style="border:none;width:${width}px;height:${height}px"></iframe>',
b);j.push(h(l,b));j.push(h(m,b));f.css({width:b.width+c}).html(j.join(""));var n=f.find("div.bbit-tool-close").hover(function(){a(this).addClass("hover")},function(){a(this).removeClass("hover")}).click(function(){a.closeIfrm()}),c=a.getMargins(document.body,!0),o=a("<div></div>").css({position:"absolute",left:0,top:0,width:Math.max(document.documentElement.clientWidth,document.body.scrollWidth),height:Math.max(document.documentElement.clientHeight,document.body.scrollHeight+c.t+c.b),zIndex:"998",
background:"#fff",opacity:"0.5"}).bind("contextmenu",function(){return!1}).appendTo(document.body),k=!1;if(b.enabledrag&&a.fn.easydrag)f.addClass("bbit-window-draggable").easydrag(!1).ondrag(function(){k==!1&&(k=!0,a("#dailog_body_"+e).css("visibility","hidden"))}).ondrop(function(){k=!1;a("#dailog_body_"+e).css("visibility","visible")});f.appendTo(document.body);a.documentCenter(f);if(a.browser.msie6)a(document.body).addClass("hiddenselect"),document.getElementById("dailog_iframe_"+e).src=b.url;
else if(a.browser.msie7)document.getElementById("dailog_iframe_"+e).src=b.url;a.closeIfrm=function(c,d,e){a.closeIfrm=g;a.browser.msie6&&a(document.body).removeClass("hiddenselect");o.remove();n.remove();f.remove();i=!1;n=o=f=null;c&&c();if(d&&b.onclose)b.onclose(e),b.onclose=null}}}}})(jQuery);
