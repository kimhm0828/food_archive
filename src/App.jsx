import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "@/components/Home";
import DefaultLayout from "@/layouts/DefaultLayout";
import Header from "@/layouts/Header";
import RestaurantForm from "./components/restaurants/RestaurantForm.jsx";
import {RestaurantProvider} from "./contexts/RestaurantContext.jsx";

function App() {
    return (
        <Router>
            <DefaultLayout>
                <Header/>
                <RestaurantProvider>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/form" element={<RestaurantForm />}/>
                    </Routes>
                </RestaurantProvider>

            </DefaultLayout>
        </Router>
    );
}

export default App;
