import styles from '../styles/policy.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
export default function Policy() {
  return (
    <div>
      <div className={styles.policy}>
        <div>
          <h1>Privacy Policy</h1>
          <p>What is our Privacy Policy?</p>
        </div>
      </div>
      <div className={styles.policyContent}>
        <p>We recognize that your privacy is very important and take it seriously. This Privacy Policy describes enior policies and procedures on the collection, use and disclosure of your information when you use the enior Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
        <p>This Privacy Policy does not apply to information we collect by other means (including offline) or from other sources. Capitalized terms that are not defined in this Banda Policy have the meaning given them in our Terms of Service.</p>
        <p>All Our The Information of Your's is collected by a form in our website. We are not allowed to share your personal information or image with other person or any website. Your All Information is secure and trusted.</p>
        <h2>"pages_show_list", "pages_read_engagement" , "ads_read" , "ads_management" & "business_management"</h2>
        <p>For a better experience while using our Service, We may require you to allow us to post on your behalf.</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.icon}>
          <span>
            <FaFacebookF/>
          </span>
          <span>
            <FiGithub/>
          </span>
          <span>
            <BsTwitter/>
          </span>
        </div>
        <p>
          Copyright © sondev
        </p>
      </div>
    </div>
  )
}