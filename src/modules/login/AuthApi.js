import _ from 'lodash'

import {
    request
} from '../../../utils/api'

export async function loginHandler(params) {
    return await request().post('/user/login', params)
}

export async function signupHandler(params) {
    return await request().post('/user', params)
}