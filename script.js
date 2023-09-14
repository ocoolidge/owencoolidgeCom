let allContent = ['stonks', 'bike', 'mosh', 'photography', 'renders', 'heatPaint', 'loon', 'moodMap', 'sensenet', 'mycocene', 'multiplexer']
let allDescriptions = []

for(let content of allContent){
    showHide(content)
    hover(content)
}

$('#header').click(function(){
    $("#landing").show()
    for(let sId of allContent){ $("#"+sId).hide() }
})

function hover(id){
    $('#'+id+'T').hover(function(){
        $('#'+id+'I').addClass( "hoverShadow" )
        $('#'+id+'T').addClass( "hoverForText" )
    }, function(){
        $('#'+id+'I').removeClass( "hoverShadow" )
        $('#'+id+'T').removeClass( "hoverForText" )
    })
    $('#'+id+'I').hover(function(){
        $('#'+id+'I').addClass( "hoverShadow" )
        $('#'+id+'T').addClass( "hoverForText" )
    }, function(){
        $('#'+id+'I').removeClass( "hoverShadow" )
        $('#'+id+'T').removeClass( "hoverForText" )
    })
}

function showHide(id){
    $('#'+id+'T').click(function(){
        window.scrollTo(0, 0)
        if($('#'+id).css('display') == 'none'){
            $("#landing").hide()
            $("#"+id).show()
            for(let sId of allContent){ if(sId != id ){ $("#"+sId).hide() }}
        }
    })
    
    $('#'+id+'I').click(function(){
        window.scrollTo(0, 0)
        if($('#'+id).css('display') == 'none'){
            $("#landing").hide()
            $("#"+id).show()
            for(let sId of allContent){ if(sId != id ){ $("#"+sId).hide() }}
        }
    })
}