import _ from 'lodash'

import {
    request
} from '../../../utils/api'

export async function fetchCategories() {
    return await request().get('/category')
}