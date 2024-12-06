window.onload = function(){
    imageSlider();
    document.getElementById("btnArchitects").addEventListener("click",showArchitects);
    document.getElementById("btnDesigners").addEventListener("click",showDesigners);

 //ISPIS DATUMA
    //Ispis Godina
let nizGodina = [];
let godina = new Date().getFullYear();
for(let i=godina;i>1929;i--){
    nizGodina.push(i);
}

let godineIspis = "<select id='godina'>";
godineIspis += "<option>Year</option>";
for (let i in nizGodina) {
    godineIspis += "<option>"+nizGodina[i]+"</option>";
}
godineIspis += "</select>";
document.getElementById("ddlYear").innerHTML = godineIspis;

    //Ispis meseci
let nizMeseca = [];
for(let i = 12; i>0;i--){
    nizMeseca.push(i);
}

let meseciIspis = "<select id='mesec'>";
meseciIspis += "<option>Month</option>";
for (let i in nizMeseca) {
    meseciIspis += "<option>"+nizMeseca[i]+"</option>";
}
meseciIspis += "</select>";
document.getElementById("ddlMonth").innerHTML = meseciIspis;

    //Ispis dana
 let nizDana = [];
for(let i = 31; i>0;i--){
    nizDana.push(i);
}
let daniIspis = "<select id='dan'>";
daniIspis += "<option>Day</option>";
    for (let i in nizDana) {
        daniIspis += "<option>"+nizDana[i]+"</option>";
    }
    daniIspis += "</select>";
    document.getElementById("ddlDay").innerHTML = daniIspis;

    //ISPIS SLIKA
let nizSlikaZaGaleriju=[
    {
        putanjaSlike: "assets/images/projekat1.jpg",
        altSlike: "Projekat1"
    },
    {
        putanjaSlike: "assets/images/projekat2.jpg",
        altSlike: "Projekat2"
    },
    {
        putanjaSlike: "assets/images/projekat3.jpg",
        altSlike: "Projekat3"
    },
    {
        putanjaSlike: "assets/images/projekat4.jpg",
        altSlike: "Projekat4"
    }
];

let ispisSlika = "";
let divGalerije = document.getElementById("mestoZaIspisSlika");
nizSlikaZaGaleriju.forEach(function(slika){
    ispisSlika += `<div class="col-lg-3 col-md-6 pl-0 pr-0">
    <img src="${slika.putanjaSlike}" class="img-fluid" alt="${slika.altSlike}">
</div>`
});
divGalerije.innerHTML = ispisSlika;


//ISPIS ARHITEKTI
let nizArhitekti = [
    {
        putanjaArhitektaSlika: "assets/images/radnik1.jpg",
        altArhitektaSlika: "worker1",
        imeArhitekta: "Robert Anderson"
    },
    {
        putanjaArhitektaSlika: "assets/images/radnik2.jpg",
        altArhitektaSlika: "worker2",
        imeArhitekta: "Nathan Johnson"
    },
    {
        putanjaArhitektaSlika: "assets/images/radnik3.jpg",
        altArhitektaSlika: "worker3",
        imeArhitekta: "Abigail Walker"
    }
];

let ispisArhitekti = "";
let divZaArhitekte = document.getElementById("blockArchitects");
nizArhitekti.forEach(function(arhi){
    ispisArhitekti +=`<div class="col-lg-4 col-md-12 d-flex justify-content-center mb-5">
    <div class="card w-75">
            <img src="${arhi.putanjaArhitektaSlika}" class="card-img-top" alt="${arhi.altArhitektaSlika}">
        <div class="card-body">                          
            <h5 class="card-title orangeTextColor">${arhi.imeArhitekta}</h5>
        </div>
    </div>
</div>`
});
divZaArhitekte.innerHTML = ispisArhitekti;

//ISPIS DIZAJNERA

let nizDizajnera = [
    {
        putanjaDizajnerSlika: "assets/images/radnik4.jpg",
        altDizajnerSlika: "worker1",
        imeDizajner: "Jack Hudson"
    },
    {
        putanjaDizajnerSlika: "assets/images/radnik5.jpg",
        altDizajnerSlika: "worker2",
        imeDizajner: "John Evans"
    },
    {
        putanjaDizajnerSlika: "assets/images/radnik6.jpg",
        altDizajnerSlika: "worker3",
        imeDizajner: "Tammy Abraham"
    }
];

let ispisDizajnera = "";
let divZaDizajnere = document.getElementById("blockDesigners");
nizDizajnera.forEach(function(diz){
    ispisDizajnera +=`<div class="col-lg-4 col-md-12 d-flex justify-content-center mb-5">
    <div class="card w-75">
            <img src="${diz.putanjaDizajnerSlika}" class="card-img-top" alt="${diz.altDizajnerSlika}">
        <div class="card-body">                          
            <h5 class="card-title orangeTextColor">${diz.imeDizajner}</h5>
        </div>
    </div>
</div>`
});
divZaDizajnere.innerHTML = ispisDizajnera;
}

