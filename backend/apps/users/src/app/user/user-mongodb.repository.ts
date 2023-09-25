import {Injectable} from "@nestjs/common";
import {CRUDRepository} from "@backend/util/util-types";
import {UserEntity} from "./user.entity";
import {User} from "@backend/shared/app-types";
import {InjectModel} from "@nestjs/mongoose";
import {UserModel} from "./user.model";
import {Model} from "mongoose";

@Injectable()
export class UserMongoDBRepository implements CRUDRepository<UserEntity, string, User> {
    constructor(
        @InjectModel(UserModel.name) private readonly userModel: Model<UserModel>
    ) {
    }

    public async create(item: UserEntity): Promise<User> {
        const newBlogUser = new this.userModel(item);
        return newBlogUser.save();
    }

    public async destroy(id: string): Promise<void> {
        this.userModel.deleteOne({id});
    }

    public async findById(id: string): Promise<User | null> {
        return this.userModel
            .findOne({_id: id})
            .exec();
    }

    public async findByEmail(email: string): Promise<User | null> {
        return this.userModel
            .findOne({email})
            .exec();
    }

    public async update(id: string, item: UserEntity): Promise<User> {
        return this.userModel
            .findByIdAndUpdate(id, item.toObject(), {new: true})
            .exec();
    }


}
