import {writable} from 'svelte/store'

export const FeedbackStore = writable([

    {
        id: 1,
        rating: 10,
        text: 'This is feedback item 1'
    },
    {
        id: 2,
        rating: 9,
        text: 'This is feedback item 2'
    },
    {
        id: 3,
        rating: 8,
        text: 'This is feedback item 3'
    }
])
