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

export async function fetchFilter(params) {
    return await request().get('/novel/filter/', {
        params
    })
}

export async function fetchPopularNovels() {
    return await request().get('/novel/popular')
}

export async function fetchNovel(id) {
    return await request().get(`/novel/${id}`)
}

export async function novelBookmark(params) {
    return await request().post('/bookmark/', {
        params
    })
}

export async function fetchUserNovels(id) {
    return await request().get('/bookmark/' + id)
}