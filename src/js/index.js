import Search from "./models/Search";

/** Global state for the app
 * - Search object
 * - Current recipe object
 * - Shopping lish object
 * - Like recipes
 */
const state = {};

const controlSearch = async () => {
  //1)get query from view
  const query = "pizza";

  if (query) {
    //2) New search object and add to state
    state.search = new Search(query);
    //3) prepare UI for results

    //4) Search for recipes;
    await state.search.getResults();

    //5) Render results in UI
    console.log(state.search.result);
  }
};

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
