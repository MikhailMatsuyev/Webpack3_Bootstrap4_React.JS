import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

class SearchFormMain extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

ReactDOM.render(
    <SearchFormMain />,
    document.getElementById("app")
)