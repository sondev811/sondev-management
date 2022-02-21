export const api = {
  me: 'me/',
  getBusinesses: 'businesses',
  getPages: 'owned_pages',
  getAdsAcc: 'owned_ad_accounts',
  getCampaigns: 'campaigns',
  getInsights: 'insights',
};

export const http = {
  url: 'https://graph.facebook.com/v13.0/'
};

export const accStatus = {
  1: {
    name: 'Active',
    color: 'green'
  },
  2: {
    name: 'Disabled',
    color: 'red'
  },
  3: {
    name: 'Unsettled',
    color: '#333'
  },
  7: {
    name: 'Pending risk review',
    color: 'yellow'
  },
  8: {
    name: 'Pending settlement',
    color: 'yellow'
  },
  100: {
    name: 'Pending closure',
    color: 'red'
  },
  101: {
    name: 'Closed',
    color: 'red'
  },
  201: {
    name: 'Any active',
    color: 'green'
  },
  202: {
    name: 'Any close',
    color: 'red'
  }
} 

export const businessHeader = {
  BM: 'Businesses Management',
  PAGE: 'Pages',
  ADS_ACC: 'Ads Accounts'
}