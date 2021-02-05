import React, { Component } from 'react';
import getFunds from './services/api';
import FundDetails  from './components/FundDetails';
import FundInfo from './components/FundInfo';
import './App.css';

class Funds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      clickedFundId: '',
    };
    this.handleApiRequisition = this.handleApiRequisition.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this.handleIsoDate = this.handleIsoDate.bind(this);
    this.handleStock = this.handleStock.bind(this);
    this.handlePercentNumber = this.handlePercentNumber.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.renderFundDetail = this.renderFundDetail.bind(this);
    this.renderFund = this.renderFund.bind(this);
    this.renderFundInfo =  this.renderFundInfo.bind(this);
  }

  componentDidMount() {
    this.handleApiRequisition();
  }

  async handleApiRequisition() {
    const apiQuestionResult = await getFunds();
    this.setState({ funds: apiQuestionResult });
  }

  renderLoading() {
    return(
      <div className="loader" />
    )
  }

  handleStock(stock) {
    if (stock.length < 10) {
      return stock;
    } else if (stock.includes("PÓS")) {
      return stock.split(" ")[3];
    } else {
      return stock.split("-")[1]
    }
  }

  handleIsoDate(isoDate) {
    const date = new Date(isoDate);
    const day = ("0" + date.getDate()).slice(-2); 
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return (`${day}/${month}/${year}`);
  }

  handlePercentNumber(quota) {
    const formatedQuota = (quota.toFixed(2)).replace(".", ",");
    return formatedQuota;
  }



  renderFundDetail(fund) {
    return (
      <FundDetails
        fund={ fund }
        handleIsoDate={ this.handleIsoDate }
        handlePercentNumber={ this.handlePercentNumber }
        handleStock={ this.handleStock }
        handleButtonClick={ this.handleButtonClick }
      />
    );
  }

  renderFundInfo(fund) {
    return(
      <FundInfo
        fund={ fund }
        handleIsoDate={ this.handleIsoDate }
        handlePercentNumber={ this.handlePercentNumber }
        handleButtonClick={ this.handleButtonClick }
        handleStock={ this.handleStock }
      />
    )
  }

  handleButtonClick (id) {
    this.setState({ clickedFundId: id });
    const { clickedFundId,isClicked } = this.state;
    if (clickedFundId === id && isClicked === true) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  }

  renderFund(fund, clickedFundId) {
    const { isClicked } = this.state;
    if (fund.id === clickedFundId) {
      if (isClicked) {
        return this.renderFundDetail(fund);
      } else {
        return this.renderFundInfo(fund);
      }
    } else if (fund.id !== clickedFundId) {
      return this.renderFundInfo(fund);
    }
  }

  renderTable(funds) {
    const { clickedFundId } = this.state;
    return (
      <table className="table">
        <thead key="u" className="table-head">
          <tr>
            <th key="d" className="th">AÇÕES</th>
            <th key="s" className="th">PRODUTO</th>
            <th key="a" className="th">DATA</th>
            <th key="b" className="th">COTA</th>
            <th key="v" className="th">DIA %</th>
            <th key="c" className="th">ANO %</th>
            <th key="x" className="th">12 M %</th>
            <th key="z" className="th">PLR</th>
          </tr>
        </thead>
        <tbody>
          {funds.map((fund) => (
            <>      
              { this.renderFund(fund, clickedFundId) }
            </>
          ))}
        </tbody>
      </table>
    )
  }

  render () {
    const { funds } = this.state;
      return(
        <div>
          {funds
            ? this.renderTable(funds)
            : this.renderLoading()}
        </div>
      )
  }
}

export default Funds;
