import React, {PropTypes} from 'react';
import ControlSection from '../components/ControlSection';
import SizeSection from '../components/SizeSection';
import SpeedSection from '../components/SpeedSection';

function Line({data, y, actions}) {
  return (
    <tr>
      {data.map((cell, j) =>
        <Cell key={j} data={cell} x={j} y={y} actions={actions}/>
      )}
    </tr>
);}

Line.propTypes = {
  data: PropTypes.array.isRequired,
  y: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

function Cell({data, x, y, actions}) {
  const _onClick = () => actions.addPoint(x, y);
  if (data[0] === 0) {
    return <td onClick={_onClick}></td>;
  } else if (data[1] === false) {
    return <td className="alive"></td>;
  }
  return <td className="newbron"></td>;
}

Cell.propTypes = {
  data: PropTypes.array.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

function MainSection({world, status, actions}) {
  return (<div className="HolyGrail-body">
    <main className="HolyGrail-content">
      <ControlSection status={status} actions={actions}/>
      <table>
        <tbody>
          {world.map((line, i) =>
            <Line key={i} data={line} y={i} actions={actions}/>)}
        </tbody>
      </table>
      <SizeSection status={status} actions={actions}/>
      <SpeedSection status={status} actions={actions}/>
      <p>Feel free to add cells while it's running. The cells in grey are younger, black are older. Enjoy!</p>
    </main>
  </div>
);}

MainSection.propTypes = {
  world: PropTypes.array.isRequired,
  status: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
