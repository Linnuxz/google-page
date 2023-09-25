import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="min-h-[100vh] overflow-hidden">
            <Header />
            <Hero />
            <Footer />
        </div>
    );
};

export default App;
