export default class Mercancia {
    constructor(mercancia) {
        this._num = mercancia.num;
        this._name = mercancia.name;
        this._cantidad = mercancia.cantidad;
        this._costo = mercancia.costo;
    }

    get num() {
        return this._num;
    }

    get name() {
        return this._name;
    }

    get cantidad() {
        return this._cantidad;
    }

    get costo() {
        return this._costo;
    }
}