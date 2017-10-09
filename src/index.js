// For js files, no need of extension '.js'
import React from 'react';
import { render } from 'react-dom';
//css
import './style/css/bootstrap.min.css';
import './index.css';

class App extends React.Component {
    render() {
        return (
            // html class => use 'className'
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea rows="35" className="form-control" value="Tapez votre texte">

                        </textarea>
                    </div>
                    <div className="col-sm-6">
                        <h1>Resultats</h1>
                    </div>
                </div>
            </div>
        )
    }
}

render(
  <App />,
  document.getElementById('root')
);