import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [quotes, setQuotes] = useState();

	useEffect(() => {
		fetchQuote();
	}, []);

	const fetchQuote = () => {
		axios
			.get('	https://api.adviceslip.com/advice')
			.then((res) => {
				const { advice } = res.data.slip;
				setQuotes(advice);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className='App'>
			<div className='card'>
				<h1 className='header'>{quotes}</h1>
        <button className="button" onClick={fetchQuote}>
          <span>Get a Advice</span>
        </button>
			</div>
		</div>
	);
}

export default App;
