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
            tourTopics: {
                name: 'Museu do blabla',
                description: '...',
                picture: '...'
            }
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