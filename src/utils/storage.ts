import { isServer } from './index';

export const CATEGORY_ACTIVITY_STORAGE_KEY = 'CATEGORY_ACTIVITY';
export const LIKES_STORAGE_KEY = 'LIKES';
export const LANGUAGE_KEY = 'LANGUAGE';
export const CURRENT_TAB_KEY = 'CURRENT_TAB';

/**
 * localStorage
 */
export const storage = {
  /**
   * get storage
   * @param key localStorage key
   */
  get(key: string) {
    if (!key || isServer()) {
      return null;
    }
    key = key.toString();
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },

  /**
   * set storage
   * @param key localStorage key
   * @param value
   */
  set(key: string, value: unknown) {
    if (!key || isServer()) {
      return null;
    }
    localStorage.setItem(key.toString(), JSON.stringify(value));
  },

  /**
   * delete storage
   * @param key localStorage key
   */
  deleteKey(key: string) {
    if (!key || isServer()) {
      return null;
    }
    key = key.toString();
    localStorage.removeItem(key);
  },

  /**
   * clear storage
   */
  clear() {
    if (isServer()) {
      return null;
    }
    localStorage.clear();
  }
};
