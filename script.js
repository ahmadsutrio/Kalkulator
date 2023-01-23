let hasil = document.getElementById('hasil');

function nilai(a){
    if(a == 'clear'){
        hasil.value = hasil.value.slice(0, -1)
    }else if(a == 'clearAll'){
        hasil.value = '';
    }else if(a == '='){
        if(hasil.value === ''){
            hasil.value = '';
        }else
        hasil.value = eval(hasil.value);
    }else if (a == '%'){
        hasil.value = hasil.value/100;
    }else {
        hasil.value += a;
    }
}
