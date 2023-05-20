var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray() {
for (var i = 0; i < 40; i++) {
	// Return a value from 1 to 100 (both inclusive)
	var value = Math.ceil(Math.random() * 100);

	// Creating element div
	var array_ele = document.createElement("div");

	// Adding class 'block' to div
	array_ele.classList.add("block");

	// Adding style to div
	array_ele.style.height = `${value * 3}px`;
	array_ele.style.transform = `translate(${i * 30}px)`;

	// Creating label element for displaying
	// size of particular block
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;

	// Appending created elements to index.html
	array_ele.appendChild(array_ele_label);
	container.appendChild(array_ele);
}
}

// Asynchronous LinearSearch function
async function LinearSearch(delay = 200) {
var blocks = document.querySelectorAll(".block");
var output = document.getElementById("text");

//Extracting the value entered by the user
var num = document.getElementById("fname").value;

//Changing the color of all the blocks to violet
for (var i = 0; i < blocks.length; i += 1) {
	blocks[i].style.backgroundColor = "#6b5b95";
}

output.innerText = "";

var flag = 0;
// LinearSearch Algorithm
for (var i = 0; i < blocks.length; i += 1) {
	//Changing the color of current block to red
	blocks[i].style.backgroundColor = "#FF4949";

	// To wait for .1 sec
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	//Extracting the value of current block
	var value = Number(blocks[i].childNodes[0].innerHTML);

	// To compare block value with entered value
	if (value == num) {
	flag = 1;
	output.innerText = "Element Found";
	blocks[i].style.backgroundColor = "#13CE66";
	break;
	} else {
	// Changing the color to the previous one
	blocks[i].style.backgroundColor = "#6b5b95";
	}
}
//When element is not found in the array
if (flag == 0) {
	output.innerText = "Element Not Found";
}
}
//async binarysearch function
async function BinarySearch(delay = 500) {
	const blocks = document.querySelectorAll(".block");
	const output = document.getElementById("text");
	const num = document.getElementById("fname").value;
  
	for (let i = 0; i < blocks.length; i++) {
	  blocks[i].style.backgroundColor = "#6b5b95";
	}
  
	output.innerText = "";
  
	let start = 0;
	let end = 39;
	let flag = 0;
  
	while (start <= end) {
	  const mid = Math.floor((start + end) / 2);
	  blocks[mid].style.backgroundColor = "#FF4949";
	  const value = Number(blocks[mid].childNodes[0].innerHTML);
  
	  await new Promise((resolve) => setTimeout(resolve, delay));
  
	  if (value == num) {
		output.innerText = "Element Found";
		blocks[mid].style.backgroundColor = "#13CE66";
		flag = 1;
		break;
	  }
  
	  if (value > num) {
		end = mid - 1;
		blocks[mid].style.backgroundColor = "#6b5b95";
	  } else {
		start = mid + 1;
		blocks[mid].style.backgroundColor = "#6b5b95";
	  }
	}
  
	if (flag === 0) {
	  output.innerText = "Element Not Found";
	}
  }


  
// Asynchronous TernarySearch function
async function TernarySearch(delay = 700) {
    var blocks = document.querySelectorAll(".block");
    var output = document.getElementById("text");
  
    // Extracting the value entered by the user
    var num = document.getElementById("fname").value;
  
    // Colouring all the blocks violet
    for (var i = 0; i < blocks.length; i += 1) {
        blocks[i].style.backgroundColor = "#6b5b95";
    }
  
    output.innerText = "";
  
    // TernarySearch Algorithm
    var start = 0;
    var end = 39;
    var flag = 0;
    while (start <= end) {
        var mid1 = Math.floor(start + (end - start) / 3);
        var mid2 = Math.floor(end - (end - start) / 3);
  
        // Extracting values of mid1 and mid2 blocks
        var value1 = Number(blocks[mid1].childNodes[0].innerHTML);
        var value2 = Number(blocks[mid2].childNodes[0].innerHTML);
  
        // Changing color to red
        blocks[mid1].style.backgroundColor = "#FF4949";
        blocks[mid2].style.backgroundColor = "#FF4949";
  
        // To wait for .1 sec
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
  
        // Number entered by the user equals to
        // element at mid1
        if (value1 == num) {
            output.innerText = "Element Found";
            blocks[mid1].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        }
  
        // Number entered by the user equals to
        // element at mid2
        if (value2 == num) {
            output.innerText = "Element Found";
            blocks[mid2].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        }
  
        if (num < value1) {
            end = mid1 - 1;
        } else if (num > value2) {
            start = mid2 + 1;
        } else {
            start = mid1 + 1;
            end = mid2 - 1;
        }
    }
  
    if (flag === 0) {
        output.innerText = "Element Not Found";
    }
}
  
