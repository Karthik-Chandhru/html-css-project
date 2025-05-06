//selecting popup box popup overlay button
var popupoverlay =document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-btn")
var bookauthorinput=document.querySelector(".book-container")

addpopupbutton.addEventListener("click",function(event){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelpopup=document.getElementById("cancel-book")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

//selecting container,add-book,title-input,Author-input,Description-input
 var container=document.querySelector(".container")
 var titleinput=document.getElementById("title-input")
 var authorinput=document.getElementById("Author-input")
 var descriptive=document.getElementById("Description-input")
 var addbook=document.getElementById("add-book")

 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${titleinput.value}</h2>
    <h5>${authorinput.value}</h5>
    <p>${descriptive.value}</p>
    <button onclick="deleteitem(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
 })

  function deleteitem(event){
    event.target.parentElement.remove()
  }

