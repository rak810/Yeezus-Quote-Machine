import React from 'react';

const API = 'https://api.kanye.rest/';

class Button extends React.Component {
	state = { quotes : '' };


	getData = () => {
    	fetch(API)
      	.then(response => response.json())
      	.then(data => this.setState({quotes : data.quote}));

      	console.log(this.state.quotes);
  	}

  	componentDidMount() {
  		this.getData();
  	}

	setQuote = () => {
		this.getData();
		this.props.sendQuote(this.state.quotes);
	}

	render() {
		return (
			<button className="circular ui icon button" onClick={this.setQuote}><i className="fa fa-refresh" style={{fontSize : "30px"}}></i></button>
		);
	}
}

export default Button;