//console.log("bağlantı kontrolü"),
//alert("bağlantı kontrol")

//1. aşama tüm koltukların kapsayıcısı olan container divi çekilir:
//2. aşama conteiner ın içerisinde ki tıkladığım her elemanı tespit etmek için "event" ekle:
//tamtespit ettiğinde target(genelde target in içinde olur) ve üst kapsayıcısı "offsetParent" nokta ile eklenir
//3. hedefe daha kısa bir değişken atayabiliriz
//4. hangi koltuğa click ekleyip eklemeyeceğiniz if else ile yapılır.
//tıklanılan koltuk için ücret hesaplamasını değiştir bunun için function tanımlanır



//1. aşama tüm koltukların kapsayıcısı olan container divi çekilir:
const container=document.querySelector(".container");
//console.log(container)


//2. aşama conteiner ın içerisinde ki tıkladığım her elemanı tespit etmek için "event" ekle:
container.addEventListener('click', (pointerEvent)=>{
    //console.log("cont tıklandı")
    console.log(pointerEvent.target.offsetParent)



//3. aşama tıklanılan koltukta selected classı varsa çıkartıcak yoksa ekleyecek. 
//hedefi daha kısa bir değişkene atayalım (daha kolay kod yazabilmek için);
const clickedSeat = pointerEvent.target.offsetParent


//4.hangi koltuğa eklemek isteyip istemediğiniz if else blogu ile yapılır
//tıklanılan koltugun classList leri içerisinde "contains("sira") içeriyorsa, 
//(içerme durumunu sorgulamak için contains yazılır.) karşılaştırma yapmak için
// && konulur. reserved içermiyorsa demek için tıklanılan koltugun basına ! (ünlem) konulur

//tıklanılan şey geri alınması için "toggle" girilir. tıklayınca seçildi tekrar tıklayınca seçimi geri aldı
if (
    clickedSeat.classList.contains("sira")&&
    !clickedSeat.classList.contains("reserved"))
    {
    clickedSeat.classList.toggle("selected")

    }

   calculateTotal()

});

 //5. koltuklar secildikce ücret hesapla baska yerde tanımlayıp addeventlistener parantezleri içinde cagırırız
//8. alttaki yazıda üstte ki sandalyenin seçilmesine göre hesap yapar
const seatCount= document.getElementById("count")
const totalAmount= document.getElementById("amount")
const movieList=document.querySelector("#movie")
const infoText=document.querySelector(".info-text")
const seats=document.querySelectorAll(".sira:not(.reserved)")
const saveToDatebase=(index)=>{
    localStorage.setItem("seatsİndex",JSON.stringify(index))
}

const getFromDatabase=()=>{
    const dbSelectedSeats=JSON.parse(localStorage.getItem("seatsİndex"))
    if(dbSelectedSeats!==null){
        seats.forEach((sira,index)=>{
            if(dbSelectedSeats.includes(index)){
                sira.classList.add("selected")
            }

        })
    }
}
getFromDatabase()

const createİndex=()=> {
    let allSeatsArray=[]
    seats.forEach((seat)=>{
            allSeatsArray.push(seat)
        } )

const allSelectedSeat=container.querySelectorAll(".sira.selected")
const allSelectedSeatsArray=[]
allSelectedSeat.forEach((selectedSeat)=>
{
    allSelectedSeatsArray.push(selectedSeat)
})
const selectedSeatsİndex=allSelectedSeatsArray.map((selectedSeat)=>{
    return allSeatsArray.indexOf(selectedSeat)
})
saveToDatebase(selectedSeatsİndex)

}


const calculateTotal=()=>{

//6.secilen koltuk sayısını toplama.  Sectiğimiz koltuklar container içinde olduğu için "container. query selectoe all"
//ile toplamakiçin bir araya getirebiliriz.birden fazla class sececeğimiz için "all" dedik. Daha sonra,
//7. bir dizinin içindeki toplam eleman sayısını "length" ile buluruz:

    
    const selectedSeat=container.querySelectorAll(".sira.selected").length

    

    if(selectedSeat){
        infoText.classList.add("open")
    }
    else{
        infoText.classList.remove("open")

    }
    count.innerText = selectedSeat;
    totalAmount.innerText=selectedSeat * movieList.value;

    console.log(count)
    createİndex()
}




