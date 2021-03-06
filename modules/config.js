/*
 * @Author: Jindai Kirin 
 * @Date: 2018-12-03 12:23:23 
 * @Last Modified by: Jindai Kirin
 * @Last Modified time: 2019-01-16 12:46:06
 */

import conf from '../config.json';
import dConf from '../config.default.json';

function isObject(obj) {
	return typeof obj == 'object' && !Array.isArray(obj);
}

function recursiveCopy(c, dc) {
	for (let key in dc) {
		if (isObject(c[key]) && isObject(dc[key]))
			recursiveCopy(c[key], dc[key]);
		else if (typeof c[key] == 'undefined' || typeof c[key] != typeof dc[key])
			c[key] = dc[key];
	}
}

if (!global.configStorage){
	recursiveCopy(conf, dConf);
	global.configStorage = conf;
}

export default global.configStorage;
