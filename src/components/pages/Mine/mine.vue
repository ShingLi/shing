<template>
	<div class="wrap">
		<m-header title='我的'>

			<a slot='right' @click="$router.push({path:'emplace'})">
				<img src="../../../assets/images/ic_settings.png" alt="" class="m-icon-img">
			</a>
		</m-header>
		<div class="wrap_info">
			<div class="head_img">
				<img src="../../../assets/images/ic_user_male.png" alt="">
			</div>
			<div class="loginWrap">
				<router-link :to="{name:'login'}" class='login_btn'>登录 / 注册</router-link>
			</div>
		</div>
		<!-- 中间部分 -->
		<div class="center">
			<div class="bottom-gap-big">
				<cell title='设置' is-link>
					<img src="../../../assets/images/ic_me_notification.png" alt=""  slot='icon'>
				</cell>
			</div>

			<div class="bottom-gap-big">
				<cell title='喜欢' is-link>
					<img src="../../../assets/images/ic_me_heart.png" alt="" slot='icon'>
				</cell>
				<cell title='日记' is-link>
					<img src="../../../assets/images/ic_me_journal.png" alt="" slot='icon'>
				</cell>
				<cell title='相册' is-link>
					<img src="../../../assets/images/ic_me_photo_album.png" alt="" slot='icon'>
				</cell>
			</div>

			<div class="bottom-gap-big">
				<cell title='电影.电视.综艺' is-link>
					<img src="../../../assets/images/ic_me_video.png" alt="" slot='icon'>
				</cell>
				<cell title='读书' is-link>
					<img src="../../../assets/images/ic_me_books.png" alt="" slot='icon'>
				</cell>
				<cell title='音乐' is-link>
					<img src="../../../assets/images/ic_me_music.png" alt="" slot='icon'>
				</cell>
			</div>

			<div class="bottom-tap-big">
				<cell title='钱包' is-link>
					<img src="../../../assets/images/ic_me_wallet.png" alt="" slot='icon'>
				</cell>
			</div>
		</div>
	</div>
</template>
<script>
	import mHeader from '@/components/common/header'
	import cell from '@/components/common/cell'
	export default {
		name:'mine',
		components:{
			mHeader,
			cell
		},
		methods:{

		}
	}
</script>
<style lang='less' scoped>

	.wrap{
		height: 100%;
		background-color: #F2F1EE;
		.wrap_info{
			height:10rem;
			/*这里有个坑，暂且留着吧，不知道为什么谷歌浏览器不支持webp格式的图片*/
			background-image: url('../../../assets/images/default_info_bg.png');
			background-size:100% 100%;
			display: flex;
			align-items: center;
			padding: 0 2rem;
			.head_img{
				img{
					width: 5.5rem;
					height: 5.5rem;

				}
			}
			.loginWrap{
				display: flex;
				flex: 1;
				justify-content: center;
				@default:#fff;
				.login_btn{
					color: @default;
					font-size: 1.1rem;
					border: 1px solid @default;
					padding: .7rem 6rem;
					border-radius: 4px;
				}
			}

		}
	}
	.center{
		padding-bottom: 4rem;
	}
	.bottom-gap-big{
		margin-bottom: 1rem;
	}
</style>
