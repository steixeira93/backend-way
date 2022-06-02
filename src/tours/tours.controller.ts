import { Controller, Post } from "@nestjs/common";
import { ToursService } from "./tours.service";

@Controller('tours')
class ToursController {
    constructor(private tourService: ToursService) {}
    
    @Post('cultural')
    cultural() {
        return this.tourService.cultural();
    }
}