const permissions = {
  result: { items: [{ name: 'Pages.Users', displayName: 'Users', description: null, id: 0 }, { name: 'Pages.Roles', displayName: 'Roles', description: null, id: 0 }, { name: 'Pages.Tenants', displayName: 'Tenants', description: null, id: 0 }] },
  targetUrl: null,
  success: true,
  error: null,
  unAuthorizedRequest: false,
  __abp: true,
};
const roles = {
  result: { totalCount: 1, items: [{ name: 'Admin', displayName: 'Admin', normalizedName: 'ADMIN', description: null, isStatic: true, permissions: ['Pages.Users', 'Pages.Roles', 'Pages.Tenants'], id: 1 }] },
  targetUrl: null,
  success: true,
  error: null,
  unAuthorizedRequest: false,
  __abp: true,
};
export default {
  getAllPermissions: config => {
    return permissions;
  },
  getAll: config => {
    return roles;
  },
};
