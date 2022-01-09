// programul pentru efectuarea operatiilor aritmetice de baza cu switch

// utilizatorul introduce primul numar, operatia matematica dorita si cel de al doilea numar
const primulNumar = parseFloat(prompt('Introduceti primul numar: '));

const operator = prompt('Introduceti operatia matematica dorita ( +, -, * sau / ): ');

const alDoileaNumar = parseFloat(prompt('Introduceti cel de al doilea numar: '));

let rezultat;

switch (operator) {
    case '+':
        rezultat = primulNumar + alDoileaNumar;
        alert(`${primulNumar} ${operator} ${alDoileaNumar} = ${rezultat}`);
        break;
    case '-':
        rezultat = primulNumar - alDoileaNumar;
        alert(`${primulNumar} ${operator} ${alDoileaNumar} = ${rezultat}`);
        break;
    case '*':
        rezultat = primulNumar * alDoileaNumar;
        alert(`${primulNumar} ${operator} ${alDoileaNumar} = ${rezultat}`);
        break;
    case '/':
        rezultat = primulNumar / alDoileaNumar;
        alert(`${primulNumar} ${operator} ${alDoileaNumar} = ${rezultat}`);
        break;
    default:
        alert('Operatie matematica nepermisa');
        break;
}

