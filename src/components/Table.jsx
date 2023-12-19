import { data } from "./utils/data";

const Table = () => {
  return (
    <div className="table-container">
      <table className="table">
        {data.slice(0, 1).map((row, rowIndex) => (
          <tr key={rowIndex} className="table-row">
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                rowSpan={cell[1]}
                colSpan={cell[2]}
                className="table-cell"
              >
                <div>
                  {cell[0].split("\n").map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </div>
              </td>
            ))}
          </tr>
        ))}
        {data.slice(1, 2).map((row, rowIndex) => (
          <tr key={rowIndex} className="table-row">
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                rowSpan={cell[1]}
                colSpan={cell[2]}
                className="table-cell"
              >
                <div className="title">
                  {cell[0].split("\n").map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </div>
              </td>
            ))}
          </tr>
        ))}
        {data.slice(2).map((row, rowIndex) => (
          <tr key={rowIndex} className="table-row">
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                rowSpan={cell[1]}
                colSpan={cell[2]}
                className="table-cell"
              >
                {cell[0]}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
