/*This class is responsible for handling events, which are
a set of key and values*/

import { randomRGB } from './randomRGB.js';

class EventHandler {

constructor(data){

	this.data = data;
	this.datasets = [];
	this.span = {
		begin: '',
		end: ''
	};
	this.group = '';
	this.select='';
	this.streamStarted = false;
	this.map = new Map();

}

/*Selects the properties of the group in the start*/
selectGroup(props, entry){

	const propsArr = props.map(prop=>{

		if(entry.hasOwnProperty(prop)){
			return entry[prop];
		}else{
			throw Error(`No property ${prop} found on the following event: ${JSON.stringify(entry)}`);
		}
	});

	return propsArr.join(' ');


}

/*Sets some parameters for each dataset and returs them*/
getDatasets(){

	this.map.forEach((data,label)=>{

		const randColor = randomRGB();

		let dataset = {

			label: label,
			backgroundColor: randColor,
			borderColor: randColor,
			data: data

		};

		this.datasets.push(dataset);


	});

return this.datasets;
}

/*This is the function that handles all the inputs, converting the JSON input into
a valid JSON, and starts the process of analyzing the events by looping through
an array of events*/


processData(){

	/*Gets the inputs from the input and splits them
	*into an array
	*/
	let entries = this.data.trim().split('\n');

	let jsonArr = [];



try{

	/*Each entry in the entries array is formatted into a valid
	*JSON format, so that it can be parsed
	*/

	entries.forEach(entry=>{
	 if(entry.length){
		 let formattedEntry = entry.replace(/(['"])?((([0-9]+)?[a-zA-Z_]+([0-9]+)?)+(\2?)|(['"][0-9]+))(['"])?/g,'"$2"');
		 jsonArr.push(JSON.parse(formattedEntry));
	 }
 }
 );
	/*Each entry, which contains a valid event, is analyzed by
	*its type. 
	*/

jsonArr.forEach(entry=>{

	const { type, select, group } = entry;

	switch(type){
		case 'start':
		if(!group.length) throw Error("There should be a group in the start event.");
		if(this.streamStarted === false){
				this.streamStarted = true;
				this.group = group;
				this.select = select;
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

		break;

		case 'data':

		if(!this.streamStarted) throw Error("No Stream in progress.");

		if(entry.timestamp >= this.span.begin && entry.timestamp <= this.span.end ){

			const group = this.selectGroup(this.group, entry);

			this.select.forEach(element=>{

				if(entry.hasOwnProperty(element)){

					const id = `${group} ${element.replace(/_/g," ")}`;
					const axes = {

						x: (entry.timestamp-this.span.begin)-75600000,
						y: entry[element]

					};

					if(this.map.has(id)){

						this.map
								.get(id)
								.push(axes);

					}else{

						this.map
								.set(id,
											[axes]
										);
					}
				}

			});

		}
				break;

		case 'stop':
		if(this.streamStarted === true){
				this.streamStarted = false;
		}else{
			throw Error("No stream in progress to be stopped. ")
		}
		break;

		 default:
		 	throw Error(`Invalid event ${JSON.stringify(entry)}.`);
		 break;
	}


	});

}catch(err){

	alert(err);
}


	}

}

export default EventHandler;
