import angular from 'angular';

import { RegController } from './controllers/register.controller';
import { LoginController} from './controllers/login.controller';
import { UserService} from './services/user.service';



angular
    .module('app.user', [])
    .controller('RegController', RegController)
    .controller('LoginController', LoginController)
    .controller('UserService', UserService);
