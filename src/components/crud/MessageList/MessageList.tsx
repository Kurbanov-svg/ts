import { useGetQuery } from "../ChatApp";

const MessageList = () => {
  const { data: dataList, isLoading, error } = useGetQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки сообщений</div>;

  return (
    <div
      className="bg-dark text-white p-3 rounded"
      style={{ maxHeight: "60vh", overflowY: "auto" }}
    >
      {dataList && dataList?.length > 0 ? (
        dataList.map(({ _id, author, message, datetime }) => (
          <div key={_id} className="mb-3 border-bottom pb-2">
            <div className="d-flex justify-content-between align-items-center">
              <strong>Author:{author}</strong>
              <small
                style={{
                  color: "#ffffff",
                  fontStyle: "italic",
                  fontSize: "0.75rem",
                  marginLeft: "10px",
                }}
              >
                {new Date(datetime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
            <div>Message: {message}</div>
          </div>
        ))
      ) : (
        <div>Сообщений нет</div>
      )}
    </div>
  );
};

export default MessageList;
