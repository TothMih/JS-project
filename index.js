
//jegyvásárló alkalmazás
var quantity = prompt('Hány jegyet kér?');
var type = prompt('Milyen típusú jegyet kér? (student/adult/retired)')
var types = {
    student: 300,
    adult: 350,
    retired: 280
};
var price = types[type];

if(price === undefined) {
    alert('Érvénytelen típus')
} else {
    var discount = quantity > 10 ? 0.9 : 1; // ha a mennyiség nagyobb 10 az érték 0.9 ha nem akkor 1
}

alert('A fizetendő összeg: ' + quantity*price*discount + 'Ft');
