const url = 'https://e728-185-202-239-227.ngrok.io'
const headers ={
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

const categories = [
    {
        name:"Written",
        subcategories:[
            {
                name:"Academic",
                subcategories:[
                    {
                        name:"PHD Theses",
                        subcategories:[
                            {
                                name:"Male"
                            },
                            {
                                name:"Female"
                            }
                        ]
                    },
                    {
                        name:"MPHIl reserch proposal",
                        subcategories:[]
                    },
                    {
                        name:"Research Articles",
                        subcategories:[]
                    },
                    {
                        name:"Pakistani Textbooks",
                        subcategories:[]
                    }

                ]
            },
            {
                name:"Arts & Literature",
                subcategories:[
                    {
                        name:"Autobiographies",
                        subcategories:[
                            {
                                name:"Male"
                            },
                            {
                                name:"Female"
                            }
                        ]
                    },
                    {
                        name:"Novels",
                        subcategories:[]
                    },
                    {
                        name:"Short stories",
                        subcategories:[]
                    },
                    {
                        name:"Translated Short Stories",
                        subcategories:[]
                    }
                ]
            },
            {
                name:"Media",
                subcategories:[
                    {
                        name:"Book reviews",
                        subcategories:[
                            {
                                name:"Male"
                            },
                            {
                                name:"Female"
                            }
                        ]
                    },
                    {
                        name:"Newspaper Articles",
                        subcategories:[]
                    },
                    {
                        name:"Magazine Articles",
                        subcategories:[]
                    },
                    {
                        name:"Newspaper Blogs",
                        subcategories:[]
                    }
                ]
            },
        ]
    },
    {
        name:"Spoken",
        subcategories:[
            {
                name:"MPHIl Synopsis defence presentations",
                subcategories:[
                    {
                        name:"Male"
                    },
                    {
                        name:"Female"
                    }
                ]
            },
            {
                name:"Classroom lectures",
                subcategories:[
                    {
                        name:"Male"
                    },
                    {
                        name:"Female"
                    }
                ]
            },
            {
                name:"Conference presentations",
                subcategories:[]
            },
            {
                name:"Motivational speech",
                subcategories:[]
            }
        ]
    },
]
module.exports = {
    url,
    headers,
    categories
}