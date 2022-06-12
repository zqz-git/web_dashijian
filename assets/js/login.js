
$(function(){
    // 登录注册切换
    $('#register').click(function () {
        $('.login-box').hide()
        $('.register-box').show()
    })
    $('#login').click(function () {
        $('.register-box').hide()
        $('.login-box').show()
    })




    // 自定义表单验证
    var form =layui.form
    form.verify({
        pwd:[/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格']
        
        ,repwd:function(value){
            var pwd=$('#form_register [name=password]').val()
            if(pwd!==value){
                return '两次密码不一致';
              }
        }
       
    })
   
   
  

    // 注册请求
    $('#form_register').on('submit',function(e){
        e.preventDefault()
        var param={username:$('#form_register [name=username]').val(),password:$('#form_register [name=password]').val()}
        // console.log(param)
        $.ajax({
            type:'POST',
            url:'http://api-breakingnews-web.itheima.net/api/reguser',
            data:param,
            success:function(res){
                console.log(res)
                layer.msg('注册成功');
            }
        })
    })

    //登录请求
     $('#form_login').on('submit',function(e){
        e.preventDefault()

        var param={username:$('#form_login [name=username]').val(),password:$('#form_login [name=password]').val()}

        $.post('/api/login',param,function(res){
            console.log(res)
            layer.msg('登录成功');
            
        })
    })
})