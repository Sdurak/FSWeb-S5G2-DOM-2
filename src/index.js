import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın

document.querySelector("h1").addEventListener("click",function(e){
    alert("Bana tıkladın!")
    });

// Kodlar buraya gelecek!

// document.querySelector("nav").addEventListener("mouseover", (event) => {
//     alert ("Anasayfa koçum")
//     });


document.querySelectorAll("nav a").forEach((item) =>{
    item.addEventListener("mouseout",(item) =>{
    item.target.style.color = "#ff1493";
    alert(item.target.innerText + " koçum");
    });
});