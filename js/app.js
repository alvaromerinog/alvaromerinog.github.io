/*
Eventos en el artículo India
 */
let india = document.querySelector('#india');
let indiaCb = document.querySelector('#ind');
indiaCb.addEventListener('change', function () {
    if(japonCb.checked === true){
        india.style.backgroundColor = '#f8e0b9';
    } else{
        india.style.backgroundColor = 'transparent';
    }
});
india.addEventListener('click', function () {
    if (indiaCb.checked === true) {
        india.style.backgroundColor = 'transparent';
        indiaCb.checked = false;
    } else {
        india.style.backgroundColor = '#f8e0b9';
        indiaCb.checked = true;
    }
});

/*
Eventos en el artículo Mexico
 */
let mexico = document.querySelector('#mexico');
let mexicoCb = document.querySelector('#mx');

mexicoCb.addEventListener('change', function () {
    if(mexicoCb.checked === true){
        mexico.style.backgroundColor = '#f8e0b9';
    } else{
        mexico.style.backgroundColor = 'transparent';
    }
});
mexico.addEventListener('click', function () {
    if (mexicoCb.checked === true) {
        mexico.style.backgroundColor = 'transparent';
        mexicoCb.checked = false;
    } else {
        mexico.style.backgroundColor = '#f8e0b9';
        mexicoCb.checked = true;
    }
});

/*
Eventos en el artículo Nueva Zelanda
 */
let nzelanda = document.querySelector('#nzelanda');
let nzelandaCb = document.querySelector('#nz');
nzelandaCb.addEventListener('change', function () {
    if(nzelandaCb.checked === true){
        nzelanda.style.backgroundColor = '#f8e0b9';
    } else{
        nzelanda.style.backgroundColor = 'transparent';
    }
});
nzelanda.addEventListener('click', function () {
    if (nzelandaCb.checked === true) {
        nzelanda.style.backgroundColor = 'transparent';
        nzelandaCb.checked = false;
    } else {
        nzelanda.style.backgroundColor = '#f8e0b9';
        nzelandaCb.checked = true;
    }
});

/*
Eventos en el artículo Peru
 */
let peru = document.querySelector('#peru');
let peruCb = document.querySelector('#per');
peruCb.addEventListener('change', function () {
    if(peruCb.checked === true){
        peru.style.backgroundColor = '#f8e0b9';
    } else{
        peru.style.backgroundColor = 'transparent';
    }
});
peru.addEventListener('click', function () {
    if (peruCb.checked === true) {
        peru.style.backgroundColor = 'transparent';
        peruCb.checked = false;
    } else {
        peru.style.backgroundColor = '#f8e0b9';
        peruCb.checked = true;
    }
});


/*
Eventos en el artículo Islandia
 */
let islandia = document.querySelector('#islandia');
let islandiaCb = document.querySelector('#isl');
islandiaCb.addEventListener('change', function () {
    if(islandiaCb.checked === true){
        islandia.style.backgroundColor = '#f8e0b9';
    } else{
        islandia.style.backgroundColor = 'transparent';
    }
});
islandia.addEventListener('click', function () {
    if (islandiaCb.checked === true) {
        islandia.style.backgroundColor = 'transparent';
        islandiaCb.checked = false;
    } else {
        islandia.style.backgroundColor = '#f8e0b9';
        islandiaCb.checked = true;
    }
});

/*
Eventos en el artículo Japón
 */
let japon = document.querySelector('#japon');
let japonCb = document.querySelector('#jp');
japonCb.addEventListener('change', function () {
    if(japonCb.checked === true){
        japon.style.backgroundColor = '#f8e0b9';
    } else{
        japon.style.backgroundColor = 'transparent';
    }
});
japon.addEventListener('click', function () {
    if (japonCb.checked === true) {
        japon.style.backgroundColor = 'transparent';
        japonCb.checked = false;
    } else {
        japon.style.backgroundColor = '#f8e0b9';
        japonCb.checked = true;
    }
});

