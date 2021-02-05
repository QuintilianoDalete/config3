import React, { Component } from 'react';

class FundInfo extends Component {
  render() {
    const { fund, handleIsoDate, handlePercentNumber, handleButtonClick, handleStock } = this.props
    return (
      <>
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
      </>
    )
  }
}

export default FundInfo;
