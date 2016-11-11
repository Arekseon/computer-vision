var React = require('react');
var ReactDOM = require('react-dom');
require('../css/style.scss');

class Message extends React.Component {
    render() {
        return (<div>
                    <h1>{this.props.title}</h1>
                    <iframe width="560" height="315" src={this.props.video} frameborder="0" allowfullscreen></iframe>
                </div>);
    }
}

ReactDOM.render(<Message title="Facial Detection" video="https://www.youtube.com/embed/lKKxYwV6GV4"/>, document.getElementById('react-container'));
