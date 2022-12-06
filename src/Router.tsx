import {
    BrowserRouter as Router,
    Route,
    Routes as Switch,
    Navigate,
} from "react-router-dom";
import PrivateRoute from "@components/PrivateRoute";
import PropertieNew from "@views/PropertieNew";
import Login from "@views/Login";
import Home from "@views/Home";
import IndSignUp from "@views/NavBar";
import Propertie from "@views/Properties";
import NotFound from "@views/NotFound";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route
                    path="/home"
                    element={
                        <PrivateRoute allowedRoles={["public", "admin"]}>
                            <Home />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/properties"
                    element={
                        <PrivateRoute allowedRoles={["public", "admin"]}>
                            <Propertie/>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/properties/create"
                    element={
                        <PrivateRoute allowedRoles={["public", "admin"]}>
                            <PropertieNew />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <IndSignUp />
                    }
                />

                <Route path="*" element={<NotFound />} />
            </Switch>
        </Router>
    );
};

export default Routes;