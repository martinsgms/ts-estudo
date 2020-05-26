class NegociacaoController {
    
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _list = new NegociacaoList();
    private _view = new NegociacaoView('#negociacaoView');
    private _message = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._view.update(this._list);
    }

    adicionar(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.val()), 
            parseFloat(this._inputValor.val())
        );

        this._list.add(negociacao);
        this._view.update(this._list);
        this._message.update('Negociação adicionada com sucesso!');
    }
}