function funcaoPessoa(){
    var area = document.getElementById('funcao');
    var nome = prompt('Digite seu nome');
    var sobrenome = prompt('Digite seu sobrenome');
    var idade = prompt('Digite sua idade');

    if(nome == null || nome == ''){
        alert('Preencha um nome!');
        window.location.href = "index.html";
    }

    if(sobrenome == null || sobrenome == ''){
        alert('Preencha um sobrenome!');
        window.location.href = "index.html";
    }
    
    if(idade == null || idade == ''){
        alert('Preencha uma idade!');
        window.location.href = "index.html";
    }else{
        mostraPessoa(nome, sobrenome, idade);
    }
}

function mostraPessoa(nome, sobrenome, idade){
    var area = document.getElementById('funcao');
    area.innerHTML = '</br><strong>Seu nome completo é: </strong>' + nome + ' ' + sobrenome + '<strong>, e possui: </strong>' + idade + ' anos.';
}

function switchCase(){
    var area = document.getElementById('switch');
    x = prompt('Digite um numero de 0 a 2: ');

    switch(x){
        case "0":
            alert("ZERO!");
            break;
        
        case "1":
            alert("UM!");
            break;

        case "2":
            //faz algo
            alert("DOIS!");
            break;
        default:
            alert("Número incorreto");
            break;
    }
}

var timer = setInterval(temporizador, 1000);
function temporizador(){
    //document.write("</br> Teste...");
}
//setTimeout(temporizador, 3000); ---- Executa algo de tanto em tantos segundos
//função, tempo em ms ---- -timer necessita de uma variável responsável
function pararTemporizador(){
    clearInterval(timer);
}

//sessionStorage funciona igual ao localStorage, com a diferença que no local fica salvo, na sessão não fica salvo
function loginCookie(){
    //verifica se existe login guardado em cookie
    //existe
    if(localStorage.getItem("login") != null && localStorage.getItem("senha") != null){
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");
        alert('Existe registro de credencial!');
        var loginDigitada = prompt('Digite seu login');
        var senhaDigitada = prompt('Digite sua senha');
        if(loginDigitada.match(login) && senhaDigitada.match(senha)){
            alert('Login realizado com sucesso!');
            window.location.href = "index.html";
        }else{
            alert('Login ou senha incorretos...');
            window.location.href = "index.html";
        }
    }
    //não existe
    else{
        alert('Não há registro de credencial');
        var login = prompt('Digite um novo login');
        var senha = prompt('Digite uma nova senha');
        if(login == "" || senha == ""){
            alert('Não pode haver dados em branco');
            window.location.href = "index.html";
        }
        else{
            localStorage.setItem("login", login);
            localStorage.setItem("senha", senha);
            alert('Nova credencial salva!');
            window.location.href = "index.html";
        }
    }
}
function limparCookie(){
    localStorage.removeItem("login");
    localStorage.removeItem("senha");
    alert('Não há mais registro de credencial!');
}

