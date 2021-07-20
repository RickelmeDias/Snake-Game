// Disable space on input name:

function nospaces(typed) {
        if (typed.value.match(/\s/g)) {
                typed.value = t.value.replace(/\s/g, '');
        }
}