<template>
    <el-card style="width: 500px;">
        <el-form label-width="80px" size="small">

            <img v-if="form.avatar_url" :src="form.avatar_url" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <el-upload action="http://localhost:9090/file/upload" class="avatar-uploader" :show-file-list="false"
                :on-success="handleAvatarSuccess">
                <el-button type="primary" icon="el-icon-picture" circle></el-button>
                <!-- @click="updateImg" -->
            </el-upload>

            <el-form-item label="用户名">
                <el-input v-model="form.username" disabled autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
                <el-input v-model="form.nickname" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style=" margin-left: 120px;" @click="save">确 定</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    import APIUtils from '@/Utils/APIUtils'
    export default {
        inject: ['reload'],
        name: "Person",
        data() {
            return {
                form: {},
                user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
            }
        },
        created() {
            this.getUser()
        },
        methods: {
            getUser() {
                this.request.get(APIUtils.FIND_USER_NAME + this.user.username).then(res => {
                    console.log(res)
                    this.form = res.data

                })
            },

            save() {
                this.request.post(APIUtils.ADD_User, this.form).then(res => {
                    if (res.code === 'CODE_200') {
                        this.$message.success("保存成功")
                        // 更新浏览器存储的用户信息
                        this.reload();


                    } else {
                        this.$message.error("保存失败")
                    }
                })
            },
            handleAvatarSuccess(res) {
                this.form.avatar_url = res
            }
        }
    }
</script>

<style>
    .avatar-uploader {
        text-align: center;
        padding-bottom: 10px;
    }

    .avatar-uploader .el-upload {
       
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 138px;
        height: 138px;
        line-height: 138px;
        text-align: center;
    }

    .avatar {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        width: 138px;
        height: 138px;
        display: block;
        margin-left: 160px;
    }
</style>