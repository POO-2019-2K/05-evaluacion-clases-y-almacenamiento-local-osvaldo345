import Mercancia from "./Mercancia.js";

export default class Inventario {
    constructor(tableAgenda) {
        this._tableAgenda = tableAgenda;
        this.mercancias = [];

        this._initTables();
    }

    _initTables() {
        //localStorage.removeItem("mercancia");
        let lsMercancia = JSON.parse(localStorage.getItem("mercancia"));

        if (lsMercancia === null) {
            return;
        }
        lsMercancia.forEach((e, index) => {
            this._addToTable(new Mercancia(e));
        });
    }

    _addToTable(mercancia) {
        let row = this._tableAgenda.insertRow(-1);

        let cellNum = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellCantidad = row.insertCell(2);
        let cellCosto = row.insertCell(3);

        cellNum.innerHTML = mercancia.num;
        cellName.innerHTML = mercancia.name;
        cellCantidad.innerHTML = mercancia.cantidad;
        cellCosto.innerHTML = mercancia.costo;


        let objMercancia = {
            num: mercancia.num,
            name: mercancia.name,
            cantidad: mercancia.cantidad,
            costo: mercancia.costo
        };

        this.mercancias.push(objMercancia);
    }

    _findMercancia(name) {
        let foundAt = -1;

        this.mercancias.forEach((e, index) => {
            if (e.name === name) {
                foundAt = index;
                return;
            }
        });
        return foundAt;
    }

    addMercancia(mercancia) {
        let found = this._findMercancia(mercancia.name);

        if (found >= 0) {
            Swal.fire({
                type: "error",
                title: "Error",
                text: "el usario ya esta registrado"
            });
            return;
        }

        this._addToTable(mercancia);
        localStorage.setItem("mercancia", JSON.stringify(this.mercancias));
        console.log(this.mercancias);
    }
}