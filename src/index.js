// For js files, no need of extension '.js'
import React from 'react';
import { render } from 'react-dom';
import marked from 'marked';
//css
import './style/css/bootstrap.min.css';
import './index.css';
//JS
import { sampleText } from './sampleText';


class App extends React.Component {

    state = {
      text: sampleText
    };

    editText = (event) => {
      const text = event.target.value;
      this.setState({ text });
    };

    renderText = (text) => {
      const renderText = marked(text, {sanitize: true});
      return { __html: renderText };
    };

    render() {
        return (
            // html class => use 'className'
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea
                            value={this.state.text}
                            rows="35"
                            className="form-control"
                            onChange={(e) => this.editText(e)}>
                        </textarea>
                    </div>
                    <div className="col-sm-6">
                        <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
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