(function(a){a.addFlex=function(k,c){if(k.grid)return!1;c=a.extend({height:200,width:"auto",striped:!0,novstripe:!1,minwidth:30,minheight:80,resizable:!1,url:!1,method:"POST",dataType:"json",errormsg:"\u53d1\u751f\u9519\u8bef",usepager:!1,nowrap:!0,page:1,total:1,useRp:!0,rp:25,rpOptions:[10,15,20,25,40,100],title:!1,pagestat:"\u663e\u793a\u8bb0\u5f55\u4ece{from}\u5230{to}\uff0c\u603b\u6570 {total} \u6761",procmsg:"\u6b63\u5728\u5904\u7406\u6570\u636e\uff0c\u8bf7\u7a0d\u5019 ...",query:"",qtype:"",
qop:"Eq",nomsg:"\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684\u8bb0\u5f55\u5b58\u5728",minColToggle:1,showToggleBtn:!0,hideOnSubmit:!0,showTableToggleBtn:!1,autoload:!0,blockOpacity:0.5,onToggleCol:!1,onChangeSort:!1,onSuccess:!1,onSubmit:!1,showcheckbox:!1,singleselected:!1,rowhandler:!1,rowbinddata:!1,selectedonclick:!1,showrownum:!0,extParam:{},gridClass:"bbit-grid",onrowchecked:!1,postColInfo:!0},c);a(k).show().attr({cellPadding:0,cellSpacing:0,border:0}).removeAttr("width");var b={hset:{},rePosDrag:function(){var d=
0-this.hDiv.scrollLeft;this.hDiv.scrollLeft>0&&(d-=Math.floor(c.cgwidth/2));a(b.cDrag).css({top:b.hDiv.offsetTop+1});var f=this.cdpad;a("div",b.cDrag).hide();var e=0;a("thead tr:first th:visible",this.hDiv).each(function(){if(a(this).css("display")!="none"){var g=e,l=parseInt(a("div",this).width());d==0&&(d-=Math.floor(c.cgwidth/2));l=l+d+f;a("div:eq("+g+")",b.cDrag).css({left:l+"px"}).show();d=l;e++}})},fixHeight:function(d){var d=!1,d=a(b.bDiv).height(),f=a(this.hDiv).height();a("div",this.cDrag).each(function(){a(this).height(d+
f)});parseInt(a(b.nDiv).height())>d?a(b.nDiv).height(d).width(200):a(b.nDiv).height("auto").width("auto");a(b.block).css({height:d,marginBottom:d*-1});var e=b.bDiv.offsetTop+d;if(c.height!="auto"&&c.resizable)e=b.vDiv.offsetTop;a(b.rDiv).css({height:e})},dragStart:function(d,f,e){if(d=="colresize"){a(b.nDiv).hide();a(b.nBtn).hide();var d=a("div",this.cDrag).index(e),g=a("th:visible:eq("+d+") div",this.hDiv).width();a(e).addClass("dragging").siblings().hide();a(e).prev().addClass("dragging").show();
this.colresize={startX:f.pageX,ol:parseInt(e.style.left),ow:g,n:d};a("body").css("cursor","col-resize")}else if(d=="vresize")d=!1,a("body").css("cursor","row-resize"),e&&(d=!0,a("body").css("cursor","col-resize")),this.vresize={h:c.height,sy:f.pageY,w:c.width,sx:f.pageX,hgo:d};else if(d=="colMove"){a(b.nDiv).hide();a(b.nBtn).hide();this.hset=a(this.hDiv).offset();this.hset.right=this.hset.left+a("table",this.hDiv).width();this.hset.bottom=this.hset.top+a("table",this.hDiv).height();this.dcol=e;this.dcoln=
a("th",this.hDiv).index(e);this.colCopy=document.createElement("div");this.colCopy.className="colCopy";this.colCopy.innerHTML=e.innerHTML;if(a.browser.msie)this.colCopy.className="colCopy ie";a(this.colCopy).css({position:"absolute","float":"left",display:"none",textAlign:e.align});a("body").append(this.colCopy);a(this.cDrag).hide()}a("body").noSelect()},reSize:function(){this.gDiv.style.width=c.width;this.bDiv.style.height=c.height},dragMove:function(b){if(this.colresize){var f=this.colresize.n,
e=b.pageX-this.colresize.startX,b=this.colresize.ol+e,e=this.colresize.ow+e;if(e>c.minwidth)a("div:eq("+f+")",this.cDrag).css("left",b),this.colresize.nw=e}else if(this.vresize){f=this.vresize;e=b.pageY-f.sy;if(!c.defwidth)c.defwidth=c.width;if(c.width!="auto"&&!c.nohresize&&f.hgo&&(b=f.w+(b.pageX-f.sx),b>c.defwidth))this.gDiv.style.width=b+"px",c.width=b;e=f.h+e;if((e>c.minheight||c.height<c.minheight)&&!f.hgo)this.bDiv.style.height=e+"px",c.height=e,this.fixHeight(e)}else this.colCopy&&(a(this.dcol).addClass("thMove").removeClass("thOver"),
b.pageX>this.hset.right||b.pageX<this.hset.left||b.pageY>this.hset.bottom||b.pageY<this.hset.top?a("body").css("cursor","move"):a("body").css("cursor","pointer"),a(this.colCopy).css({top:b.pageY+10,left:b.pageX+20,display:"block"}))},dragEnd:function(){if(this.colresize){var b=this.colresize.n,c=this.colresize.nw;a("th:visible:eq("+b+") div",this.hDiv).css("width",c);a("tr",this.bDiv).each(function(){a("td:visible:eq("+b+") div",this).css("width",c)});this.hDiv.scrollLeft=this.bDiv.scrollLeft;a("div:eq("+
b+")",this.cDrag).siblings().show();a(".dragging",this.cDrag).removeClass("dragging");this.rePosDrag();this.fixHeight();this.colresize=!1}else if(this.vresize)this.vresize=!1;else if(this.colCopy)a(this.colCopy).remove(),this.dcolt!=null&&(this.dcoln>this.dcolt?a("th:eq("+this.dcolt+")",this.hDiv).before(this.dcol):a("th:eq("+this.dcolt+")",this.hDiv).after(this.dcol),this.switchCol(this.dcoln,this.dcolt),a(this.cdropleft).remove(),a(this.cdropright).remove(),this.rePosDrag()),this.colCopy=this.dcolt=
this.dcoln=this.hset=this.dcol=null,a(".thMove",this.hDiv).removeClass("thMove"),a(this.cDrag).show();a("body").css("cursor","default");a("body").noSelect(!1)},toggleCol:function(d,f){var e=a("th[axis='col"+d+"']",this.hDiv)[0],g=a("thead th",b.hDiv).index(e),l=a("input[value="+d+"]",b.nDiv)[0];if(f==null)f=e.hide;if(a("input:checked",b.nDiv).length<c.minColToggle&&!f)return!1;f?(e.hide=!1,a(e).show(),l.checked=!0):(e.hide=!0,a(e).hide(),l.checked=!1);a("tbody tr",k).each(function(){f?a("td:eq("+
g+")",this).show():a("td:eq("+g+")",this).hide()});this.rePosDrag();if(c.onToggleCol)c.onToggleCol(d,f);return f},switchCol:function(b,c){a("tbody tr",k).each(function(){b>c?a("td:eq("+c+")",this).before(a("td:eq("+b+")",this)):a("td:eq("+c+")",this).after(a("td:eq("+b+")",this))});b>c?a("tr:eq("+c+")",this.nDiv).before(a("tr:eq("+b+")",this.nDiv)):a("tr:eq("+c+")",this.nDiv).after(a("tr:eq("+b+")",this.nDiv));if(a.browser.msie&&a.browser.version<7)a("tr:eq("+c+") input",this.nDiv)[0].checked=!0;
this.hDiv.scrollLeft=this.bDiv.scrollLeft},scroll:function(){this.hDiv.scrollLeft=this.bDiv.scrollLeft;this.rePosDrag()},hideLoading:function(){a(".pReload",this.pDiv).removeClass("loading");c.hideOnSubmit&&a(b.block).remove();a(".pPageStat",this.pDiv).html(c.errormsg);this.loading=!1},addData:function(d){c.preProcess&&(d=c.preProcess(d));a(".pReload",this.pDiv).removeClass("loading");this.loading=!1;if(!d)return a(".pPageStat",this.pDiv).html(c.errormsg),!1;var f=c.total;c.total=c.dataType=="xml"?
+a("rows total",d).text():d.total;if(c.total<0)c.total=f;if(c.total==0)return a("tr, a, td, div",k).unbind(),a(k).empty(),c.pages=1,c.page=1,this.buildpager(),a(".pPageStat",this.pDiv).html(c.nomsg),c.hideOnSubmit&&a(b.block).remove(),!1;c.pages=Math.ceil(c.total/c.rp);c.page=c.dataType=="xml"?+a("rows page",d).text():d.page;this.buildpager();var e=a("thead tr:first th",b.hDiv),g=a("thead tr:first th div",b.hDiv),l=[];l.push("<tbody>");var j=c.rp*(c.page-1);c.dataType=="json"?d.rows!=null&&a.each(d.rows,
function(b,d){l.push("<tr id='","row",d.id,"'");b%2&&c.striped&&l.push(" class='erow'");c.rowbinddata&&l.push("ch='",d.cell.join("_FG$SP_"),"'");l.push(">");var f=d.id;a(e).each(function(e){var k="";l.push("<td align='",this.align,"'");var h=a(this).attr("axis").substr(3);c.sortname&&c.sortname==a(this).attr("abbr")&&(k="sorted");this.hide&&l.push(" style='display:none;'");var m=[];m.push("<div style='text-align:",this.align,";width:",g[e].style.width,";");c.nowrap==!1&&m.push("white-space:normal");
m.push("'>");h=="-1"||h=="-2"?(h=="-1"&&m.push("<input type='checkbox' id='chk_",d.id,"' class='itemchk' value='",d.id,"'/>"),h=="-2"&&c.showrownum&&m.push("<em>",j+b+1,"</em>"),k+=k!=""?" chboxtd":"chboxtd"):(e=d.cell[h]||"&nbsp;",this.process&&(e=this.process(e,f,d.cell)),m.push(e));m.push("</div>");k!=""&&l.push(" class='",k,"'");l.push(">",m.join(""),"</td>")});l.push("</tr>")}):c.dataType=="xml"&&(i=1,a("rows row",d).each(function(){i++;var b=[];a("cell",this).each(function(){b.push(a(this).text())});
var d=a(this).attr("id");l.push("<tr id='","row",d,"'");i%2&&c.striped&&l.push(" class='erow'");c.rowbinddata&&l.push("ch='",b.join("_FG$SP_"),"'");l.push(">");a(e).each(function(f){l.push("<td align='",this.align,"'");this.hide&&l.push(" style='display:none;'");var e="",k="",h=a(this).attr("axis").substr(3);c.sortname&&c.sortname==a(this).attr("abbr")&&(e="sorted");var m=[];m.push("<div style='text-align:",this.align,";width:",g[f].style.width,";");c.nowrap==!1&&m.push("white-space:normal");m.push("'>");
h=="-1"||h=="-2"?(h=="-1"&&m.push("<input type='checkbox' id='chk_",d,"' class='itemchk' value='",d,"'/>"),h=="-2"&&c.showrownum&&m.push("<em>",j+i+1,"</em>"),e+=e!=""?" chboxtd":"chboxtd"):(f=b[h]||"&nbsp;",c.rowbinddata&&(k=b[h]||""),this.process&&(f=this.process(f,d)),m.push(f));m.push("</div>");e!=""&&l.push(" class='",e,"'");l.push(" axis='",k,"'",">",m.join(""),"</td>")});l.push("</tr>")}));l.push("</tbody>");a(k).html(l.join(""));this.addRowProp();if(c.onSuccess)c.onSuccess();c.hideOnSubmit&&
a(b.block).remove();this.hDiv.scrollLeft=this.bDiv.scrollLeft;a.browser.opera&&a(k).css("visibility","visible")},changeSort:function(d){if(this.loading)return!0;a(b.nDiv).hide();a(b.nBtn).hide();if(c.sortname==a(d).attr("abbr"))c.sortorder=c.sortorder=="asc"?"desc":"asc";a(d).addClass("sorted").siblings().removeClass("sorted");a(".sdesc",this.hDiv).removeClass("sdesc");a(".sasc",this.hDiv).removeClass("sasc");a("div",d).addClass("s"+c.sortorder);c.sortname=a(d).attr("abbr");if(c.onChangeSort)c.onChangeSort(c.sortname,
c.sortorder);else this.populate()},buildpager:function(){a(".pcontrol input",this.pDiv).val(c.page);a(".pcontrol span",this.pDiv).html(c.pages);var b=(c.page-1)*c.rp+1,f=b+c.rp-1;if(c.total<f)f=c.total;var e=c.pagestat,e=e.replace(/{from}/,b),e=e.replace(/{to}/,f),e=e.replace(/{total}/,c.total);a(".pPageStat",this.pDiv).html(e)},populate:function(){if(this.loading)return!0;if(c.onSubmit&&!c.onSubmit())return!1;this.loading=!0;if(!c.url)return!1;a(".pPageStat",this.pDiv).html(c.procmsg);a(".pReload",
this.pDiv).addClass("loading");a(b.block).css({top:b.bDiv.offsetTop});c.hideOnSubmit&&a(this.gDiv).prepend(b.block);a.browser.opera&&a(k).css("visibility","hidden");if(!c.newp)c.newp=1;if(c.page>c.pages)c.page=c.pages;var d=[{name:"page",value:c.newp},{name:"rp",value:c.rp},{name:"sortname",value:c.sortname},{name:"sortorder",value:c.sortorder},{name:"query",value:c.query},{name:"qtype",value:c.qtype},{name:"qop",value:c.qop}];if(c.postColInfo){if(!c.colkey){for(var f=[],e=0,g=c.colModel.length;e<
g;e++){if(c.colModel[e].iskey)c.colkey=c.colModel[e].name;f.push(c.colModel[e].name)}c.cols=f.join(",")}if(!c.colkey){alert("\u8bf7\u8bbe\u7f6e\u4e3b\u952e { display: '\u8bf4\u660e', name: '\u5b57\u6bb5\u540d',iskey:true },");return}d.push({name:"colkey",value:c.colkey});d.push({name:"colsinfo",value:c.cols})}if(c.extParam)for(f=0;f<c.extParam.length;f++)d[d.length]=c.extParam[f];f=c.url+(c.url.indexOf("?")>-1?"&":"?")+"_="+(new Date).valueOf();a.ajax({type:c.method,url:f,data:d,dataType:c.dataType,
success:function(a){a!=null&&a.error!=null?c.onError&&(c.onError(a),b.hideLoading()):b.addData(a)},error:function(a){try{if(c.onError)c.onError(a);else alert("\u83b7\u53d6\u6570\u636e\u53d1\u751f\u5f02\u5e38;");b.hideLoading()}catch(d){}}})},doSearch:function(){var d=a("select[name=qtype]",b.sDiv).val(),f=d.split("$"),e=-1;f.length!=3?(c.qop="Eq",c.qtype=d):(c.qop=f[1],c.qtype=f[0],e=parseInt(f[2]));c.query=a("input[name=q]",b.sDiv).val();c.query!=""&&c.searchitems&&e>=0&&c.searchitems.length>e&&
c.searchitems[e].reg&&!c.searchitems[e].reg.test(c.query)?alert("\u4f60\u7684\u8f93\u5165\u4e0d\u7b26\u5408\u8981\u6c42!"):(c.newp=1,this.populate())},changePage:function(b){if(this.loading)return!0;switch(b){case "first":c.newp=1;break;case "prev":if(c.page>1)c.newp=parseInt(c.page)-1;break;case "next":if(c.page<c.pages)c.newp=parseInt(c.page)+1;break;case "last":c.newp=c.pages;break;case "input":b=parseInt(a(".pcontrol input",this.pDiv).val());isNaN(b)&&(b=1);if(b<1)b=1;else if(b>c.pages)b=c.pages;
a(".pcontrol input",this.pDiv).val(b);c.newp=b}if(c.newp==c.page)return!1;if(c.onChangePage)c.onChangePage(c.newp);else this.populate()},cellProp:function(b,f,e){b=document.createElement("div");if(e!=null){if(c.sortname==a(e).attr("abbr")&&c.sortname)this.className="sorted";a(b).css({textAlign:e.align,width:a("div:first",e)[0].style.width});e.hide&&a(this).css("display","none")}c.nowrap==!1&&a(b).css("white-space","normal");if(this.innerHTML=="")this.innerHTML="&nbsp;";b.innerHTML=this.innerHTML;
var g=a(this).parent()[0],h=!1;g.id&&(h=g.id.substr(3));e!=null&&e.process&&e.process(b,h);a("input.itemchk",b).each(function(){a(this).click(function(){this.checked?a(f).addClass("trSelected"):a(f).removeClass("trSelected");c.onrowchecked&&c.onrowchecked.call(this)})});a(this).empty().append(b).removeAttr("width")},addCellProp:function(){var c=this.cellProp;a("tbody tr td",b.bDiv).each(function(){var f=a("td",a(this).parent()).index(this),e=a("th:eq("+f+")",b.hDiv).get(0),g=a(this).parent();c.call(this,
f,g,e)});c=null},getCheckedRows:function(){var c=[];a("input.itemchk:checked",b.bDiv).each(function(){c.push(a(this).val())});return c},getSelectedRows:function(){var d=[];c.rowbinddata||alert("\u8bf7\u5c06\u5c5e\u6027rowbinddata\u8bbe\u7f6e\u4e3atrue");a("tr.trSelected",b.bDiv).each(function(){d.push(a(this).attr("CH").split("_FG$SP_"))});return d},getCellDim:function(b){var c=parseInt(a(b).height()),e=parseInt(a(b).parent().height()),g=parseInt(b.style.width),h=parseInt(a(b).parent().width()),k=
b.offsetParent.offsetTop,j=b.offsetParent.offsetLeft,n=parseInt(a(b).css("paddingLeft")),b=parseInt(a(b).css("paddingTop"));return{ht:c,wt:g,top:k,left:j,pdl:n,pdt:b,pht:e,pwt:h}},rowProp:function(){c.rowhandler&&c.rowhandler(this);a.browser.msie&&a.browser.version<7&&a(this).hover(function(){a(this).addClass("trOver")},function(){a(this).removeClass("trOver")})},checkhandler:function(){var b=a(this),f=a("input.itemchk",this);c.singleselected&&b.parent().find("tr.trSelected").each(function(){this!=
b[0]&&a(this).removeClass("trSelected");a("input.itemchk",this).each(function(){this.checked=!1})});b.hasClass("trSelected")?(f.length>0&&(f[0].checked=!1),b.removeClass("trSelected")):(f.length>0&&(f[0].checked=!0),b.addClass("trSelected"))},addRowProp:function(){var d=this.rowProp,f=this.checkhandler;a("tbody tr",b.bDiv).each(function(){c.showcheckbox&&a("input.itemchk",this).each(function(){a(this).click(function(b){var d=a(this).parent().parent().parent();f.call(d);c.onrowchecked&&c.onrowchecked.call(this);
b.stopPropagation()})});c.selectedonclick&&a(this).click(f);d.call(this)});d=null},checkAllOrNot:function(){var d=a(this).attr("checked");a("tbody tr",b.bDiv).each(function(){d?a(this).addClass("trSelected"):a(this).removeClass("trSelected")});a("input.itemchk",b.bDiv).each(function(){this.checked=d;c.onrowchecked&&c.onrowchecked.call(this)})},pager:0};if(c.colModel){g=document.createElement("thead");tr=document.createElement("tr");if(c.showcheckbox||c.showrownum||c.showleftbar){var j=jQuery("<th/>");
j.addClass("cth").attr({width:"15",isch:!0});if(c.showcheckbox){var h=jQuery('<input type="checkbox"/>');h.addClass("noborder");c.singleselected&&h.attr("disabled",!0).css("visibility","hidden");j.attr("axis","col-1");j.append(h)}else j.attr("axis","col-2");a(tr).append(j)}for(i=0;i<c.colModel.length;i++){j=c.colModel[i];h=document.createElement("th");h.innerHTML=j.display;j.name&&j.sortable&&a(h).attr("abbr",j.name);a(h).attr("axis","col"+i);if(j.align)h.align=j.align;j.width&&a(h).attr("width",
j.width);if(j.hide)h.hide=!0;if(j.toggle!=void 0)h.toggle=j.toggle;if(j.process)h.process=j.process;a(tr).append(h)}a(g).append(tr);a(k).prepend(g)}b.gDiv=document.createElement("div");b.mDiv=document.createElement("div");b.hDiv=document.createElement("div");b.bDiv=document.createElement("div");b.vDiv=document.createElement("div");b.rDiv=document.createElement("div");b.cDrag=document.createElement("div");b.block=document.createElement("div");b.nDiv=document.createElement("div");b.nBtn=document.createElement("div");
b.iDiv=document.createElement("div");b.tDiv=document.createElement("div");b.sDiv=document.createElement("div");if(c.usepager)b.pDiv=document.createElement("div");b.hTable=document.createElement("table");b.gDiv.className=c.gridClass;if(c.width!="auto")b.gDiv.style.width=c.width+"px";a.browser.msie&&a(b.gDiv).addClass("ie");c.novstripe&&a(b.gDiv).addClass("novstripe");a(k).before(b.gDiv);a(b.gDiv).append(k);if(c.buttons){b.tDiv.className="tDiv";g=document.createElement("div");g.className="tDiv2";for(i=
0;i<c.buttons.length;i++)if(j=c.buttons[i],j.separator)a(g).append("<div class='btnseparator'></div>");else{h=document.createElement("div");h.className="fbutton";h.innerHTML="<div><span>"+j.displayname+"</span></div>";if(j.title)h.title=j.title;j.bclass&&a("span",h).addClass(j.bclass);h.onpress=j.onpress;h.name=j.name;j.onpress&&a(h).click(function(){this.onpress(this.name,b.gDiv)});a(g).append(h);a.browser.msie&&a.browser.version<7&&a(h).hover(function(){a(this).addClass("fbOver")},function(){a(this).removeClass("fbOver")})}a(b.tDiv).append(g);
a(b.tDiv).append("<div style='clear:both'></div>");a(b.gDiv).prepend(b.tDiv)}b.hDiv.className="hDiv";a(k).before(b.hDiv);b.hTable.cellPadding=0;b.hTable.cellSpacing=0;a(b.hDiv).append('<div class="hDivBox"></div>');a("div",b.hDiv).append(b.hTable);var g=a("thead:first",k).get(0);g&&a(b.hTable).append(g);g=null;if(!c.colmodel)var n=0;a("thead tr:first th",b.hDiv).each(function(){var d=document.createElement("div");if(a(this).attr("abbr")&&(a(this).click(function(c){if(!a(this).hasClass("thOver"))return!1;
c=c.target||c.srcElement;if(c.href||c.type)return!0;b.changeSort(this)}),a(this).attr("abbr")==c.sortname))this.className="sorted",d.className="s"+c.sortorder;this.hide&&a(this).hide();!c.colmodel&&!a(this).attr("isch")&&a(this).attr("axis","col"+n++);a(d).css({textAlign:this.align,width:this.width+"px"});d.innerHTML=this.innerHTML;a(this).empty().append(d).removeAttr("width");a(this).attr("isch")||a(this).mousedown(function(a){b.dragStart("colMove",a,this)}).hover(function(){!b.colresize&&!a(this).hasClass("thMove")&&
!b.colCopy&&a(this).addClass("thOver");if(a(this).attr("abbr")!=c.sortname&&!b.colCopy&&!b.colresize&&a(this).attr("abbr"))a("div",this).addClass("s"+c.sortorder);else if(a(this).attr("abbr")==c.sortname&&!b.colCopy&&!b.colresize&&a(this).attr("abbr")){var d="",d=c.sortorder=="asc"?"desc":"asc";a("div",this).removeClass("s"+c.sortorder).addClass("s"+d)}if(b.colCopy){d=a("th",b.hDiv).index(this);if(d==b.dcoln)return!1;d<b.dcoln?a(this).append(b.cdropleft):a(this).append(b.cdropright);b.dcolt=d}else if(!b.colresize){for(var d=
a("th:visible",b.hDiv),e=-1,g=0,h=0,k=d.length;g<k;g++)if(a(d[g]).css("display")!="none"){if(d[g]==this){e=h;break}h++}d=parseInt(a("div:eq("+e+")",b.cDrag).css("left"));e=parseInt(a(b.nBtn).width())+parseInt(a(b.nBtn).css("borderLeftWidth"));nl=d-e+Math.floor(c.cgwidth/2);a(b.nDiv).hide();a(b.nBtn).hide();a(b.nBtn).css({left:nl,top:b.hDiv.offsetTop}).show();e=parseInt(a(b.nDiv).width());a(b.nDiv).css({top:b.bDiv.offsetTop});nl+e>a(b.gDiv).width()?a(b.nDiv).css("left",d-e+1):a(b.nDiv).css("left",
nl);a(this).hasClass("sorted")?a(b.nBtn).addClass("srtd"):a(b.nBtn).removeClass("srtd")}},function(){a(this).removeClass("thOver");if(a(this).attr("abbr")!=c.sortname)a("div",this).removeClass("s"+c.sortorder);else if(a(this).attr("abbr")==c.sortname){var d="",d=c.sortorder=="asc"?"desc":"asc";a("div",this).addClass("s"+c.sortorder).removeClass("s"+d)}if(b.colCopy)a(b.cdropleft).remove(),a(b.cdropright).remove(),b.dcolt=null})});b.bDiv.className="bDiv";a(k).before(b.bDiv);a(b.bDiv).css({height:c.height==
"auto"?"auto":c.height+"px"}).scroll(function(){b.scroll()}).append(k);c.height=="auto"&&a("table",b.bDiv).addClass("autoht");if(c.url==!1||c.url=="")b.addCellProp(),b.addRowProp();g=a("thead tr:first th:first",b.hDiv).get(0);if(g!=null){b.cDrag.className="cDrag";b.cdpad=0;b.cdpad+=isNaN(parseInt(a("div",g).css("borderLeftWidth")))?0:parseInt(a("div",g).css("borderLeftWidth"));b.cdpad+=isNaN(parseInt(a("div",g).css("borderRightWidth")))?0:parseInt(a("div",g).css("borderRightWidth"));b.cdpad+=isNaN(parseInt(a("div",
g).css("paddingLeft")))?0:parseInt(a("div",g).css("paddingLeft"));b.cdpad+=isNaN(parseInt(a("div",g).css("paddingRight")))?0:parseInt(a("div",g).css("paddingRight"));b.cdpad+=isNaN(parseInt(a(g).css("borderLeftWidth")))?0:parseInt(a(g).css("borderLeftWidth"));b.cdpad+=isNaN(parseInt(a(g).css("borderRightWidth")))?0:parseInt(a(g).css("borderRightWidth"));b.cdpad+=isNaN(parseInt(a(g).css("paddingLeft")))?0:parseInt(a(g).css("paddingLeft"));b.cdpad+=isNaN(parseInt(a(g).css("paddingRight")))?0:parseInt(a(g).css("paddingRight"));
a(b.bDiv).before(b.cDrag);var q=a(b.bDiv).height(),o=a(b.hDiv).height();a(b.cDrag).css({top:-o+"px"});a("thead tr:first th",b.hDiv).each(function(){var d=document.createElement("div");a(b.cDrag).append(d);if(!c.cgwidth)c.cgwidth=a(d).width();a(d).css({height:q+o}).mousedown(function(a){b.dragStart("colresize",a,this)});a.browser.msie&&a.browser.version<7&&(b.fixHeight(a(b.gDiv).height()),a(d).hover(function(){b.fixHeight();a(this).addClass("dragging")},function(){b.colresize||a(this).removeClass("dragging")}))})}c.striped&&
a("tbody tr:odd",b.bDiv).addClass("erow");if(c.resizable&&c.height!="auto")b.vDiv.className="vGrip",a(b.vDiv).mousedown(function(a){b.dragStart("vresize",a)}).html("<span></span>"),a(b.bDiv).after(b.vDiv);if(c.resizable&&c.width!="auto"&&!c.nohresize)b.rDiv.className="hGrip",a(b.rDiv).mousedown(function(a){b.dragStart("vresize",a,!0)}).html("<span></span>").css("height",a(b.gDiv).height()),a.browser.msie&&a.browser.version<7&&a(b.rDiv).hover(function(){a(this).addClass("hgOver")},function(){a(this).removeClass("hgOver")}),
a(b.gDiv).append(b.rDiv);if(c.usepager){b.pDiv.className="pDiv";b.pDiv.innerHTML='<div class="pDiv2"></div>';a(b.bDiv).after(b.pDiv);a("div",b.pDiv).html('<div class="pGroup"><div class="pFirst pButton" title="\u8f6c\u5230\u7b2c\u4e00\u9875"><span></span></div><div class="pPrev pButton" title="\u8f6c\u5230\u4e0a\u4e00\u9875"><span></span></div> </div><div class="btnseparator"></div> <div class="pGroup"><span class="pcontrol">\u5f53\u524d <input type="text" size="1" value="1" /> ,\u603b\u9875\u6570 <span> 1 </span></span></div><div class="btnseparator"></div><div class="pGroup"> <div class="pNext pButton" title="\u8f6c\u5230\u4e0b\u4e00\u9875"><span></span></div><div class="pLast pButton" title="\u8f6c\u5230\u6700\u540e\u4e00\u9875"><span></span></div></div><div class="btnseparator"></div><div class="pGroup"> <div class="pReload pButton" title="\u5237\u65b0"><span></span></div> </div> <div class="btnseparator"></div><div class="pGroup"><span class="pPageStat"></span></div>');
a(".pReload",b.pDiv).click(function(){b.populate()});a(".pFirst",b.pDiv).click(function(){b.changePage("first")});a(".pPrev",b.pDiv).click(function(){b.changePage("prev")});a(".pNext",b.pDiv).click(function(){b.changePage("next")});a(".pLast",b.pDiv).click(function(){b.changePage("last")});a(".pcontrol input",b.pDiv).keydown(function(a){if(a.keyCode==13)return b.changePage("input"),!1});a.browser.msie&&a.browser.version<7&&a(".pButton",b.pDiv).hover(function(){a(this).addClass("pBtnOver")},function(){a(this).removeClass("pBtnOver")});
if(c.useRp){g="";for(j=0;j<c.rpOptions.length;j++)sel=c.rp==c.rpOptions[j]?'selected="selected"':"",g+="<option value='"+c.rpOptions[j]+"' "+sel+" >"+c.rpOptions[j]+"&nbsp;&nbsp;</option>";a(".pDiv2",b.pDiv).prepend("<div class='pGroup'>\u6bcf\u9875 <select name='rp'>"+g+"</select>\u6761</div> <div class='btnseparator'></div>");a("select",b.pDiv).change(function(){if(c.onRpChange)c.onRpChange(+this.value);else c.newp=1,c.rp=+this.value,b.populate()})}if(c.searchitems){a(".pDiv2",b.pDiv).prepend("<div class='pGroup'> <div class='pSearch pButton'><span></span></div> </div>  <div class='btnseparator'></div>");
a(".pSearch",b.pDiv).click(function(){a(b.sDiv).slideToggle("fast",function(){a(".sDiv:visible input:first",b.gDiv).trigger("focus")})});b.sDiv.className="sDiv";sitems=c.searchitems;g="";j="Eq";for(h=0;h<sitems.length;h++)c.qtype==""&&sitems[h].isdefault==!0?(c.qtype=sitems[h].name,sel='selected="selected"'):sel="",j=sitems[h].operater=="Like"?"Like":"Eq",g+="<option value='"+sitems[h].name+"$"+j+"$"+h+"' "+sel+" >"+sitems[h].display+"&nbsp;&nbsp;</option>";if(c.qtype=="")c.qtype=sitems[0].name;a(b.sDiv).append("<div class='sDiv2'>\u5feb\u901f\u68c0\u7d22\uff1a<input type='text' size='30' name='q' class='qsbox' /> <select name='qtype'>"+
g+"</select> <input type='button' name='qclearbtn' value='\u6e05\u7a7a' /></div>");a("input[name=q],select[name=qtype]",b.sDiv).keydown(function(a){a.keyCode==13&&b.doSearch()});a("input[name=qclearbtn]",b.sDiv).click(function(){a("input[name=q]",b.sDiv).val("");c.query="";b.doSearch()});a(b.bDiv).after(b.sDiv)}}a(b.pDiv,b.sDiv).append("<div style='clear:both'></div>");if(c.title)b.mDiv.className="mDiv",b.mDiv.innerHTML='<div class="ftitle">'+c.title+"</div>",a(b.gDiv).prepend(b.mDiv),c.showTableToggleBtn&&
(a(b.mDiv).append('<div class="ptogtitle" title="Minimize/Maximize Table"><span></span></div>'),a("div.ptogtitle",b.mDiv).click(function(){a(b.gDiv).toggleClass("hideBody");a(this).toggleClass("vsble")}));b.cdropleft=document.createElement("span");b.cdropleft.className="cdropleft";b.cdropright=document.createElement("span");b.cdropright.className="cdropright";b.block.className="gBlock";g=a("<div/>");g.addClass("loading");a(b.block).append(g);g=a(b.bDiv).height();j=b.bDiv.offsetTop;a(b.block).css({width:b.bDiv.style.width,
height:g,position:"relative",marginBottom:g*-1,zIndex:1,top:j,left:"0px"});a(b.block).fadeTo(0,c.blockOpacity);if(a("th",b.hDiv).length){b.nDiv.className="nDiv";b.nDiv.innerHTML="<table cellpadding='0' cellspacing='0'><tbody></tbody></table>";a(b.nDiv).css({marginBottom:g*-1,display:"none",top:j}).noSelect();var p=0;a("th div",b.hDiv).each(function(){var c=a(this).parent("th"),f=a("input[type='checkbox']",this);f.length>0?f[0].onclick=b.checkAllOrNot:c.attr("isch")||(c[0].toggle==!1||this.innerHTML==
""||(f='checked="checked"',c.css("display")=="none"&&(f=""),a("tbody",b.nDiv).append('<tr><td class="ndcol1"><input type="checkbox" '+f+' class="togCol noborder" value="'+p+'" /></td><td class="ndcol2">'+this.innerHTML+"</td></tr>")),p++)});a.browser.msie&&a.browser.version<7&&a("tr",b.nDiv).hover(function(){a(this).addClass("ndcolover")},function(){a(this).removeClass("ndcolover")});a("td.ndcol2",b.nDiv).click(function(){return a("input:checked",b.nDiv).length<=c.minColToggle&&a(this).prev().find("input")[0].checked?
!1:b.toggleCol(a(this).prev().find("input").val())});a("input.togCol",b.nDiv).click(function(){if(a("input:checked",b.nDiv).length<c.minColToggle&&this.checked==!1)return!1;a(this).parent().next().trigger("click")});a(b.gDiv).prepend(b.nDiv);a(b.nBtn).addClass("nBtn").html("<div></div>").click(function(){a(b.nDiv).toggle();return!0});c.showToggleBtn&&a(b.gDiv).prepend(b.nBtn)}a(b.iDiv).addClass("iDiv").css({display:"none"});a(b.bDiv).append(b.iDiv);a(b.bDiv).hover(function(){a(b.nDiv).hide();a(b.nBtn).hide()},
function(){if(b.multisel)b.multisel=!1});a(b.gDiv).hover(function(){},function(){a(b.nDiv).hide();a(b.nBtn).hide()});a(document).mousemove(function(a){b.dragMove(a)}).mouseup(function(){b.dragEnd()}).hover(function(){},function(){b.dragEnd()});a.browser.msie&&a.browser.version<7&&(a(".hDiv,.bDiv,.mDiv,.pDiv,.vGrip,.tDiv, .sDiv",b.gDiv).css({width:"100%"}),a(b.gDiv).addClass("ie6"),c.width!="auto"&&a(b.gDiv).addClass("ie6fullwidthbug"));b.rePosDrag();b.fixHeight();k.p=c;k.grid=b;c.url&&c.autoload&&
b.populate();return k};var n=!1;a(document).ready(function(){n=!0});a.fn.flexigrid=function(k){return this.each(function(){if(n)a.addFlex(this,k);else{a(this).hide();var c=this;a(document).ready(function(){a.addFlex(c,k)})}})};a.fn.flexReload=function(){return this.each(function(){this.grid&&this.p.url&&this.grid.populate()})};a.fn.flexResize=function(k,c){var b={width:k,height:c};return this.each(function(){this.grid&&(a.extend(this.p,b),this.grid.reSize())})};a.fn.ChangePage=function(a){return this.each(function(){this.grid&&
this.grid.changePage(a)})};a.fn.flexOptions=function(k){return this.each(function(){this.grid&&a.extend(this.p,k)})};a.fn.GetOptions=function(){return this[0].grid?this[0].p:null};a.fn.getCheckedRows=function(){return this[0].grid?this[0].grid.getCheckedRows():[]};a.fn.getSelectedRows=function(){return this[0].grid?this[0].grid.getSelectedRows():[]};a.fn.flexToggleCol=function(a,c){return this.each(function(){this.grid&&this.grid.toggleCol(a,c)})};a.fn.flexAddData=function(a){return this.each(function(){this.grid&&
this.grid.addData(a)})};a.fn.noSelect=function(k){return(prevent=k==null?!0:k)?this.each(function(){a.browser.msie||a.browser.safari?a(this).bind("selectstart",function(){return!1}):a.browser.mozilla?(a(this).css("MozUserSelect","none"),a("body").trigger("focus")):a.browser.opera?a(this).bind("mousedown",function(){return!1}):a(this).attr("unselectable","on")}):this.each(function(){a.browser.msie||a.browser.safari?a(this).unbind("selectstart"):a.browser.mozilla?a(this).css("MozUserSelect","inherit"):
a.browser.opera?a(this).unbind("mousedown"):a(this).removeAttr("unselectable","on")})}})(jQuery);