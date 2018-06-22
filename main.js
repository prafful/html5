var getname = document.getElementById("name")



addName = function(){
    var yourname = getname.value
    var currentCounter = localStorage.getItem("counter")
    console.log("name_"+currentCounter + ":" + yourname)
    localStorage.setItem("name_"+currentCounter ,yourname)
    ++currentCounter
    localStorage.setItem("counter",currentCounter)
    getname.value = ""
  
}


getName = function(){
    var item = localStorage.getItem("name")
    console.log(item)
}   

checkCounter = function(){
    //if(localStorage.getItem("counter") == )
    console.log("I will always be called when page loads")
     if(localStorage.getItem("counter") == null){
         localStorage.setItem("counter", 1)
     }
}


checkCounter()
