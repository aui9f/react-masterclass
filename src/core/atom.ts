import { atom, selector } from "recoil";


export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
  "ALL" = "ALL",
}
export interface ITodo{
  id: number
  text: string
  category: 'TO_DO' | 'DOING' | 'DONE' | 'ALL'
  updateAt?: number
}

export const todosAtom = atom<ITodo[]>({
  key: 'todos',
  default: []
})

export const categoryState = atom<Categories>({
  key: 'cagegory',
  default: Categories.ALL
})

export const selectedList = selector({
  key: 'selectedTodoList',
  get: ({get})=>{
    const allTodos = get(todosAtom);
    const selected = get(categoryState);
    
    if(selected===Categories.ALL){
      return allTodos;
    }else{
      return allTodos.filter(todo=>todo.category === selected);
    }
  }
})