var lastTime = 0;
const delay = 0.5;
const max = 7;
var index = 1;

function transition(elem, styles) {
	const txt = elem.getElementsByTagName("p");

	for (let i = 0; i < txt.length; i++) {
		for (let o = 0; o < styles.length; o++) {
			const style = styles[o];
			txt[i].style[style[0]] = style[1];
		}
	}
}

document.addEventListener("keydown", function(event) {
	const keyCode = event.keyCode

	if (keyCode === 13 || keyCode === 17) {
		const sec = new Date().getTime() / 1000;
		
		if (sec - lastTime > delay) {
			let currentInd
			let lastInd
			
			if (keyCode === 13) {	
				if (index < max) {
					index++;
					currentInd = index;
					lastInd = (index - 1);
				}
			} else if (keyCode === 17) {	
				if (index > 1) {
					currentInd = (index - 1);
					lastInd = index;
					index--;
				}
			}

			const current = document.getElementById("" + currentInd);
			const last = document.getElementById("" + lastInd);

			if (current) {
				transition(current, [
					["opacity", "1"]
				]);

				if (last) {
					transition(last, [
						["opacity", "0"]
					]);
				}
			}
			
			lastTime = sec;
		}
	}
});
