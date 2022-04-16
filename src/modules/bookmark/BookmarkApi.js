import {
    request
} from '../../../utils/api'


export async function fetchBookmarkedNovels(params) {
    return await request().get('/bookmark/bookmarked_books', {
        params
    })
}
