import { useState } from "react";
import { useCreateQuery } from "../ChatApp";

const MessageForm = () => {
  const [author, setAuthor] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const { mutateAsync: postPerson } = useCreateQuery();

  const handleCreate = async () => {
    if (!author || !message) return;

    await postPerson({
      author,
      message,
    });

    setMessage("");
    setAuthor("");
  };
  console.log("Отправка:", { author, message });
  return (
    <div className="container p-3">
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Ваше имя"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-control rounded-pill shadow-sm"
          style={{ maxWidth: "200px" }}
        />
        <input
          type="text"
          placeholder="Сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-control rounded-pill shadow-sm flex-grow-1"
        />
      </div>
      <button
        onClick={handleCreate}
        className="btn btn-success w-100 rounded-pill shadow"
      >
        Отправить
      </button>
    </div>
  );
};

export default MessageForm;
