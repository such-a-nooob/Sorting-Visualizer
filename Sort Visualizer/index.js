function updateSize() {
    var x = document.getElementById("array-size").value;
    document.getElementById("data-size").innerHTML = x;
    updateBars();
}
  
function updateSpeed() {
    var x = document.getElementById("speed").value;
    document.getElementById("data-speed").innerHTML = x;
}

function randomNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

var nBars;
var array;
var heightFactor;

function createArray(n) {
    var a = new Array(n); 
    for(let i=0; i<n; i++)
        a[i] = randomNum(5, 60);
    return a;
}

function renderBars(array, nBars) {
    heightFactor = 4;
    for (var i = 0; i < nBars; i++) {
        const barContainer = document.getElementById("bars-container");
        const bar = document.createElement("div");
        bar.innerHTML = array[i];
        if(nBars<25)
            bar.style.fontSize = 10 + "px";
        else if(nBars<35)
            bar.style.fontSize = 3*100/nBars + "px";
        else
        {
            bar.style.fontSize = 2 + "px";
            bar.style.color = '#383532';
        }
        bar.style.height = array[i] * heightFactor + "px";
        bar.classList.add("bar");
        barContainer.appendChild(bar);
    }
}

function updateBars()
{
    nBars = document.getElementById("array-size").value;
    array = new Array(nBars);
    document.getElementById("bars-container").innerHTML = " ";
    array = createArray(nBars);
    renderBars(array, nBars);
    document.getElementById("num-comp").innerHTML = 0;
    document.getElementById("num-swap").innerHTML = 0;
}

function enableInput() 
{
    document.querySelectorAll('input').forEach(element => element.disabled = false);
    document.querySelectorAll('button').forEach(element => element.disabled = false);
}

function disableInput() 
{
    document.querySelectorAll('input').forEach(element => element.disabled = true);
    document.querySelectorAll('button').forEach(element => element.disabled = true);
}

var selectedAlgo;
function updateAlgoData( algo )
{
    if(algo == "Bubble")
    {
        document.getElementById('algo-name').innerHTML = algo+' Sort';
        document.getElementById('algo-desc').innerHTML = '<a href="https://en.wikipedia.org/wiki/Bubble_sort">Bubble Sort</a> is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems.';
        document.getElementById('worst').innerHTML = 'O(n<sup>2</sup>)';
        document.getElementById('average').innerHTML = 'O(n<sup>2</sup>)';
        document.getElementById('best').innerHTML = 'O(n)';
        document.getElementById('space').innerHTML = 'O(1)';
    }
    else if(algo == "Selection")
    {
        document.getElementById('algo-name').innerHTML = algo+' Sort';
        document.getElementById('algo-desc').innerHTML = '<a href="https://en.wikipedia.org/wiki/Selection_sort">Selection Sort</a> is an in-place comparison sorting algorithm that divides the input list varo two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.';
        document.getElementById('worst').innerHTML = 'O(n<sup>2</sup>)';
        document.getElementById('average').innerHTML = 'O(n<sup>2</sup>)';
        document.getElementById('best').innerHTML = 'O(n<sup>2</sup>)';
        document.getElementById('space').innerHTML = 'O(1)';
    }
    else if(algo == "Merge")
    {
        document.getElementById('algo-name').innerHTML = algo+' Sort';
        document.getElementById('algo-desc').innerHTML = '<a href="https://en.wikipedia.org/wiki/Merge_sort">Merge Sort</a> is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows : <ol><li>Divide the unsorted list varo <em>n</em> sublists, each containing one element(a list of one element is considered sorted)</li><li>Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.</li></ol></div>';
        document.getElementById('worst').innerHTML = 'O(<em>n</em> log <em>n</em>)';
        document.getElementById('average').innerHTML = 'O(<em>n</em> log <em>n</em>)';
        document.getElementById('best').innerHTML = 'O(<em>n</em> log <em>n</em>)';
        document.getElementById('space').innerHTML = 'O(<em>n</em>)';
    }
    else if(algo == "Quick")
    {
        document.getElementById('algo-name').innerHTML = algo+' Sort';
        document.getElementById('algo-desc').innerHTML = '<a href="https://en.wikipedia.org/wiki/Quicksort">Quick Sort</a> is an efficient, in-place sorting algorith that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm. Quicksort first divides a large array varo two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. The steps are:</p><ol><li>Pick an element, called a pivot, from the array. This is usually done at random.</li><li>Move pivot element to the start of the array.</li><li><em>Partitioning:</em> reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the Quick Sort <em>partition</em> operation.</li><li>Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array ofelements with greater values.</li></ol><p>The base case of the recursion is an array of size zero or one, which are sorted by definition.</p>';
        document.getElementById('worst').innerHTML = 'O(<em>n</em><sup>2</sup>)';
        document.getElementById('average').innerHTML = 'O(<em>n</em>log<em>n</em>)';
        document.getElementById('best').innerHTML = 'O(<em>n</em>log<em>n</em>)';
        document.getElementById('space').innerHTML = 'O(log<em>n</em>)';
    }
    else if (algo == "Insertion")
    {
        document.getElementById('algo-name').innerHTML = algo+' Sort';
        document.getElementById('algo-desc').innerHTML = '<a href="https://en.wikipedia.org/wiki/Insertion_sort">Insertion Sort</a> is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.';
        document.getElementById('worst').innerHTML = 'O(n<sup>2</sup>)';
        document.getElementById('average').innerHTML = 'O(n<sup>2</sup>)';
        document.getElementById('best').innerHTML = 'O(n)';
        document.getElementById('space').innerHTML = 'O(1)';
    }
}

