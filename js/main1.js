$(function(){
	$('#box').fullpage({
		sectionsColor: ['#4bc2c5','#3b9a9c','#78fee0','lightblue'],
		anchors: ['page1','page2','page3','page4'],
		menu:'#navbar',
		afterRender:function(){
			$('.section1 h1').hide().fadeIn(1000);
		},
		afterLoad:function(anchorLink,index){
			if (index === 2) {
				$('.section2 h1').fadeIn(500);
				// $('.section2 ul').animate({margin: '10px'},1000);
			}
			if (index === 3) {
				$('.section3').find('h1').fadeIn(500);
			}
			if (index === 4) {
				$('.section4').find('h1').fadeIn(500);
			}
		},
		onLeave:function(index,nextIndex,direction){
			if (index === 2) {
				$('.section2').find('h1').fadeOut(500);
			}
			if (index === 3) {
				$('.section3').find('h1').fadeOut(500);
			}
			if (index === 4) {
				$('.section4').find('h1').fadeOut(500);
			}
		}
	})
})