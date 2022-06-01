import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ToursModule } from './tours/tours.module';


@Module({
  imports: [AuthModule, UserModule, BookmarkModule, ToursModule],
})
export class AppModule {}
