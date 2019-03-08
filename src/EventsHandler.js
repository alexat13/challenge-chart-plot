import React, { Component } from 'react';
import { randomRGB } from './randomRGB.js';

class EventHandler {

constructor(data){

	this.data = data;
	this.datasets = [];
	this.span = {
		begin: '',
		end: ''
	};
	this.map = new Map();

}

/*	inputData(data){

this.data = data;
this.span = {
begin: '',
end: ''
};
this.map = new Map();

}*/

getDatasets(){

this.map.forEach((v,k)=>{

	const randColor1 = randomRGB();
	const randColor2 = randomRGB();

	let data = {
		data_min: [],
		data_max: []
	};

	v.forEach(element => {

		const date = new Date(element.timestamp);

		data.data_min.push({

			x: date,
			y: element.min_response_time

		});

		data.data_max.push({


			x: date,
			y: element.max_response_time

		});


	});

	let tempDataset = [{
		label: `${k} min response time`,
		backgroundColor: randColor1,
		borderColor: randColor1,
		data: data.data_min

	},
	{
		label: `${k} max response time`,
		backgroundColor: randColor2,
		borderColor: randColor2,
		data: data.data_max

	}];

	this.datasets.push(...tempDataset);

});

return this.datasets;
}

processData(){

let entries = this.data.split('\n');
let jsonArr = entries.map(entry=>{

	let formattedEntry = entry.replace(/(['"])?((([0-9]+)?[a-zA-Z_]+([0-9]+)?)+(\2?)|(['"][0-9]+))(['"])?/g,'"$2"');
	return JSON.parse(formattedEntry);

});

jsonArr.forEach(entry=>{

	const { type } = entry;

	switch(type){

		case 'span':
		this.span =  {
			begin: entry.begin,
			end: entry.end
		};
		//console.log(this.span);
		break;

		case 'data':
		const id = `${entry.os} ${entry.browser}`;

		if(this.map.has(id)){

			this.map
					.get(id)
					.push({
							timestamp: entry.timestamp,
							min_response_time: entry.min_response_time,
							max_response_time: entry.max_response_time
						});

		}else{

			this.map
					.set(`${id}`,
								[{
									timestamp: entry.timestamp,
									min_response_time: entry.min_response_time,
									max_response_time: entry.max_response_time
								}]
							);
		}
		break;
	}


	});


	}

}

export default EventHandler;
