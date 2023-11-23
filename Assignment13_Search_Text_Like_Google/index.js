var searchValues=[
   "How to create a website" ,
   "What is mean by website",
   "What is HTML ans CSS",
   "",
   "How to maintain attendence without going to college",
   "Happy Diwali",
   "LeadSoft Placement Acadmy"
]
 var searchTxt=document.querySelector("#searchTxt")
 var list=document.querySelector("#list")
 
 searchTxt.addEventListener("keydown",function(){

    var result=[]
    if(searchTxt.value){

        result=searchValues.filter(function(keyword){
            return keyword.toLowerCase().includes(searchTxt.value.toLowerCase())
        })
    }
    console.log(result)
    var content=""
    result.forEach(function(element){
        var temp="<li>"+element+"</li>"
        content=content+temp;
    })
    list.innerHTML=content
 })