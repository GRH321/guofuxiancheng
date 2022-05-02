'use strict';

const Controller = require('egg').Controller;
const checkAgent = require("../utils/checkagent");
class downloadController extends Controller {
	async index() {
		const { ctx } = this;
		const ua = checkAgent(ctx.request.header["user-agent"]);
		let data = await this.ctx.service.website.getHomePageData();
	   if (ua) {
		  await ctx.render("pc/resource.html",data)
		}else{
		  await ctx.render("phone/resource.html",data);
		}
	  }
}

module.exports = downloadController;