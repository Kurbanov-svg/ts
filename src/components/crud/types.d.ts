interface ITodo {
  _id: string;
  author: string;
  message: string;
  datetime: string;
}

export interface IResponse {
  data: ITodo[];
}

namespace ITODO {
  export type CreateTodoreq = {
    author: string;
    message: string;
  };
  export type CreateTodores = ITodo;
  export type GetTodores = IResponse;
}
