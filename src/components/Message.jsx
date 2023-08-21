function Message(props) {
    const {message} = props;
    console.log(message)
    return (
        <p className="message">
          {message}
        </p>
    );
}

export default Message;