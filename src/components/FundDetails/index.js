import React, { Component } from 'react';

class FundDetails extends Component {
  render() {
    const { fund, handleIsoDate, handlePercentNumber, handleStock, handleButtonClick } = this.props
    return (
      <>
        <table className="table" onClick={() => handleButtonClick(fund.id)}>
          <tbody>
            <tr key={`${fund.id}-det`} className="tr">
            <td className="td-details">
              {
                (fund.detail.subCategoryDescription)
                ? (handleStock(fund.detail.subCategoryDescription))
                : (fund.detail.subCategoryDescription)
              }
            </td>
              <td className="td-details">{fund.product}</td>
              <td className="td-details">{handleIsoDate(fund.investment.requestDate)}</td>
              <td className="td-details">{handlePercentNumber(fund.detail.valueQuota)}</td>
              <td className="td-details">{`${(fund.profitability.day).toFixed(2)} %`}</td>
              <td className="td-details">{`${(fund.profitability.year).toFixed(2)} %`}</td>
              <td className="td-details">{`${(fund.profitability.twelveMonths).toFixed(2)} %`}</td>
              <td className="td-details">{(fund.netEquity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td className="td-details"><button /></td>
            </tr>
          </tbody>
        </table> 
            <p>Detalhe do fundo</p>
            <hr />
            <div>
              <div className="details">Início do Fundo: {handleIsoDate(fund.begin)}</div>
              <div className="details">Data da Cota: {handleIsoDate(fund.investment.requestDate)}</div>
              <div className="details">Taxa de Administração: {handlePercentNumber(fund.detail.administrationFee)}%</div>
              <div className="details">Patrimônio Líquido: R$ {(fund.netEquity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <div className="details">Valor da Cota: {fund.detail.valueQuota}</div>
              <div className="details">Taxa de Performance: {handlePercentNumber(fund.detail.performanceFee)}%</div>
              <div className="details">Horário de Aplicação: {fund.timeLimit}</div>
            </div>
        <p>Arquivos</p>
        <hr />
        <div className="container">
          {(fund.detail.files).map((file) => {
            return (
              <div className="cell-4-phone cell-4-tablet cell-4-desktop ng-star-inserted">
                <app-funds-download _nghost-lim-c10="">
                  <div _ngcontent-lim-c10="" className="funds-file">
                    <div _ngcontent-lim-c10="" className="funds-file__icon">
                        <img _ngcontent-lim-c10="" alt="file icon" src="https://www.btgpactual.com/assets/images/png/donwload-icon.png" />
                      </div>
                    <div _ngcontent-lim-c10="" className="funds-file__name">
                      <p _ngcontent-lim-c10="" className="text-t6 regular">{file.description}</p>
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
