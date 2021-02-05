import React, { Component } from 'react';

class FundInfo extends Component {
  render() {
    const { fund, handleIsoDate, handlePercentNumber, handleButtonClick, handleStock } = this.props
    return (
      <>
        <tr key={fund.id} class="tr" onClick={() => handleButtonClick(fund.id)}>
          <td class="td">
            {
              (fund.detail.subCategoryDescription)
              ? (handleStock(fund.detail.subCategoryDescription))
              : (fund.detail.subCategoryDescription)
            }
          </td >
          <td class="td">{fund.product}</td>
          <td class="td">{handleIsoDate(fund.investment.requestDate)}</td>
          <td class="td">{handlePercentNumber(fund.detail.valueQuota)}</td>
          <td class="td">{`${(fund.profitability.day).toFixed(2)} %`}</td>
          <td class="td">{`${(fund.profitability.year).toFixed(2)} %`}</td>
          <td class="td">{`${(fund.profitability.twelveMonths).toFixed(2)} %`}</td>
          <td class="td">{(fund.netEquity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
          <td class="td"><button /></td>
        </tr>
      </>
    )
  }
}

export default FundInfo;
