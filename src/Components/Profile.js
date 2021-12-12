
import PropTypes from "prop-types";
const Profile = props => {
    return (
        <div>
            <h1>{props.fullName}</h1>
            <button onClick={props.onPersoClick}> Click me </button>
            <p>{props.bio}</p>
            <h2>{props.profession}</h2>
            {props.children}
                    </div>)
                  
    }
export default Profile;
Profile.defaultProps = {fullName:"my name"};
Profile.propTypes = {
    profession: PropTypes.oneOf(["Basquetball player", "Developper"]),
    fullName : PropTypes.string.isRequired,
    bio : PropTypes.string.isRequired,
    onPersoClick : PropTypes.func.isRequired,
    children: PropTypes.node
   };