import {
    BrowserRouter as Router,
    Route,
    Routes as Switch,
    Navigate,
} from "react-router-dom";
import PrivateRoute from "@components/PrivateRoute";
import PropertieNew from "@views/PropertieNew";
//import Propertie from "@views/Properties";
import NotFound from "@views/NotFound";

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route
                    path="/properties/create"
                    element={
                        <PrivateRoute allowedRoles={["public", "admin"]}>
                            <PropertieNew/>
                        </PrivateRoute>
                    }
                />

                <Route path="*" element={<NotFound/>} />
            </Switch>
        </Router>
    );
};

export default Routes;