function updateAlgo() {
    var e = document.getElementsByName('algo');
    
    for(i = 0; i < e.length; i++) {
        if(e[i].checked)
        {
            document.getElementById("algo-tag").innerHTML = e[i].value +" Sort";
            selectedAlgo = e[i].value;
            document.getElementById('algo-tag').style.color = '#d79a21bb';
            document.getElementById('t1').checked = false;
            updateAlgoData(e[i].value);
            selectedAlgo = e[i].value;
        }
    }
}

async function sort()
{
    switch(selectedAlgo)
    {
        case "Bubble": 
        disableInput();
        await bubble(array, nBars);
        break;
        case "Selection":  
        disableInput();
        await selection(array, nBars);
        break;
        case "Insertion":  
        break;
        case "Quick":  
        break;
        case "Merge":  
        break;
        default: alert("Select an algorithm!");
    }
}

// delay not working
function delay(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, 80*(8-(2*milisec)));
    })
}

var comparisons, swaps;

async function bubble(a, n)
{
    var bar = document.getElementsByClassName("bar")
    var speed = document.getElementById("speed").value
    var comp = document.getElementById("num-comp")
    var swap = document.getElementById("num-swap")
    comparisons = 0
    swaps = 0

    for(var i = 0; i < n; i++)
    {   
        for(var j = 0; j < ( n - i -1 ); j++)
        {
            bar[j].style.backgroundColor = 'rgba(215, 154, 33, 0.23)'
            bar[j+1].style.backgroundColor = 'rgba(215, 154, 33, 0.23)'            
            comp.innerHTML = ++comparisons
            await delay(speed)
            if(a[j] > a[j+1])
            {
                swap.innerHTML = ++swaps
                bar[j].style.backgroundColor = 'rgba(172, 215, 33, 0.23)' 
                bar[j+1].style.backgroundColor = 'rgba(172, 215, 33, 0.23)'
                await delay(speed)
                //swap
                var TEMP = bar[j].innerHTML
                var temp = a[j]
                bar[j].innerHTML = bar[j+1].innerHTML
                a[j] = a[j + 1]
                bar[j+1].innerHTML = TEMP
                a[j+1] = temp
                bar[j].style.height = a[j] * heightFactor + "px"
                bar[j+1].style.height = a[j+1] * heightFactor + "px"      
                await delay(speed)          
            }
            bar[j].style.backgroundColor = '#383532'
            bar[j+1].style.backgroundColor = '#383532' 
            await delay(speed)   
        }
        bar[n-i-1].style.backgroundColor = '#d79a21bb'
        bar[n-i-1].style.color = '#383532'
        //await delay(speed) 
    }
    enableInput();
}

async function selection(a,n)
{
    
    var bar = document.getElementsByClassName("bar")
    var speed = document.getElementById("speed").value
    var comp = document.getElementById("num-comp")
    var swap = document.getElementById("num-swap")
    comparisons = 0
    swaps = 0

    for (var i=0; i<n; i++) 
    {
        let min = i;
        bar[i].style.backgroundColor = "rgba(172, 215, 33, 0.23)";
        await delay(speed)
        for (var j=i+1; j<n; j++) 
        {
            bar[j].style.backgroundColor = "rgba(215, 154, 33, 0.23)";
            await delay(speed)
            comp.innerHTML = ++comparisons
            if (a[j] < a[min]) 
            {
                if(min!=i) 
                    bar[min].style.backgroundColor = '#383532'
                min = j;
                bar[min].style.backgroundColor = 'rgba(172, 215, 33, 0.23)'
            }
            else
                bar[j].style.backgroundColor = '#383532'
        }

        if (min !== i)
        { 
            //swap
            swap.innerHTML = ++swaps
            bar[min].style.backgroundColor = 'rgba(172, 215, 33, 0.23)' 
            await delay(speed)
            var TEMP = bar[min].innerHTML
            var temp = a[min]
            bar[min].innerHTML = bar[i].innerHTML
            a[min] = a[i]
            bar[i].innerHTML = TEMP
            a[i] = temp
            bar[min].style.height = a[min] * heightFactor + "px"
            bar[i].style.height = a[i] * heightFactor + "px"      
            await delay(speed); 
            bar[min].style.backgroundColor = '#383532'
        }
        bar[i].style.backgroundColor = '#d79a21bb'
        bar[i].style.color = '#383532'
        await delay(speed)
    }
    enableInput();
}

function linearSearch(num, comp)
{
	let p=num;
	for(var i=num-1; i>=0; i--)
	{
		if(a[num]<a[i]) p=i;
		comp++;
	}
	return p;
}


