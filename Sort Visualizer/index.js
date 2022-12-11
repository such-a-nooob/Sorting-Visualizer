var nBars;  // Number of bars
var array;  // Array to store the list of numbers
var tarray; // to store the initial unsorted array 
var heightFactor; // to define the height of the bars
var selectedAlgo; // the Algorithm selected
var comparisons, swaps; // to count the number of swaps/ elements moved/ subarrays merged and comparisons
var bar, speed, comp, swap, tag;  // to access the HTML elements

/* Update the size tag when the 'Array size' slider is moved and render the bars accordingly */
function updateSize() {
  var x = document.getElementById("array-size").value;
  document.getElementById("data-size").innerHTML = x;
  updateBars();
}

/* Update the speed tag on moving the 'Speed' slider */
function updateSpeed() {
  var x = document.getElementById("speed").value;
  document.getElementById("data-speed").innerHTML = x;
}

/* Genrate random number between 5 to 60 to store in the array */
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Create an array of the specified size initialized with randomly generated elements */
function createArray(n) {
  var a = new Array(n);
  tarray = new Array(n);
  for (let i = 0; i < n; i++) {
    a[i] = randomNum(5, 60);
    tarray[i] = a[i];
  }
  return a;
}

/* Insert bars according to the array generated */
function renderBars(array, nBars) {
  heightFactor = 4;
  for (var i = 0; i < nBars; i++) {
    var barContainer = document.getElementById("bars-container");
    var bar = document.createElement("div");
    bar.innerHTML = array[i];
    if (nBars < 25) bar.style.fontSize = 10 + "px";
    else if (nBars < 35) bar.style.fontSize = (3 * 100) / nBars + "px";
    else {
      bar.style.fontSize = 2 + "px";
      bar.style.color = "#383532";
    }
    bar.style.height = array[i] * heightFactor + "px";
    bar.classList.add("bar");
    barContainer.appendChild(bar);
  }
}

/* Check the array size, create an array with random elements and render the bars according to the array created */
function updateBars() {
  nBars = document.getElementById("array-size").value;
  array = new Array(nBars);
  document.getElementById("bars-container").innerHTML = " ";
  array = createArray(nBars);
  renderBars(array, nBars);
  document.getElementById("num-comp").innerHTML = 0;
  document.getElementById("num-swap").innerHTML = 0;
}

/* Reset the sorted array to an unsorted one */
function reset() {
  var bar = document.getElementsByClassName("bar");
  for (var i = 0; i < nBars; i++) array[i] = tarray[i];
  for (var i = 0; i < nBars; i++) {
    bar[i].style.height = array[i] * heightFactor + "px";
    bar[i].innerHTML = array[i];
    bar[i].style.backgroundColor = "#383532";
    bar[i].style.color = "#978b82";
    if (nBars < 25) bar[i].style.fontSize = 10 + "px";
    else if (nBars < 35) bar[i].style.fontSize = (3 * 100) / nBars + "px";
    else {
      bar[i].style.fontSize = 2 + "px";
      bar[i].style.color = "#383532";
    }
  }
  document.getElementById("num-comp").innerHTML = 0;
  document.getElementById("num-swap").innerHTML = 0;
}

/* Enable the dropdown menus, sliders and buttons */
function enableInput() {
  document
    .querySelectorAll("input")
    .forEach((element) => (element.disabled = false));
  document
    .querySelectorAll("button")
    .forEach((element) => (element.disabled = false));
}

/* Disable the dropdown menus, sliders and buttons */
function disableInput() {
  document
    .querySelectorAll("input")
    .forEach((element) => (element.disabled = true));
  document
    .querySelectorAll("button")
    .forEach((element) => (element.disabled = true));
}

