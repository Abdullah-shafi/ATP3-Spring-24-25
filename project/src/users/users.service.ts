import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Photo) private myRepo: Repository<Photo>){}
    saveData(data)
    {
       this.myRepo.save(data)
    }
    allData()
    {
        return this.myRepo.find()
    }
    getId(id)
    {
        return this.myRepo.findOne({where:{id}})
    }

    deleteId(id){
        this.myRepo.delete(id)
        return "Deleted"
    }
}
