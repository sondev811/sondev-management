import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Auth {
  logout() {
    this.deleteLocalStorage('user');
    window.location.reload();
  }

  copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    toast.success('🦄 Copied to clipboard!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  setLocalStorage(keyName, value) {
    return localStorage.setItem(keyName, value);
  }

  getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  deleteLocalStorage(name) {
    localStorage.removeItem(name);
  }
}
export default new Auth();
