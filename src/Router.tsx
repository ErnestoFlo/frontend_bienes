import {
    BrowserRouter as Router,
    Route,
    Routes as Switch,
    Navigate,
} from "react-router-dom";
import PrivateRoute from "@components/PrivateRoute";
import PropertieNew from "@views/PropertieNew";
import Home from "@views/Home";
//import Propertie from "@views/Properties";
import NotFound from "@views/NotFound";

const Routes = () => {
    return (
        <Router>
            <Switch>
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
                    path="/properties/create"
                    element={
                        <PropertieNew />
                    }
                />

                <Route path="*" element={<NotFound />} />
            </Switch>
        </Router>
    );
};

export default Routes;