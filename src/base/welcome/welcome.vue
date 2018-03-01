<template>
	<div class="loading">
		<div class="welcome-wrap">
			<div class="smile">
				<img src="../../common/images/ico/smile.jpg" alt="">
			</div>
			<div class="date">{{date}}</div>
			<div class="text">遇见你，真美好！</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'loading',
		computed:{
			date(){
				let now = new Date(),
					week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
					currentWeek = week[now.getDay()],
					day = now.getDate(),
					month = now.getMonth()+1,
					year  = now.getFullYear();
				return  `${year}年-${month}月-${day}日-${currentWeek}`

			}
		}
	}
</script>
<style lang="less" scoped>
	div.loading{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background:#fff;
		z-index: 111;
		.welcome-wrap{
			position: absolute;
			top:20%;
			left: 50%;
			transform:translate(-50%,0);
			text-align: center;
			.smile{
				color: #42bd56;
				font-size: 6rem;
				white-space: nowrap;
				img{
					width: 94px;
					height: 94px;
				}
			}
			.font{
				font-size: 1.2rem;
			}
			.date{
				margin: 30px 0 20px 0;
          		white-space: nowrap;
          		color:#333;
          		.font
			}
			.text{
				.font;
				color:rgb(207,0,112);
			}

		}
	}
</style>
