var students = ["Maria", "Ana", "Alice", "Bia"];
var note1 = [8.3, 4.2, 6.2, 6.3];
var note2 = [7.8, 6.3, 5.1, 8.2];

function avarage(n1, n2) {
    return (n1 + n2) / 2
}

function result(avarage) {

    if (avarage > 6) {
        return "Approved";
    }else{
        return "Failed";
    }
}

for (var index in students) {

    var n1 = note1[index];
    var n2 = note2[index];
    var a = avarage(n1, n2);

    console.log(students[index] + 
       ": " +
       n1 +
       " | " +
       n2 +
       " = " +
       a +
       " " +
       result(a));
    }