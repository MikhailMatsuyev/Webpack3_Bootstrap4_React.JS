import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    render() {
        return(
      		<div className="container-fluid text-center">
                <span className="text-muted">Powered by M. Matsuyeu</span>
      		</div>
        )    
    }
}
 
ReactDOM.render(
    <Footer />,
    document.getElementById("footer")
)
