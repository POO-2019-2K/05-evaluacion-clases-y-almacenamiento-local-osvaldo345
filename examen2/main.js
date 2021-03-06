import Inventario from "./Inventario.js";
import Mercancia from "./Mercancia.js";

class Main {
    constructor() {
        let inventario = new Inventario(
            document.querySelector("#agenda")
        );

            document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");

            if (form.checkValidity() === true) {
                let num = document.querySelector("#num").value;
                let name = document.querySelector("#name").value;
                let cantidad = document.querySelector("#cantidad").value;
                let costo = document.querySelector("#costo").value;

                let objMercancia = {
                    num: num,
                    name: name,
                    cantidad: cantidad,
                    costo: costo
                };

                let mercancia = new Mercancia(objMercancia);

                inventario.addMercancia(mercancia);
            }

            form.classList.add("was-validated");
        });
    }
}

let m = new Main();