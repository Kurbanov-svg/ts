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
            <div className="d-flex justify-content-between">
              <strong>{author}</strong>
              <small className="text-muted">
                {new Date(datetime).toLocaleTimeString()}
              </small>
            </div>
            <div>{message}</div>
          </div>
        ))
      ) : (
        <div>Сообщений нет</div>
      )}
    </div>
  );
};

export default MessageList;
