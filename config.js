var config = {
	development:{
		database:{
			link: './db/tzdm.db',
			host:'localhost',
			port:8000
		},
		server:{
			host:'localhost',
			port:3000
		},
		delta_t_path:'/tmp/delta_t.txt',
	},
	production:{
		database:{
			link: '../../../tmp/tzdm.db',
			host:'localhost',
			port:8000
		},
		server:{
			host:'localhost',
			port:80
		},
		delta_t_path:'/tmp/delta_t.txt',
	}
};
module.exports = config;