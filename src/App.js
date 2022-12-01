import Navigationbar from "./components/Navigationbar";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import { Route, Routes } from "react-router-dom";
import Registerpage from "./pages/Registerpage";
import Profilepage from "./pages/Profilepage";
import SinglePost from "./components/SinglePost";
import VisitProfile from "./components/profile/VisitProfile";
import Profile from "./components/profile/Profile";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Registerpage />} />
            <Route path="/profile" element={<Profilepage />} >
                <Route path="/profile/" element={<Profile />} />
                <Route path="/profile/:name" element={<VisitProfile />} />
            </Route>
            <Route path="/posts/:postId" element={<SinglePost />} />
        </Routes>
    );
}

export default App;
