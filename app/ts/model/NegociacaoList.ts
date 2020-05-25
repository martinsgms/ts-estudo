class NegociacaoList {
    
    private _list: Array<Negociacao> = [];
    
    add(negociacao: Negociacao): void {
        this._list.push(negociacao);
    }

    toArray(): Array<Negociacao> {
        return [].concat(this._list);
    }
}