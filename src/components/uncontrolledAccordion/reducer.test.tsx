import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer";

test("collapsed should be true", () => {
  // data - данные
  // action - действие
  // expect - ожидание

  const state: StateType = {
    collapsed: false,
  };

  const newState = reducer(state, { type: TOGGLE_COLLAPSED });

  expect(newState.collapsed).toBe(true);
});

test("collapsed should be false", () => {
    // data - данные
    // action - действие
    // expect - ожидание
    
    const state: StateType = {
      collapsed: true,
    };
  
    const newState = reducer(state, { type: TOGGLE_COLLAPSED });
  
    expect(newState.collapsed).toBe(false);
  });

  test("reducer should throw error because action type is incorrect", () => {
    // data - данные
    // action - действие
    // expect - ожидание
    
    const state: StateType = {
      collapsed: true,
    };
  
    expect(()=>{reducer(state, { type: 'FAKE_TYPE' })}).toThrowError() 
  
    
  });