//JQUERY
$(document).ready(function(){
    //fullpage plugin
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: false,
        anchors: ["home", "intro", "projects","crew","news","auth","footer"],
        menu: ".menu",
        responsiveHeight: 1400,

    });

    $("#bars").click(function(){
        $(".menu--off").css('display', 'block');
    })
    $("#leftArrow").click(function(){
        $(".menu--off").css('display', 'none');
    })
    $("#nav li").click(function(){
        $(".menu--off").css('display', 'none');
    })

    //dodavanje boje texta na p tagove u about-u
    $("#specializationBlok p").addClass("orangeTextColor");

    //button Prikazi vise za about
    $('#showMoreTextAbout').css("display", "none");
    $('#btnPrikaziVise').click(function (e) {
        e.preventDefault();
        if ($('#showMoreTextAbout').is(':visible')) {
            $('#showMoreTextAbout').slideUp();
            $(this).val('Show More');
        } else {
            $('#showMoreTextAbout').slideDown();
            $(this).val('Show Less');
        }
    });

    //button Prikazi vise za autora
    $('#showMoreAuthor').css("display", "none");
    $('#btnPrikaziViseAutor').click(function (e) {
        e.preventDefault();
        if ($('#showMoreAuthor').is(':visible')) {
            $('#showMoreAuthor').slideUp();
            $(this).val('Show More');
        } else {
            $('#showMoreAuthor').slideDown();
            $(this).val('Show Less');
        }
    });

});

//SLIDER
let i = 0;
let nizSlika = ["sliderSlika1", "sliderSlika2", "sliderSlika3"];

