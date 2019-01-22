(function($){
	
	$.confirm = function(params){
		
		if($('#confirmOverlay').length){
			// A confirm is already shown on the page:
			return false;
		}
		
		var buttonHTML = '';
		$.each(params.buttons,function(name,obj){
			
		    // Generating the markup for the buttons:

		    if (name == 'go') {
		        buttonHTML = '<img src="/Recursos/Gif/Cargando.gif" width="25px" height="25px" /> Realizando la solicitud...';
		    }
		    else{
		        buttonHTML += '<a href="#" class="button ' + obj['class'] + '">' + name + '<span></span></a>';
		    }
			
			if(!obj.action){
				obj.action = function(){};
			}
		});
		
		var markup = [
			'<div id="confirmOverlay">',
			'<div id="confirmBox">',
			'<label>',params.title,'</label>',params.message,'<hr/>',
			'<div id="confirmButtons">',
			buttonHTML,
			'</div></div></div>'
		].join('');
		
		$(markup).hide().appendTo('body').fadeIn();
		
		var buttons = $('#confirmBox .button'),
			i = 0;

		$.each(params.buttons,function(name,obj){
			buttons.eq(i++).click(function(){
				
				// Calling the action attribute when a
				// click occurs, and hiding the confirm.
				
				obj.action();
				$.confirm.hide();
				return false;
			});
		});
	}

	$.confirm.hide = function(){
		$('#confirmOverlay').fadeOut(function(){
			$(this).remove();
		});
	}
	
})(jQuery);

function SolicitarConfirmacion(titulo, pregunta)
{
    $.confirm({
        'title': titulo,
        'message': pregunta,
        'buttons': {
            '<i class="glyphicon glyphicon-arrow-left" style="font-size:10px"></i> Desistir': {
                'class': 'btn btn-default',
                'action': function () { }
            },
            'Continuar <i class="glyphicon glyphicon-arrow-right" style="font-size:10px"></i>': {
                'class': 'btn btn-primary',
                'action': function () { Continuar(); }
            }
        }
    });
}