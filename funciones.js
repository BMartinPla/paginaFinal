let age = prompt ('Ingresa tu edad para continuar');

if (age < 18) {
    alert("¡Entras bajo tu propio riesgo!")
} else if (age > 18) {
    alert("¡Bienvenido a GameZone!")
} else {
    alert("¡Bienvenido a GameZone!")
}

function window_mouseout( obj, evt, fn ) {

    if ( obj.addEventListener ) {

        obj.addEventListener( evt, fn, false );
    }
    else if ( obj.attachEvent ) {

        obj.attachEvent( 'on' + evt, fn );
    }
}

window_mouseout( document, 'mouseout', event => {

    event = event ? event : window.event;

    var from         = event.relatedTarget || event.toElement;
    if ((!from || from.nodeName === 'HTML') ) {
        alert( 'Estas saliendo de GameZone' );
    }
} );
