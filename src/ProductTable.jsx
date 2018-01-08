import React from 'react';
//import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

import firebase from './config-firebase';


class ProductTable extends React.Component {

    constructor() {
        super();
        this.state = {textSearch: ''};
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        const node1Ref = rootRef.child('node1');
        node1Ref.on('value', snap => {
            this.setState({
                textSearch: snap.val()//JSON.stringify(snap.val())
            });
        });


    }

    render() {
        let rows = [];

        for (let o in this.state.textSearch){
                rows.push(<ProductRow
                    key         =   {o}
                    tSearchText =   {this.state.textSearch[o].text}

                    tSearchDate =   {this.state.textSearch[o].id}
                >
                </ProductRow>);
        }

        rows.reverse();

        return (
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
            </div>
        );

    }
}

export default ProductTable;