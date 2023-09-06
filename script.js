let allContent = ['stonks', 'bike', 'mosh', 'photography', 'renders', 'heatPaint', 'loon', 'moodMap', 'sensenet']

for(let content of allContent){
    showHide(content)
}

$('#header').click(function(){
    $("#landing").show()
    for(let sId of allContent){ $("#"+sId).hide() }
})

function showHide(id){
    $('#'+id+'T').click(function(){
        if($('#'+id).css('display') == 'none'){
            $("#landing").hide()
            $("#"+id).show()
            for(let sId of allContent){ if(sId != id ){ $("#"+sId).hide() }}
        }
    })
    
    $('#'+id+'I').click(function(){
        if($('#'+id).css('display') == 'none'){
            $("#landing").hide()
            $("#"+id).show()
            for(let sId of allContent){ if(sId != id ){ $("#"+sId).hide() }}
        }
    })
}