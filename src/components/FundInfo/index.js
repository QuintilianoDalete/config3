import React, { Component } from 'react';

class FundInfo extends Component {
  render() {
    const { fund, handleIsoDate, handlePercentNumber, handleButtonClick, handleStock } = this.props;
    return (
      <tr key={`${fund.id}-info`} className="tr" onClick={() => handleButtonClick(fund.id)}>
        <td className="td">
          {
            (fund.detail.subCategoryDescription)
            ? (handleStock(fund.detail.subCategoryDescription))
            : (fund.detail.subCategoryDescription)
          }
        </td >
        <td className="td">{fund.product}</td>
        <td className="td">{handleIsoDate(fund.investment.requestDate)}</td>
        <td className="td">{handlePercentNumber(fund.detail.valueQuota)}</td>
        <td className="td">{`${(fund.profitability.day).toFixed(2)} %`}</td>
        <td className="td">{`${(fund.profitability.year).toFixed(2)} %`}</td>
        <td className="td">{`${(fund.profitability.twelveMonths).toFixed(2)} %`}</td>
        <td className="td">{(fund.netEquity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
        <td className="td"><button /></td>
      </tr>
    )
  }
}

export default FundInfo;
