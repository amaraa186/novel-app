import axios from 'axios'

import config from '../env'

const TIMEOUT = 20000

export function request(token = null) {
    let query = {
      baseURL: config.API_URL,
      timeout: TIMEOUT,
    }

    if(token) {
        Object.assign(query, {
            headers: {
                Authorization: 'bearer ' + token
            },
        })
    }

    return axios.create(query)
}
