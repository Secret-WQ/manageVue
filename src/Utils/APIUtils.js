var serverBase = 'http://127.0.0.1:9090'

export default {
    //User
    //用户注册
    USER_REGISTER: serverBase + '/user/register',
    //用户登录
    USER_LOGIN: serverBase + '/user/login',
    //用户根据姓名查询
    FIND_USER_NAME: serverBase + '/user/username/',
    //用户分页查找
    FIND_USER_PAGE: serverBase + '/user/page/',
    //添加用户
    ADD_User: serverBase + '/user/save/',
    //删除用户
    DELETE_USER: serverBase + '/user/delete/',
    //批量删除用户
    DELETE_USERLIST: serverBase + '/user/deletelist/',
    //导出用户
    EXPORT_USER: serverBase + '/user/export/',
    //File
    //文件分页查询
    FIND_FILE_PAGE: serverBase + "/file/page/",
    //文件上传
    FILE_UPLOAD: serverBase + "/file/upload",
    //文件下载
    FILE_DPWNLOD: serverBase + "/file/downlod/",
    //文件修改
    FILE_UPDATE: serverBase + "/file/update/",
    //文件删除
    FILE_DELETE: serverBase + "/file/delete/",
    //文件批量删除
    FILELIST_DELETE: serverBase + "/file/delete/batch",
    //Role
    //分页查找
    FIND_ROLE_PAGE: serverBase + '/role/page/',
    //添加修改
    SAVE_ROLE: serverBase + '/role/save/',
    //删除
    DELETE_ROLE: serverBase + '/role/delete/',
    //批量删除
    DELETE_ROLELIST: serverBase + '/role/deletelist/',
    //Menu
    //分页查找
    FIND_MENU_PAGE: serverBase + '/menu/page/',
    //添加修改
    SAVE_MENU: serverBase + '/menu/save/',
    //删除
    DELETE_MENU: serverBase + '/menu/delete/',
    //批量删除
    DELETE_MENULIST: serverBase + '/menu/deletelist/',







}