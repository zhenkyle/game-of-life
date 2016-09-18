import React, {PropTypes} from 'react';
import {SLOW, NORMAL, FAST} from '../constants/SpeedTypes';

function SpeedSection({status, actions}) {
  const _onBtnSlowClick = () => actions.changeSpeed(SLOW);
  const _onBtnMediumClick = () => actions.changeSpeed(NORMAL);
  const _onBtnFastClick = () => actions.changeSpeed(FAST);
  return (
    <p>
      <span>Sim Speed:</span>
      <button name="btnSlow" className={status.speed === SLOW ? "active" : null} onClick={_onBtnSlowClick}>Slow</button>
      <button name="btnMedium" className={status.speed === NORMAL ? "active" : null} onClick={_onBtnMediumClick}>Medium</button>
      <button name="btnFast" className={status.speed === FAST ? "active" : null} onClick={_onBtnFastClick}>Fast</button>
    </p>

);}

SpeedSection.propTypes = {
  status: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default SpeedSection;
