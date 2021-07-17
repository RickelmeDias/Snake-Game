function TypeDeterminant(valueVerified, type) {
    if (type.toUpperCase() == "STRING") {
        return ConvertTo_VARCHAR(valueVerified)
    }else{
        return `${valueVerified}`
    }
}

function ConvertTo_VARCHAR(convert_it) {
    return `\'${convert_it}\'`
}

// Put " , " between values or columns
function PutCommaBtw(determineType, ...values) {
    let output = "";

    for (let i = 0; i < values.length; i++) {
        if (i === values.length-1) {
            if (determineType) {
                output += ( TypeDeterminant(values[i], typeof(values[i])) );
            }else{
                output += `${values[i]}`
            }
        }else{
            if (determineType) {
                output += ( TypeDeterminant(values[i], typeof(values[i])) + "," );
            }else{
                output += `${values[i]},`
            }
        }
    }

    return output;
}

module.exports = {
    // TypeDeterminant: TypeDeterminant,
    PutCommaBtw: PutCommaBtw
    // otherFunction: otherFunction,
};