module.exports = function toReadable(number) {
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tensUnits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20 && number >= 10)
        return tensUnits[number % 10];
    let res = "";
    let unit = number % 10;
    let hundred = Math.floor(number / 100);
    let ten = Math.floor(number / 10) % 10;
    if (number === 0)
        return 'zero';
    if (hundred > 0)
        res += `${units[hundred - 1]} hundred`;
    if (number % 100 < 20 && number % 100 >= 10) {
        res += ` ${tensUnits[number % 100 % 10]}`;
    } else {
        if (ten > 0)
            res += res === "" ? `${tens[ten - 2]}` : ` ${tens[ten - 2]}`;
        if (unit > 0)
            res += res === "" ? `${units[unit - 1]}` : ` ${units[unit - 1]}`;
    }
    return res;
}
