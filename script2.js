$("#output").text("Loading .. . .");
$(document).ready(function(){

    jData();
    $("#newForm").submit(function(e){
        
        fdata = $("#newForm");
        
        $.ajax({
            type: fdata.attr('method'),
            url:    fdata.attr('action'),
            data : fdata.serialize(),
            success : function(res){
                console.log(res);
                jData();
            }
        })
        
        e.preventDefault();
    })
    
    function jData(){
        var output=$("#output")
        output.empty();
        
        // output.html = "";
        $.ajax({
            type: "GET",
            url:    "json.php",
            success: function(dta){
                $.each(dta,function(index){
                    output.append("<tr>"+
                        "<td>"+dta[index].sid+"</td>"+
                        "<td>"+dta[index].first+"</td>"+
                        "<td>"+dta[index].last+"</td>"+
                        "<td>"+dta[index].cgpa+"</td>"+
                        "<td>"+dta[index].batch+"</td>"+
                    "</tr>");
                })
            }
        })
        
    }
    
});