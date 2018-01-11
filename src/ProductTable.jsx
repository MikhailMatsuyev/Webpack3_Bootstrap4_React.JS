import React from 'react';
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
                textSearch: snap.val()
            });
        });
    }

    render() {
        let rows = [];

        for (let o in this.state.textSearch){
                rows.push(<ProductRow
                    key         =   {o}
                    tSearchDate =   {this.state.textSearch[o].dateTime}
                    id          =   {o}
                >
                    {this.state.textSearch[o].text}
                </ProductRow>);
        }

        rows.reverse();

        return (
            <div className="container col-sm-5">
                <div className="table-responsive ">
                    <table className="table table-bordered ">
                        <thead>
                        <tr>
                            <th>Request</th>
                            <th>Date & Time</th>
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