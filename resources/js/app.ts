import './bootstrap'
import '../css/app.css'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'


InertiaProgress.init()

createInertiaApp({
    resolve: (name) => {
        const page = resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
        .use(plugin)
        .mount(el)
    },
})
