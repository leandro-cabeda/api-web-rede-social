import React from 'react';

export default props => {
    return (
        <div className="container mb-3 mt-3">
            <div className="align-items-center d-flex row">
                <div className="col-2 col-lg-1 d-flex justify-content-center p-0">
                    <a id="search" className="h4 mb-0 p-1 w-75" href="/" onClick={props.click} >Home</a>
                </div>
                <div className="col-3 col-lg-1 d-flex justify-content-center p-0">
                    <a className="h4 mb-0" >Social</a>
                </div>
                <div className="col-7 col-lg-10 align-self-center p-0">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="p-1 border-1"
                        value={props.value}
                        onChange={props.change}
                        style={{ borderRadius: "10px" }}
                    />
                </div>
            </div>
        </div>
    )
}