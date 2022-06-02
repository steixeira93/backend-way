import { Injectable } from "@nestjs/common";

@Injectable()
export class ToursService {
    cultural() {
        return { msg: 'Aqui aparecerá os passeios culturais.'}
    }
}