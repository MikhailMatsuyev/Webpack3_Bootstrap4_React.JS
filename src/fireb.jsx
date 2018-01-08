import React from 'react';
import ReactDOM from 'react-dom';
//import * as firebase from 'firebase';
import firebase from './config-firebase';

class Fireb extends React.Component {
    constructor(){
        super();
        this.state={
          speed:10
        };
        console.log('firebase',firebase);
    }

    componentDidMount(){

/*
        this.setState({
            speed:25
        });
*/
        //const rootRef = firebase.database().ref().child('fir-proj-wp-react');
        const rootRef = firebase.database().ref();
        console.log('rootRef',rootRef);
        console.log('rootRef',rootRef);

        const speedRef = rootRef.child('speed');
        const node1Ref = rootRef.child('node1');
        console.log('node1Ref',node1Ref);
        speedRef.on('value', snap=>{
            //console.log('componentDidMount',snap);
            this.setState({
                speed:snap.val()
            });
            //console.log('aft',this.state.speed)
        });
/*
        node1Ref.set({
            "name": "Konstantin",
        });
        node1Ref.set({
            "name": "Kons",
        });

*/

        node1Ref.push('yyy');


        //var myConnectionsRef = firebase.database().ref('users/joe/connections');
// Создаем новое поле данных(информацию о новом соединении - данные true)
        //var con = myConnectionsRef.push(true);





        node1Ref.on('value', snap=>{
            //console.log('componentDidMount',snap);

            this.setState({
                speed: JSON.stringify(snap.val())
            });
            console.log('snap.val()',snap.val());
        });
    }

    render() {
        return(
            <div className="container-fluid text-center">
                <h1 className="h1">{this.state.speed}</h1>
                <span className="text-muted">Powered by React</span>
            </div>
        )
    }
}

ReactDOM.render(
    <Fireb />,
    document.getElementById("react-id")
)

export default Fireb;