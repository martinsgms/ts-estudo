class NegociacaoList {
    
    private _list: Array<Negociacao> = [];
    
    add(negociacao: Negociacao) {
        this._list.push(negociacao);
    }

    toArray() {
        return this._list;
    }
}