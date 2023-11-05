import { Link } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import Menu from "../components/Menu";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpg";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src={image1} alt="" />

        <div className="user">
          <img src={image2} alt="" />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className="link" to={"/write?edit=2"}>
              <h4>
                edit{" "}
                <BiSolidEditAlt style={{ fontSize: "18px", color: "purple" }} />
              </h4>
            </Link>
            <h4>
              delete{" "}
              <AiFillDelete style={{ fontSize: "18px", color: "purple" }} />
            </h4>
          </div>
        </div>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, quibusdam?
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
          repellendus reiciendis asperiores deleniti itaque quo dicta. Unde
          expedita ea, perspiciatis mollitia recusandae praesentium odit
          facilis, distinctio dolorem fugiat dicta odio perferendis animi ipsum,
          nulla iure quod voluptatem laboriosam totam aliquid.
          <br />
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nemo
            est repellat quo eos quos accusantium, dolores maxime impedit sed
            perspiciatis nisi officia, architecto amet esse quia illo porro quod
            voluptatem deleniti recusandae magnam repellendus. Quos repellendus
            voluptates enim ex, dignissimos nostrum minus illo? Animi placeat
            quos officiis amet maiores quo ad, quam illum totam aliquam, numquam
            sequi hic, ipsa dignissimos iste deserunt nobis sed quae? Ab
            doloremque harum temporibus corrupti explicabo quae quis voluptatum,
            a rem eaque maxime est neque nobis reiciendis eum saepe facilis
            veritatis necessitatibus. Reprehenderit dolores provident et
            veritatis suscipit tempora magni eveniet iusto maiores? Enim!
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
