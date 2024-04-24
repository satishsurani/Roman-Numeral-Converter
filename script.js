function integerToRoman(num) {
    const romanValues = [
        { roman: 'M', value: 1000 },
        { roman: 'CM', value: 900 },
        { roman: 'D', value: 500 },
        { roman: 'CD', value: 400 },
        { roman: 'C', value: 100 },
        { roman: 'XC', value: 90 },
        { roman: 'L', value: 50 },
        { roman: 'XL', value: 40 },
        { roman: 'X', value: 10 },
        { roman: 'IX', value: 9 },
        { roman: 'V', value: 5 },
        { roman: 'IV', value: 4 },
        { roman: 'I', value: 1 },
    ];

    let romanStr = '';

    for (const { roman, value } of romanValues) {
        while (num >= value) { 
            romanStr += roman;
            num -= value;
        }
    }

    return romanStr;
}

function onConvertClick() {
    const inputField = document.getElementById('number');
    const outputField = document.getElementById('output');
    const inputValue = parseInt(inputField.value);

    if (isNaN(inputValue)) {
        outputField.innerText = "Please enter a valid number";
        return;
    }

    if (inputValue < 1) { 
        outputField.innerText = "Please enter a number greater than or equal to 1";
        return;
    }

    if (inputValue >= 4000) { 
        outputField.innerText = "Please enter a number less than or equal to 3999";
        return;
    }

    const romanNumeral = integerToRoman(inputValue);
    outputField.innerText = romanNumeral;
}