// Quick Sort
// asynchronous function to perform "Quick Sort"
async function QuickSort(delay = 0.010) {

	let blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");
  
	// Call the partition function to sort the array
	async function partition(start, end) {
	  if (start >= end) {
		return;
	  }
  
	  // Set the pivot as the last element in the array
	  let pivotValue = parseInt(blocks[end].childNodes[0].innerHTML);
  
	  // Set the pivot index as the first element
	  let pivotIndex = start;
  
	  // Set the bars before pivot to blue
	  for (let i = start; i <= end; i++) {
		blocks[i].style.backgroundColor = "blue";
	  }
  
	  for (let i = start; i <= end; i++) {
		// Compare the value of the bar with the pivot value
		let currentValue = parseInt(blocks[i].childNodes[0].innerHTML);
  
		// If the current value is smaller than the pivot value, swap the bar with the pivot index
		if (currentValue < pivotValue) {
		  await new Promise((resolve) =>
			setTimeout(() => {
			  resolve();
			}, delay)
		  );
  
		  let temp1 = blocks[i].style.height;
		  let temp2 = blocks[i].childNodes[0].innerText;
		  blocks[i].style.height = blocks[pivotIndex].style.height;
		  blocks[pivotIndex].style.height = temp1;
		  blocks[i].childNodes[0].innerText = blocks[pivotIndex].childNodes[0].innerText;
		  blocks[pivotIndex].childNodes[0].innerText = temp2;
  
		  // Set the bars after the pivot to skyblue
		  for (let j = start; j <= end; j++) {
			if (j != pivotIndex) {
			  blocks[j].style.backgroundColor = "rgb(24, 190, 255)";
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
  
	  let temp1 = blocks[pivotIndex].style.height;
	  let temp2 = blocks[pivotIndex].childNodes[0].innerText;
	  blocks[pivotIndex].style.height = blocks[end].style.height;
	  blocks[end].style.height = temp1;
	  blocks[pivotIndex].childNodes[0].innerText = blocks[end].childNodes[0].innerText;
	  blocks[end].childNodes[0].innerText = temp2;
  
	  // Set the bars after the pivot to red
	  for (let j = start; j <= end; j++) {
		if (j != pivotIndex) {
		  blocks[j].style.backgroundColor = "rgb(255, 0, 100)";
		}
	  }
  
	  // Recursively call the partition function on the left and right side of the pivot index
	  await partition(start, pivotIndex - 1);
	  await partition(pivotIndex + 1, end);
	}
  
	await partition(0, blocks.length - 1);
  
	// Set all bars to lightgreen after sorting is complete
	for (let i = 0; i < blocks.length; i++) {
	  await new Promise((resolve) =>
		setTimeout(() => {
		  resolve();
		}, delay)
	  );
	  blocks[i].style.backgroundColor = "rgb(49, 226, 13)";
	}
	output.innerText = "Data is Sorted, Now You Can Perfom Binary or Ternary Search";
  }

// Calling generatearray function
generatearray();

// function to generate new random array
function generate()
{
window.location.reload();
}

