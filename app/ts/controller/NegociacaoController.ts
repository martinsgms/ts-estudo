class NegociacaoController {
    
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _list = new NegociacaoList();
    private _view = new NegociacaoView('#negociacaoView');
    private _message = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._view.update(this._list);
    }

    adicionar(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.value), 
            parseFloat(this._inputValor.value)
        );

        this._list.add(negociacao);
        this._view.update(this._list);
        this._message.update('Negociação adicionada com sucesso!');
    }
}