function makingdifferentcodegen()
   {var mdEfburl = document.getElementsByName("mdfburl")[0].value;
    var mdfburl = mdEfburl.replace(/\s/gi, "");
    var mdEfburl = encodeURIComponent(mdfburl);
    var widget = document.getElementsByName("widget.content")[0];
    widget.value = "<style>#simplemodal-overlay{background-color:#aaaaaa;cursor:wait;}\/* Container *\/";
    widget.value += 
      "#simplemodal-container{height:480px;width:360px;background-color:#fff;border:20px solid #000000;\/*border-radius*\/-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;}#simplemodal-container a.modalCloseImg{background:url('http:\/\/2.bp.blogspot.com\/-C38nhhaigLE\/TzDIEB7F1dI\/AAAAAAAACkM\/piNclTvik6U\/s1600\/MDclose.png') no-repeat;width:40px;height:60px;display:inline;z-index:3200;position:absolute;top:-15px;left:-18px;cursor:pointer;}#simplemodal-container #basicModalContent{padding:8px;}#mdfb{font:12px\/1.2 Arial,Helvetica,san-serif;color:#666;}#mdfb a,";
    widget.value += "#mdfb a:hover,";
    widget.value += 
      "#mdfb a:visited{text-decoration:none;}.mdbox-title{background:#000;color:#fff;font-size:20px !important;font-weight:bold;margin:10px 0;border:20px solid #ddd;\/*border-radius*\/-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;\/*box-shadow*\/-webkit-box-shadow:5px 5px 5px #CCCCCC;-moz-box-shadow:5px 5px 5px #CCCCCC;box-shadow:5px 5px 5px #CCCCCC;padding:10px;line-height:25px;font-family:arial !important;}.mdbox-tagline{color:#999;margin:0;text-align:center;}#mdsubs-container{padding:35px 0 30px 0;position:relative;}a:link, a:visited{border:none;}.demo{display:none;}<\/style>";
    widget.value += 
      "<script type=\"text\/javascript\" src=\"https:\/\/makingdifferent.github.com\/blogger-widgets\/[www.gj37765.blogspot.com]jquery-1.3.2.min.js\"><\/script><script type=\"text\/javascript\" src=\"https:\/\/makingdifferent.github.com\/blogger-widgets\/[www.gj37765.blogspot.com]jquery.simplemodal.js\"><\/script><script type=\"text\/javascript\" src=\"https:\/\/makingdifferent.github.com\/blogger-widgets\/[www.gj37765.blogspot.com]init.js\"><\/script>";
    widget.value += 
      "<div style='display:none'><div id='exit_content' style='padding:10px;'> <h3 class=\"mdbox-title\">Receive all updates via Facebook. Just Click the Like Button Below<center><p style=\"line-height:3px;\" ><\/p><\/center><\/h3><center><iframe src=\"\/\/www.facebook.com\/plugins\/likebox.php?href=" + mdEfburl + 
      "&amp;width=300&amp;colorscheme=light&amp;show_faces=true&amp;border_color=%23ffffff&amp;stream=false&amp;header=false&amp;height=258\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden; width:300px; height:258px;\" allowtransparency=\"true\"><\/iframe><\/center><p style=\" float:right;  margin-right:35px;  font-size:9px;\" >Powered By <a style=\" font-size:9px; color:#3B78CD; text-decoration:none;\" href=\"http:\/\/www.makingdifferent.com\">Making Different<\/a> | <a style=\" font-size:9px; color:#3B78CD; text-decoration:none;\" href=\"http:\/\/www.makingdifferent.com/2012/04/jquery-exit-pop-up-facebook-like-box.html\">Grab This<\/a><\/p><\/div><\/div>";
    document.getElementsByName("go")[0].disabled = false;
   }
