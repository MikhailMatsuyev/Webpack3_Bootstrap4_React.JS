import React from 'react';
import firebase from './config-firebase';

class ProductRow extends React.Component {

    componentDidMount() {
        this.rootRef = firebase.database().ref();
    }

    constructor(props){
        super(props);
    }

    handleKeyDelete(e){
        this.rootRef.child('node1/'+this.props.id).remove();
    }

    render() {
        return (
            <tr >
                <td>{this.props.children}</td>
                <td>{this.props.tSearchDate}
                <button type="button" className="float-right btn btn-danger" onClick={ ()=>this.handleKeyDelete() }>Delete</button>
                </td>
            </tr>

        );
    }
}

export default ProductRow;
