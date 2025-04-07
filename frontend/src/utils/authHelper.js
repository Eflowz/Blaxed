const ADMIN_INFO_KEY = 'adminInfo';
const IS_AUTHENTICATED_KEY = 'isAuthenticated';

export const saveAdminInfo = (adminInfo) => {
  localStorage.setItem(ADMIN_INFO_KEY, JSON.stringify(adminInfo));
  localStorage.setItem(IS_AUTHENTICATED_KEY, 'true');
};

export const getAdminToken = () => {
  const adminInfo = JSON.parse(localStorage.getItem(ADMIN_INFO_KEY));
  return adminInfo?.token || null;
};

// Check if admin is authenticated
export const isAdminAuthenticated = () => {
  const token = getAdminToken();
  return Boolean(token);
};

// Logout admin
export const logoutAdmin = () => {
  localStorage.removeItem(ADMIN_INFO_KEY);
  localStorage.clear();
  localStorage.removeItem(IS_AUTHENTICATED_KEY);
  window.location.href = '/admin/login';
};
