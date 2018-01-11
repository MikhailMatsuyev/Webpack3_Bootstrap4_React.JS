import React from 'react';
import firebase from './config-firebase';
import { FormBuilder, Validators, Field} from 'react-reactive-form';

class SearchBar extends React.Component {

  constructor() {
    super();
    this.state = { textSearch: '' };

    this.searchForm = FormBuilder.group({
        search_input: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    });

  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    this.node1Ref = rootRef.child('node1');
  }

  getActualFullDate() {
    const d = new Date();
    const day = this.addZero(d.getDate());
    const month = this.addZero(d.getMonth() + 1);
    const year = this.addZero(d.getFullYear());
    const h = this.addZero(d.getHours());
    const m = this.addZero(d.getMinutes());
    const s = this.addZero(d.getSeconds());
    return `${day}/${month}/${year}, ${h}:${m}:${s}`;
  }

  handleSearchTextFind(event) {
    event.preventDefault();
    const newTextSearch = {
      text: this.searchForm.value.search_input,
      dateTime: this.getActualFullDate()
    };

    this.node1Ref.push(newTextSearch);

  }

  addZero(i) {
    if (i < 10) {
      i = `0${i}`;
    }
    return i;
  }


  render() {
    return (
      <div className="container">
        <h1 className="text-center">History search app</h1>

        <Field
          control={this.searchForm}
          render={({ get, invalid, submitted }) => (
            <form onSubmit={(e)=>this.handleSearchTextFind(e)}>
              <Field
                control={get('search_input')}
                render={
                    ({ handler, touched, hasError }) => (
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"> Im looking for: </label>
                            <input
                                type="text"


                                placeholder="Search..."
                                className="form-control col-sm-8 "

                                {...handler()}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary col-sm-1"
                                disabled={invalid}
                            >
                                Find
                            </button>
                            <span style={{ display: 'block', color: 'red' }} className="col-sm-5">
                                {   touched
                                    && hasError('required') && 'Search text is required'
                                    || hasError('minLength') && `Search text should Be greater than 2 characters`
                                    || hasError('maxLength') && `Search text should Be less than 100 characters`
                                }
                            </span>
                        </div>
                    )}
              />
            </form>
          )}
        />
      </div>
    );
  }
}

export default SearchBar;
