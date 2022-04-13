import _ from 'lodash'

import {
    request
} from '../../../utils/api'

export async function fetchNovels() {
    return await request().get('/novel')
}

export async function fetchSearch(params) {
    return await request().get('/novel/search/', {
        params
    })
}

export async function fetchFilter(search_value) {
    return await request().get('/novel/filter/', {
        search_value
    })
}

export async function fetchPopularNovels() {
    return await request().get('/novel/popular')
}

export async function fetchNovel(id) {
    return await request().get(`/novel/${id}`)
}