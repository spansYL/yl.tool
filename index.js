/**
 * 各种地址验证
 */
function yl_check(){

    //网址验证
    this.checkUrl = function(url){
        var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?/gi;
        return  reg.test(url);
    };
    //验证手机号
    this.checkPhone = function(phone){
        var reg = /^1(3|4|5|7|8)\d{9}$/;
        return reg.test(phone);
    }
    //保留两位小数点
    this.twoDec = function(input) {
        input = input || 0;
        return parseFloat(input).toFixed(2);
    }
    //价格格式
    this.price = function(input){
        if(typeof(input) == 'number'){
            input = input + '';
        }
        input = input.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
        input = input.replace(/^\./g,""); //验证第一个字符是数字
        input= input.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
        input = input.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
        input = input.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
        return input;
    }
    //仅限正整数
    this.positive = function(input){
        input = input.replace(/[^\d]/g,""); //清除"数字"以外的字符
        return input;
    }
    //统计字符数
    this.countWord = function(str){
        var result = str.replace(/[^\x00-\xff]/g,"01").length;
        return result;
    };

    //格式化千分位
    this.formatThousands = function(num,n) {
        var num = parseFloat(num).toFixed(n);
        var _num = String(num);
        var _num = _num.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
            return s1.replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,") + s2;
        });
        return _num;
    }
  return this;
}