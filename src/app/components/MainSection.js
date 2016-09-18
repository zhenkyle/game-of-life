import React, {PropTypes} from 'react';
import ControlSection from '../components/ControlSection';
import SizeSection from '../components/SizeSection';
import SpeedSection from '../components/SpeedSection';

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

function MainSection({world, status, actions}) {
  return (<div className="HolyGrail-body">
    <main className="HolyGrail-content">
      <ControlSection status={status} actions={actions}/>
      <table>
        <tbody>
          {world.map((line, i) =>
            <Line key={i} data={line}/>)}
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
