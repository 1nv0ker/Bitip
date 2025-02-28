
import { createI18n } from 'vue-i18n';
import { en, zh } from './message';

const messages = {
    en,
    zh
}
const i18n = createI18n({
    locale: 'zh',
    messages
});
 
export default i18n;