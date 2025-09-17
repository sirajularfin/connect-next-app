export interface IPaginationMeta {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
}

export interface IPaginatedResult<T> {
  items: T[];
  pagination: IPaginationMeta;
}
