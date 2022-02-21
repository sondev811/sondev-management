import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Insight from '../components/Insight';
import authService from '../services/auth.service';
import businessService from '../services/business.service';
import styles from '../styles/ads.module.scss';
import { adsHeader } from "../constants/api.constant";
export default function ListAds() {
  const [listCampaigns, setListCampaigns] = useState([]);
  const [adsAccounts, setAdsAccounts] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [insights, setInsights] = useState([]);
  const [isOpenInsights, setIsOpenInsights] = useState(false);
  const [adsTitle, setAdsTitle] = useState(adsHeader.ADS(0));

  useEffect(() => {
    const getBusinesses = async () => {
      const userLocal = authService.getLocalStorage('user');
      if (!userLocal || !userLocal.accessToken) return;
      const params = {
        access_token: userLocal.accessToken,
        fields: 'primary_page,profile_picture_uri,name'
      };
      const businesses = await businessService.getBusinesses(params);
      if (!businesses || !businesses.result || !businesses.result.data) return;
      const paramsAds = {
        access_token: userLocal.accessToken,
        fields: 'account_id,account_status,id,name,amount_spent, currency'
      };

      const promisesAds = businesses.result.data.map(async business => {
        return await businessService.getAdsAcc(business.id, paramsAds);
      })
      const adsAccounts = await Promise.all(promisesAds);
      const listAdsAcc = await handle(adsAccounts);
      setAdsAccounts(listAdsAcc);
    };

    getBusinesses();
  }, []);

  useEffect(() => {
    const getCampaigns = async () => {
      const userLocal = authService.getLocalStorage('user');
      if (!userLocal || !userLocal.accessToken) return;
      const campaignParams = {
        access_token: userLocal.accessToken,
        fields: 'name,objective,status,created_time,lifetime_budget,budget_remaining'
      };
      const promisesCampaign = adsAccounts.map(adsAcc => {
        return businessService.getCampaigns(adsAcc.id, campaignParams);
      });
      const campaigns = await Promise.all(promisesCampaign);
      const list = await handle(campaigns);
      setCampaigns(list);
    }
    getCampaigns();
  }, [adsAccounts]);

  useEffect(() => { 
    setListCampaigns(campaigns);
    setAdsTitle(adsHeader.ADS(campaigns.length));
  }, [campaigns]);

  const getInsights = async (id) => {
    const userLocal = authService.getLocalStorage('user');
    if (!userLocal || !userLocal.accessToken) return;
    const params = {
      date_preset: 'maximum',
      fields: 'spend,impressions,cpm,cpc,account_id,campaign_id',
      access_token: userLocal.accessToken
    };
    const insight = await businessService.getInsights(id, params);
    setInsights(insight.result.data);
    setIsOpenInsights(true);
    setAdsTitle(adsHeader.INSIGHTS);
  }

  const handle = async (list) => {
    const temp = [];
    list.forEach(adsAcc => {
      if (!adsAcc || !adsAcc.result || !adsAcc.result.data) return;
      temp.push(...adsAcc.result.data);
    });
    return temp;
  }

  const backToAds = () => {
    setIsOpenInsights(false);
    setAdsTitle(adsHeader.ADS(campaigns.length));
  }

  return (
    <div className={styles.campaign}>
      <div className={styles.backAds}>
        {isOpenInsights && <span onClick={() => backToAds()}><BiArrowBack/></span> } 
      </div>
      <h2>{adsTitle}</h2>
      { !isOpenInsights && (
        <div className={styles.campaignWrapper}>
          {
            listCampaigns.length ? listCampaigns.map(campaign => (
            <div key={campaign.id} className={styles.campaignItem}>
              <div><span>Id:</span> <p>{campaign.id}</p></div>
              <div><span>Name:</span> <p>{campaign.name}</p></div>
              <div><span>Objective:</span> <p>{campaign.objective}</p></div>
              <div><span>Status:</span> <p>{campaign.status}</p></div>
              <div><span>Budget remaining:</span> <p>{campaign.budget_remaining}</p></div>
              <div><span>Create time:</span> <p>{campaign.created_time}</p></div>
              <div><button onClick={() => getInsights(campaign.id)}>Insight</button></div>
            </div>
          )) : <p>No campaign</p>}
        </div>
      ) }
      { isOpenInsights && <Insight data={insights}/>}
    </div>
  )
}