import { createApp } from 'vue'
import App from './App.vue'
import CfcInput from './components/CfcInput.vue'

import './assets/css/main.css'

export type { CfcInputProps } from './components/CfcInput.vue'
export { CfcInput }

createApp(App).mount('#app')
