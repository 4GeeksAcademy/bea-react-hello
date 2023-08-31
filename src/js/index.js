//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import NavBar from "./component/navBar.jsx";
import Card from "./component/card.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Footer from "./component/footer.jsx";

const Home = () => {
	return ( 
        <>
            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Jumbotron />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Card imgUrl={'https://www.ngenespanol.com/wp-content/uploads/2023/01/koala-el-marsupial-que-mantiene-la-salud-de-los-bosques-australianos.jpg'} title={'Koala 1'}/>
                       
                    </div>
                    <div className="col-md-3">
                       
                        <Card imgUrl={'https://img2.rtve.es/i/?w=1600&i=1503398815734.jpg'} title={'Koala 2'}/>

                    </div>
                    <div className="col-md-3">
                      
                        <Card imgUrl={'https://www.semana.com/resizer/IqA8coA4WAqleZITgYfohdlCkyg=/1200x646/filters:format(jpg):quality(50)/cloudfront-us-east-1.images.arcpublishing.com/semana/LILUKWXW3ZE2HKFSZWAIQYORF4.jpg'} title={'Koala 3'}/>

                    </div>
                    <div className="col-md-3">
                       
                        <Card imgUrl={'https://dingoos.com/wp-content/uploads/2018/07/lugares-para-ver-koalas-en-australia.jpg'} title={'Koala 4'}/>
                    </div>
                </div>

            </div>

            <Footer />

        </>
	);
};

export default Home;

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
