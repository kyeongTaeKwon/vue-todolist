const state = {
  header: "Todo Module",
  todolist: [],
};

const getters = {
  todoCount: (state) => {
    return state.todolist.length;
  },
};

const mutations = {
  addTodo(state, value) {
    const newTodoItem = { completed: false, value };
    state.todolist.push(newTodoItem);
  },
  onComplete(state, target) {
    const targetItem = state.todolist[target];
    state.todolist.splice(target, 1, {
      ...targetItem,
      completed: !targetItem.completed,
    });
  },
  onDeleteTodo(state, target) {
    state.todolist.splice(target, 1);
  },
  clearAll(state) {
    state.todolist = [];
  },
};

export default { namespaced: true, state, getters, mutations };
