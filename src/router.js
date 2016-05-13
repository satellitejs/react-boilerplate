import { Router5 } from 'router5';
import historyPlugin from 'router5-history';

export default function createRouter() {
  const router = new Router5()
    .setOption('useHash', false)
    .setOption('trailingSlash', false)
    // Routes
    .addNode('home', '/')
    // Plugins
    .usePlugin(historyPlugin());

  return router;
}
