import React from 'react';
import Button from './Button';
import './App.css';

class App extends React.Component {
	state = { quote : 'Click refresh button for the quotes...'};

	getQuote = (q) => {
		this.setState({quote : '"'+q+'"'});
	}

	render() {
		return(
			<div>
				<h1><span className="title">Yeezus Quote Machine</span></h1>
				<div className="main-body">
					<div className="text">
						{this.state.quote}
					</div>
					<div className="btnDiv">
						<Button sendQuote={this.getQuote} />
					</div>
				</div>
			</div>

		);
	}
}

export default App;