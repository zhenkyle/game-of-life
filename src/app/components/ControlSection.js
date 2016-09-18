import React, {PropTypes} from 'react';

function ControlSection({status, actions}) {
  const _onBtnRunClick = () => actions.delayUpdateWorld(true);
  const _onBtnPauseClick = () => actions.pause();
  const _onBtnClearClick = () => actions.clear();
  return (
    <p>
      <button name="btnRun" className={status.appStatus === "running" ? "active" : null} onClick={_onBtnRunClick}>Run</button>
      &nbsp;<button name="btnPause" className={status.appStatus === "paused" ? "active" : null} onClick={_onBtnPauseClick}>Pause</button>
      &nbsp;<button name="btnClear" onClick={_onBtnClearClick}>Clear</button>
      &nbsp;<span>Generation: {status.generations}</span>
    </p>

);}

ControlSection.propTypes = {
  status: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default ControlSection;
