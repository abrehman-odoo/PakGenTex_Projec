const url = 'https://api.pakgentext.com'
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
                        name:"PHD Theses",
                        subcategories:[
                            {
                                name:"MALE"
                            },
                            {
                                name:"FEMALE"
                            }
                        ]  
                    },
                    {
                        name:"MS Research Proposal Corpus",
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
                        name:"Research Articles",
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
                        name:"Pakistani Textbooks",
                        subcategories:[
                            {
                                name:"Male"
                            },
                            {
                                name:"Female"
                            }
                        ]
                    }

                ]
            },
            {
                name:"Literary Discourse",
                subcategories:[
                    {
                        name: "Autobiographies",
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
                        name: "Novels",
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
                        name: "Short stories",
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
                        name: "Translated Short Stories",
                        subcategories:[
                            {
                                name:"Male"
                            },
                            {
                                name:"Female"
                            }
                        ]
                    }
                ]
            },
            {
                name:"Media Discourse",
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
                        name:"Magazine Articles",
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
                        name:"Editorials",
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
                        name:"Newspaper Blogs",
                        subcategories:[
                            {
                                name:"Male"
                            },
                            {
                                name:"Female"
                            }
                        ]
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
                        name:"MPHIl Synopsis Presentation",
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
                        name: "Conference Presentations",
                        subcategories:[
                            {
                                name:"Male"
                            },
                            {
                                name:"Female"
                            }
                        ]
                    }
                ]
            },
            {
                name:"Media Discourse",
                subcategories:[
                    {
                        name:"Motivational speech",
                        subcategories:[
                            {
                                name:"Male"
                            },
                            {
                                name:"Female"
                            }
                        ]
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