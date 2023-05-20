const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = 40) {
	
//for loop to generate 20 bars
for (let i = 0; i < num; i += 1) {

	// To generate random values from 1 to 100
	const value = Math.floor(Math.random() * 100) + 1;
	
	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("bar");

	// Provide height to the bar
	bar.style.height = `${value * 3}px`;

	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 30}px)`;
	
	// To create element "label"
	const barLabel = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabel.classList.add("bar_id");

	// Assign value to "label"
	barLabel.innerHTML = value;
	
	// Append "Label" to "div"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}

  
//Selection Sort
// asynchronous function to perform "Selection Sort"
async function SelectionSort(_delay = 0.10) 
{
let bars = document.querySelectorAll(".bar");
// Assign 0 to min_idx
var min_idx = 0;
for (var i = 0; i < bars.length; i += 1) {

	// Assign i to min_idx
	min_idx = i;

	// Provide oragne color to the ith bar
	bars[i].style.backgroundColor = "orange";
	for (var j = i + 1; j < bars.length; j += 1) {

	// Provide red color to the jth bar
	bars[j].style.backgroundColor = "red";
		
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, _delay)
	);

	// To store the integer value of jth bar to var1
	var val1 = parseInt(bars[j].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		
	// Compare val1 & val2
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
		}
		min_idx = j;
	} else {

		// Provide skyblue color to the jth bar
		bars[j].style.backgroundColor = " rgb(24, 190, 255)";
	}
}

	// To swap ith and (min_idx)th bar
	var temp1 = bars[min_idx].style.height;
	var temp2 = bars[min_idx].childNodes[0].innerText;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	bars[i].childNodes[0].innerText = temp2;
	
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, _delay));

	// Provide skyblue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

	// Provide lightgreen color to the ith bar
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}
}


// Quick Sort
// asynchronous function to perform "Quick Sort"
async function QuickSort(delay = 0.10) {

  let bars = document.querySelectorAll(".bar");

  // Call the partition function to sort the array
  async function partition(start, end) {
    if (start >= end) {
      return;
    }

    // Set the pivot as the last element in the array
    let pivotValue = parseInt(bars[end].childNodes[0].innerHTML);

    // Set the pivot index as the first element
    let pivotIndex = start;

    // Set the bars before pivot to blue
    for (let i = start; i <= end; i++) {
      bars[i].style.backgroundColor = "blue";
    }

    for (let i = start; i <= end; i++) {
      // Compare the value of the bar with the pivot value
      let currentValue = parseInt(bars[i].childNodes[0].innerHTML);

      // If the current value is smaller than the pivot value, swap the bar with the pivot index
      if (currentValue < pivotValue) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );

        let temp1 = bars[i].style.height;
        let temp2 = bars[i].childNodes[0].innerText;
        bars[i].style.height = bars[pivotIndex].style.height;
        bars[pivotIndex].style.height = temp1;
        bars[i].childNodes[0].innerText = bars[pivotIndex].childNodes[0].innerText;
        bars[pivotIndex].childNodes[0].innerText = temp2;

        // Set the bars after the pivot to skyblue
        for (let j = start; j <= end; j++) {
          if (j != pivotIndex) {
            bars[j].style.backgroundColor = "rgb(24, 190, 255)";
          }
        }

        // Increase the pivot index
        pivotIndex++;
      }
    }

    // Swap the pivot with the pivot index
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    let temp1 = bars[pivotIndex].style.height;
    let temp2 = bars[pivotIndex].childNodes[0].innerText;
    bars[pivotIndex].style.height = bars[end].style.height;
    bars[end].style.height = temp1;
    bars[pivotIndex].childNodes[0].innerText = bars[end].childNodes[0].innerText;
    bars[end].childNodes[0].innerText = temp2;

    // Set the bars after the pivot to red
    for (let j = start; j <= end; j++) {
      if (j != pivotIndex) {
        bars[j].style.backgroundColor = "rgb(255, 0, 100)";
      }
    }

    // Recursively call the partition function on the left and right side of the pivot index
    await partition(start, pivotIndex - 1);
    await partition(pivotIndex + 1, end);
  }

  await partition(0, bars.length - 1);

  // Set all bars to lightgreen after sorting is complete
  for (let i = 0; i < bars.length; i++) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    bars[i].style.backgroundColor = "rgb(49, 226, 13)";
  }
}

async function BubbleSort(delay = 0.010) 
{
	let bars = document.querySelectorAll(".bar");
	let len = bars.length;
	for (let i = 0; i < len - 1; i++) {
	  for (let j = 0; j < len - i - 1; j++) {
		// Provide red color to the jth bar
		bars[j].style.backgroundColor = "red";
		bars[j + 1].style.backgroundColor = "red";
		// To pause the execution of code for some time
		await new Promise((resolve) =>
		  setTimeout(() => {
			resolve();
		  }, delay)
		);
  
		// To store the integer value of jth and (j+1)th bar to var1 and var2
		let val1 = parseInt(bars[j].childNodes[0].innerHTML);
		let val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);
  
		// Compare val1 & val2
		if (val1 > val2) {
		  // Swap the two bars
		  let temp1 = bars[j].style.height;
		  let temp2 = bars[j].childNodes[0].innerText;
		  bars[j].style.height = bars[j + 1].style.height;
		  bars[j + 1].style.height = temp1;
		  bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
		  bars[j + 1].childNodes[0].innerText = temp2;
		}
		// Provide skyblue color to the jth and (j+1)th bar
		bars[j].style.backgroundColor = "rgb(24, 190, 255)";
		bars[j + 1].style.backgroundColor = "rgb(24, 190, 255)";
	  }
	  // Provide lightgreen color to the last sorted bar
	  bars[len - i - 1].style.backgroundColor = "rgb(49, 226, 13)";
	}
	// Provide lightgreen color to the first bar
	bars[0].style.backgroundColor = "rgb(49, 226, 13)";
  }
  
// Insertion Sort
// asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 0.010) {
	let bars = document.querySelectorAll(".bar");
  
	// loop through all bars starting from second element
	for (let i = 1; i < bars.length; i++) {
	  // assign current bar to variable key
	  let key = bars[i];
	  let j = i - 1;
  
	  // set the color of bars which we are comparing to orange
	  bars[i].style.backgroundColor = "orange";
  
	  // keep swapping until previous bar is greater than current bar
	  while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > parseInt(key.childNodes[0].innerHTML)) {
		// pause for delay milliseconds
		await new Promise((resolve) =>
		  setTimeout(() => {
			resolve();
		  }, delay)
		);
  
		// move the previous bar one position ahead
		bars[j + 1].style.height = bars[j].style.height;
		bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
		bars[j + 1].style.backgroundColor = "rgb(24, 190, 255)";
  
		j--;
	  }
  
	  // insert the current bar at its correct position
	  bars[j + 1].style.height = key.style.height;
	  bars[j + 1].childNodes[0].innerText = key.childNodes[0].innerText;
	  bars[j + 1].style.backgroundColor = "rgb(24, 190, 255)";
	  key.style.backgroundColor = "rgb(49, 226, 13)";
	}
  }
  
  
// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6aa84f";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#ffd966";

document.getElementById("Button3").disabled = false;
document.getElementById("Button3").style.backgroundColor = "#ffd966";

document.getElementById("Button4").disabled = false;
document.getElementById("Button4").style.backgroundColor = "#ffd966";

document.getElementById("Button5").disabled = false;
document.getElementById("Button5").style.backgroundColor = "#ffd966";
  
 function enable()
 {
// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6aa84f";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#ffd966";

document.getElementById("Button3").disabled = false;
document.getElementById("Button3").style.backgroundColor = "#ffd966";

document.getElementById("Button4").disabled = false;
document.getElementById("Button4").style.backgroundColor = "#ffd966";

document.getElementById("Button5").disabled = false;
document.getElementById("Button5").style.backgroundColor = "#ffd966";

 }
// function to disable the button
function disable()
{
// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// To disable the button "Selection Sort"
document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d8b6ff";

document.getElementById("Button3").disabled = true;
document.getElementById("Button3").style.backgroundColor = "#d8b6ff";

document.getElementById("Button4").disabled = true;
document.getElementById("Button4").style.backgroundColor = "#d8b6ff";

document.getElementById("Button5").disabled = true;
document.getElementById("Button5").style.backgroundColor = "#d8b6ff";
}

// Call "generatebars" function
generatebars();

// function to generate new random array
function generate()
{
window.location.reload();
}


