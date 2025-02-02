import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigService } from '../../shared/services/config.service';
import { LoggerService } from '../../shared/services/logger.service';
import { RedisService } from '../../shared/services/redis.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
    controllers: [UserController],
    providers: [
        UserService,
        UserRepository,
        LoggerService,
        RedisService,
        ConfigService
    ],
    exports: [UserService]
})
export class UserModule implements NestModule {
    // Configure User middlewares here
    configure(consumer: MiddlewareConsumer) {
        /* consumer.apply(Cache).forRoutes('*'); */
    }
}
