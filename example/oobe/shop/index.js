import commodity from './commodity.js'

export default {
    sprites: {
        commodity
    },

    utils: {
        moment
    },

    locales: {
        'en-us': {
            'id': 'Id',
            'tags': 'Tags',
            'name': 'Name',
            'price': 'Price',
            'categories': 'Categories',
            'drink': 'Drink',
            'dailyCommodities': 'Daily Commodities'
        },
        'zh-tw': {
            'no': '編號',
            'tags': '標籤',
            'name': '名稱',
            'price': '售價',
            'categories': '分類',
            'drink': '飲品',
            'dailyCommodities': '日用品'
        }
    },

    configs: {
        commodityCategories: [
            {
                text: 'dailyCommodities',
                value: 'dailyCommodities'
            },
            {
                text: 'drink',
                value: 'drink'
            }
        ]
    }
}
