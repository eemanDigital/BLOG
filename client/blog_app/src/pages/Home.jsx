import { Link } from "react-router-dom";
// import image1 from "../images/image1.jpg";
// import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpeg";
import image6 from "../images/image6.jpeg";
import image7 from "../images/image7.jpeg";

function Home() {
  const posts = [
    {
      id: 1,
      title: "Physiotherapy Session 1",
      desc: "A one-on-one physiotherapy session to assess your needs and develop a personalized treatment plan.",
      img: image6,
    },
    {
      id: 2,
      title: "Rehabilitation Exercise Class",
      desc: "Join our group rehabilitation exercise class for strength and flexibility training.",
      img: image7,
    },
    {
      id: 3,
      title: "Pain Management Consultation",
      desc: "Consult with our experienced physiotherapist to discuss and manage chronic pain conditions.",
      img: image3,
    },
    {
      id: 4,
      title: "Sports Injury Rehabilitation",
      desc: "Tailored physiotherapy for athletes recovering from sports-related injuries.",
      img: image4,
    },
    {
      id: 5,
      title: "Elderly Mobility Program",
      desc: "A program designed to enhance mobility and balance in elderly individuals.",
      img: image5,
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                  <p>{post.desc}</p>
                </Link>

                <button>Read More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
