 var config = {
     novostr: 0, 			// Новостройки
     vtorich: 500, 			// Вторичка
     otop: 800,	 			// монтаж отопления и водоснабжения
     silav: 800, 			// монтаж силовых и слаботочных сетей
     pereg: 500, 			// возведение перегородок
     // пол
     pol_viravn: 500,		// выравнивание
     pol_linol: 150,		// линолеум
     pol_lamin: 300,		// ламинат
     pol_plitka: 500,		// плитка
     pol_parket: 400,		// паркетная доска
     pol_massiv: 600,		// массив
     pol_shtuka: 800,		// штучный паркет
     pol_vteplii: 200,		// теплый пол

     // стены
     stena_viravn: 650,		// выравнивание
     stena_oboi: 750,		// обои
     stena_pokras: 1000,	// покраска
     stena_plitka: 2000,	// плитка
     stena_shtukat: 1500,	// декоративная штукатурка

     // потолок
     potol_viravn: 700,		// выравнивание +покраска
     potol_viravn_s: 300,	// выравнивание +декоративная штукатурка
     potol_viravn_o: 700,	// выравнивание +обои
     potol_podves_p: 900,	// подвесной потолок +покраска
     potol_podves_d: 1600,	// подвесной потолок +декоративная штукатурка
     potol_podver_o: 900,	// подвесной потолок +обои
     potol_natyazh: 700,	// натяжной потолок
     potol_reyka: 500,		// реечный потолок
 };  
 
 var sum, square, mid_price;

    	
function calc_square() {
    square = 0;
    $('.calc-block .square select').each(function() {
        square = square + parseFloat($(this).val());    
    });
    $("#sum_square").spincrement({
        to: square,
        thousandSeparator: "",
        duration: 600
    });
}  

function ident_work(work) {
    var work_price;
    switch (work) {
        case 'Отделка с нуля':
            work_price = config.novostr;
            break;
        case 'Вторичная отделка':
            work_price = config.vtorich;
            break;
        case 'Монтаж отопления и водоснабжения':
            work_price = config.otop;
            break;
        case 'Монтаж электросетей':
            work_price = config.silav;
            break;
        case 'Возведение перегородок':
            work_price = config.pereg;
            break;
        case 'Линолеум':
            work_price = config.pol_linol;
            break;
        case 'Ламинат':
            work_price = config.pol_lamin;
            break;           
        case 'Плитка':
            work_price = config.pol_plitka;
            break;  
        case 'Паркетная доска':
            work_price = config.pol_parket;
            break;
        case 'Массив':
            work_price = config.pol_massiv;
            break;
        case 'Штучный паркет':
            work_price = config.pol_shtuka;
            break;
        case 'Теплый пол':
            work_price = config.pol_vteplii;
            break;
        case 'Поклейка обоев на стены':
            work_price = config.stena_oboi;
            break;
        case 'Покраска стен':
            work_price = config.stena_pokras;
            break;
        case 'Плитка на стены':
            work_price = config.stena_plitka;
            break;
        case 'Декоративная штукатурка стен':
            work_price = config.stena_shtukat;
            break;
        case 'Выравнивание и покраска':
            work_price = config.potol_viravn;
            break;     
        case 'Выравнивание и декоративная штукатурка':
            work_price = config.potol_viravn_s;
            break;  
        case 'Выравнивание и поклейка обоев':
            work_price = config.potol_viravn_o;
            break; 
        case 'Подвесной потолок и покраска':
            work_price = config.potol_podves_p;
            break;                            
        case 'Подвесной потолок и декоративная штукатурка':
            work_price = config.potol_podves_d;
            break;
        case 'Подвесной потолок и поклейка обоев':
            work_price = config.potol_podver_o;
            break;                  
        case 'Натяжной потолок':
            work_price = config.potol_natyazh;
            break;     
        case 'Реечный потолок':
            work_price = config.potol_reyka;
            break;
        case 'Выравнивание стен':
            work_price = config.stena_viravn;
            break;             
        case 'Выравнивание пола':
            work_price = config.pol_viravn;
            break; 
        default:
        	work_price = 0;                                          
    }
    return work_price;
}

function resum(k) {
    sum = sum + square*k;
}

function house_type() {
	resum(ident_work($('#house_type .-selected').text()));
}

function calc_tasks() {
    $('#nesessary_works .-selected').each(function() {
        var name_of_work = $(this).attr('title');
        resum(ident_work(name_of_work));
    });
}