/* Update the Information section according to the algorithm selected */
function updateAlgoData(algo) {
  var name = document.getElementById("algo-name");
  var description = document.getElementById("algo-desc");
  var cWorst = document.getElementById("worst");
  var cAvg = document.getElementById("average");
  var cBest = document.getElementById("best");
  var cSpace = document.getElementById("space");
  tag = document.getElementById("swap-tag");

  if (algo == "Bubble") {

    tag.innerHTML = "Swaps : ";
    name.innerHTML = algo + " Sort";
    description.innerHTML =
      '<a href="https://en.wikipedia.org/wiki/Bubble_sort">Bubble Sort</a> is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems.';
    cWorst.innerHTML = "O(n<sup>2</sup>)";
    cAvg.innerHTML = "O(n<sup>2</sup>)";
    cBest.innerHTML = "O(n)";
    cSpace.innerHTML = "O(1)";

  } else if (algo == "Selection") {

    tag.innerHTML = "Swaps : ";
    name.innerHTML = algo + " Sort";
    description.innerHTML =
      '<a href="https://en.wikipedia.org/wiki/Selection_sort">Selection Sort</a> is an in-place comparison sorting algorithm that divides the input list varo two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.';
    cWorst.innerHTML = "O(n<sup>2</sup>)";
    cAvg.innerHTML = "O(n<sup>2</sup>)";
    cBest.innerHTML = "O(n<sup>2</sup>)";
    cSpace.innerHTML = "O(1)";

  } else if (algo == "Merge") {

    tag.innerHTML = "Subarrays Merged : ";
    name.innerHTML = algo + " Sort";
    description.innerHTML =
      '<a href="https://en.wikipedia.org/wiki/Merge_sort">Merge Sort</a> is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows : <ol><li>Divide the unsorted list varo <em>n</em> sublists, each containing one element(a list of one element is considered sorted)</li><li>Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.</li></ol></div>';
    cWorst.innerHTML = "O(<em>n</em> log <em>n</em>)";
    cAvg.innerHTML = "O(<em>n</em> log <em>n</em>)";
    cBest.innerHTML = "O(<em>n</em> log <em>n</em>)";
    cSpace.innerHTML = "O(<em>n</em>)";

  } else if (algo == "Quick") {

    tag.innerHTML = "Swaps : ";
    name.innerHTML = algo + " Sort";
    description.innerHTML =
      '<a href="https://en.wikipedia.org/wiki/Quicksort">Quick Sort</a> is an efficient, in-place sorting algorith that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm. Quicksort first divides a large array varo two smaller sub-arrays: the beg elements and the end elements. Quicksort can then recursively sort the sub-arrays. The steps are:</p><ol><li>Pick an element, called a pivot, from the array. This is usually done at random.</li><li>swap pivot element to the start of the array.</li><li><em>Partitioning:</em> reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the Quick Sort <em>partition</em> operation.</li><li>Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array ofelements with greater values.</li></ol><p>The base case of the recursion is an array of size zero or one, which are sorted by definition.</p>';
    cWorst.innerHTML = "O(<em>n</em><sup>2</sup>)";
    cAvg.innerHTML = "O(<em>n</em>log<em>n</em>)";
    cBest.innerHTML = "O(<em>n</em>log<em>n</em>)";
    cSpace.innerHTML = "O(log<em>n</em>)";

  } else if (algo == "Insertion") {

    tag.innerHTML = "Elements Moved : ";
    name.innerHTML = algo + " Sort";
    description.innerHTML =
      '<a href="https://en.wikipedia.org/wiki/Insertion_sort">Insertion Sort</a> is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.';
    cWorst.innerHTML = "O(n<sup>2</sup>)";
    cAvg.innerHTML = "O(n<sup>2</sup>)";
    cBest.innerHTML = "O(n)";
    cSpace.innerHTML = "O(1)";
  }
}

/* Once an Algorithm is selected from the dropdown
    Change the dropdown tag
    Update the information section
    Reset the bars if already sorted */
function updateAlgo() {
  var e = document.getElementsByName("algo");

  for (i = 0; i < e.length; i++) {
    if (e[i].checked) {
      document.getElementById("algo-tag").innerHTML = e[i].value + " Sort";
      selectedAlgo = e[i].value;
      document.getElementById("algo-tag").style.color = "#d79a21bb";
      document.getElementById("t1").checked = false;
      updateAlgoData(e[i].value);
      selectedAlgo = e[i].value;
      reset();
    }
  }
}

/* Merge sort helper function */
var itmd = [], visited = [];
function initializeMSort() {
  for (var i = 0; i < nBars; i++) {
    itmd.push(0);
    visited.push(0);
  }
}

/* Run the appropiate algorithm once the start button os clicked */
async function sort() {
  bar = document.getElementsByClassName("bar");
  speed = document.getElementById("speed").value;
  comp = document.getElementById("num-comp");
  swap = document.getElementById("num-swap");

  comparisons = 0;
  swaps = 0;

  switch (selectedAlgo) {
    case "Bubble":
      disableInput();
      await bubble(array, nBars);
      enableInput();
      break;
    case "Selection":
      disableInput();
      await selection(array, nBars);
      enableInput();
      break;
    case "Insertion":
      disableInput();
      await insertion(array, nBars);
      enableInput();
      break;
    case "Quick":
      disableInput();
      await quick(array, 0, nBars - 1);
      await delay(speed);
      for (let i = 0; i < nBars; i++) {
        bar[i].style.backgroundColor = "#d79a21bb";
        bar[i].style.color = "#383532";
      }
      enableInput();
      break;
    case "Merge":
      disableInput();
      initializeMSort();

      for (let i = 0; i < nBars; i++) {
        bar[i].style.backgroundColor = "#383532";
        bar[i].style.color = "#978b82";
      }
      await mergeSort(array, 0, nBars - 1);
      for (let i = 0; i < nBars; i++) {
        bar[i].style.backgroundColor = "#d79a21bb";
        bar[i].style.color = "#383532";
      }
      enableInput();
      break;
    default:
      alert("Select an algorithm!");
  }
}

