var output = document.getElementById('output');

function test(){
    alert("working");
    return false;
}
window.onload = jData();

function addData(fdata){
    var xhttp = new XMLHttpRequest();    
    var formData = new FormData(fdata);
    
    xhttp.onload = function(){
        console.log(xhttp.responseText);
        jData();
    }
    
    // xhttp.setRequestHeader("content-type:application/json");
    xhttp.open(fdata.method,fdata.action,true);
    xhttp.send(formData);
    // console.log(fdata);
    // console.log(formData);
    return false;   
}


function jData(){
    output.innerHTML = "Loading ...  ..   .";
    
    ajaxhttp = new XMLHttpRequest();
    var url = "json.php";
    ajaxhttp.open("GET",url,true);
    ajaxhttp.setRequestHeader("Content-Type","application/json");
    ajaxhttp.onreadystatechange = function(){
        output.innerHTML = "";
        if((ajaxhttp.status == 200) && (ajaxhttp.readyState == 4)){
            // json conversion
            var jcontent = JSON.parse(ajaxhttp.responseText);
            for(var jObj in jcontent){
                output.innerHTML += "<tr>"+
                "<td>"+jcontent[jObj].sid+"</td>"+
                "<td>"+jcontent[jObj].first+"</td>"+
                "<td>"+jcontent[jObj].last+"</td>"+
                "<td>"+jcontent[jObj].cgpa+"</td>"+
                "<td>"+jcontent[jObj].batch+"</td>"+
                "</tr>"; 
            }
        }
    }
    ajaxhttp.send();
    console.log(ajaxhttp);
}