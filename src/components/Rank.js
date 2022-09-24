import axios from "axios";
import { useState, useEffect } from "react";

const Rank = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [filter, setFilter] = useState("");

  const getData = async () => {
    const res = await axios.get("https://rank.id/test/article/");
    setDatas(res.data);
  };

  const searchData = async () => {
    const res = await axios.get(`https://rank.id/test/article/?id=${query}`);
    setData(res.data);
    setQuery("");
  };

  useEffect(() => {
    getData();
    searchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-3">
      <div className="row justify-content-between">
        <div className="col-3">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by title or author"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="d-flex gap-2 col-9">
          <input
            type="text"
            placeholder="Pilih Nomor ID dari 1 sampai 5"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => searchData(query)} className="btn btn-danger">
            Search
          </button>
        </div>
      </div>

      <div className="mt-4">
        {!data ? (
          datas
            .filter(
              (item) =>
                item.title.toLowerCase().includes(filter) ||
                item.author.toLowerCase().includes(filter)
            )
            .map((item, index) => (
              <div key={index}>
                <h1>{item.title}</h1>
                <p style={{ textAlign: "justify" }}>{item.content}</p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <p>
                      <span className="badge bg-warning">
                        {item.publish}-{item.update}
                      </span>
                    </p>
                  </div>
                  <div className="d-flex">
                    <p>
                      <span className="badge bg-danger p-2">{item.author}</span>
                    </p>
                  </div>
                </div>
                <hr className="border border-danger border-2 opacity-100" />
              </div>
            ))
        ) : (
          <div>
            <h1>{data.title}</h1>
            <p style={{ textAlign: "justify" }}>{data.content}</p>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p>
                  <span className="badge bg-warning">
                    {data.publish}-{data.update}
                  </span>
                </p>
              </div>
              <div className="d-flex">
                <p>
                  <span className="badge bg-danger p-2">{data.author}</span>
                </p>
              </div>
            </div>
            <hr className="border border-danger border-2 opacity-100" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Rank;
