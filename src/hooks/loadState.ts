export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};


export const saveState = (state: any) => {
  try {
    const serialisedState = JSON.stringify(state);
    console.log(serialisedState)
    localStorage.setItem("movie", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};