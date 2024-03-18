export interface IPagination<T> {
    total_pages?: number;
    page: number;
    results: T[]
}