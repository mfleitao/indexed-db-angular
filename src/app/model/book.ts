
export class Book {
    _id: number;
    isbn: number;
    title: string;
    pageCount: number;
    thumbnailUrl: string;
    shortDescription: string;
    longDescription: string;
    publishedDate: Date;
    status: string;
    authors: Array<string>;
    categories: Array<string>;
}
