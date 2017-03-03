/*jshint esversion: 6 */

Vue.component('authMessage', {
    props: ['myAuthenticationMessage', "myAuthenticationMessagePassword"],
    template: '<span> authenticating as {{ myAuthenticationMessage }} with password {{ myAuthenticationMessagePassword }}</span>'
});

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  routes // short for routes: routes
});

var maVue = new Vue({
    el: '#testAuthBootstrap',
    data: {
        login: '',
        pwd: '',
        confpwd: ''
    },
    router,
    methods: {
        authenticate: function (event) {
            console.log('Je m\'autentifie avec le compte ' + this.$data.login);
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    alert(JSON.stringify(response));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
});

