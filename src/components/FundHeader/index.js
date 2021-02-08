import React, { Component } from 'react';
import './index.css';

class FundHeader extends Component {
  render() {
    return (
      <div _ngcontent-dop-c9="" class="caption">
        <div _ngcontent-dop-c9="" class="caption-category">
          <p _ngcontent-dop-c9="" class="uppercase">
            <span _ngcontent-dop-c9="" class="after"> IQ </span>
            <span _ngcontent-dop-c9="" class="text-s1 light"> Investidor Qualificado </span>
          </p>
          <p _ngcontent-dop-c9="" class="uppercase">
            <span _ngcontent-dop-c9="" class="after"> IP </span>
            <span _ngcontent-dop-c9="" class="text-s1 light uppercase"> Investidor Profissional </span>
          </p>
        </div>
        <div _ngcontent-dop-c9="" class="caption-category">
          <p _ngcontent-dop-c9="" class="text-s1 light uppercase caption-title"> CATEGORIA DE RISCO: </p>
          <p _ngcontent-dop-c9="" class="caption-risk">
            <span _ngcontent-dop-c9="" class="risk low"></span>
            <span _ngcontent-dop-c9="" class="text-s1 light"> conservador </span>
          </p>
          <p _ngcontent-dop-c9="" class="caption-risk">
            <span _ngcontent-dop-c9="" class="risk medium"></span>
            <span _ngcontent-dop-c9="" class="text-s1 light"> moderado </span>
          </p>
          <p _ngcontent-dop-c9="" class="caption-risk">
            <span _ngcontent-dop-c9="" class="risk high"></span>
            <span _ngcontent-dop-c9="" class="text-s1 light"> sofisticado </span>
          </p>
        </div>
      </div>
    )
  }
}

export default FundHeader;
