/**
 * Created by Sam on 2020/1/19.
 */
window.addEventListener('DOMContentLoaded', function () {
    // TODO
    console.log(Date.now());
    var theSum = 4 + 3;
    var productCount = 2;
    var subtotal = 14.98;
    var shipping = 2.75;
    var total = subtotal + shipping;
    console.log(total);
    total += 5;
    console.log(total);

    var firstName = 'John';
    var surName = 'Doe';
    var fullName = firstName + ' ' + surName;
    console.log(fullName);

    var name = 'David';
    var age = 45;
    console.log(name + age);

    console.log(30, c2f(30));
})

function c2f(c) {
    return c * 1.8 + 32;
}
