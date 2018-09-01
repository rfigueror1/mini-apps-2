var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
import {Line} from 'react-chartjs-2';
import color from 'rcolor';
import { Calendar } from 'react-date-range';

class Graph extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {	
    		labels: [],
  			datasets: [
    			{
      				label: 'Bitcoin price',
      				fill: false,
      				lineTension: 0.1,
      				backgroundColor: 'rgba(75,192,192,0.4)',
      				borderColor: 'rgba(75,192,192,1)',
      				borderCapStyle: 'butt',
      				borderDash: [],
      				borderDashOffset: 0.0,
      				borderJoinStyle: 'miter',
      				pointBorderColor: 'rgba(75,192,192,1)',
      				pointBackgroundColor: '#fff',
      				pointBorderWidth: 1,
      				pointHoverRadius: 5,
      				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      				pointHoverBorderColor: 'rgba(220,220,220,1)',
      				pointHoverBorderWidth: 2,
      				pointRadius: 1,
      				pointHitRadius: 10,
      				data: []
    			}
		],
  			start_date:'2010-09-01',
  			end_date:'2016-09-05'
    	};

    	this.handleSelect1 = this.handleSelect1.bind(this);
    	this.handleSelect2 = this.handleSelect2.bind(this);
    	this.getData = this.getData.bind(this);
 	}


 	componentDidMount(){
 		this.getData();
 	}

	getData(start_date, end_date) {
  		var next_state = Object.assign({}, this.state);
  		var prices_response = [];
  		var dates_response = [];
  		console.log('component data change')
  		axios.get(`/prices/${start_date}/${end_date}`)
  		.then( (response) => {
  			console.log('request made');
  			Object.keys(response.data).forEach(function(key) {
		  		dates_response.push(key);
		  		prices_response.push(response.data[key])
			});

     		next_state.labels = dates_response;
     		next_state.datasets[0].data = prices_response;

     		console.log(next_state.labels);

     		this.setState(prevState => (next_state));
     		
     		console.log(this.state.datasets[0].data, 'NNNN')
  		})
  		.catch((error) => {
    		console.log(error);
  		});
  	
  }

	handleSelect1(date){
		var date = JSON.stringify(date._d);
		date = date.slice(1,11)
		console.log(date)
        this.setState({start_date:date});
        this.getData(date, this.state.end_date);
    }

    handleSelect2(date){
    	var date = JSON.stringify(date._d);
		date = date.slice(1,11)
		console.log(date)
        this.setState({end_date:date});
        this.getData(this.state.start_date, date);
    }

    changeHandler(value) {
        this.update();
    }

	render() {
		return (
			<div>
				<Line data={this.state}  key={Math.random()} redraw/>
				<Calendar onInit={this.handleSelect1} onChange={this.handleSelect1}/>
				<Calendar onInit={this.handleSelect2} onChange={this.handleSelect2}/>
			</div>
		);
	}
};

ReactDOM.render(
  <Graph/>,
  document.getElementById('app')
);
