let topon = () => {
	document.getElementById("top1").textContent = "トップ"
	console.log("working?")
}
let topout = () => {
	document.getElementById("top1").textContent = "TOP"
}

let abouton = () => {
	document.getElementById("about1").textContent = "自分"
}
let aboutout = () => {
	document.getElementById("about1").textContent = "ABOUT"
}

let workon = () => {
	document.getElementById("works1").textContent = "仕事"
}
let workout = () => {
	document.getElementById("works1").textContent = "WORKS"
}

let historyon = () => {
	document.getElementById("history1").textContent = "経歴"
}
let historyout = () => {
	document.getElementById("history1").textContent = "HISTORY"
}

let skillson = () => {
	document.getElementById("skills1").textContent = "技能"
}
let skillsout = () => {
	document.getElementById("skills1").textContent = "SKILLS"
}

let langson = () => {
	document.getElementById("langs1").textContent = "資格・能力"
}
let langsout = () => {
	document.getElementById("langs1").textContent = "ABILITIES"
}

let contacton = () => {
	document.getElementById("contact1").textContent = "連絡"
}
let contactout = () => {
	document.getElementById("contact1").textContent = "CONTACT"
}

$('#hamburger').on('click', function () {
	$('.icon').toggleClass('close');
	$('.sm').slideToggle();
});