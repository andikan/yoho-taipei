
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
   title: 'Yoho Taipei',
   appId: fbConf['appId'] 
  });
};

/*
 * GET today page.
 */
exports.today = function(req, res){
  res.render('today', { title: 'Yoho Taipei' });
};


/*
 * GET search_mrt page.
 */
exports.search_mrt = function(req, res){
  res.render('search_mrt', { title: 'Yoho Taipei'});
};

/*
 * GET mrt_spot page.
 */
exports.mrt_spot = function(req, res){
  res.render('mrt_spot', { 
  	title: 'Yoho Taipei',
  	mrt_number: req.params['number']
  });
};

/*
 * GET spot page.
 */
exports.spot = function(req, res){
  res.render('spot', { 
  	title: 'Yoho Taipei',
  	spot_id: req.params['id']
  });
};


