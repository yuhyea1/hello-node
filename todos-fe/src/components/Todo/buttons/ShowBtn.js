import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ShowBtn = (props) => {
  return (
    <>
      <Link to={`/todo/${props.itemId}`} className="card-footer-item">
        <FontAwesomeIcon icon={faEye} className="mr-2" />
        Show
      </Link>
    </>
  );
};

export default ShowBtn;
