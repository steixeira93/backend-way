import { Injectable } from "@nestjs/common";

@Injectable({})
export class ToursService{
    cultural() {
        return { cities: [{
            cityId: 1,
            cityName: 'Rio de Janeiro',
            cityAlias: 'rio,',
            tourTopics: {
                tittle: 'Museu do Amanhã',
                description: '...',
                picture: '...'
        }
        },
        {
            cityId: 2,
            cityName: 'Vassouras',
            cityAlias: 'vassouras',
            tourTopics: [
                {
                    tittle: "Palacete Barão de Itambé",
                    description: "...",
                    picture: "..."
                },
                {
                    tittle: "Antiga Estação Ferroviária de Vassouras",
                    description: "...",
                    picture: "..."
                },
                {
                    tittle: "Centro Cultural Cazuza",
                    description: "...",
                    picture: "..."
                },
                {
                    title: "Memorial Manoel Congo",
                    description: "...",
                    picture: "..."
                },
                {
                    tittle: "Palacete Barão do Ribeirão",
                    description: "...",
                    picture: "..."
                },
                {
                    tittle: "Museu Casa da Hera",
                    description: "...",
                    picture: "..."
                }
            ]
        },
        {
            cityId: 3,
            cityName: 'Miguel Pereira',
            cityAlias: 'miguel',
            tourTopics: {

            }  
        }
    ]
    }
    }
}