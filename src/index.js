// For js files, no need of extension '.js'
import React from 'react';
import { render } from 'react-dom';

//css
import './style/css/bootstrap.min.css';
import './index.css';

//JS
import { sampleText } from './sampleText';


class App extends React.Component {
    render() {
        return (
            // html class => use 'className'
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea rows="35" className="form-control" value={sampleText}>
                        </textarea>
                    </div>
                    <div className="col-sm-6">
                        <div>{sampleText}</div>
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