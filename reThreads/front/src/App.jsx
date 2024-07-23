import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import FeedPage from "./pages/FeedPage";
import Header from "./components/Header";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.match("/auth");

  return (
    <Container
      minW={["full", "480px", "576px", "768px", "992px", "1280px"]}
      centerContent
      className={"background"}
    >
      {!isAuthPage && <Header />}
      <Routes>
        <Route path={"/auth"} element={<AuthPage />} />
        <Route path={"/"} element={<FeedPage />} />
        <Route path={"/:username"} element={<UserPage />} />
        <Route path={"/:username/post/:pid"} element={<PostPage />} />
      </Routes>
    </Container>
  );
};

export default App;
