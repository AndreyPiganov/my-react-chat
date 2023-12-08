import registrationSchema from './registrationSchema.js';
import authSchema from './authSchema.js';

export default class Validator {
    static registration(){
        return registrationSchema;
    }
    static login(){
        return authSchema;
    }
}