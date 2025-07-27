export default function Message() {
  return (
    <div className={"column message-column"}>
      <textarea placeholder={"Your message"} id={"message-input"} />
      <button className={"send-button"}>Send</button>
    </div>
  );
}
