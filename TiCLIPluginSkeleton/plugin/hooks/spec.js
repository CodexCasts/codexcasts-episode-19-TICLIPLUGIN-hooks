var _ = require('lodash'),
	admzip = require('adm-zip'),
	blessed = require('blessed'),
	contrib = require('blessed-contrib'),
	exec = require('child_process').exec,
	fs = require('fs-extra'),
	net = require('net'),
	path = require('path'),
	tiappXml = require('tiapp.xml');
 

exports.cliVersion = '>=3.2';
exports.init = function(_logger, config, cli, appc){
	logger = _logger;

	if (process.argv.indexOf('ios') > -1) {
		platform = 'ios';
	} else if (process.argv.indexOf('android') > -1) {
		platform = 'android';
	}

	if (process.argv.indexOf('--spec') > -1) {

		 console.log('hello from inside init');

		cli.on('build.pre.construct', construct);
		//cli.on('build.finalize', finalize);
	}
};

function construct(data, finished) {

	var tiapp = tiappXml.load(path.join(data.projectDir, 'tiapp.xml'));
	 
		tiapp.setModule('ti.cloud', '*', 'iphone');
		tiapp.write();
		finished();
	 
};

 