/* Provide a delay according to the speed in the speed slider */
function delay(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 80 * (8 - 2 * milisec));
  });
}


/* -----SORTING ALGORITHMS----- */

async function bubble(a, n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      bar[j].style.backgroundColor = "rgba(215, 154, 33, 0.23)";
      bar[j + 1].style.backgroundColor = "rgba(215, 154, 33, 0.23)";
      comp.innerHTML = ++comparisons;
      await delay(speed);
      if (a[j] > a[j + 1]) {
        //swap
        swap.innerHTML = ++swaps;
        bar[j].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
        bar[j + 1].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
        await delay(speed);
        var TEMP = bar[j].innerHTML;
        var temp = a[j];
        bar[j].innerHTML = bar[j + 1].innerHTML;
        a[j] = a[j + 1];
        bar[j + 1].innerHTML = TEMP;
        a[j + 1] = temp;
        bar[j].style.height = a[j] * heightFactor + "px";
        bar[j + 1].style.height = a[j + 1] * heightFactor + "px";
        await delay(speed);
      }
      bar[j].style.backgroundColor = "#383532";
      bar[j + 1].style.backgroundColor = "#383532";
      await delay(speed);
    }
    bar[n - i - 1].style.backgroundColor = "#d79a21bb";
    bar[n - i - 1].style.color = "#383532";
  }
}

async function selection(a, n) {
  for (var i = 0; i < n; i++) {
    let min = i;
    bar[i].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
    await delay(speed);
    for (var j = i + 1; j < n; j++) {
      bar[j].style.backgroundColor = "rgba(215, 154, 33, 0.23)";
      await delay(speed);
      comp.innerHTML = ++comparisons;
      if (a[j] < a[min]) {
        if (min != i) bar[min].style.backgroundColor = "#383532";
        min = j;
        bar[min].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
      } else bar[j].style.backgroundColor = "#383532";
    }

    if (min !== i) {
      //swap
      swap.innerHTML = ++swaps;
      bar[min].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
      await delay(speed);
      var TEMP = bar[min].innerHTML;
      var temp = a[min];
      bar[min].innerHTML = bar[i].innerHTML;
      a[min] = a[i];
      bar[i].innerHTML = TEMP;
      a[i] = temp;
      bar[min].style.height = a[min] * heightFactor + "px";
      bar[i].style.height = a[i] * heightFactor + "px";
      await delay(speed);
      bar[min].style.backgroundColor = "#383532";
    }
    bar[i].style.backgroundColor = "#d79a21bb";
    bar[i].style.color = "#383532";
    await delay(speed);
  }
}

async function insertion(a, n) {
  bar[0].style.backgroundColor = "#d79a21bb";
  bar[0].style.color = "#383532";
  for (var i = 1; i < n; i++) {
    bar[i].style.backgroundColor = "rgba(215, 154, 33, 0.23)";
    await delay(speed);
    var t = a[i];
    comp.innerHTML = ++comparisons;
    for (var x = i - 2; x >= 0; x--) {
      if (a[x] > t) comp.innerHTML = ++comparisons;
      if (a[x - 1] < t) {
        comp.innerHTML = ++comparisons;
        break;
      }
    }

    for (var j = i - 1; j >= 0 && a[j] > t; j--) {
      bar[j + 1].style.height = bar[j].style.height;
      a[j + 1] = a[j];
      swap.innerHTML = ++swaps;
      bar[j + 1].innerHTML = a[j + 1];

      for (var k = i; k >= 0; k--) {
        bar[k].style.backgroundColor = "#d79a21bb";
        bar[k].style.color = "#383532";
      }
    }

    bar[j + 1].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
    await delay(speed);
    a[j + 1] = t;
    bar[j + 1].style.height = t * heightFactor + "px";
    bar[j + 1].innerHTML = a[j + 1];
    bar[j + 1].style.backgroundColor = "#d79a21bb";
    bar[j + 1].style.color = "#383532";
    await delay(speed);
    bar[i].style.backgroundColor = "#d79a21bb";
    bar[i].style.color = "#383532";
    await delay(speed);
  }
}

