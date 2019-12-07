var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var audio = document.getElementById('audio');
var h3 = document.getElementById('message');
btn.addEventListener('click', function(){
	var random = Math.floor(Math.random() * 10);
	if(random == 1){
		audio.src='mp/sasami.mp3';
		audio.play();
		h3.textContent = "野良猫は宇宙を目指した";
	}else if(random == 2){
		audio.src='mp/so_sweet.mp3';
		audio.play();
		h3.textContent = "so sweet";
	}else if(random == 3){
		audio.src='mp/なんでしょう？.mp3';
		audio.play();
		h3.textContent = "なんでしょう？";
	}else if(random == 4){
		audio.src='mp/パステルハウス.mp3';
		audio.play();
		h3.textContent = "パステルハウス";
	}else if(random == 5){
		audio.src= 'mp/学び舎の風景.mp3';
		audio.play();
		h3.textContent = "学び舎の風景";
	}else if(random == 6){
		audio.src='mp/昼下がり気分.mp3';
		audio.play();
		h3.textContent = "昼下がり気分";
	}else if(random == 7){
		audio.src='mp/夢いっぱいをもう一度.mp3';
		audio.play();
		h3.textContent = "夢いっぱいをもう一度";
	}else if(random == 8){
		audio.src='mp/かえるのピアノ.mp3';
		audio.play();
		h3.textContent = "カエルのピアノ";
	}else if(random == 9){
		audio.src='mp/いつかの夢.mp3';
		audio.play();
		h3.textContent = "いつかの夢";
	}else{
		audio.src='mp/Morning.mp3';
		audio.play();
		h3.textContent = 'Morning';
	}
	console.log(random)
});

btn2.addEventListener('click', function pause(){
		audio.pause();
		audio.currentTime = 0;
});
