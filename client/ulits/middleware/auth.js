
// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// create a new class to instantiate for a user
class AuthClient {

  // get user data
  getProfile() {
    if(!this.getToken()) {
      console.log('no token')
      return null
    }
    return decode(this.getToken());
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('eComm_id_token', idToken);
    // go to home page
    window.location.assign('/');
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('eComm_id_token');
  }

  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token_gamma');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthClient();