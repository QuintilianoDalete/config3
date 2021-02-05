import React, { Component } from 'react';

class FundDetails extends Component {
  render() {
    const { fund, handleIsoDate, handlePercentNumber, handleStock, handleButtonClick } = this.props
    return (
      <>
        <table>
          <tbody>
          <tr key={fund.id}>
          <td>
            {
              (fund.detail.subCategoryDescription)
              ? (handleStock(fund.detail.subCategoryDescription))
              : (fund.detail.subCategoryDescription)
            }
          </td>
            <td>{fund.product}</td>
            <td>{handleIsoDate(fund.investment.requestDate)}</td>
            <td>{handlePercentNumber(fund.detail.valueQuota)}</td>
            <td>{`${(fund.profitability.day).toFixed(2)} %`}</td>
            <td>{`${(fund.profitability.year).toFixed(2)} %`}</td>
            <td>{`${(fund.profitability.twelveMonths).toFixed(2)} %`}</td>
            <td>{(fund.netEquity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td><button onClick={() => handleButtonClick(fund.id)} /></td>
          </tr>
          <p>Detalhe do fundo</p>
          <tr>
            <td>Início do Fundo: {handleIsoDate(fund.begin)}</td>
            <td>Data da Cota: {handleIsoDate(fund.investment.requestDate)}</td>
            <td>Taxa de Administração: {handlePercentNumber(fund.detail.administrationFee)}%</td>
          </tr>
          <tr>
            <td>Patrimônio Líquido: R$ {(fund.netEquity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td>Valor da Cota: {fund.detail.valueQuota}</td>
            <td>Taxa de Performance: {handlePercentNumber(fund.detail.performanceFee)}%</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Horário de Aplicação: {fund.timeLimit}</td>
          </tr>
          </tbody>
        </table> 
        <p>Arquivos</p>
        {(fund.detail.files).map((file) => {
          return (
            <div class="cell-4-phone cell-4-tablet cell-4-desktop ng-star-inserted">
              <app-funds-download _nghost-lim-c10="">
                <div _ngcontent-lim-c10="" class="funds-file">
                  <div _ngcontent-lim-c10="" class="funds-file__icon">
                      <img _ngcontent-lim-c10="" alt="file icon" src="https://www.btgpactual.com/assets/images/png/donwload-icon.png" />
                    </div>
                  <div _ngcontent-lim-c10="" class="funds-file__name">
                    <p _ngcontent-lim-c10="" class="text-t6 regular">{file.description}</p>
                  </div>
                </div>
              </app-funds-download>
            </div>
          )
        })}
      </>
    )
  }
}

export default FundDetails;
