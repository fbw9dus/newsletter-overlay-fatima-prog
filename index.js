

/*var div =document.createElement("div")


var form=document.createElement("form")
var span =document.createElement("span")
span.textContent="X"
var h2= document.createElement("h2")
h2.textContent="Newsletter Bestellen"
var input=document.createAttribute("input")
input.type="email"
var submit=document.createAttribute("submit")
submit.type="submit"

function newsletter(){
    form.appendChild(span)
    form.appendChild(h2)
    form.appendChild(input)
    form.appendChild(submit)
    div.appendChild(form)
    document.body.appendChild(div)


}
document.getElementById("newe").addEventListener("click",newsletter)
*/
document.getElementById("newe").addEventListener("click",newsletter)

var div = document.getElementById("container")
function newsletter(){

   
div.style.visibility="visible"
}

var span = document.querySelector("span")
span.addEventListener("click",schließen)
function schließen(){
    
    div.style.visibility="hidden"

}

var input =document.getElementById("submit")
var input = document.getElementById("cancell")
var form = document.querySelector("form")
input.addEventListener("click",mybestellung)

function mybestellung(){

    document.getElementById("texts").innerHTML = "Vielen Dank";

     document.getElementById("submit").remove() ;
     document.getElementById("cancell").remove()
     var button =document.createElement("button")
     button.textContent="Schließen"
     form.appendChild(button)
     button.addEventListener("click",schließen)
     
    
    }
    form.addEventListener("click",function(event){
        event.stopPropagation()
    })
    div.addEventListener("click",schließen)




