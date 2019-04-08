

$(function() {
    $('form').submit(function() {
        var form = $(this);
        return check_input(form);
    });
});

$(function() {
    $('input[type="text"]').click(function() {
        unblock_input();
    });  
});

$(function() {
    $('#send_message').on('click', function() {
        var form = $(this).parent().parent().parent();
        var go = validate_form(form);
        if (go===true) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: 'name='+form.find('.name').val()+'&phone='+form.find('.phone').val()+'&ml='+form.find('.sms').text()+'&calc='+$('#for_message').text()+'&fl='+form.attr('id'),
                success: function(){
                    location="http://qt-remont.ru/thank-you.html";
                }
            });
        }
    });
    
    $('#send-recall').on('click', function() {
        var form = $(this).parent().parent().parent();
        var go = validate_form(form);
        if (go===true) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: 'name='+form.find('.name').val()+'&phone='+form.find('.phone').val()+'&rec_time='+form.find('.time').val()+'&fl='+form.attr('id'),
                success: function(){
                location="http://qt-remont.ru/thank-you.html";
                }
            });
        }
    });
    
});

       

jQuery(function($){
   $.mask.definitions['H'] = "[0-2]";
   $.mask.definitions['h'] = "[0-9]";
   $.mask.definitions['M'] = "[0-5]";
   $(".phone").mask("+7 (999) 999-99-99");
   $(".time").mask("Hh:Mh");
});



$(function() {
    $('#to-top').click(function(){
        jQuery.scrollTo('0', 800);    
    });
});

 
 

