import { IsNotEmpty } from "class-validator";

export class check{

    @IsNotEmpty()
    id:string
}