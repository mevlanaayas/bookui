import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDateTime', function (value) {
    if (!value) return '';
    return moment(value, "YYYY-MM-DD HH:mm Z").format('DD.MM.YYYY HH:mm ');
});
