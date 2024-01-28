import Router from './router.js'

const router = new Router();

router.add(404,"/pages/404.html" )
router.add('/',"/pages/home.html" )
router.add("/Explorer","/pages/Explorer.html" )
router.add("/OUniverso","/pages/OUniverso.html" )

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()