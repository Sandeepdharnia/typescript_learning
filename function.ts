function fruits():number {
    return 10;
}


function simple() {
    return true;
}

function complex():number|string {
    let data = 10;
    let type = 'age';
    let name = "Raj"
    if (type == 'age') {
        return data;
    }
    else {
        return name;
    }
}

// Can be used 'any' if return is unknown / not possible to declare  