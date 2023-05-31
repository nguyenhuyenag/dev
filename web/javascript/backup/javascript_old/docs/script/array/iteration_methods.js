var arr = [1, 2, 3, 4, 5];

function iteration_methods() {

    /**
    * @method Array.entries()
    * @returns Trả về 1 Iterator
    */
    let itr = arr.entries();
    // for (const [i, e] of itr) {
    //     console.log("a[" + i + "] = ", e);
    // }
    // for (let e of itr) {
    //     console.log(e);
    // }

    /**
    * @method Array.every()
    */

    /**
    * @method Array.filter()
    */

    /**
    * @method Array.find()
    * @return Trả về GIÁ TRỊ của phần tử đầu tiên thỏa mãn điều kiện trong find(), undefined nếu không có
    */
    let find = [5, 12, 8, 130, 44].find((element, index, array) => element > 10); // 12
    // console.log(find);

    /**
    * @method Array.findIndex()
    * @return Trả về index của phần tử đầu tiên thỏa mãn điều kiện trong findIndex(), -1 nếu không có
    */
    ["apple", "banana", "cantaloupe"].findIndex(fruit => fruit === "banana"); // 1

    /**
    * @method Array.forEach()
    * @return Trả về index của phần tử đầu tiên thỏa mãn điều kiện trong findIndex(), -1 nếu không có
    */
    // flat array
    function flatten(arr) {
        const result = []
        arr.forEach((i) => {
            if (Array.isArray(i)) {
                result.push(...flatten(i))
            } else {
                result.push(i)
            }
        })
        return result;
    }
    // Usage
    const problem = [1, 2, 3, [4, 5, [6, 7], 8, 9]]
    flatten(problem) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

    /**
    * @method Array.keys()
    */
    var array = ['a', 'b', 'c'];
    var iterator = array.keys();
    console.log(iterator);

    /**
    * @method Array.map()
    */

    /**
    * @method Array.reduce()
    */

    /**
    * @method Array.reduceRight()
    */

    /**
    * @method Array.some()
    */

}
