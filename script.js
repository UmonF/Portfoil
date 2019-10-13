$(document).ready(function(){
	// console.log('script linked');
	$(".option>a>p").mouseenter(function(){
		$(this).css('color','white');
	});

	$(".option>a").click(function(){
		var anchorNumber=$(".option>a").index(this)+3;
		var anchor = '.contain:nth-child('+anchorNumber+')';
		var activeLink ='.contain:nth-child('+(anchorNumber-2)+')>p';
		console.log(activeLink);
		// console.log(anchor);
		// console.log($(".option>a").index(this));
		var anchorOffset= $(anchor).offset().top;
		// console.log(anchorOffset);
		$(".option>a>p").removeClass('activeOption');
		$(activeLink).addClass('activeOption');
		window.scrollTo(0,anchorOffset);
	});

	$(".option>a>p").mouseleave(function(){
		$(this).css('color','#c1c1c1');
	});

	$(".hamicon").click(function(){
		// if($(".option").is(":hidden")){
			console.log('clicked');
		// 	$(".option").slideDown("slow");
		$(".option").slideDown("slow");
		$(".close").fadeIn("slow");
		$(".deco").css('visibility','hidden');
		$(".ham").animate({
			opacity: [ "0" ],
			},100);
		$(".ham:nth-child(1)").addClass('rotate1').css('width',"15px");
		$(".ham:nth-child(2)").addClass('rotate2');
		$(".ham:nth-child(3)").addClass('rotate2').css('width',"15px");

	// console.log('navigation clicked');
	});

	$(".close").click(function(){
		$(".option").slideUp("slow");
		$(".deco").css('visibility','visible');
		$(this).fadeOut("slow");
		$(".ham").animate({
			opacity:["1"],
		});
		$(".ham:nth-child(1)").removeClass('rotate1').css('width',"30px");
		$(".ham:nth-child(2)").removeClass('rotate2');
		$(".ham:nth-child(3)").removeClass('rotate2').css('width',"30px");
	})

});
	

$(document).ready(function(){
	$('.navi>ul>li').click(function(){
		 $(".project>.description>div").fadeOut('slow');
		 $(".project>.prezphoto").fadeOut('slow');
		var clicked = $('li').index(this)+1;
		 // console.log(clicked);
		 $('.navi ul li').css('background', 'transparent');
		 $(this).css('background', '#a54341');
		
		if ($('li').index(this)== 3){
			$(".project>.description>div").replaceWith(
				"<div class='FadeRight'><h1>精卫填海绘本</h1><br><h2>Art Book: Myth of JingWei</h2><br><p>I designed, illustrated, and engineered this hand-made pop-up accordion art book about a traditional Chinese mythology.  </p><p>[Story Excerpt] JingWei is the daughter of the ancient emperor Yan of China. She was drowned by the sea while boating, but her spirit turned into a beautiful bird. As her revenge, she flied back and forth each time with a pebble or twig and dropped them into the sea, hoping to fill it up. Day by day, year after year, she never stopped…”</p><h3>|2017.03-2017.05|</h3></div>"
				);

			$(".project>.prezphoto").replaceWith(
				"<img class='prezphoto FadeLeft' src='art/project/project4.png'>"
				);
		};

		if ($('li').index(this)== 2){
			$(".project>.description>div").replaceWith(
				"<div class='FadeRight'><h1>唱片设计</h1><br><h2>Album Cover Design:茜さす-The Glowing Red</h2><br><p>This was a self-initiated re-design project for the music album: 茜さす, or The Glowing Red (Originally released in 2016), by the Japanese artist Aimer. The theme of the original album is sunset, so I chose to use only red, black and white to achieve a simplistic representation of the transition from daytime to nighttime.</p> <p>PS: I translated the lyrics into english for the purpose of this project only. </p><h3>|2017.12-2018.01|</h3></div>"
				);
			$(".project>.prezphoto").replaceWith(
				"<img class='prezphoto FadeLeft' src='art/project/project3.png'>"
				);
		};

		if ($('li').index(this)== 1){
			$(".project>.description>div").replaceWith(
				"<div class='FadeRight'><h1>个人画展</h1><br><h2>Artist Exhibition</h2><br><p>A feeling of disorientation characterizes my experience as an international student in the US. I constantly sought ways to reconcile western cultures with eastern ones, tradition with innovation. In my art exhibition, I displayed my illustration and comic artworks through three levels of interactivity with the concept “scrolling”. The unusual reading order of content on scrolls resembles my struggle transitioning through languages and cultures as well as the chore that we all are accustomed to: scrolling on mobile devices to read. </p><h3>|2019.01-2019.04|</h3></div>"
				);
			$(".project>.prezphoto").replaceWith(
				"<img class='prezphoto FadeLeft' src='art/project/project2.png'>"
				);
		};

		if ($('li').index(this)== 0){
			$(".project>.description>div").replaceWith(
				"<div class='FadeRight'><h1>个人网站设计</h1><br><h2>Website Design</h2><br><p>This is an ongoing project with the intention to design and build a customized website as my artist portfolio. I wish to address the similarity between reading a traditional Chinese scroll and scrolling on digital platforms.</p><p>The most challenging part of this project is the coding itself. After I had designed the interface and created assets with PS and Ai, I had to learn Web development languages myself mostly by researching on the internet. While my design has mostly came into shape, I still need to work on mobile device adaptability.</p><h3>|2019.09.20-Current|</h3></div>"
				);
			$(".project>.prezphoto").replaceWith(
				"<img class='prezphoto FadeLeft' src='art/project/project1.png'>"
				);
		};


	});
});

$(document).ready(function () {
	$(".zoom>img").click(function(){
		var click = "art/gdesign/0"+($('.zoom>img').index(this)+1)+".jpg";
		var original = "art/gdesign/0"+($('.zoom>img').index(this)+1)+"thum.jpg";
		// console.log(click);
		// console.log(original);
		if ($(this).attr('src')==original){
			$(this).attr("src",click);
	}
		else{
			$(this).attr("src",original);
		}
	})
})


this.$image.on("click",function(){d.reposition()})