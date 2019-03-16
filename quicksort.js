function quicksort (arr, begin, end) {
    if (begin > end) return;
    var l = begin;
    var r = end;
    var temp = arr[begin];
    while (l < r) {
        while (l < r && arr[r] >= temp) 
            r--;
        while (l < r && arr[l] <= temp) 
            l++;
        [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    [arr[begin], arr[l]] = [arr[l], arr[begin]];
    quicksort(arr, begin, l - 1);
    quicksort(arr, l + 1, end);
}
var arr = [1, 5, 7, 2, 4, 6, 9];
quicksort(arr, 0, arr.length - 1);
console.log(arr);
