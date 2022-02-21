import { useEffect, useState } from "react"
import Page from "../components/Page";
import AdsAcc from "../components/Ads-Account";
import authService from "../services/auth.service";
import businessService from "../services/business.service";
import styles from '../styles/business.module.scss';
import {BiArrowBack} from 'react-icons/bi';
import { businessHeader } from "../constants/api.constant";
export default function ListBusiness() {
  const [businesses, setBusinesses] = useState([]);
  const [user, setUser] = useState(null);
  const [pages, setPages] = useState([]);
  const [adsAcc, setAdsAcc] = useState([]);
  const [isOpenPages, setOpenPages] = useState(false);
  const [isOpenAdsAcc, setOpenAdsAcc] = useState(false);
  const [header, setHeader] = useState(businessHeader.BM);

  useEffect(() => {
    const getBusinesses = async () => {
      const userLocal = authService.getLocalStorage('user');
      if (!userLocal || !userLocal.accessToken) return;
      setUser(userLocal);
      const params = {
        access_token: userLocal.accessToken,
        fields: 'primary_page,profile_picture_uri,name'
      };
      const businesses = await businessService.getBusinesses(params);
      if (!businesses || !businesses.result || !businesses.result.data) return;
      setBusinesses(businesses.result.data);
    };
    getBusinesses();
  }, []);

  const getPages = async (id) => {
    const params = {
      access_token: user.accessToken,
      fields: 'name,link,picture'
    };
    const pages = await businessService.getPages(id, params);
    if(!pages || !pages.result || !pages.result.data) return;
    setHeader(businessHeader.PAGE);
    setPages(pages.result.data);
    setOpenPages(true);
  }

  const getAdsAcc = async (id) => {
    const params = {
      access_token: user.accessToken,
      fields: 'account_id,account_status,id,name,amount_spent, currency'
    };
    const adsAcc = await businessService.getAdsAcc(id, params);
    if(!adsAcc || !adsAcc.result || !adsAcc.result.data) return;
    setHeader(businessHeader.ADS_ACC);
    setAdsAcc(adsAcc.result.data);
    setOpenAdsAcc(true);
  }

  const copy = (copyText) => {
    authService.copyToClipboard(copyText);
  }

  const backToBM = () => {
    setHeader(businessHeader.BM);
    setOpenPages(false);
    setOpenAdsAcc(false);
  }

  return (
    <div className={styles.businessContainer}>
      <div className={styles.backBM}>
        {(isOpenPages || isOpenAdsAcc) && <span onClick={() => backToBM()}><BiArrowBack/></span> } 
      </div>
      <h2>{header}</h2>
      {(!isOpenPages && !isOpenAdsAcc) && (businesses && businesses.length ?
        <div className={styles.business}>
          {
             businesses.map(business => (
              <div key={business.id}>
                <img src={business.profile_picture_uri} alt={business.name} />
                <p onClick={() => copy(business.id)}>{business.id}</p>
                <h3 onClick={() => copy(business.name)} >{business.name}</h3>
                <div>
                  <button onClick={() => getPages(business.id)}>Pages</button>
                  <button onClick={() => getAdsAcc(business.id)}>Add Accounts</button>
                </div>
              </div>
            ))
            }
        </div> 
        : <p>No business or access token expires. Please re-login</p>)
      }
      { pages ? isOpenPages && <Page data={pages}/> : <p>No pages or access token expires. Please re-login</p>}
      { adsAcc ? isOpenAdsAcc && <AdsAcc data={adsAcc}/> : <p>No ads account or access token expires. Please re-login</p>}
    </div>
  )
}