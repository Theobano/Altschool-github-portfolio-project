import "./App.css";
import { ErrorFallback, Loader, NavBar, NavigationDrawer } from "./components";
import { userDataContext, navigationContext } from "./contexts";
import React, { Suspense, useState } from "react";
import { fetchGithubUser } from "./services";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

export const userResource = fetchGithubUser();

const Home = React.lazy(() => import("./pages/Home"));
const Repos = React.lazy(() => import("./pages/Repos"));
const Repo = React.lazy(() => import("./pages/Repos/Repo"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const TestError = React.lazy(() => import("./pages/TestError"));

function App() {
  const [userData, setUserData] = useState({});
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <userDataContext.Provider value={[userData, setUserData]}>
      <div className="App">
        <navigationContext.Provider value={[navIsOpen, setNavIsOpen]}>
          <NavBar />
          <NavigationDrawer />
        </navigationContext.Provider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/repos" element={<Repos />}>
              <Route
                path="/repos/:repoName"
                element={
                  <Suspense fallback={<Loader />}>
                    <Repo />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="testerror"
              element={
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <TestError />
                </ErrorBoundary>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </userDataContext.Provider>
  );
}

export default App;
