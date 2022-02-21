import http from './http.service';
import { api } from '../constants/api.constant';

class Business {
  async getBusinesses(params) {
    return await http.get(`${api.me}${api.getBusinesses}`, params);
  }
  async getPages(id, params) {
    return await http.get(`${id}/${api.getPages}`, params);
  }
  async getAdsAcc(id, params) {
    return await http.get(`${id}/${api.getAdsAcc}`, params);
  }
  async getCampaigns(id, params) {
    return await http.get(`${id}/${api.getCampaigns}`, params);
  }
  async getInsights(id, params) {
    return await http.get(`${id}/${api.getInsights}`, params);
  }

}

export default new Business();