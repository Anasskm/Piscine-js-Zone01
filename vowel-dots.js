var vowels=/[aeioARIO]/g;
function vowelDots(a) {
    a=a.replace(vowels,'$&.')
    return a
}