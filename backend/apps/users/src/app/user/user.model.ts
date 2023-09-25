import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from 'mongoose';
import {User} from "@backend/shared/app-types";

@Schema({
    collection: 'users',
    timestamps: true
})
export class UserModel extends Document implements User {
    @Prop({
        required: true,
    })
    public name: string;

    @Prop({
        required: true,
    })
    public passwordHash: string;

    @Prop({
        unique: true,
        required: true,
    })
    public email: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
