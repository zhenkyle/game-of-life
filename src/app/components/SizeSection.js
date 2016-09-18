import React, {PropTypes} from 'react';
import {SMALL, MEDIUM, LARGE} from '../constants/BoardSizeTypes';

function cmpAry(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function SizeSection({status, actions}) {
  const _onBtnSmallClick = () => actions.changeSize(SMALL);
  const _onBtnMediumClick = () => actions.changeSize(MEDIUM);
  const _onBtnLargeClick = () => actions.changeSize(LARGE);
  return (
    <p>
      <span>Board Size:</span>
      &nbsp;<button name="btnSmall" className={cmpAry(status.boardSize, SMALL) ? "active" : null} onClick={_onBtnSmallClick}>Size: 50x30</button>
      &nbsp;<button name="btnMedium" className={cmpAry(status.boardSize, MEDIUM) ? "active" : null} onClick={_onBtnMediumClick}>Size: 70x50</button>
      &nbsp;<button name="btnLarge" className={cmpAry(status.boardSize, LARGE) ? "active" : null} onClick={_onBtnLargeClick}>Size: 100x80</button>
    </p>

);}

SizeSection.propTypes = {
  status: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default SizeSection;
