import React from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';
import './index.css';

const defaultStrokeWidth = 20;

const Health = ({ ...props }) => {
	const { health, showInfo, strokeWidth = defaultStrokeWidth } = props;
	const getColor = health => {
		if (health >= 0 && health < 51) {
			return '#D9534F';
		} else if (health > 50 && health < 71) {
			return '#f0ad4e';
		}
		return '#5cb85c';
	};
	return <Progress
		percent={health}
		showInfo={showInfo}
		strokeWidth={strokeWidth}
		strokeColor={getColor(health)}
	/>;
};

Health.propTypes = {
	health: PropTypes.number.isRequired,
	showInfo: PropTypes.bool.isRequired,
	strokeWidth: PropTypes.number
};

export default Health;
