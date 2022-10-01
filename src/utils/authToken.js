// 鉴权token
import { TOKEN } from './common-key'
class AuthToken {
    get() {
        return localStorage.getItem(TOKEN);
    }
    set(token) {
        localStorage.setItem(TOKEN,token);
    }
    remove(){
        localStorage.removeItem(TOKEN);
    }
}
export default new AuthToken();