import Mock from 'mockjs';
import AppApi from './app-api';
import UserApi from './user-api';
import RoleApi from './role-api';
import TenantApi from './tenant-api';
import AuthApi from './auth-api';

// Mock.setup({
//   timeout: '350-600'
// })

// Auth
Mock.mock(/\/api\/TokenAuth\/Authenticate.*/, AuthApi.authenticate);

//app
Mock.mock(/\/api\/services\/app\/Session\/GetCurrentLoginInformation.*/, AppApi.getCurrentLoginInformations);
Mock.mock(/\/AbpUserConfiguration\/GetAll/, AppApi.getConfiguration);

//User
Mock.mock(/\/api\/services\/app\/User\/GetRoles/, UserApi.getRoles);
Mock.mock(/\/api\/services\/app\/User\/GetAll/, UserApi.getAll);

//Role
Mock.mock(/\/api\/services\/app\/Role\/getAllPermissions/, RoleApi.getAllPermissions);
Mock.mock(/\/api\/services\/app\/Role\/GetAll/, RoleApi.getAll);

//Terant
Mock.mock(/\/api\/services\/app\/Tenant\/GetAll/, TenantApi.getAll);
export default Mock;
