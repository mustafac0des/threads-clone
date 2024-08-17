import { Container } from "@chakra-ui/react";

import { Navigate, Route, Routes } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import FeedPage from "./pages/FeedPage";
import Header from "./components/Header";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";

const App = () => {
  const user = useRecoilValue(userAtom);

  return (
    <Container
      w={["full", "480px", "576px", "768px", "992px", "1280px"]}
      centerContent
      className={"darkBlack"}
    >
      {user && <Header user={user} />}
      <Routes>
        <Route
          path={"/auth"}
          element={!user ? <AuthPage /> : <Navigate to={"/"} />}
        />
        <Route
          path={"/"}
          element={user ? <FeedPage user={user} /> : <Navigate to={"/auth"} />}
        />
        <Route path={"/:username"} element={<UserPage user={user} />} />
        <Route
          path={"/:username/post/:pid"}
          element={<PostPage user={user} />}
        />
      </Routes>
    </Container>
  );
};

export default App;
