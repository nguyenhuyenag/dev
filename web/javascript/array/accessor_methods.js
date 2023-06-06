var arr = [1, 2, 3, 4, 5, 6, 7];

function accessor_methods() {

    /**
    * @method Array.concat()
    * @returns Gộp mảng, hàm trả về 1 mảng mới
    */
    // let array = arr.concat(4, [5], [6]);
    // console.log(array);

    /**
    * @method Array.includes()
    * @returns Nếu fromIndex < 0, thì vị trí bắt đầu tìm kiếm là array.length + fromIndex.
    */
    // let find = arr.includes(3); // true
    let find = arr.includes(2, 2); // false
    // console.log(find);


    /**
    * @method Array.indexOf()
    */
    var indexs = [];
    var array = ['f', 'a', 'b', 'a', 'c', 'a', 'd'];
    var element = 'a';
    var idx = array.indexOf(element);
    while (idx != -1) {
        indexs.push(idx);
        idx = array.indexOf(element, idx + 1);
    }
    // console.log(indexs); // [1, 3, 5]


    /**
    * @method Array.toString()
    * @return Chuyển mảng thành string, cách nhau bởi dấu phẩy
    */

    /**
    * @method Array.join()
    * @return Chuyển mảng thành string, seperator mặc định là dấu phẩy ","
    */
    // console.log(arr.join()); // 1,2,3
    // console.log(arr.join("")); // 123

    /**
    * @method Array.toLocaleString()
    */

    /**
    * @method Array.lastIndexOf()
    * @return Vị trí xuất hiện cuối cùng của phần tử cần tìm
    */
    var indices = [];
    var array = ['a', 'b', 'a', 'c', 'a', 'd'];
    var element = 'a';
    var idx = array.lastIndexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
    }
    // console.log(indices); // [4, 2, 0]

    /**
    * @method Array.slice()
    * @return 
    */
    console.log(arr.slice()); // [1, 2, 3, 4, 5, 6, 7]
    console.log(arr.slice(-5, -1)); // [1, 2, 3, 4, 5, 6, 7]
}