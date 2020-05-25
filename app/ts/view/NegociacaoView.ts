class NegociacaoView extends View<NegociacaoList> {
    
    template(model: NegociacaoList): string {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
            ${
                model.toArray().map(e => 
                    `
                        <tr>
                            <td>${DateHelper.dateToText(e.data)}</td>
                            <td>${e.quantidade}</td>
                            <td>${e.valor}</td>
                            <td>${e.volume}</td>
                        </tr>
                    `
                ).join('')
            }
        </tbody>
        
        <tfoot>
        </tfoot>
        </table>
        `;
    }
}