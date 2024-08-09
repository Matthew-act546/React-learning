
function ProfilePicture() {
    const imageUrl = 'https://via.placeholder.com/150';

    const handleClick = (e) => e.target.style.display = 'none';

    return (<img onClick={(e) => handleClick(e)} src={imageUrl}></img>) 
}

export default ProfilePicture