function imageSlider(){
    document.getElementById("slider").style.backgroundImage = "url('assets/images/"+nizSlika[i]+".jpg')";

    if(i < nizSlika.length-1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("imageSlider()", 4000);
}

//REGULARNI IZRAZI

document.getElementById("submitForme").addEventListener("click",function(){
    //dohvatanje vrednosti iz forme
    let ime =   document.getElementById("firstName").value.trim();
    let prezime = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let confirmEmail = document.getElementById("emailConfirm").value.trim();
    let godine = document.getElementById("godina").value;
    let meseci = document.getElementById("mesec").value;
    let dani = document.getElementById("dan").value;
    let pol = document.getElementsByName("Pol");

    //dohvatanje divova za erore
    let imeGreska = document.getElementById("firstNameError");
    let prezimeGreska = document.getElementById("lastNameError");
    let emailGreska = document.getElementById("emailError");
    let confirmEmailGreska = document.getElementById("emailConfirmError");
    let godineGreska = document.getElementById("godineError");
    let meseciGreska = document.getElementById("meseciError");
    let daniGreska = document.getElementById("daniError");
    let polGreska = document.getElementById("radioButtonError");

    //regex

    let regexIme = /^[A-Z][a-z]{2,15}$/;
    let regexPrezime = /^[A-Z][a-z]{2,15}$/;
    let regexEmail = /^[a-z]+[\.\-\_\!a-z\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;

    //PROVERA
    let brojGresaka = 0;
    //ime
    if(ime==""){
        imeGreska.innerHTML = "This field is required!";
        document.getElementById("firstName").style.borderBottom = "3px solid red";
        brojGresaka++;
    }
    else if(!regexIme.test(ime)){
        imeGreska.innerHTML = "Enter valid name!";
        document.getElementById("firstName").style.borderBottom = "3px solid red";
        brojGresaka++;
    }else{
        imeGreska.innerHTML = "";
        document.getElementById("firstName").style.borderBottom = "3px solid green";
    }

    //prezime
    if(prezime==""){
        prezimeGreska.innerHTML = "This field is required!";
        document.getElementById("lastName").style.borderBottom = "3px solid red";
        brojGresaka++;
    }
    else if(!regexPrezime.test(prezime)){
        prezimeGreska.innerHTML = "Enter valid lastname!";
        document.getElementById("lastName").style.borderBottom = "3px solid red";
        brojGresaka++;
    }else{
        prezimeGreska.innerHTML = "";
        document.getElementById("lastName").style.borderBottom = "3px solid green";
    }

    //email
    if(email==""){
        emailGreska.innerHTML = "This field is required!";
        document.getElementById("email").style.borderBottom = "3px solid red";
        brojGresaka++;
    }
    else if(!regexEmail.test(email)){
        emailGreska.innerHTML = "Enter valid e-mail!";
        document.getElementById("email").style.borderBottom = "3px solid red";
        brojGresaka++;
    }else{
        emailGreska.innerHTML = "";
        document.getElementById("email").style.borderBottom = "3px solid green";
    }

    //confirmEmail
    if(confirmEmail==""){
        confirmEmailGreska.innerHTML = "This field is required!";
        document.getElementById("emailConfirm").style.borderBottom = "3px solid red";
        brojGresaka++;
    }
    else if(email!=confirmEmail){
        confirmEmailGreska.innerHTML = "Please confirm with correct e-mail!";
        document.getElementById("emailConfirm").style.borderBottom = "3px solid red";
        brojGresaka++;
    }
    else{
        confirmEmailGreska.innerHTML = "";
        document.getElementById("emailConfirm").style.borderBottom = "3px solid green";
    }

    //godine
    if(godine == "Year") {
        godineGreska.classList.add("showError");
        brojGresaka++;
    } else {
        godineGreska.classList.remove("showError");
        console.log("Izabrana godina");
    }
    //meseci
    if(meseci == "Month") {
        meseciGreska.classList.add("showError");
        brojGresaka++;
    } else {
        meseciGreska.classList.remove("showError");
        console.log("Izabran mesec");
    }

    //dani
    if(dani == "Day") {
        daniGreska.classList.add("showError");
        brojGresaka++;
    } else {
        daniGreska.classList.remove("showError");
        console.log("Izabran dan");
    }

    //POL
    let isValidPol = false;

    for(let i=0; i< pol.length; i++){
        if(pol[i].checked){
            isValidPol = true;
            break;
        }
    }

    if(!isValidPol){
        polGreska.innerHTML = "Please choose gender!";
        brojGresaka++;
    }
    else {
        polGreska.innerHTML = "";
        console.log("Izabran pol");
    }

    if(brojGresaka == 0){
        document.querySelector("#uspesnaPrijava").innerHTML = "You have subscribed!";
    }
    else document.querySelector("#uspesnaPrijava").innerHTML = "";

})

function showArchitects(){
    document.getElementById("blockArchitects").style.display="flex";
    document.getElementById("blockDesigners").style.display="none";
    document.getElementById("btnArchitects").style.backgroundColor="rgba(255,133,89,1)";
    document.getElementById("btnDesigners").style.backgroundColor="rgba(51,51,51,1)";
}

function showDesigners(){
    document.getElementById("blockArchitects").style.display="none";
    document.getElementById("blockDesigners").style.display="flex";
    document.getElementById("btnArchitects").style.backgroundColor="rgba(51,51,51,1)";
    document.getElementById("btnDesigners").style.backgroundColor="rgba(255,133,89,1)";
}

