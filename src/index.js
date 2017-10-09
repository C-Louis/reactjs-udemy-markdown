// For js files, no need of extension '.js'
import React from 'react';
import { render } from 'react-dom';

//css
import './style/css/bootstrap.min.css';
import './index.css';

//JS
import { sampleText } from './sampleText';


class App extends React.Component {

    state = {
      text: sampleText
    };

    render() {
        return (
            // html class => use 'className'
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea rows="35" className="form-control"
                                  value={this.state.text}>
                        </textarea>
                    </div>
                    <div className="col-sm-6">
                        <div>{this.state.text}</div>
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