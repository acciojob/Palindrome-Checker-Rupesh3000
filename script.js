// complete the given function

function palindrome(str) {
    const low = str.toLowerCase();

    const pattern = /[a-z0-9]/i;


    let i = 0;
    let j = low.length - 1;

    while (i < j) {
        if (!low.charAt(i).match(pattern)) {
            i++;
            continue
        }

        if (!low.charAt(j).match(pattern)) {
            j--;
            continue
        }

        if (low.charAt(i) != low.charAt(j)) {
            return false;
        }

        i++;
        j--;
    }
    return true;
}
module.exports = palindrome
