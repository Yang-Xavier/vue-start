/**
 * Created by yangbingxun on 2017/2/21.
 */

var hotClient = require('webpack-hot-middleware/client')

hotClient.subscribe(function(event){
    if(event.action==='reload'){
        window.location.reload()
    }
})