export const randomRGB = () => {

	const randomValue = () => {

		return Math.floor(Math.random()*256);	
	}

		let r= randomValue();
		let g= randomValue();
		let b= randomValue();

	return `rgb(${r},${g},${b})`;
}