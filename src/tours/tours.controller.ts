import { Controller, Get, Post } from "@nestjs/common";
import { ToursService } from "./tours.service";

@Controller('tours')
export class ToursController {
    constructor(private toursService: ToursService) {}
    
    @Post('cultural')
    cultural() {
        return this.toursService.cultural();
    }
}