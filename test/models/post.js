'use strict';

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Post', {
		title: DataTypes.STRING,
		body: DataTypes.STRING
	});
};
