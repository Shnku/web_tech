const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const countries = document.querySelector(".contryList");

//creating a dropdown menu store contrylist 
for (let select of dropdowns) {
	for (currCode in countryList) {
		let newOption = document.createElement("option");
		newOption.innerText = currCode;
		newOption.value = currCode;

		if (select.name === "from" && currCode === "USD") {
			newOption.selected = "selected";
		} else if (select.name === "to" && currCode === "INR") {
			newOption.selected = "selected";
		}
		select.append(newOption);
	}
	//change to the flag...
	select.addEventListener("change", (e) => {
		updateFlag(e.target);
	});
}


/*...................functions .events..............*/
const updateExchangeRate = async () => {
	let amount = document.querySelector(".amount input");
	let amtVal = amount.value;
	if (amtVal === "" || amtVal < 1) {
		amtVal = 1;
		amount.value = "1";
	}
	// const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`; //wrong fetching
	const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.min.json`;
	console.log("url is ", URL);
	let response = await fetch(URL);
	let data = await response.json();
	// let rate =  data[toCurr.value.toLowerCase()];
	// let rate = data[fromCurr.value][toCurr.value]; //not worked..
	let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]; //working.....
	console.log("rate is ", rate);
	let finalAmount = amtVal * rate;
	console.log('finalAmount', finalAmount);
	msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(5)} ${toCurr.value}`;//1usd=80inr//when chenge the value and select the contry then use it.
	console.log(`Updated text: `, msg.innerText);
};

const updateFlag = (element) => {
	let currCode = element.value;
	let countryCode = countryList[currCode];
	let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
	let img = element.parentElement.querySelector("img");
	img.src = newSrc;
	console.log("image source is;;; ", newSrc);
	// let msg = element.getElementByid("msg"); //already done above
	msg.innerText += ` || ${currCode} = ${countryCode}`;
};

btn.addEventListener("click", (evt) => {
	console.log("button clicked1");
	evt.preventDefault();
	updateExchangeRate();
});

window.addEventListener("load", () => {
	updateExchangeRate();
});

const toggle = document.getElementById("toggledark");
const container = document.querySelector(".container");
toggle.addEventListener("click", function() {
	this.classList.toggle("fa-moon");
	if (this.classList.toggle("fa-sun")) {
		container.style.background = "black";
		container.style.color = "white";
	}
	else {
		container.style.background = "white";
		container.style.color = "black";
	}
})

const swaping = document.getElementById("exchange");
function swap() {
	let temp = toCurr.value;
	toCurr.value = fromCurr.value;
	fromCurr.value = temp;
	console.log("swapping done...");

	let img1 = document.getElementById("img1");
	let img2 = document.getElementById("img2");
	console.log("new source is ", img1.src);
	console.log("new source is ", img2.src);

	img1.src = `https://flagsapi.com/${countryList[fromCurr.value]}/flat/64.png`;
	img2.src = `https://flagsapi.com/${countryList[toCurr.value]}/flat/64.png`
	// updateFlag(evt.target); //not work flag exchange???
}
swaping.addEventListener("click", swap);
/*const swapflag=document.getElementsByTagName("i")
function flagexchange() {
	let temp=fromCurr.src;
	fromCurr.src=toCurr.src;
	toCurr.src=temp;

}
swapflag.addEventListener("click",swapflag)
*/

// function getexchange(){
// 	let  imgchange= document.getElementById("exchage");
// 	if(imgchange.src.includes(`https://flagsapi.com/IN/shiny/64.png`)) {

// imgchange.src="https://flagsapi.com/USD/shiny/64.png";											
// }
// 	else{		
// 		imgchange.src="https://flagsapi.com/IN/shiny/64.png";
// 	}
// }
