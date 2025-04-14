module.exports = {
    goBack(){
        window.history.back();
    },
    backToHome(){
        window.location.href='/home';
    },
    clearContent(e){
        //e.target.previousElementSibling 当前元素的前一个元素
        const target = e.target.previousElementSibling;
        // target.innerText='';//清空内容
        // this.username=target.innerText;
        // console.log(this.$data);
        switch(target.id){//清空input标签内容
            case 'username':
                this.$data.username='';
                break;
            case 'password':
                this.$data.password='';
                break;
            case 'email':
                this.$data.email='';
                break;
        }
        target.focus();
        // this.loginmsg.username = '';
        // document.getElementById('username').focus();
    },
    inputType(){
        return this.$data.passwordVisible ? 'text' : 'password';
    },
    showpwd(){
        this.passwordVisible = !this.passwordVisible;
    }
}