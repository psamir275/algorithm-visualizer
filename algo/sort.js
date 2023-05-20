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

// Asynchronous function to perform "Cocktail Sort"
async function CocktailSort(delay = 0.001) {
	let bars = document.querySelectorAll(".bar");

	  // For selecting section having id "ele"
	  var barval=document.getElementById("ele")
	
	
	// Initialize swapped with true
	let swapped = true;
	
	// Initialize s with zero
	let s = 0;
	
	// Initialize e with 20
	let e = 40;
	
	while (swapped == true) {
	  swapped = false;
	
	  for (var i = s; i < e - 1; i++) {
		
		// Assigning value of ith bar into value1
		var value1 = parseInt(bars[i].childNodes[0].innerHTML);
	
		// Assigning value of i+1th bar into value2
		var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);
	
		// To pause the execution of code 
		await new Promise((resolve) =>
		  setTimeout(() => {
			resolve();
		  }, delay)
		);
	
		// Provide red color to the ith bar
		bars[i].style.backgroundColor = "red";
	
		// Provide red color to the i+1th bar
		bars[i + 1].style.backgroundColor = "red";
		if (value1 > value2) {
		  var temp1 = bars[i].style.height;
		  var temp2 = bars[i].childNodes[0].innerText;
	
		  // To pause the execution of code 
		  await new Promise((resolve) =>
			setTimeout(() => {
			  resolve();
			}, delay)
		  );
	
		  // Swap ith bar with (i+1)th bar
		  bars[i].style.height = bars[i + 1].style.height;
		  bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
		  bars[i + 1].style.height = temp1;
		  bars[i + 1].childNodes[0].innerText = temp2;
	
		  // Set swapped
		  swapped = true;
		}
		  
		// To pause the execution of code
		await new Promise((resolve) =>
		  setTimeout(() => {
			resolve();
		  }, delay)
		);
		  
		// Provide Yellow color to the ith bar
		bars[i].style.backgroundColor = "rgb(255,215,0)";
	
		// Provide Yellow color to the i+1th bar
		bars[i + 1].style.backgroundColor = "rgb(255,215,0)";
	  }
	
	  if (swapped == false) {
		break;
	  }
	
	  // Set swapped false
	  swapped = false;
	
	  e = e - 1;
	
	  for (var i = e - 1; i >= s; i--) {
		
		// Assigning value of ith bar into value1
		var value1 = parseInt(bars[i].childNodes[0].innerHTML);
	
		// Assigning value of i+1th bar into value2
		var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);
	
		// To pause the execution of code 
		await new Promise((resolve) =>
		  setTimeout(() => {
			resolve();
		  }, delay)
		);
	
		// Provide red color to the ith bar
		bars[i].style.backgroundColor = "red";
	
		// Provide red color to the i+1th bar
		bars[i + 1].style.backgroundColor = "red";
		if (value1 > value2) {
		  var temp1 = bars[i].style.height;
		  var temp2 = bars[i].childNodes[0].innerText;
	
		  // To pause the execution of code for 300 milliseconds
		  await new Promise((resolve) =>
			setTimeout(() => {
			  resolve();
			}, delay)
		  );
	
		  // Swap ith bar with (i+1)th bar
		  bars[i].style.height = bars[i + 1].style.height;
		  bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
		  bars[i + 1].style.height = temp1;
		  bars[i + 1].childNodes[0].innerText = temp2;
	
		  // Set swapped
		  swapped = true;
		}
		  
		// To pause the execution of code for 300 milliseconds
		await new Promise((resolve) =>
		  setTimeout(() => {
			resolve();
		  }, delay)
		);
		  
		//Provide skyblue color to the ith bar
		bars[i].style.backgroundColor = "rgb(0,255,255)";
	
		// Provide skyblue color to the i+1th bar
		bars[i + 1].style.backgroundColor = "rgb(0,255,255)";
	  }
	  s = s + 1;
	}
	
	for (var x = 0; x < 40; x++) {
	  bars[x].style.backgroundColor = "rgb(49, 226, 13)";
	  
	}
	barval.innerHTML="<h3>The Data is Sorted!!!</h3>";
}

  
//Selection Sort
// asynchronous function to perform "Selection Sort"
async function SelectionSort(_delay = 100) 
{
let bars = document.querySelectorAll(".bar");
// For selecting section having id "ele"
var barval=document.getElementById("ele")
	
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
barval.innerHTML="<h3>The Data is Sorted!!!</h3>";
}


// Quick Sort
// asynchronous function to perform "Quick Sort"
async function QuickSort(delay = 100) {

  let bars = document.querySelectorAll(".bar");
// For selecting section having id "ele"
	var barval=document.getElementById("ele")

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
  barval.innerHTML="<h3>The Data is Sorted!!!</h3>";
}

async function BubbleSort(delay = 0.001	) 
{
	let bars = document.querySelectorAll(".bar");
		// For selecting section having id "ele"
	  var barval=document.getElementById("ele")
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
	barval.innerHTML="<h3>The Data is Sorted!!!</h3>";
  }
  
// Asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 100) {
	let bars = document.querySelectorAll(".bar");
	
	// Provide lightgreen colour to 0th bar
	bars[0].style.backgroundColor = " rgb(49, 226, 13)";
	for (var i = 1; i < bars.length; i += 1) {
	
	  // Assign i-1 to j
	  var j = i - 1;
	
	  // To store the integer value of ith bar to key 
	  var key = 
	  parseInt(bars[i].childNodes[0].innerHTML);
	
	  // To store the ith bar height to height
	  var height = bars[i].style.height;
	   
	  // For selecting section having id "ele"
	  var barval=document.getElementById("ele")
	
	  // For dynamically Updating the selected element
		barval.innerHTML=
		`<h3>Element Selected is :${key}</h3>`;
	
	  //Provide darkblue color to the ith bar 
	  bars[i].style.backgroundColor = "darkblue";
		
	  // To pause the execution of code for 600 milliseconds
	  await new Promise((resolve) =>
	  setTimeout(() => {
		resolve();
	  }, delay)
	);
	
	  // For placing selected element at its correct position 
	  while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
		  
		// Provide darkblue color to the jth bar
		bars[j].style.backgroundColor = "darkblue";
		  
		// For placing jth element over (j+1)th element
		bars[j + 1].style.height = bars[j].style.height;
		bars[j + 1].childNodes[0].innerText = 
		bars[j].childNodes[0].innerText;
	
		// Assign j-1 to j
		j = j - 1;
	
		// To pause the execution of code for 600 milliseconds
		await new Promise((resolve) =>
		  setTimeout(() => {
			resolve();
		  }, delay)
		);
		  
		// Provide lightgreen color to the sorted part
		for(var k=i;k>=0;k--){
		  bars[k].style.backgroundColor = " rgb(49, 226, 13)";
		}
	  }
	
	  // Placing the selected element to its correct position
	  bars[j + 1].style.height = height;
	  bars[j + 1].childNodes[0].innerHTML = key;
		 
	  // To pause the execution of code for 600 milliseconds
	  await new Promise((resolve) =>
		setTimeout(() => {
		  resolve();
		}, delay)
	  );
		
	  // Provide light green color to the ith bar
	  bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}
	barval.innerHTML="<h3>The Data is Sorted!!!</h3>";
	  
  }
  

// Call "generatebars" function
generatebars();

// function to generate new random array
function generate()
{
window.location.reload();
}


