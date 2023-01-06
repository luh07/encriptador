function limpiarInput(){
                document.getElementById("input-encriptador").value = "";
            }

            function ocultar(){
                document.getElementById("textoencrip").style.display = "none";
                document.getElementById("boton-copiar").style.display = "none";
            }

            document.querySelector("#input-encriptador");
            var inputEncriptar = document.querySelector("#input-encriptador");
            var textoEncriptado = document.querySelector("#textoencrip");
            var botonEncriptar = document.querySelector("#boton-encrip");
            var botonDesencriptar = document.querySelector("#boton-desencriptar");
            var botonCopiar = document.querySelector("#boton-copiar");

            function encriptar(){ 
                var minisculas = /^[a-zñ\s]+$/g;
                var mensaje = inputEncriptar.value;
                if(mensaje == ""){
                    alert("Ingresa el mensaje a encriptar");
                }
                else if(mensaje.match(minisculas) == null){
                    alert("Solo se admiten caracteres en miniscula y sin acentos");
                    limpiarInput();
                    inputEncriptar.focus();
                }
                else{
                    var mensaje = inputEncriptar.value;
                    var mensajeEncriptado = mensaje

                    .replaceAll("e","enter")
                    .replaceAll("i","imes")
                    .replaceAll("o","ober")
                    .replaceAll("a","ai")
                    .replaceAll("u","ufat");
                    textoEncriptado.value = mensajeEncriptado;

                    document.getElementById("imagen-muneco").style.display = "none";
                    document.getElementById("aviso2").style.display = "none";
                    document.getElementById("aviso3").style.display = "none";
                    document.getElementById("textoencrip").style.display = "show";
                    document.getElementById("textoencrip").style.display = "inherit";
                    document.getElementById("boton-copiar").style.display = "show";
                    document.getElementById("boton-copiar").style.display = "inherit";
                    document.getElementById("textoencrip").innerHTML = encriptarTexto;
                     
                }
            }

            

            function desencriptar(){

                var mensaje = inputEncriptar.value;
                var mensajeEncriptado = mensaje

                .replaceAll("enter","e")
                .replaceAll("imes","i")
                .replaceAll("ober","o")
                .replaceAll("ai","a")
                .replaceAll("ufat","u");
                textoEncriptado.value = mensajeEncriptado;
            }

            botonEncriptar.onclick = encriptar;
            botonDesencriptar.onclick = desencriptar;
            botonCopiar.onclick = copiar;

            ocultar();

            function copiar(){
                var content = document.getElementById('textoencrip');
                content.select();
                var successful = document.execCommand('copy');
                alert("Mensaje encriptado copiado");     
            }