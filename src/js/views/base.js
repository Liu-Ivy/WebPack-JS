export const elements = {
  searchForm: document.querySelector(".search"),
  searchInput: document.querySelector(".search__field"),
  searchRes: document.querySelector(".results"),
  searchResList: document.querySelector(".results__list"),
  searchResPages: document.querySelector(".results__pages"),
};

export const elementStrings = {
  loader: "loader", //give the class name
};

export const renderLoader = (parent) => {
  //parent is the results class
  const loader = `
      <div class="${elementStrings.loader}">
          <svg>
              <use href="img/icons.svg#icon-cw"></use>
          </svg>
      </div>
  `;
  parent.insertAdjacentHTML("afterbegin", loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};