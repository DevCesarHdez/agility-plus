import {useState} from "react"
import {colorByStatus} from "../helpers/status"
const useCard = ({initialStatus}) => {
	const [status, setStatus] = useState(initialStatus)
	const handleStatus = (e) => setStatus(e.target.value)
	const bgStatus = "bg-" + colorByStatus(status);

	return {bgStatus, status, handleStatus}
}

export default useCard