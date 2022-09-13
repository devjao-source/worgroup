var var01 = document.getElementById("wkmwkm");
var var02 = document.getElementById("osdosd");
var var03 = document.getElementById("sobrerodas");
var container01 = document.getElementById('wkm-obs');
var container02 = document.getElementById('osd-obs');
var container03 = document.getElementById('sobrerodas-obs');



var01.addEventListener("click", function () {
    if(container01.style.display === "block"){
        container01.style.display = "none";
        if(container02.style.display = "block"){
            container02.style.display = "none";
        }
        if(container03.style.display = "block"){
            container03.style.display = "none";
        }
        document.getElementById("trocarimg3").src="https://cdn.discordapp.com/attachments/558277606093357071/1018891750393262161/Design_sem_nome_22.png";



    }else{
        container01.style.display = "block";
        container02.style.display = "none";
        container03.style.display = "none";
        document.getElementById("trocarimg").src="https://cdn.discordapp.com/attachments/558277606093357071/1018892949255360572/Design_sem_nome_25.png";
        document.getElementById("trocarimg3").src="https://cdn.discordapp.com/attachments/558277606093357071/1018916207614775358/Design_sem_nome_27.png";
        document.getElementById("trocarimg2").src="https://cdn.discordapp.com/attachments/558277606093357071/1018892473734537216/Design_sem_nome_24.png";
    }
});

var02.addEventListener("click", function () {
    if(container02.style.display === "block"){
        container02.style.display = "none";
        if(container01.style.display = "block"){
            container01.style.display = "none";
        }
        if(container03.style.display = "block"){
            container03.style.display = "none";
        }
        document.getElementById("trocarimg").src="https://cdn.discordapp.com/attachments/558277606093357071/1018892949255360572/Design_sem_nome_25.png";

    }else{
        container02.style.display = "block";
        container01.style.display = "none";
        container03.style.display = "none";
        document.getElementById("trocarimg").src="https://cdn.discordapp.com/attachments/558277606093357071/1018895597786370119/OSDIGITALCOR.png";
        document.getElementById("trocarimg3").src="https://cdn.discordapp.com/attachments/558277606093357071/1018891750393262161/Design_sem_nome_22.png";
        document.getElementById("trocarimg2").src="https://cdn.discordapp.com/attachments/558277606093357071/1018892473734537216/Design_sem_nome_24.png";

    }
});

var03.addEventListener("click", function () {
    if(container03.style.display === "block"){
        container03.style.display = "none";

        if(container01.style.display = "block"){
            container01.style.display = "none";
        }
        if(container02.style.display = "block"){
            container02.style.display = "none";
        }
        document.getElementById("trocarimg2").src="https://cdn.discordapp.com/attachments/558277606093357071/1018892473734537216/Design_sem_nome_24.png";
        


    }else{
        container03.style.display = "block";
        container01.style.display = "none";
        container02.style.display = "none";
        document.getElementById("trocarimg").src="https://cdn.discordapp.com/attachments/558277606093357071/1018892949255360572/Design_sem_nome_25.png";
        document.getElementById("trocarimg3").src="https://cdn.discordapp.com/attachments/558277606093357071/1018891750393262161/Design_sem_nome_22.png";
        document.getElementById("trocarimg2").src="https://cdn.discordapp.com/attachments/558277606093357071/1018899641447755856/sobrerodasrodas.png";
    }
});


