export default{
    name: 'diskon',
    title: "diskon",
    type: "document",
    fields: [

        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'name',
            type: 'string'
        }
        ,{
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maaxLength: 90
            }
        },
        {
            name: 'price',
            title: 'price',
            type: 'number'
        },
        {
            name:'details',
            title: 'details',
            type: 'string'
        }

    ]
}