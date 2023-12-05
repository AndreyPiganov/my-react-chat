import registrationSchema from './registrationSchema.js';
import authSchema from './authSchema.js';

export default class Validator {
    registration(){
        return registrationSchema();
    }
    authefication(){
        return authSchema();
    }
}