import { FC } from "react"
import "./../Home/Home.scss"
import Like from "../../svg/like";
import Comment from "../../svg/comment";
import Share from "../../svg/share";
import Send from "../../svg/send";

const Post: FC = () => {
    return (
        <div className="posts">
            <div className="post-header">
                <div className="title"><span>Sunny R</span> likes this</div>
                <button className="more-btn">...</button>
            </div>
            <div className="post-body">
                <div className="user-info">
                    <div className="avatar">
                        <strong>Rakhi Tripathi</strong>
                        <h6>Frontend Developer, Amazon, Gurgaon</h6>
                    </div>
                    <button className="follow-btn">+ Follow</button>
                </div>
                <div className="post-detail">
                    <p>
                        I m extremely happy and excited to share my most satisfactory research achievement
                        till date. A few weeks back I have made my feature live with Amazon Alexa latest generation.
                        It is updated with improved audio and speech recognition. It will now recognize voice 4X times
                        better than 3rd Gen.
                    </p>
                    <div className="post-uploaded"></div>
                </div>
            </div>
            <div className="post-footer">
                <button><Like /> Like</button>
                <button><Comment />Comment</button>
                <button><Share />Share</button>
                <button><Send />Send</button>
            </div>
        </div>
    )
}

export default Post
