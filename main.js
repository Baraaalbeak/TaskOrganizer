document.addEventListener("DOMContentLoaded",function(){
    const takeValue = document.querySelector("#newTask");
    document.querySelector("#submit").onclick=function(){
        if (takeValue.value!=""){
            const nTask = takeValue.value;
            const newPoint = document.createElement("li");
            newPoint.innerHTML = nTask;
            document.querySelector("#tasks").append(newPoint);
            takeValue.value="";
        }
        else{
            alert("Enter the task then hit Add!")
        }
        return false;
    }
});