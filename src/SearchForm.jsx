var React = require('react');
//var SearchPlugin = require('./SearchPlugin.jsx');

class SearchForm extends React.Component {
/*
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};
                           
        this.filterList = this.filterList.bind(this);
    }
*/ 
/*             
    filterList(text){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(text.toLowerCase())!== -1;
        }); 
        this.setState({items: filteredList});
    }
               
*/               
    render() {
        return(
            <div className="container">
                <h1 className="text-center">History search app</h1>
                <form>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label"> Im looking for: </label>
                        <input type="text" className="form-control col-sm-8" id="exampleFormControlInput1" placeholder="Text of my search request" />
                        
                         <button type="submit" className="btn btn-primary col-sm-1">Find</button>
                      </div>
                </form>
            </div>
        )    
    }
}

export default SearchForm;





/**
/* class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};
                           
        this.filterList = this.filterList.bind(this);
    }
              
    filterList(text){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(text.toLowerCase())!== -1;
        }); 
        this.setState({items: filteredList});
    }
               
    render() {
        return(
            <div>         
                <h2>{this.props.data.title}</h2>
                <SearchPlugin filter={this.filterList} />
                <ul>
                    {
                        this.state.items.map(function(item){
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </div>);
    }
}
 
module.exports = ItemsList;
*/