
$(document).ready(function(){ 
		
var	x = 1;

	$('.back').click(function()	{
			if(x==1)	{
				$('.s2').fadeOut(1);
				$('.s3').fadeIn(150);
				$('.s1').fadeOut(150);
				x=3;
				
				}
				else	{
				$('.s'	+	x).fadeOut(150);
				x--;
				$('.s'	+	x).fadeIn(150);
			};
		});

	$('.next').click(function()	{
		
			if(x==3)	{
				$('.s'	+	x).fadeOut(150);
				x=1;
				$('.s1').fadeIn(150);
				}
				else	{
				$('.s'	+	x).fadeOut(150);
				x++;
				$('.s'	+	x).fadeIn(150);
				};
					
					
				});
				
		$(".next, .back").on({
			'mouseover'	:	function()	{

				$(".next, .back").css({ opacity:	0.4	},500);
				
			},
			'mouseout'	:	function()	{
				$(".next, .back").css({ opacity:	0.2	},500);
			}
		});
		
		$('.naviDot1').on('click',	function()	{
			if(x!=1)	{
				$('.s'	+	x).fadeOut(150);
				$('.s1').fadeIn(150);
				x	=	1;
			};
		});
		
		$('.naviDot2').on('click',	function()	{
			if(x!=2)	{
				$('.s'	+	x).fadeOut(150);
				$('.s2').fadeIn(150);
				x	=	2;
			};
		});
		
		$('.naviDot3').on('click',	function()	{
			if(x!=3)	{
				$('.s'	+	x).fadeOut(150);
				$('.s2').fadeOut(150);
				$('.s3').fadeIn(150);
				x	=	3;
			};
		});
		
});