import Home from "./components/Home.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

//Create the routes for the existing views
const router = async () => {
  const routes = [
    {
      path: "/",
      view: Home,
    },
  ];

  //Test Routes
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  //TODO: customize the not found 404 if wanted
  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));
  let appContainer = document.querySelector(".app");

  if (appContainer) {
    appContainer.innerHTML = await view.getHtml();
  }

  // Now that the HTML is rendered, you can bind event listeners
  if (typeof view.manageState === "function") {
    view.manageState();
  }
};

window.addEventListener("popstate", router);

/**
 * Add event listeners to all navigation link to prevent
 * default behaviour
 */
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("a[data-link]")) {
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });
  router();
});

/**
 * set active class for all sidebar links
 */
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the active class from all links
    document
      .querySelectorAll(".nav-link")
      .forEach((nav) => nav.classList.remove("active"));

    // Add the active class to the clicked link
    this.classList.add("active");
  });
});
