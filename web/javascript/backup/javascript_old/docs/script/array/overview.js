/**
 * @method constructor
 */

// var arr = new Array(1, 2, 3, 4);

var arr = ["Java", "C++", "Python", "Go"];

/**
 * @method Array.from()
 */
// var arr = Array.from("Java"); // ["J", "a", "v", "a"]

// var arr = Array.from([1, 2, 3], x => 2 * x); // [2, 4, 6]

// var arr = Array.from({ length: 5 }, (v, i) => i);

// const f = (...args) => Array.from(args);
// var arr = f(1, 2, 3, 4);

// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
// var arr = range(0, 4, 1); // range 0..4
// var arr = range(1, 10, 2); // range 1..10 with step of 2 
// var arr = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x)); // alphabet

/**
 * @method Array.of()
 */
// var arr = Array(5);              // [empty × 5]
// var arr = Array(1, 2, 3);        // [1, 2, 3]
// var arr = Array.of(1, 2, 3);     // [1, 2, 3]


function overview() {

    /**
     * @method Array.length
     */
    for (let i = 0; i < arr.length; i++) {
        // console.log("a[" + i + "] = " + arr[i]);
    }
    console.log(arr);

    /**
     * @method Array.forEach()
     */
    // arr.forEach((value, index) => console.log(value, index));

    /**
     * @method Array.push() : Thêm phần tử vào cuối mảng
     */
    // arr.push("Python"); // ["Java", "C", "C++", "Python"]

    /**
     * @method Array.pop() : Lấy ra + xoá bỏ phần tử cuối cùng
     */
    // let last = arr.pop(); // C++

    /**
     * @method Array.shift() : Lấy ra + xóa phần tử từ đầu mảng
     */
    // let first = arr.shift(); // Java

    /**
     * @method Array.indexOf()
     */
    // let index = arr.indexOf("C"); // 1

    /**
     * @method Array.splice(start, deleteCount, items[])
     * @param  start: Vị trí bắt đầu thay thế
     * @param  deleteCount: Số phần tử sẽ bị lại bỏ, tính tử vị trí start bao gồm cả phần tử start.
     * @param  items: Các phần tử sẽ được thêm vào từ vị trí start
     */
    // arr.splice(2, 1, "A", "B"); // ["Java", "C++", "A", "B"]

    /**
     * @method Array.slice(start, end): sub array từ vị trí start -> (end - 1)
     */
    // let clone = arr.slice(1, 4); // ["C++", "Python", "Go"]
}
