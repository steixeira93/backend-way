import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ToursModule } from './tours/tours.module';


@Module({
  imports: [AuthModule, UserModule, ToursModule],
})
export class AppModule {}
