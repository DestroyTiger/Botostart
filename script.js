let price = document.querySelectorAll(".price");
let people = document.querySelectorAll(".people");
let countshop = document.querySelector(".count-shop");



countshop.innerText = persiaNumber(countshop.innerText);
price.forEach(items => {
    let number = items.innerText;
    let numberper = persiaNumber(number);
    items.innerText = numberper;
    // console.log(numberper);

});
people.forEach(items => {
    let number = items.innerText;
    let numberper = persiaNumber(number);
    items.innerText = numberper;
    // console.log(numberper);

});

// تبدیل هر عددی و اعداد فارسی 
function persiaNumber(number) {
    let persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    let count = 0;
    let numpersian = [];
    let numberstr = String(number);
    for (let i of numberstr) {
        numpersian[count] = persian[i];
        if (!(i === ",")) {
            count++;
        }
    }

    let numberpersian = String(numpersian).replaceAll(",", '');
    let numberpersianrevers = numberpersian.split("").reverse();
    let count3 = 0;
    let finalnumberpersianrevers = "";
    let exportnumber = "";
    numberpersianrevers.forEach((items, index) => {
        finalnumberpersianrevers += items;
        count3++;
        if (count3 % 3 === 0)
            finalnumberpersianrevers += ",";

        // console.log(index)

    });
    let finalnumberpersian = finalnumberpersianrevers.split("").reverse();
    finalnumberpersian.forEach(items => {
        exportnumber += items;

    });

    if (exportnumber[0] === ",") {
        exportnumber = exportnumber.replace(exportnumber[0], "");
    }
    return exportnumber;
}
// تبدیل هر عددی و اعداد فارسی
