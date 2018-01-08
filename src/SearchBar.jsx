import React from 'react';
import firebase from './config-firebase';

class SearchBar extends React.Component {

    /*getInitialState() {
        return {
            textSearch: ''
        };
    }*/
    //node1Ref;

    constructor() {
        super();
        this.state = {textSearch: ''};
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSearchTextFind = this.handleSearchTextFind.bind(this);
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();

        this.node1Ref = rootRef.child('node1');
        /*
         speedRef.on('value', snap=>{
         //console.log('componentDidMount',snap);
         this.setState({
         speed:snap.val()
         });
         });
         */

    }

    getActualFullDate() {
        let d = new Date();
        let day = this.addZero(d.getDate());
        let month = this.addZero(d.getMonth()+1);
        let year = this.addZero(d.getFullYear());
        let h = this.addZero(d.getHours());
        let m = this.addZero(d.getMinutes());
        let s = this.addZero(d.getSeconds());
        return day + "/" + month + "/" + year + ", " + h + ":" + m;
    }

    handleSearchTextFind(event) {
        //console.log('event.target.value handleSearchTextFind',event.target.value);
        //this.setState({ textSearch: event.target.value });
        let newTextSearch = {
            text: this.state.textSearch,
            id: this.getActualFullDate()
        };

        this.node1Ref.push(newTextSearch);
        let d = new Date;

        console.log('Date.now().toString()',this.getActualFullDate());

    }

    addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }


    handleSearchTextChange(event){
        console.log('event.target.value handleSearchTextChange',event.target.value);
        this.setState({ textSearch: event.target.value });

    }

  render() {
    return (
        <div className="container">
           <h1 className="text-center">History search app</h1>
           <form>
               <div className="form-group row">
                   <label className="col-sm-2 col-form-label"> Im looking for: </label>
                   <input type="text"
                          placeholder="Search..."
                          className="form-control col-sm-8"
                          onChange={this.handleSearchTextChange}
                   />

                   <button type="button"
                           className="btn btn-primary col-sm-1"
                           onClick={this.handleSearchTextFind}
                   >
                       Find
                   </button>

               </div>
               <div className="form-check">
                   <label className="form-check-label">
                       <input type="checkbox" className="form-check-input"/>
                           Check me out
                   </label>
               </div>
           </form>
        </div>
    );
  }
}

export default SearchBar;