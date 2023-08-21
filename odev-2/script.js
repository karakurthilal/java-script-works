document.querySelector("body").style.backgroundColor="#F4E0B9";
let body =document.querySelector("body")
document.querySelector("div.header").classList.add("text-center")
document.querySelector("ul").style.backgroundColor='#A8A196';
let buton = document.querySelector(".button");
buton.style.backgroundColor='#FE0000';
buton.classList.add('mb-2')
/* Listeye eleman ekleme durumuna göre bildirim verecek fonksiyon */

buton.addEventListener("click",function (){
  let inputs = document.querySelector("input")
  if(inputs.value != ''){
    let ulDOM = document.querySelector("ul");
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `${inputs.value} `;
    liDOM.innerHTML += `<button type="button" class="close" aria-label="Close" name="close">
    <span aria-hidden="true">&times;</span>
    </button>`
    ulDOM.append(liDOM);
    $('.success').toast('show');
    inputs.value=''
  }else if(inputs.value == ''){
    $('.error').toast('show');
    inputs.value=''
  }
  /* Kapatma Butonlarını ekliyor */
  let closeButton = document.querySelectorAll(".close");
  closeButton.forEach(function(button){
    button.addEventListener('click',function(){
      var listItem = button.parentNode;
      listItem.parentNode.removeChild(listItem);
    });
  });
})
