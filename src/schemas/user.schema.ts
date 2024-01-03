import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true,
})
export class User {

    @Prop({required: true})
    user_id: number;

    @Prop({required: true})
    username: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true, default: 0})
    admin_perm: boolean;

    @Prop({required: false})
    avatar: string;
    
}

export const UserSchema = SchemaFactory.createForClass(User);