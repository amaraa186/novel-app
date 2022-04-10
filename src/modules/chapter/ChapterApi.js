import {
    request
} from '../../../utils/api'

export async function fetchRecentlyChapters() {
    return await request().get('/chapter/recently')
}

export async function fetchChapter(id) {
    return await request().get('/chapter/' + id)
}

export async function fetchNovelChapters(novel_id) {
    return await request().get('/chapter/novel/' + novel_id)
}