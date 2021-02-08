import React, { Component } from 'react';
import './index.css';

class FundHeader extends Component {
  render() {
    return (
      <div class="caption">
        <div class="caption-category">
          <p class="uppercase">
            <span class="after"> IQ </span>
            <span class="text-s1 light"> Investidor Qualificado </span>
          </p>
          <p class="uppercase">
            <span class="after"> IP </span>
            <span class="text-s1 light uppercase"> Investidor Profissional </span>
          </p>
        </div>
        <div class="caption-category">
          <p class="text-s1 light uppercase caption-title"> CATEGORIA DE RISCO: </p>
          <p class="caption-risk">
            <span class="risk low"></span>
            <span class="text-s1 light"> conservador </span>
          </p>
          <p class="caption-risk">
            <span class="risk medium"></span>
            <span class="text-s1 light"> moderado </span>
          </p>
          <p class="caption-risk">
            <span class="risk high"></span>
            <span class="text-s1 light"> sofisticado </span>
          </p>
        </div>
      </div>
    )
  }
}

export default FundHeader;
