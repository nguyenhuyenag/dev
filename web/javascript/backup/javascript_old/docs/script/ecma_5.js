/**
 * @method  Array.isArray()
 */
function isArray() {
    let check = Array.isArray([1, 2, 3]);
    console.log(check); // true
    Array.isArray(1, 2, 3); // false
    Array.isArray(Array.prototype);  // true
}


/**
 * @method  Array.forEach()
 */
function forEach() {
    // [1, 2, 3].forEach(t => console.log(t)); // 1, 2, 3
    [1, 2, 3].forEach(function (value, index) {
        console.log('a[' + index + '] = ' + value);
    });
}


/**
 * @method  Array.map()
 * @returns Tạo ra 1 mảng mới từ mảng cũ từ điều kiện trong map()
 */
function map() {
    let arr = [1, 2, 3, 4].map(t => 2 * t);
    console.log(arr); // [1, 4, 6, 8]
    // ["1", "2", "3"].map(parseInt);          // [1, NaN, NaN]
    // ["1", "2", "3"].map(t => parseInt(t));  // [1, 2, 3]
}


/**
 * @method  Array.filter()
 * @returns Trả về một mảng mới chứa các phần tử thỏa mãn điều kiện trong filter()
 */
function filter() {
    // Ví dụ lọc ra các chuỗi có độ dài > 2
    let arr = ['Java', 'C++', 'C', 'NodeJS', 'Python', 'C#'];
    // const filter = arr.filter(s => s.length > 2);
    const filter = arr.filter(function (value) {
        return value.length > 2;
    });
    console.table(filter); // ["Java", "C++", "NodeJS", "Python"]
}


/**
 * @method  Array.reduce()
 * @return Thực thi một hàm lên các phần tử của mảng (từ trái qua phải) và trả về 1 giá trị (accumulator).
 * 
 * arr.reduce(callback(accumulator, currentValue[, currentIndex[, array]])[, initialValue])
 * 
 *  @param callback: là hàm thực thi với từng phần tử của hàm, với 4 tham số:
 *  @param accumulator: biến tích lũy, được trả về sau mỗi lần gọi hàm callback.
 *  @param currentValue: phần tử của mảng đang được xử lý
 *  @param currentIndex: chỉ số của phần tử trong mảng đang được xử lý.
 *  @param array: mảng hiện tại gọi hàm reduce().
 *  @param initialValue: giá trị khởi tạo của accumulator. Nếu không có sẽ lấy giá trị đầu tiên của mảng.
 *  
 */
function reduce() {
    let s = [1, 2, 3, 4, 5].reduce(function (acc, value) {
        return acc + value;
    }, "");
    console.log(s); // 12345
}


/**
 * @method  Array.reduceRight()
 * Tương tự reduce nhưng thực hiện từ phải sang trái
 */
function reduceRight() {
    let s = "";
    s = [1, 2, 3, 4, 5].reduceRight((acc, value) => acc + value, s);
    console.log(s); // 54321
}


/**
 * @method  Array.every()
 * @returns true  : Nếu tất cả các phần tử đều thỏa mãn điều kiện trong every(), ngược lại false
 */
function every() {
    // Ví dụ kiểm tra mảng chứa toàn số dương
    let check = [1, 2, 3, 4].every(t => t > 0);
    console.log(check);
}


/**
 * @method  Array.some()
 * @returns true  : Nếu có ít nhất 1 phần tử trong mảng thỏa mãn điều kiện trong some(), false nếu không có.
 */
function some() {
    // Kiểm tra mảng có phần nào đó > 10
    let check = [12, 5, 8, 130, 44].some(t => t > 10); // false
    console.log(check);
}

/**
 * @method  Array.indexOf()
 * @returns Vị trí (đầu tiên) xuất hiện của phần tử cần tìm, nếu không tìm thấy trả về -1
 */
function indexOf() {
    let arr = [0, 3, 8, 7, 1, 6, 3, 0, 2, 5, 9, 7, 4, 8];
    // Tìm số 3
    console.log(arr.indexOf(3));    // Xuất hiện ở vị trí 1 (đầu tiên)
    console.log(arr.indexOf(3, 2)); // Tìm từ vị trí 2, xuất hiện ở vị trí 6
    console.log(arr.indexOf(99))    // -1 do không tìm thấy
}


/**
 * @method  Array.lastIndexOf()
 * @returns Vị trí xuất hiện cuối cùng của phần tử cần tìm, nếu không tìm thây trả về -1
 */
function lastIndexOf() {
    let arr = [0, 3, 8, 7, 1, 6, 3, 0, 2, 5, 9, 3, 4, 8];
    // Tìm số 3
    console.log(arr.lastIndexOf(3)); // 11
}


/**
 * @method  JSON.parse()
 * @returns Convert chuỗi JSON sang object
 * @syntax  JSON.parse(string, reviver<optional>)
 */
function JSONParse() {
    let data = JSON.parse('{"result": true, "count": 42}');
    console.log(data.count);    // 42
    console.log(data.result);   // true

    // with reviver
    let map = JSON.parse('{"p": 5}', (key, value) =>
        typeof value === 'number' //
            ? value * 2 // return value * 2 for numbers
            : value     // return everything else unchanged
    );
    console.log(map); // {p: 10}

    // => will throw a SyntaxError
    // JSON.parse("{'foo': 1}");
}


/**
 * @method  JSON.stringify()
 * @returns Convert object thành chuỗi JSON
 */
function JSONStringify() {
    let data = { "name": "Java", "age": 1995 };
    console.log(JSON.stringify(data)); // {"name":"Java","age":1995}
}


/**
 * @method Date.now()
 * @returns the number of milliseconds elapsed since 01/01/1970
 */
function now() {
    let time = Date.now();
    console.log(time);
}

/**
 * @method Getter
 * @method Setter
 */
function getset() {
    var person = {
        name: "Java",
        get lang() {
            return this.name;
        },
        set lang(value) {
            this.name = value;
        }
    };
    console.log(person.lang);
    person.lang = "C++";
    console.log(person.lang);
}
