import React, { Component } from 'react';

class FundDetails extends Component {
  render() {
    const { fund, handleIsoDate, handlePercentNumber, handleStock, handleButtonClick } = this.props
    return (
      <>
        <table class="table" onClick={() => handleButtonClick(fund.id)}>
          <tbody>
            <tr key={fund.id} class="tr">
            <td class="td-details">
              {
                (fund.detail.subCategoryDescription)
                ? (handleStock(fund.detail.subCategoryDescription))
                : (fund.detail.subCategoryDescription)
              }
            </td>
              <td class="td-details">{fund.product}</td>
              <td class="td-details">{handleIsoDate(fund.investment.requestDate)}</td>
              <td class="td-details">{handlePercentNumber(fund.detail.valueQuota)}</td>
              <td class="td-details">{`${(fund.profitability.day).toFixed(2)} %`}</td>
              <td class="td-details">{`${(fund.profitability.year).toFixed(2)} %`}</td>
              <td class="td-details">{`${(fund.profitability.twelveMonths).toFixed(2)} %`}</td>
              <td class="td-details">{(fund.netEquity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td class="td-details"><button /></td>
            </tr>
          </tbody>
        </table> 
            <p>Detalhe do fundo</p>
            <hr />
            <div>
              <div class="details">Início do Fundo: {handleIsoDate(fund.begin)}</div>
              <div class="details">Data da Cota: {handleIsoDate(fund.investment.requestDate)}</div>
              <div class="details">Taxa de Administração: {handlePercentNumber(fund.detail.administrationFee)}%</div>
              <div class="details">Patrimônio Líquido: R$ {(fund.netEquity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <div class="details">Valor da Cota: {fund.detail.valueQuota}</div>
              <div class="details">Taxa de Performance: {handlePercentNumber(fund.detail.performanceFee)}%</div>
              <div class="details">Horário de Aplicação: {fund.timeLimit}</div>
            </div>
        <p>Arquivos</p>
        <hr />
        <div class="container">
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
          </div>
      </>
    )
  }
}

export default FundDetails;
