$(function(){
    getUserInfo();
    var layer=layui.layer
    // 退出
    $('.btnLogout').on('click',function(){
        layer.confirm(' 确定退出登录?', {icon: 3, title:'提示'}, function(index){
            localStorage.removeItem('token')
            location.href='./login.html'
            layer.close(index);
        });
    })

})
// 获取用户信息
function getUserInfo(){
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        
        success:function(res){
            if(res.status!==0){
                layer.msg('获取用户信息失败');
            }
            // 渲染用户的头像
            renderAvatar(res.data)
        }
        // 不论成功和失败都会调用
        // complete:function(res){
            
    })
}
// 渲染用户头像
function renderAvatar(user){
    console.log(user)
    if(user){
        var name=user.nickname || user.username
        //    设置欢迎
        $('#welcome').html('欢迎&nbsp&nbsp'+name)
        if(user.user_pic!==null){
            $('.layui-nav-img')
                .attr('src',user.user_pic)
                .show()
            $('.text-avatar').hide()
        }else{
            $('.layui-nav-img').hide()
            var first=name[0].toUpperCase()
            $('.text-avatar').html(first).show()
        }
    }else{
      var name='**'
    }
    
    
}

