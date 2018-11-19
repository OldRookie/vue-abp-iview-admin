const roles = { result: { items: [{ name: 'Admin', displayName: 'Admin', normalizedName: 'ADMIN', description: null, isStatic: true, permissions: [], id: 1 }] }, targetUrl: null, success: true, error: null, unAuthorizedRequest: false, __abp: true };
const users = {
  result: { totalCount: 1, items: [{ userName: 'admin', name: 'admin', surname: 'admin', emailAddress: 'admin@aspnetboilerplate.com', isActive: true, fullName: 'admin admin', lastLoginTime: '2018-11-19T10:16:09.8985084', creationTime: '2018-11-02T18:07:48.8447959', roleNames: ['ADMIN'], id: 1 }] },
  targetUrl: null,
  success: true,
  error: null,
  unAuthorizedRequest: false,
  __abp: true,
};
export default {
  getRoles: config => {
    return roles;
  },
  getAll: config => {
    return users;
  },
};
