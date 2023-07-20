import {useState} from "react"
import {colorByStatus} from "../helpers/status"
const useCard = ({status}) => {
	// const [bgStats, setBgStatus] = useState('bg-secondary')
	const handleStatus = () => {}
	let bgStatus = "bg-" + colorByStatus(status);

	return {bgStatus}
}

export default useCard