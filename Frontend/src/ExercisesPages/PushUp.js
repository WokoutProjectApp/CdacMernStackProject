import React from 'react';
import './PushUp.css'

import video from '../component/videos/Gym.mp4'
const PushUp = () => {

    return (
        <>

            <div className="rightdiv">
                <h1 style={{ paddingTop: 15 }}><u>Push-Ups</u></h1>

                <p className="textPara">
                    The push-up builds both upper-body and core strength ,It has many modifications; beginners can start with easier versions, while more advanced exercisers can use a challenging variation. You can do the push-up as part of a bodyweight exercise session, a circuit training workout, or a strength workout.<br />
                    Get on the floor on all fours, positioning your hands slightly wider than your shoulders. Don't lock out the elbows; keep them slightly bent. Extend your legs back so you are balanced on your hands and toes, your feet hip-width apart.<br />
                    1..Contract your abs and tighten your core by pulling your belly button toward your spine.<br />
                    2..Inhale as you slowly bend your elbows and lower yourself to the floor, until your elbows are at a 90-degree angle.<br />
                    3..Exhale while contracting your chest muscles and pushing back up through your hands, returning to the start position.<br />
                    Keep a tight core throughout the entire push-up. Also, keep your body in a straight line from head to toe without sagging in the middle or arching your back.
                </p>
                <h3 className="texthead">
                    Frequently Asked Questions
                </h3>
                <p style={{ paddingLeft: "10px" }}>What muscles do push-ups work?<br />
                    Done properly, the push-up is a compound exercise that uses muscles in the chest, shoulders, triceps, back, abs, and even the legs.
                </p>
                <p style={{ paddingLeft: "10px" }}>How many push-ups should I do each day?<br />
                    If performed for one minute, push-ups can burn around seven calories, according to the Centers for Disease Control and Prevention (CDC) and the American College of Sports Medicine.
                </p>

                <p className="linkk">
                    <a style={{ fontSize: 20, textDecorationLine: "none", color: "red" }} href="https://youtu.be/IODxDxX7oi4">For more info visit this link</a>
                </p>
            </div>
            <div style={{ height: "88vh", width: "45%", float: "left" }}>
                <div className="hero">
                    <video className="video1" src={video} autoPlay loop muted />
                </div>
            </div>
        </>
    )
}

export default PushUp;
