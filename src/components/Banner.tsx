import React from 'react'

const Banner = () => {
  return (
    <div className="banner_section layout_padding">
    <div id="main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="banner_taital">Tablates And Phons Repair Service</h1>
                            <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the
                                majority have suffered alteration</p>
                            <div className="btn_main">
                                <div className="read_bt"><a href="#">Read More</a></div>
                                <div className="contact_bt active"><a href="#">Contact US</a></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image_1"><img src="images/img-1.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="banner_taital">Tablates And Phons Repair Service</h1>
                            <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the
                                majority have suffered alteration</p>
                            <div className="btn_main">
                                <div className="read_bt"><a href="#">Read More</a></div>
                                <div className="contact_bt active"><a href="#">Contact US</a></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image_1"><img src="images/img-1.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="banner_taital">Tablates And Phons Repair Service</h1>
                            <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the
                                majority have suffered alteration</p>
                            <div className="btn_main">
                                <div className="read_bt"><a href="#">Read More</a></div>
                                <div className="contact_bt active"><a href="#">Contact US</a></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image_1"><img src="images/img-1.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left" />
        </a>
        <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right" />
        </a>
    </div>
</div>
  )
}

export default Banner
