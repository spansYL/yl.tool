/**
 * 自定义jquery工具
 * @author yl
 */
$.extend({
    //验证网址
    tool_checkUrl: function(url){
        var reg = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?/gi;
        return  reg.test(url);
    },
    //验证手机号
    tool_checkPhone: function(phone){
        var reg = /^1(3|4|5|7|8)\d{9}$/;
        return reg.test(phone);
    },
    //保留n位小数，默认2位
    tool_nDec: function(num,n){
        num = num || 0;
        n = n || 2;
        return parseFloat(num).toFixed(n);
    },
    //价格格式
    tool_price: function(input){
        if(typeof(input) == 'number'){
            input = input + '';
        }
        input = input.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
        input = input.replace(/^\./g,""); //验证第一个字符是数字
        input= input.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
        input = input.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
        input = input.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
        return input;
    },
    //正整数
    tool_positive: function(input){
        input = input.replace(/[^\d]/g,""); //清除"数字"以外的字符
        return input;
    },
    //统计字符数
    tool_countChar: function(str){
        var result = str.replace(/[^\x00-\xff]/g,"01").length;
        return result;
    },
    //截取前n个字符,默认4个
    tool_cutWord : function(str,n) {
        n = n || 4;
        var chinessArr = str.match(/[^\x00-\xff]/g);
        var chineseNum = chinessArr ? chinessArr.length : 0;
        var result = str.substring(0, n - chineseNum);
        return result;
    },
    //格式化千分位
    tool_formatThousands:function(num,n) {
        var num = parseFloat(num).toFixed(n);
        var _num = String(num);
        var _num = _num.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
            return s1.replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,") + s2;
        });
        return _num;
    }
});
