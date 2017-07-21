<template>
	<div>
		<el-menu class="navbar" mode="horizontal">
			<div class="header">
				<header>
					<img class="logo" width="50" height="42" src="./logo-white.png" alt="">
					<span class="title">贸易信息
						<i>查询系统</i>
					</span>
					<div class="loginInfo">
						<p>下午好&nbsp;{{name}},&nbsp;&nbsp;
							<span class="nav-underline" @click="dialogChangePassVisible = true">修改密码</span>&nbsp;&nbsp;|&nbsp;&nbsp;
							<span class="nav-underline" @click="logout">退出登录</span>
						</p>
						<p style="text-align: right">上次登录：{{dateNow}}</p>
					</div>
				</header>
			</div>
			<ErrLog v-if="log.length>0" class="errLog-container" :logsList="log"></ErrLog>
		</el-menu>
	
		<el-dialog title="修改密码" style="" :visible.sync="dialogChangePassVisible" size="small">
			<el-form auto-complete="on" ref="forms" v-on:submit.native="fetchChangePass" style="margin: 0 50px" :model="form" :rules="changePassRules">
				<el-form-item prop="oldPass" type="password" label="旧密码：" :label-width="'100px'">
					<el-input type="password" v-model="form.oldPass" auto-complete="on"></el-input>
				</el-form-item>
				<el-form-item prop="newPass" type="password" label="新密码：" :label-width="'100px'">
					<el-input type="password" v-model="form.newPass" auto-complete="on"></el-input>
				</el-form-item>
				<el-form-item prop="confirmPass" type="password" label="再次确认：" :label-width="'100px'">
					<el-input type="password" v-model="form.confirmPass" auto-complete="on"></el-input>
				</el-form-item>
				<span style='font-size: 12px; padding-left: 100px; font-weight: bold' class="tips">
					<i style="color: #077fef;line-height:24px; font-size: 20px; display: inline-block;vertical-align: top;height:24px"> * </i> 数字+字母组成，字母区分大小写，6-16位</span>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogChangePassVisible = false">取 消</el-button>
				<el-button type="primary" @click="fetchChangePass">确 定</el-button>
			</span>
		</el-dialog>
	
		<el-dialog title="提示" :visible.sync="dialogLogoutVisible" size="tiny">
			<span>确定要退出登录？</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogLogoutVisible = false">取 消</el-button>
				<el-button type="primary" @click="getLogout">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import ErrLog from 'components/ErrLog';
import errLogStore from 'store/errLog';

export default {
	components: {
		ErrLog
	},
	data() {
		const validatePass = (rule, value, callback) => {
			if (value.length < 6) {
				callback(new Error('密码不能小于6位'));
			} else if (value.length > 16) {
				callback(new Error('密码不能大于16位'));
			} else if (!value.match(/^[a-zA-Z0-9]+$/)) {
				callback(new Error('密码只能为数字或字母'));
			} else {
				callback();
			}
		};
		return {
			log: errLogStore.state.errLog,
			dialogLogoutVisible: false,
			dialogChangePassVisible: false,
			changePassRules: {
				oldPass: [
					{ required: true, trigger: 'blur', validator: validatePass }
				],
				newPass: [
					{ required: true, trigger: 'blur', validator: validatePass }
				],
				confirmPass: [
					{ required: true, trigger: 'blur', validator: validatePass }
				],
			},
			form: {
				oldPass: '',
				newPass: '',
				confirmPass: ''
			}
		}
	},
	computed: {
		...mapGetters([
			'sidebar',
			'name',
			'avatar'
		]),
		dateNow() {
			return new Date();
		}
	},
	methods: {
		toggleSideBar() {
			this.$store.dispatch('ToggleSideBar')
		},
		logout() {
			this.dialogLogoutVisible = true;
		},
		getLogout() {
			this.dialogLogoutVisible = false;
			this.$store.dispatch('LogOut').then(() => {
				location.reload();// 为了重新实例化vue-router对象 避免bug
			});
		},
		fetchChangePass() {
			if (this.form.newPass && this.form.newPass === this.form.confirmPass) {
				this.dialogChangePassVisible = false;
				this.$message({
					message: '恭喜你，密码修改成功！',
					type: 'success'
				});
				this.resetForm('forms')
			} else {
				this.$message({
					message: '两次密码输入不一致，请重新输入！',
					type: 'error'
				});
			}
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.hamburger-container {
	margin-left: 20px;
}

.header {
	height: 74px;
	font-size: 0;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 9;
	width: 100%;
	background: #1f252e;
	padding: 15px 20px;

	header {
		min-width: 1024px;
		margin: 0 auto;
	}

	.logo {
		width: 50px;
		vertical-align: top;
		margin-right: 20px;
	}

	.title {
		display: inline-block;
		vertical-align: top;
		line-height: 42px;
		padding-left: 15px;
		color: #fff;
		font-size: 26px;
		border-left: 1px solid #000;

		i {
			font-style: normal;
			font-size: 16px;
		}
	}

	.loginInfo {
		float: right;
		line-height: 24px;
		margin-right: 20px;
		font-size: 13px;
		color: #fff;
	}
	.nav-underline {
		&:hover {
			text-decoration: underline;
			color: #077fef;
		}
	}
}
</style>



