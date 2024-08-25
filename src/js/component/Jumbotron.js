import React from "react";
const Jumbotron = () => {
    return (
        <div container w-100 text-center>
            <div className="row">
                <div className="col-12">
                    <div className="jumbotron  bg-light rounded-3">
                        <div className="container-fluid p-3">
                            <h1 className="display-5 fw-bold w-50">A WARM WELCOME!</h1>
                            <p className="col-md-8 fs-4">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. Quisque finibus lorem a libero consectetur, at porta ipsum tincidunt. Curabitur ullamcorper fringilla quam, id mollis nibh molestie eget. Donec euismod sapien nulla.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};








export default Jumbotron;