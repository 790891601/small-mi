$(function(){
	      	    //头部Shopping
                $(".Nav_shoping").hover(function(){
                    $(".Nav_shoping_partialview").stop(true).slideDown("slow");
                },function(){
                	$(".Nav_shoping_partialview").stop(true).slideUp("slow");
                });
                
                var main_product = $(".select ul");
                //显示隐藏产品背景
                $(".Nav ul li,.select ul li").hover(function(){
                	if($(this).index()<7){
                	$(".select").removeClass("box_hide");
                	$(".select,.select ul li").slideDown("slow").finish();
                		
                	}               	
                },function(){
                	$(".select,.select ul li").stop(true).slideUp("slow");
                	$(".select").addClass("box_hide");                	
                });
                var item = null;
                $(".Nav ul li").mousemove(function(){
                	var index = $(this).index();
                	if(index<7){
                	   item = index;
                	   $(main_product[index]).removeClass("hide");
                	   $(main_product[index]).stop(true,true).slideDown("slow").finish();	
                	}           	
                });
                
                $(".Nav ul li").mouseout(function(){
                	$(main_product).stop(true).slideUp("slow").finish();
                	$(main_product).addClass("hide");
                });
                 $(".select").mousemove(function(){
                	$(main_product[item]).removeClass("hide");
                	$(main_product[item]).stop(true,true).slideDown("slow").finish();
                });
                
                //hide左边导航
                $(".hide_Nav").mouseover(function(){
                	$(".NavHide").removeClass("hide");
                	$(".NavHide ul").addClass("hide");
                	$(".NavHide ul").eq($(this).index()).removeClass("hide");
                }).mouseout(function(){
                	$(".NavHide").addClass("hide");
                });
                
                $(".Nva_L").mouseout(function(){
                	$(".NavHide").addClass("hide");
                });
                
                $(".NavHide ul").mouseover(function(){
                	$(".NavHide").removeClass("hide");
                }).mouseout(function(){
                	$(".NavHide").addClass("hide");
                });
                
                //轮播器
                var i = 0;
 				var s =  $(".lbimg").size();
 				var lbitems = $(".banner").children(".lbimg");//获取到所有图片
 				$(".lbimg").hide();
 				$(".lbimg").eq(0).show();
 				
 				//根据图片生成圆点
 				var dotleg = $(".dot");
 				for (var i = 1 ; i < lbitems.length;i++) {
 					var elent = document.createElement("span");
 					dotleg.append(elent);
 				}
 				var dot =  $(".dot").children();//获取到所有圆点
 				
                //左
                 $(".dirce_L").click(function(){
                 	$(".lbimg").eq(i).stop().fadeOut();
                 	$(dot).eq(i).removeClass("acive");
               	 	if(i <= -1) {
					    i = s-1;
					}
					i--;
               	  	$(".lbimg").eq(i).stop().fadeIn();
               	  	$(dot).eq(i).addClass("acive");
                 });
                //右
                $(".dirce_R").click(function(){
                	$(".lbimg").eq(i).stop().fadeOut();
					$(dot).eq(i).removeClass("acive");
               	 	if(i >= s-1) {
					    i = -1;
					}
					i++;
               	  	$(".lbimg").eq(i).stop().fadeIn();
					$(dot).eq(i).addClass("acive");
                });
                
               //自动轮播器
               $(".banner").hover(function(){
               	  clearInterval(timer);
               },function(){
               	  timer = setInterval(function(){
               	  	$(".lbimg").eq(i).stop().fadeOut();
					$(dot).eq(i).removeClass("acive");
               	 	if(i >= s-1) {
					    i = -1;
					}
					i++;
               	  	$(".lbimg").eq(i).stop().fadeIn();
					$(dot).eq(i).addClass("acive");
               	  },4000)
               }).trigger("mouseleave");
               
               //圆点轮播器
               $(".dot span").click(function(){
               	  var num = $(this).index();
               	  $(dot).removeClass("acive");
				  $(dot[num]).addClass("acive");
               	  $(lbitems).stop().fadeOut();
               	  $(lbitems[num]).stop().fadeIn();
             	  i = num;
               });
               
               //小米明星单品
               $(".prev").click(function(){
  					$(".starPro .scroll").animate({'left':'0px'});//.eq(i).hide();
               	    $(this).css("color","#CCCCCC");
               	    $(".next").css("color","#000000");
               });
               $(".next").click(function(){
//             	    $(".starPro .scroll").removeAttr("style","right");
                    //for(var i = 0 ; i < starpImgSize/2 ; i++){
               	    $(".starPro .scroll").animate({'left':'-100%'});//.eq(i).hide();//.stop().animate({'left':'-100%'});
               	    $(this).css("color","#CCCCCC");
               	    $(".prev").css("color","#000");
                    //}
               });
               
               var clockLR;
               $(".p").mouseover(function(){
               	  clearInterval(clockLR);
               }).mouseout(function(){
                  clockLR = setInterval(autoLR,5000);
               });
               
               //自动
               clockLR = setInterval(autoLR,5000);
               
               function autoLR()
               {
               	  if($(".starPro .scroll").css("left") == '0px'){
               	  	$(".starPro .scroll").css("left","-100%");
               	  	$(".prev").css("color","#000");
               	    $(".next").css("color","#CCC");
               	  }else if($(".starPro .scroll").css("left") != '0px'){
               	  	$(".starPro .scroll").css("left","0px");
               	  	$(".next").css("color","#000");
               	    $(".prev").css("color","#CCC");
               	  }
               }
               
               //box-shadow阴影
               $("#content .proList .list1 ul li").hover(function(){
               	   $(this).css("box-shadow","rgb(170,170,170) 0 0 28px");	
               },function(){
               	$(this).css("box-shadow","");
               });
               
               $("#content .proList .list1 .oneRow").hover(function(){
               	  $(this).css("box-shadow","");
               });
               
               $("#content .proList .list41 li").hover(function(){
               	$(this).css("box-shadow","");
               	$(this).css("color","orangered");
               	$(this).css("border-bottom","2px solid orangered");
               },function(){
               	$(this).css("color","");
               	$(this).css("border-bottom","");
               });
               
               //封装一个显示函数
               // @Info obj1 指的是装下这些产品列表的ul
	           /* @param  obj1的子对象 指的是装下这些产品列表的li
	           /* @param  obj2 相应分类的那个li,当鼠标移到这个li上时，显示相应分类的产品*/
                function displayList(obj1,s1,obj2){
                	obj1.find(s1).mouseover(function(){
                		var a = $(this).index();
                		obj1.find(s1).css({color:'#000',borderBottom:'none'});
                		$(this).css({color:'#FF6700',borderBottom:'2px solid #FF6700'});
                		obj2.addClass("hide");
                		obj2.eq(a).removeClass("hide");
                	}).mouseout(function(){
                	    $(this).css({color:'#FF6700',borderBottom:'2px solid #FF6700'});
                	});
                	return;
                }
                 //2-搭配
                displayList($(".list41"),'li',$(".productR2>ul"));
                //附加文字
               $(".proList .list_DP .productR2 .product2 li").hover(function(){
               	  $(this).find(".float_Tag_text").stop(true,false).slideDown("fast");
               },function(){
               	  $(this).find(".float_Tag_text").stop(true,false).slideUp("fast");
               });
               
               //为你推荐
               var rdlen = 0;
               var rdsize =  $(".recommend ul li").size();
               var rdSize = rdsize/5;
               $(".recommend_R").click(function(){
               	  if(rdlen < rdSize-1){
               	  	$(".recommend_L").css("color","#000");
               	    rdlen++;
               	    $(".recommend ul").stop().animate({'left':rdlen*-1226});    
               	    if(rdlen > rdSize-2){
               	    	$(this).css("color","#CCCCCC");
               	    }
               	  }
               });
              $(".recommend_L").click(function(){
              	if(rdlen >= 1){
              		$(".recommend_R").css("color","#000");
              		rdlen--;
              		$(".recommend ul").stop().animate({'left':rdlen*-1226});
              		if(rdlen < 1){
              		  $(this).css("color","#CCCCCC");	
              		}
              	}else{
              		$(this).css("color","#CCCCCC");
              	}
              });
              
              //自动
              $(".recommend_L").click(function(){
              	clearInterval(setRdTimer);
              });
              $(".recommend_R").click(function(){
              	clearInterval(setRdTimer);
              });
              var setRdTimer =  setInterval(rdtimer,5000);
              function rdtimer(){
              	if(rdlen < rdSize-1){
               	  	$(".recommend_L").css("color","#000");
               	  	$(".recommend_R").css("color","#000");
               	    rdlen++;
               	    $(".recommend ul").stop().animate({'left':rdlen*-1226});    
               	    if(rdlen > rdSize-2){
               	    	$(".recommend_R").css("color","#CCCCCC");
               	    }else if(rdlen == 0){
               	    	$(".recommend_L").css("color","#CCCCCC");
               	    }
               }else{
               	  rdlen = -1;
               	}
              }
              
              //内容
              var con_i = 0;
              var con_s =  $(".content .contList .contBox_wrap .contBox li").size();
              $(".content .contList .contBox_wrap .cont_left").click(function(){
              	 if(con_i > 0){
              	 con_i--;
              	 $(".content .contList .contBox_wrap .contBox").animate({'left': -con_i * 296});
              	}else{
              		return;
              	}
              });
              
              $(".content .contList .contBox_wrap .cont_right").click(function(){
              	if(con_i < con_s-1)
              	 con_i++;
              	$(".content .contList .contBox_wrap .contBox").animate({'left': -con_i * 296});
              });
              
              $(".content .contList .contBox_wrap").hover(function(){
              	 $(".content .contList .contBox_wrap .cont_left").show();
              	 $(".content .contList .contBox_wrap .cont_right").show();
              },function(){
              	$(".content .contList .contBox_wrap .cont_left").hide();
              	 $(".content .contList .contBox_wrap .cont_right").hide();
              });
	      });