<?php
	header('Content-type:text/plain');
	@$em = $_REQUEST['email'] or die ('请输入邮箱！');
	@$pwd= $_REQUEST['pwd']   or die ("请输入密码！");
	print_r($em);
	exit;
	require('init.php');

	$sql = "SELECT * FROM logininfo WHERE email = '$em' AND pwd = '$pwd'";

	$result  = mysqli_query($conn,$sql);

	if($result ===false){
		echo 'SQL语句有问题！'
	}esle{
		$row = mysqli_fetch_assoc($result);
		if($row===null){
			echo '账号密码错误!';
		}else{
			echo "欢迎回来！";
		}
	}
