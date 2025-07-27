export default function Details() {
  return (
    <div className={"column details-column"}>
      <input type={"text"} placeholder={"Your name"} className={"name-input"} />
      <input
        type={"text"}
        placeholder={"Your email"}
        className={"email-input"}
      />
    </div>
  );
}
