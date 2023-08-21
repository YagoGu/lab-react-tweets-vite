function ProfileImage(props) {
    const {image} = props.userImage;
    return (
        <img src={image} className="profile" alt="profile"/>
    );
}

export default ProfileImage;