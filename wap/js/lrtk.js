// 懒人图库 搜集整理 www.lanrentuku.com
'use strict';
$(function(){
	var tophtml="<div id=\"dk_rmenu\" class=\"dk-rmenu\"><a href=\"https://f88.live800.com/live800/chatClient/chatbox.jsp?companyID=610793&configID=133544&jid=4870379693&enterurl=&s=1\" class=\"btn btn-supp\"></a><div class=\"btn btn-wx\"><img class=\"pic\" src=\"images/weixin.png\"/></div><div class=\"btn btn-phone\"><div class=\"phone\">+63 927-504-5590</div></div>";
	$("#top").html(tophtml);
	$("#dk_rmenu").each(function(){
		$(this).find(".btn-wx").mouseenter(function(){
			$(this).find(".pic").fadeIn("fast");
		});
		$(this).find(".btn-wx").mouseleave(function(){
			$(this).find(".pic").fadeOut("fast");
		});
		$(this).find(".btn-phone").mouseenter(function(){
			$(this).find(".phone").fadeIn("fast");
		});
		$(this).find(".btn-phone").mouseleave(function(){
			$(this).find(".phone").fadeOut("fast");
		});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#dk_rmenu").data("expanded",true);
		}else{
			$("#dk_rmenu").data("expanded",false);
		}
		if($("#dk_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#dk_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#dk_rmenu .btn-top").slideDown();
			}else{
				$("#dk_rmenu .btn-top").slideUp();
			}
		}
	});
});