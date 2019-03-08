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

	inputData(data){

		this.data = data;
		this.span = {
						begin: '',
						end: ''
					};
		this.map = new Map();

	}

	getDatasets(){

		this.map.forEach((v,k)=>{

            const randColor1 = randomRGB();
            const randColor2 = randomRGB();

            let data_min = v.map(element=>{

              return {

                x: new Date(element.timestamp),
                y: element.min_response_time

              }


            });

            let data_max = v.map(element=>{

              return {

                x: new Date(element.timestamp),
                y: element.max_response_time

              }


            });

            let tempDataset = [{
                label: `${k} min response time`,
                backgroundColor: randColor1,
                borderColor: randColor1,
                data: data_min

              },
              {
                label: `${k} max response time`,
                backgroundColor: randColor2,
                borderColor: randColor2,
                data: data_max

              }];

            this.datasets.push(...tempDataset);

        });

        return this.datasets;
	}

	processData(){

		this.data.forEach(entry=>{

			const { type } = entry;

			switch(type){
				case 'span':
					this.span =  {
						begin: entry.begin,
						end: entry.end
					};
					console.log(this.span);
				break;
				case 'data':
					const id = `${entry.os} ${entry.browser}`;

					if(this.map.has(id)){
						this.map.get(id).push({timestamp: entry.timestamp, min_response_time: entry.min_response_time, max_response_time: entry.max_response_time});

					}else{

						this.map.set(`${id}`,[{timestamp: entry.timestamp, min_response_time: entry.min_response_time, max_response_time: entry.max_response_time}]);
					}
					
					
				break;
			}


		})


	}

	showData(){

		console.log(this.data);
	}




}

export default EventHandler;
