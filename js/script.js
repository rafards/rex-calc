let screen = document.querySelector('#rexResult');
let btn = document.querySelectorAll('.btn');

/* Menampilkan nilai/value dari button ke #rexDisplay */
for (item of btn) {
	item.addEventListener('click', (e) => {
		btntext = e.target.innerText;

		// Mencocokkan simbol perhitungan ke operator di JavaScript
		if (btntext == '×') {
			btntext = '*';
		}

		if (btntext == '÷') {
			btntext = '/';
		}

		if (btntext == '^') {
			btntext = '**';
		}
		screen.value += btntext;
	});
}

function sin() {
	screen.value = Math.sin(screen.value);
}
function cos() {
	screen.value = Math.cos(screen.value);
}
function tan() {
	screen.value = Math.tan(screen.value);
}

/* // Mencari hasil bilangan berpangkat
function pow() {
	screen.value = Math.pow(screen.value, 2);
} */

// Mencari bilangan akar
function sqrt() {
	screen.value = Math.sqrt(screen.value, 2);
}
// Mencari nilai akar kubik
function cbrt() {
	screen.value = Math.cbrt(screen.value);
}
// Mencari nilai Logaritm
function log() {
	screen.value = Math.log(screen.value);
}
// Bilangan PI
function pi() {
	screen.value += 3.14;
}
// Bilangan Euler's
function e() {
	screen.value += 2.718;
}
// Menghapus 1 angka
function backspc() {
	screen.value = screen.value.substr(0, screen.value.length - 1);
}
// Menghapus seluruh angka
function ac() {
	screen.value = '';
}
// Menampilkan hasil
function equal() {
	screen.value = eval(screen.value);
}

// Scroll Reveal Animation
const sr = ScrollReveal({
	origin: 'bottom',
	distance: '80px',
	duration: 2000,
	delay: 100,
	// reset: true,
});
sr.reveal('.rex-type', { delay: 300 });
sr.reveal('.rex-output', { delay: 600 });
sr.reveal('.rex-btns', { delay: 700 });
sr.reveal('.rex-calc-cont', { delay: 900 });
sr.reveal('.rex-copy', { delay: 1100 });

// Awalnya saya hanya coba-coba<br />eh...lama-lama Ketagihan.

// Autotyping Animation
const rexTyper = new AutoTyping({
	id: 'rexType',
	typeText: ['Awalnya saya hanya coba-coba, eh...lama-lama Kelamaan.'],
	textColor: '#596e79',
	typeSpeed: 100,
	typeDelay: 800,
	deleteSpeed: 50,
	deleteDelay: 1800,
	typeInfinity: true,
	typeRandom: true,
	textDeleteOptions: {
		0: {
			deleteToChar: 45,
			continueThis: 'Ketagihan.',
		},
	},
}).init();
