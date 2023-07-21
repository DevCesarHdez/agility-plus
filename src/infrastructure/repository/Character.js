import env from "../../config/app/env"
import {get} from "../http/http"

const character = async () => {
	return await get(`${env.url}/character`)
}

export default character;