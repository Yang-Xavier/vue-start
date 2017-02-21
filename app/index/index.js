import Vue from 'vue'
import Hello from './components/Hello'

new Vue({
    el:'body',
    render: (createElement) => createElement(Hello)
})