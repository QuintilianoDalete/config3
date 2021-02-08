import React, { Component } from 'react';
import './index.css';

class TableHeader extends Component {
  render() {
    return (
      <tr class="header">
        <th class="text-s1 first-element ng-star-inserted">Ações</th>
        <th class="text-s1 ng-star-inserted">Produto</th>
        <th class="text-s1 ng-star-inserted">Data</th>
        <th class="text-s1 ng-star-inserted">Cota</th>
        <th class="text-s1 ng-star-inserted">Dia %</th>
        <th class="text-s1 ng-star-inserted">Ano %</th>
        <th class="text-s1 ng-star-inserted">12 M %</th>
        <th class="text-s1 ng-star-inserted">PLR</th>
        <th class="text-s1 ng-star-inserted">PL Médio em <br /> 12 meses R$</th>
        <th class="text-s1 ng-star-inserted"></th>
        <th class="th-actions"></th>
      </tr>
    )
  }
}

export default TableHeader;
