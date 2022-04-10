import _ from 'lodash'

import {
    request
} from '../../../utils/api'

export async function fetchNovels() {
    return await request().get('/novel')
}

export async function fetchNovel(id) {
    return await request().get(`/novel/${id}`)
}