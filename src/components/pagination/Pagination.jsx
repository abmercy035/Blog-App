import React, { useEffect } from "react";
import Back from "../navigate/Backward";
import Forward from "../navigate/Forward";
import "./pagination.css";
export default function Pagination({ pages, pagination, list, Func }) {
  var arr = [];
  for (var i = 1; i <= pages; i++) {
    arr.push(i);
  }

  return (
    <div key={Math.floor(Math.random() * 500)} id="pagination">
      {pagination < 4 ? null : <Back Func={() => Func(pagination - 1)} />}
      <div className="pagination-btn">
        {arr.map((num, id) =>
          pagination - 4 < id && id <= pagination + 1 ? (
            <button
              style={
                pagination === id + 1
                  ? {
                      color: "#fff",
                      fontWeight: "900",
                      backgroundColor: "#3571f1",
                    }
                  : null
              }
              value={num}
              key={num}
              className="pagination"
              onClick={() => Func(num)}
            >
              {num}
            </button>
          ) : null
        )}
      </div>
      {pagination > pages ? null : (
        <Forward Func={() => Func(pagination + 1)} />
      )}
    </div>
  );
}
