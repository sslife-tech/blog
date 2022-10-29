import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'SSLife Tech',
    title: 'SSLife Tech',
    description: 'しょうちゃんとしおりんのブログ',
    url: 'https://www.sslife.tech',
    githubUrl: 'https://github.com/sslife-tech/blog',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
