
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'pulse', settings: require('../../settings') });
};