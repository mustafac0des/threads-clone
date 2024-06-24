import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import UserPage from "./pages/UserPage";
// import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <Container maxW={1040} centerContent>
      <Header />
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        {/* <Route path="/:username/post/:pid" element={<PostPage />} /> */}
      </Routes>
    </Container>
  );
};

export default App;
