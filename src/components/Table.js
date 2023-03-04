import './styles/Table.css';

function header(content) {
  if (content === undefined || content === null) return
  return <tr>
      {content.map((el) => {
        return <th>{el}</th>;
      })}
    </tr>
}

export default function Table({ tb }) {
  return (
    <div className="Table">
      <table>
        <thead>
          {header(tb.header)}
        </thead>
        <tbody>
          {tb.rows.map((row) => {
            return (
              <tr>
                {row.map((el) => {
                  return <td>{el}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
