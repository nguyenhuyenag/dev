function function_properties() {
    /**
    * @method eval()
    */
    // console.log(eval("2 + 2")); // 4
    // console.log(eval(new String('2 + 2'))); // "2 + 2"
    // console.log(eval(new String('2 + 2').toString())); // 4


    /**
    * @method isFinite(arg)
    * @returns FALSE if the arg is positive or negative Infinity or NaN or undefined; otherwise TRUE
    */
    isFinite(Infinity);  // false
    isFinite(NaN);       // false
    isFinite(-Infinity); // false

    isFinite(0);         // true


    /**
    * @method isNaN()
    * @returns TRUE nếu tham số là NaN, ngược lại FALSE
    */
    // console.log(isNaN(2));


    /**
    * @method parseInt()
    * @returns
    */
    // parseInt('F', 16); // 15


    /**
    * @method parseFloat()
    * @returns
    */
    console.log(parseFloat("1.2356"));

    /**
    * @method encodeURI()
    * @returns Mã hóa chuỗi URI bất kỳ, ngoại trừ các ký tự `;,/?:@&=+$-_.!~*'()#` và `A-Za-z0-9`
    */
    // var uri = ";,/?:@&=+$#";
    function fixedEncodeURI(str) {
        return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
    }


    /**
    * @method decodeURI()
    * @returns Giải mã chuỗi được mã hóa bởi `encodeURI()`, throw an URIError nếu uri không đúng định dạng
    */
    // try {
    //     decodeURI('%E0%A4%A');
    // } catch (e) {
    //     console.error(e);
    // }


    /**
    * @method encodeURIComponent()
    * @returns Mã hóa chuỗi, ngoại trừ `-_.!~*'()` và `A-Za-z0-9`
    */
    function fixedEncodeURIComponent(str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
            return '%' + c.charCodeAt(0).toString(16);
        });
    }

    /**
    * @method decodeURIComponent()
    */

    /**
    * @method escape()
    * @returns Mã hóa chuỗi, ngoại trừ `-@ _+-./`
    */


    /**
    * @method unescape()
    */
}
