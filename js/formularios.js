$(function()
{
    $('body').on('submit','form',function(){
        var form = $(this);
        $.ajax({
            beforeSend:function(){
                $('.overlay-loading').fadeIn();
            },
            url:`${include_path}ajax/formularios.php`,
            method:'post',
            dataType: 'json',
            data:form.serialize()
        }).done(function(data){
            if(data.sucesso){
                //Safe do Safe
                $('.overlay-loading').fadeOut();
                $('.sucesso').fadeIn();
                setTimeout(function()
                {
                    $('.sucesso').fadeOut();
                },3000)
            }
            else
            {
                //Deu merda
                $('.overlay-loading').fadeOut();
                $('.erro').fadeIn();
                setTimeout(function()
                {
                    $('.erro').fadeOut();
                },3000)
            }
        });
        return false;
    })
})