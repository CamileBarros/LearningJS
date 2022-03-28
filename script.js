var alunos = ["Maria", "Ana", "Alice", "Bia"];
var nota1 = [8.3, 4.2, 6.2, 6.3];
var nota2 = [7.8, 6.3, 5.1, 8.0];

function media(n1, n2) {
    return (n1 + n2) / 2
}

function result(media) {

    if (media > 6) {
        return "Aprovada";
    }else{
        return "Reprovada";
    }
}

for (var index in alunos) {

    var n1 = nota1[index];
    var n2 = nota2[index];
    var m = media(n1, n2);

    console.log(alunos[index] + 
       ": " +
       n1 +
       " | " +
       n2 +
       " = " +
       m +
       " " +
       result(m));
    }