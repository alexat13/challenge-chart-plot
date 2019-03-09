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
	this.streamStarted = false;
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

	console.log(randColor1, randColor2);

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

	let entries = this.data.trim().split('\n');

	let jsonArr = [];

 	entries.forEach(entry=>{
	 if(entry.length){
		 let formattedEntry = entry.replace(/(['"])?((([0-9]+)?[a-zA-Z_]+([0-9]+)?)+(\2?)|(['"][0-9]+))(['"])?/g,'"$2"');
		 jsonArr.push(JSON.parse(formattedEntry));
	 }
 }
 );

// 	let jsonArr = entries.map(entry=>{
//
// 	let formattedEntry = entry.replace(/(['"])?((([0-9]+)?[a-zA-Z_]+([0-9]+)?)+(\2?)|(['"][0-9]+))(['"])?/g,'"$2"');
// 	return JSON.parse(formattedEntry);
//
// });

console.log(jsonArr);

try{

jsonArr.forEach(entry=>{

	const { type } = entry;

	switch(type){
		case 'start':
		if(this.streamStarted === false){
				this.streamStarted = true;
		}else{
			throw Error("There's already an unfinished stream in progress. ")
		}

		break;

		case 'span':
		this.span =  {
			begin: entry.begin,
			end: entry.end
		};

		if(this.span.begin > this.span.end) throw Error("Invalid span interval. End value must be greater than begin value");


		console.log(this.span);
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

		case 'stop':
		if(this.streamStarted === true){
				this.streamStarted = false;
		}else{
			throw Error("There's no stream in progress to be stopped. ")
		}
	}


	});

}catch(err){

	alert(err);
}


	}

}

export default EventHandler;
