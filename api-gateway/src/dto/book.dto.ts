import { IsString, IsInt, } from "class-validator";

export class BookDto {
    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsInt()
    publication_year: number;

    @IsString()
    genre: string;
}