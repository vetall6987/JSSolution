function bubbleSort(array) {
    var notSorted = true;
    while (notSorted) {
        notSorted = false;
        for (var i = 1; i < array.length; i++) {
            if (array[i] < array[i - 1]) {
                var x = array[i];
                array[i] = array[i - 1];
                array[i - 1] = x;
                notSorted = true;
            }
        }
    }
    return array;
}

function binarySearch(el,array) {
    var low = 0, high = array.length-1, medium;

    while (low <= end) {
        medium = Math.floor((low+high)/2);
        if (el === array[medium])
            return medium;
        else if (el < array[medium])
            high = medium-1;
        else
            low = medium+1;
    }
    return "FALSE";
}
