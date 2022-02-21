import axios from 'axios';
import { http } from '../constants/api.constant';

class HttpClient {
  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getUrl(url, params) {
    const urlWithParams = this.handleParams(params);
    return `${http.url}${url}${urlWithParams}`;
  }

  handleParams(params) {
    let urlWithParams = '';
    const keys = Object.keys(params);
    const values = Object.values(params);
    if (!keys || !keys.length || !values || !values.length) {
      return urlWithParams;
    }
    urlWithParams = '?';
    keys.forEach((item, index) => {
      if (index >= 1) {
        urlWithParams += '&';
      }
      urlWithParams += `${item}=${values[index]}`;
    });
    return urlWithParams;
  }

  getHeader() {
    const headers = {
      'Content-Type': 'application/json',
    };
    return headers;
  }

  handleErrors(res) {
    if (res.status === 401) {
      authService.logout();
    } else if (res.status === 404) {
    }
    return {
      status: false,
      data: res.data.error
    };
  }

  async handleSuccess(res) {
    return {
      status: true,
      result: res.data
    };
  }

  async get(url, params = {}) {
    try {
      url = this.getUrl(url, params);
      const options = {
        headers: this.getHeader()
      };
      const response = await axios.get(url, options);
      return this.handleSuccess(response);
    } catch (error) {
      return this.handleErrors(error.response);
    }
  }

  async post(url, body) {
    try {
      url = this.getUrl(url, {});
      const options = {
        headers: this.getHeader()
      };
      const bodyParse = JSON.stringify(body);
      const response = await axios.post(url, bodyParse, options);
      return this.handleSuccess(response);
    } catch (error) {
      return this.handleErrors(error.response);
    }
  }
}

export default new HttpClient();
