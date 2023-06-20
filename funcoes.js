function OperacoesBasicas(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    operador = document.querySelector("input[name=opt]:checked").value;

    resultado = eval(parseInt(num1) + operador + parseInt(num2));

    document.getElementById("resultado").innerHTML = resultado;
}

function Potencia(){
    num = document.getElementById("num").value;
    expoente = document.getElementById("expoente").value;

    if(expoente < 0){
        resultado = ("<h3>O valor do expoente não pode ser menor que 0</h3>");
    }
    else{
    resultado = eval(parseInt(Math.pow(num, expoente)));
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function Raiz(){
    num = document.getElementById("num").value;

    resultado = Math.sqrt(parseInt(num),);

    document.getElementById("resultado").innerHTML = resultado;
}

function Area(){
    b = document.getElementById("base").value
    h = document.getElementById("altura").value

    resultado = eval((b * h)/2);

    document.getElementById("resultado").innerHTML = resultado + "cm²";
}

function Bhaskara(){
    a = document.getElementById("a").value
    b = document.getElementById("b").value
    c = document.getElementById("c").value

    delta = Math.pow(b, 2) - 4 * a * c;
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);

    if(a == 0){
        resultado = ("<h3>O valor do primeiro coeficiente (a) pode ser diferente de 0 </h3>");
    }
    else if(delta < 0){
        resultado = ("<h3>A equação não possui raizes</h3>")
    }
    else{
        resultado = "S = {" + x1 + ", " + x2 + "}";
    }

    document.getElementById("resultado").innerHTML = resultado
}