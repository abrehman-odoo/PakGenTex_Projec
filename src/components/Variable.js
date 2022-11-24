const url = 'https://e728-185-202-239-227.ngrok.io'
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

const categories = [
    {
        name:"Written Discourse",
        subcategories:[
            {
                name:"Academic Discourse",
                subcategories:[
                    {
                        name:"PHD Theses"  
                    },
                    {
                        name:"MPHIl Synopsis"
                    },
                    {
                        name:"Research Articles"
                    },
                    {
                        name:"Textbooks"
                    }

                ]
            },
            {
                name:"Literary Discourse",
                subcategories:[
                    {
                        name: "Autobiographies"
                    },
                    {
                        name: "Novels"
                    },
                    {
                        name: "Short stories"
                    },
                    {
                        name: "Translated Short Stories"
                    }
                ]
            },
            {
                name:"Media Discourse",
                subcategories:[
                    {
                        name:"Book reviews"
                    },
                    {
                        name:"Newspaper Articles"
                    },
                    {
                        name:"Magazine Articles"
                    },
                    {
                        name:"Editorials"
                    },
                    {
                        name:"Newspaper Blogs"
                    }
                ]
            },
        ]
    },
    {
        name:"Spoken Discourse",
        subcategories:[
            {
                name:"Academic Discourse",
                subcategories:[
                    {
                        name:"MPHIl Synopsis Presentation"
                    },
                    {
                        name:"Classroom lectures",
                    },
                    {
                        name: "Conference Presentations"
                    }
                ]
            },
            {
                name:"Media Discourse",
                subcategories:[
                    {
                        name:"Motivational speech"
                    }
                ]
            },
        ]
    },
]
module.exports = {
    url,
    headers,
    categories
}