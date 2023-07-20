export const colorByStatus = (status) => {
	let color = "secondary";
	
	switch(status.toLowerCase()){
		case "alive":
			color = "success";
			break
		case "dead":
			color = "danger";
			break
	}
	
	return color;
}