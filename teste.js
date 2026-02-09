const { lazy } = require("react");

const string = "Para que la comunicación de tu fe sea eficaz, en el conocimiento de todo el bien que está en vosotros, por Cristo Jesús."

const getArrayOfString = (string) => {
    string = string.toLowerCase().replaceAll(/[,?¿]/g, "")
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/gu, "")

    const stringTratada = string.split(' ');

    return stringTratada
}

console.log(getArrayOfString(string))