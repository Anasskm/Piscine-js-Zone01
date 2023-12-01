// Define a standalone slice function
function slice(input, start, end) {
    if (typeof input === 'string') {
        // If the input is a string
        return sliceString(input, start, end);
    } else if (Array.isArray(input)) {
        // If the input is an array
        if (start < 0) {
            start = input.length + start;
        }
        if (end < 0) {
            end = input.length + end;
        }
        return sliceArray(input, start, end);
    }
}

// Implement custom slice for strings
function sliceString(str, start, end) {
    if (end === undefined) {
        end = str.length;
    }
    return str.substring(start, end);
}

// Implement custom slice for arrays
function sliceArray(arr, start, end) {
    if (end === undefined) {
        end = arr.length;
    }
    return arr.slice(start, end);
}

