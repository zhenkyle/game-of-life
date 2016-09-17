import React, {PropTypes} from 'react';

function Line({data}) {
  return (
    <tr>
      {data.map((cell, j) =>
        <Cell key={j} data={cell}/>
      )}
    </tr>
);}

Line.propTypes = {
  data: PropTypes.array.isRequired
};

function Cell({data}) {
  if (data[0] === 0) {
    return <td></td>;
  } else if (data[1] === false) {
    return <td className="alive"></td>;
  }
  return <td className="newbron"></td>;
}

Cell.propTypes = {
  data: PropTypes.array.isRequired
};

function MainSection({world}) {
  return (<div className="HolyGrail-body">
    <main className="HolyGrail-content">
      <table>
        <tbody>
          {world.map((line, i) =>
            <Line key={i} data={line}/>)}
        </tbody>
      </table>
    </main>
  </div>
);}

MainSection.propTypes = {
  world: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