async function partition(a, beg, end) {
  var pivot = a[beg];
  var i = beg + 1,
    j = end;
  bar[beg].style.backgroundColor = "rgba(215, 33, 33, 0.23)";
  await delay(speed);

  while (i <= end) {
    bar[i].style.backgroundColor = "rgba(215, 154, 33, 0.23)";
    bar[j].style.backgroundColor = "rgba(215, 154, 33, 0.23)";
    await delay(speed);

    while (a[i] <= pivot && i < end) {
      bar[i].style.backgroundColor = "#383532";
      ++i;
      bar[i].style.backgroundColor = "rgba(215, 154, 33, 0.23)";
      await delay(speed);
      comp.innerHTML = ++comparisons;
    }

    while (a[j] > pivot && j > beg) {
      bar[j].style.backgroundColor = "#383532";
      --j;
      bar[j].style.backgroundColor = "rgba(215, 154, 33, 0.23)";
      await delay(speed);
      comp.innerHTML = ++comparisons;
    }

    if (j <= i) {
      swap.innerHTML = ++swaps;
      bar[j].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
      bar[beg].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
      await delay(speed);
      var TEMP = bar[j].innerHTML;
      var temp = a[j];
      bar[j].innerHTML = bar[beg].innerHTML;
      a[j] = a[beg];
      bar[beg].innerHTML = TEMP;
      a[beg] = temp;
      bar[j].style.height = a[j] * heightFactor + "px";
      bar[beg].style.height = a[beg] * heightFactor + "px";
      await delay(speed);
      bar[beg].style.backgroundColor = "#383532";
      for (let x = 0; x < nBars; x++)
        if (bar[x].style.backgroundColor == "rgba(215, 154, 33, 0.23)")
          bar[x].style.backgroundColor = "#383532";
      bar[j].style.backgroundColor = "#d79a21bb";
      bar[j].style.color = "#383532";
      await delay(speed);
      return j;
    } else {
      swap.innerHTML = ++swaps;
      bar[i].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
      bar[j].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
      await delay(speed);
      var TEMP = bar[i].innerHTML;
      var temp = a[i];
      bar[i].innerHTML = bar[j].innerHTML;
      a[i] = a[j];
      bar[j].innerHTML = TEMP;
      a[j] = temp;
      bar[i].style.height = a[i] * heightFactor + "px";
      bar[j].style.height = a[j] * heightFactor + "px";
      await delay(speed);
      bar[i].style.backgroundColor = "#383532";
      bar[j].style.backgroundColor = "#383532";
      await delay(speed);
      ++i;
      --j;
    }
    if (j <= beg) break;
  }

  for (let x = 0; x < nBars; x++)
    if (bar[x].style.backgroundColor == "rgba(215, 154, 33, 0.23)")
      bar[x].style.backgroundColor = "#383532";
  bar[beg].style.backgroundColor = "#d79a21bb";
  bar[beg].style.color = "#383532";
  await delay(speed);

  return beg;
}

async function quick(a, p, q) {
  if (p < q) {
    var r = await partition(a, p, q);
    await quick(a, p, r - 1);
    await quick(a, r + 1, q);
  }
}

function mergeArray(arr, start, end) {
  let mid = parseInt((start + end) >> 1);
  let start1 = start,
    start2 = mid + 1;
  let end1 = mid,
    end2 = end;

  let index = start;
  swap.innerHTML = ++swaps;

  while (start1 <= end1 && start2 <= end2) {
    comp.innerHTML = ++comparisons;
    if (arr[start1] <= arr[start2]) {
      itmd[index] = arr[start1];
      index = index + 1;
      start1 = start1 + 1;
    } else if (arr[start1] > arr[start2]) {
      itmd[index] = arr[start2];
      index = index + 1;
      start2 = start2 + 1;
    }
  }

  while (start1 <= end1) {
    itmd[index] = arr[start1];
    index = index + 1;
    start1 = start1 + 1;
  }

  while (start2 <= end2) {
    itmd[index] = arr[start2];
    index = index + 1;
    start2 = start2 + 1;
  }

  index = start;
  while (index <= end) {
    arr[index] = itmd[index];
    index++;
  }
}

async function drawBars(a, start, end) {
  let f = 0;
  for (let i = 0; i < nBars; i++) if (visited[i]) f++;

  if (f != nBars) {
    for (let i = 0; i < nBars; i++) {
      bar[i].style.backgroundColor = "#383532";
      if (visited[i]) {
        bar[i].style.backgroundColor = "rgba(215, 154, 33, 0.23)";
      }
    }
    await delay(speed);
  }

  for (let i = start; i <= end; i++) {
    bar[i].style.height = a[i] * heightFactor + "px";
    bar[i].innerHTML = a[i];
    bar[i].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
    visited[i] = 1;
  }
  await delay(speed);
}

async function mergeSort(a, start, end) {
  if (start < end) {
    let mid = parseInt((start + end) >> 1);
    await mergeSort(a, start, mid);
    await mergeSort(a, mid + 1, end);
    mergeArray(a, start, end);
    await drawBars(a, start, end);
  }
}
