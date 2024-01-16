import { atom, selector } from "recoil";

// type categories = 'TODO'|'DOING'|'DONE';
// type은 단순 복사일 뿐, enum을 사용해보자
export enum Categories {
  // 'TODO', //0
  // // 'TODO'= 'todolist',  // 이아디를 숫자가 아닌 지정도 가능
  // 'DOING', //1
  // 'DONE' //2
  'TODO'='TODO',
  'DOING'='DOING',
  'DONE'='DONE',
}

export interface ITodo{
    id: number;
    text: string;
    category: Categories
}
export const toDoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const todoSelector = selector({
  key: 'getTodoSelector',
  get: ({get})=>{
    const todos = get(toDoState)
    return [
      todos.filter(x=>x.category===Categories.TODO),
      todos.filter(x=>x.category===Categories.DOING),
      todos.filter(x=>x.category===Categories.DONE)
    ]
  }
})

export const categoryState = atom<Categories>({
  key: 'category',
  // default: 'TODO'
  // 이렇게 작성하는게 보호받을 수 있음
  default: Categories.TODO
})

export const categorySelector = selector({
  key: 'getCateogyList',
  get: ({get})=>{
    const todos = get(toDoState);
    const category = get(categoryState);
    console.log('todos', todos);
    console.log('category', category);
    console.log(todos.filter(x=>x.category === category))
    return todos.filter(x=>x.category === category)
    
  },
})