import {
    request
} from '../../../utils/api'

export async function fetchBookmarkedNovels(id) {
    return await request().get('/bookmark/user/' + id)
}

export async function checkNovelBookmark(params) {
    return await request().get('/bookmark/novel', {
        params
    })
}
