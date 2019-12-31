import Vue from "vue";
import MessageBox from './MessageBox';
export var baseUrl="http://39.97.33.178";
export var messageBox = (function () {
    var defaults = {
        title: "",
        content: "",
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    };
    var MyCompontent = Vue.extend(MessageBox);//继承全部属性返回一个类
    return function (opts) {
        for (var attr in opts) {
            defaults[attr] = opts[attr];
        }
      
        var vm = new MyCompontent({
            el: document.createElement("div"),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel:defaults.cancel,
                ok:defaults.ok
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel&&defaults.handleCancel.call(this)
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.ok&&defaults.handleOk.call(this)
                    document.body.removeChild(vm.$el);
                }
            }
        });
        document.body.appendChild(vm.$el);
    };
})()