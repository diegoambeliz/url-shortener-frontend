export interface LinkViewResponse {
    id: string,
    description: string,
    link: string,
    shortLink: string,
    viewsCount: number,
    createdAt: Date,
}

export class LinkCreateRequest {
    public description: string = null!;
    public link: string = null!;
}