function calc_rooms() {
    $('#rooms .calc-block').each(function() {
        var room_square = $(this).find('.square select').val(), pol = $(this).find('.pol select').val(), steni = $(this).find('.steni select').val();
        var potolok = $(this).find('.potolok select').val(), viravn_pol, viravn_sten;
        if ($(this).find('.pol a').hasClass('-selected')) {
            viravn_pol = $(this).find('.pol a').attr('title');
        } else {
            viravn_pol = ''
        }
        
        if ($(this).find('.steni a').hasClass('-selected')) {
            viravn_sten = $(this).find('.steni a').attr('title');
        } else {
            viravn_sten = ''
        }
        
        sum = sum + room_square*(ident_work(pol)+ident_work(viravn_pol)+3*(ident_work(steni)+ident_work(viravn_sten))+ident_work(potolok));
    });
}
    	
function calculate_all() {
    sum = 0;
    house_type();
    calc_tasks();
    calc_rooms();
    $("#sum_price").spincrement({
        to: sum,
        thousandSeparator: " , ",
        duration: 1000
    });
    
    mid_price = sum/square;
    
    $("#mid_price").spincrement({
        to: mid_price,
        thousandSeparator: " , ",
        duration: 1200
    });
}

$(function() {
    
    $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top-150;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    
    calc_square();

    calculate_all();
    
    $('#house_type a').click(function() {
        var a = $(this);
        $('#house_type .-selected').removeClass('-selected');
        a.addClass('-selected');
        calculate_all();
    }); 
    
    $('body').on('change','.square select', function() {
        calc_square();
        calculate_all();
    });
    
    $('body').on('change','.calc-block select', function() {
        calculate_all()
    });
    
    
    $('.task_type').click(function() {
        if ($(this).hasClass('not-selected')) {
            $(this).removeClass('not-selected');
            $(this).addClass('-selected');
            calculate_all();
        } else if ($(this).hasClass('-selected')) {
            $(this).removeClass('-selected');
            $(this).addClass('not-selected');
            calculate_all();
        }
    });
    
    $('body').on('click', '.delete-block', function() {
        var elem = $(this).parent();
        elem.fadeOut(600);
        setTimeout(function() {
            elem.remove();
            calc_square(); 
            calculate_all();
        }, 600);
        
    });
    
    $('body').on('click','.calc-block a', function() {
        if ($(this).hasClass('not-selected')) {
            $(this).removeClass('not-selected');
            $(this).addClass('-selected');
            calculate_all();
        } else if ($(this).hasClass('-selected')) {
            $(this).removeClass('-selected');
            $(this).addClass('not-selected');
            calculate_all();
        }    
    });

    
    
    function add_room(name) {
        $('#new_block h3>span').text(name);
        $('#new_block').clone().addClass("calc-block").appendTo('#rooms');
        $('#new_block').fadeIn();
        $('#new_block input[type="number"]').val(10);
        $('#new_block').removeAttr('id');
    }
    
    $('body').on('click', '#add_pom', function(){
        var pom_type = $('#pom-type').val();
        $.fancybox.close();
        add_room(pom_type);
        calc_square();
        calculate_all();
    });
    
    $('#fix_calc_inform').click(function() {
        var fixion = $(this);
        if ($('#calc_inform').hasClass('fixed')) {
            fixion.css('box-shadow','0 0 4px #ccc');
            $('#calc_inform').removeClass('fixed');
            $('#calc_inform').addClass('unfixed');
        } else if ($('#calc_inform').hasClass('unfixed')) {
            fixion.css('box-shadow','inset 0 0 4px #ccc');
            $('#calc_inform').removeClass('unfixed');
            $('#calc_inform').addClass('fixed');
        }
    });
    
    $('#raschet').click(function() {
        var p = $('#for_message');
        p.empty();
        p.append($('#house_type a.-selected').text()+'\r\n\r\n');
        $('.task_type').each(function() {
            if ($(this).hasClass('-selected')) {
                p.append($(this).attr('title')+'\r\n');
            }
        });
        
        p.append('\r\n');
        
        $('.calc-block').each(function() {
            p.append($(this).find('h3').text()+'\r\n'+'Площадь: '+$(this).find('.square select').val()+';\r\n');
            p.append('Пол:   '+$(this).find('.pol select').val()+'  '+$(this).find('.pol .-selected').text()+'\r\n');
            p.append('Стены:   '+$(this).find('.steni select').val()+'  '+$(this).find('.steni .-selected').text()+'\r\n');
            p.append('Потолок:   '+$(this).find('.potolok select').val()+'\r\n\r\n');
        });
        
        p.append('Общая площадь '+square+';\r\n'+'Стоимость работ: '+sum+';');

        $('#clc').val(p.text());
    });
});

