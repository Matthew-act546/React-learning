import PropTypes from 'prop-types';

function UserGreeting(props) {

    const welcomeMessage = <h2 className='welcome-message'>Welcome {props.username}</h2>;
    const loginPrompt = <h2 className='login-prompt'>Please log in to continue....</h2> ;

    return(props.isLogIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    isLogIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLogIn: false,
    username: "Guest",
}

export default UserGreeting