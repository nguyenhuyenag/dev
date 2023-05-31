var arr = Array.from({ length: 5 }, (v, i) => i);

function mutator_methods() {

    /**
    * @method Array.copyWithin()
    */

    /**
    * @method Array.fill()
    */
    // arr.fill(0); // [0, 0, 0, 0, 0]
    // arr.fill(0, 1); // [empty, 0, 0, 0, 0]
    // arr.fill(0, 1, 3); // [empty, 0, 0, empty, empty]

    /**
    * @method Array.pop()
    * @returns Xóa phần tử cuối mảng, hàm sẽ trả về phần tử bị xóa
    */
    // arr.pop();


    /**
    * @method Array.push()
    * @returns Thêm 1 hoặc nhiều phần tử vào cuối mảng, hàm trả về chiều dài mảng mới
    */
    // arr.push(1, 2, 3)


    /**
    * @method Array.reverse()
    * @returns Đảo mảng
    */
    // arr.reverse();
    // Array.prototype.reverse.call(arr);


    /**
    * @method  Array.shift()
    * @returns Xóa phần tử đầu tiên của mảng, hàm sẽ trả về phần tử bị xóa
    */
    // arr.shift();

    /**
    * @method Array.unshift()
    * @returns Thêm 1 hoặc nhiều phần tử vào đầu mảng, hàm sẽ trả về chiều dài của mảng sau khi thêm phần tử.
    */
   // arr.unshift(1, 2, 3);


    /**
    * @method  Array.sort()
    */
    var numbers = [1, 30, 4, 21, 100000];
    // numbers.sort(); // [1, 100000, 21, 30, 4]
    // numbers.sort((a, b) => a - b); // [1, 4, 21, 30, 100000]
    // console.log(numbers);

    // Sắp xếp đối tượng
    var object = [
        { name: 'Zhe', value: -12 },
        { name: 'Azero', value: 37 },
        { name: 'Edward', value: 21 },
        { name: 'Mharpe', value: 37 },
        { name: 'Magnetic', value: -13 }
    ];

    // sort by value
    object.sort((a, b) => a.value - b.value);
    // console.table(object);

    object.sort((a, b) => {
        var A = a.name.toUpperCase();
        var B = b.name.toUpperCase();
        return A < B ? -1 : (A > B ? 1 : 0);
    });
    // console.table(object);

    // Sorting non-ASCII characters
    var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
    items.sort((a, b) => a.localeCompare(b));
    // console.log(items);

    // the array to be sorted
    var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

    // temporary array holds objects with position and sort-value
    var mapped = list.map(function (el, i) {
        return { index: i, value: el.toLowerCase() };
    })

    // sorting the mapped array containing the reduced values
    mapped.sort(function (a, b) {
        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
        return 0;
    });

    // container for the resulting order
    var result = mapped.map(function (el) {
        return list[el.index];
    });
    console.log(result);
}
