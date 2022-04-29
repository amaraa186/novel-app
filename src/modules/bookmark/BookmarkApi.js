import {
    request
} from '../../../utils/api'


export async function fetchBookmarkedNovels(id) {
    return await request().get('/bookmark/' + id)
}
