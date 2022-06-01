import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signIn() {
        return { msg: 'I have signed in!'}
    }

    signUp() {
        return { msg: 'I have signed up!'}
    }

    gastronomicTours() {
        return {
            cityId: 1,
            cityName: "Rio de Janeiro",
            cityAlias: "rio",
            tourTopics: [
                {
                    tittle: "Confeitaria Colombo",
                    description: "Patrimônio cultural, há 126 anos reúne histórias por meio da gastronomia."
                }
            ]
        }
}
}