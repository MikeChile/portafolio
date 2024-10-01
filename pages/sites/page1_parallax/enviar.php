<?php
	$destino= "soporte@mercurypl.cl";
	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $genero = $_POST["genero"];
	$mensaje = $_POST["mensaje"];
    
	$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nGenero: " . $genero . "\nMensaje: " . $mensaje;
	mail($destino, "contacto", $contenido);
	if(mail){
	    echo("<script language='JavaScript' type='text/JavaScript'>alert('Su mensaje ha sido enviado satisfactoriamente');open('contacto.html','_parent');</script>");
	}else{
	    echo("<script language='JavaScript' type='text/JavaScript'>alert('Ha ocurrido un error y no se envio su mensaje.int&eacute;ntelo m&aacute;s tarde o escr&iacute;banos al mail de contacto.');</script>");
	}
	
	header ("Location:contacto.html");
?>