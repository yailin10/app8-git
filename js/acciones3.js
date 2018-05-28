// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){ //escuchador de eventos
		$('#izquierda').on("swipeleft",function(){ //deslizar a la izquiera
			navigator.notification.alert("deslizó hacia la izquierda",function(){"aplicacion 7", "OK"}); //aparece mensaje alert
		}); //cierraswipe inquierdo
		$('#Derecha').on("swiperight",function(){ //deslizar la derecha
			navigator.notification.confirm("¿Que quieres hacer?",function(op){ //aparece mensaje para confirmar
				switch(op) //variable op para las acciones
				{
					case 1:
					navigator.notification.beep(1); //suena el dispositivo
					break;
					
					case 2:
					navigator.notification.vibrate(3000); //vibra el dispositivo
					break;
					
				}
			},"aplicacion7","beepear,vibrar,cancelar");
			});
		},false);
});
