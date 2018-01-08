import React from 'react';

class ProductRow extends React.Component {
    render() {
        let name = this.props;

        return (
            <tr>
                <td>{this.props.tSearchText}</td>
                <td>{this.props.tSearchDate}</td>

            </tr>
        );
    }
}

export default ProductRow;

/*<td>{this.props.product.price}</td>*/