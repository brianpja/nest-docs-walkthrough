export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class ListAllEntities {
  limit: number;
}

export class UpdateCatDto {
  id: string;
  name: string;
  age: number;
  breed: string;
}