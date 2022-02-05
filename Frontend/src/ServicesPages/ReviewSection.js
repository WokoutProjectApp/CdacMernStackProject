import React from 'react';

import './ReviewSection.css';

//images
import img1 from '../component/images/homee.jpg'

function ReviewSection() {
    return (
        <>
            <div className="divv">
                <h2 style={{ textAlign: "center", paddingTop: 20 }}>People Reviews About Us...!!</h2>
                <p style={{ textAlign: "center", paddingTop: 10 }}>Make Your Decision .</p>

                <div className="containerdiv">
                    <img style={{ width: '90px', height: '90px' }} src={img1} alt="BigCo Inc. logo" />
                    <h2 style={{ paddingTop: 14 }}>Keanu Reevs</h2>
                    <h4 style={{ paddingTop: 15 }}>i am in shape thanks to FitHit</h4>
                </div>


                <div className="containerdiv">
                    <img style={{ width: '90px', height: '90px' }} src={img1} alt="BigCo Inc. logo" />
                    <h2 style={{ paddingTop: 14 }}>Keanu Reevs</h2>
                    <h4 style={{ paddingTop: 15 }}>i am in shape thanks to FitHit</h4>
                </div>

                <div className="containerdiv">
                    <img style={{ width: '90px', height: '90px' }} src={img1} alt="BigCo Inc. logo" />
                    <h2 style={{ paddingTop: 14 }}>Keanu Reevs</h2>
                    <h4 style={{ paddingTop: 15 }}>i am in shape thanks to FitHit</h4>
                </div>
                <div className="containerdiv">
                    <img style={{ width: '90px', height: '90px' }} src={img1} alt="BigCo Inc. logo" />
                    <h2 style={{ paddingTop: 14 }}>Keanu Reevs</h2>
                    <h4 style={{ paddingTop: 15 }}>i am in shape thanks to FitHit</h4>
                </div>

            </div>
        </>
    )
}

export default ReviewSection;
