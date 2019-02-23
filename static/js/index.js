/**
 * Add _blank to outbound
 * @returns {*}
 */
const externalLinkAddBlank = function () {
    const a_tags = document.querySelectorAll('a:not([target="_blank"])');
    let res = [];
    if (!a_tags.length) return; // a_tagsがマッチなし = end
    for (let i = 0; i < a_tags.length; i++) {
        if (a_tags[i].href.indexOf(window.location.host) !== -1) continue;
        if (a_tags[i].href.indexOf('#') === 1) continue;
        a_tags[i].setAttribute('target', '_blank');
        a_tags[i].setAttribute('rel', 'noopener');
        res.push(a_tags[i]);
    }
    return res;
};
document.addEventListener('DOMContentLoaded', externalLinkAddBlank, false);

const lazyLoadStylesheets = () => {
    const styles = [
        '/css/font-awesome.min.css',
        '//fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400',
    ];

    const head = document.getElementsByTagName('head')[0];
    for (let i = 0; i < styles.length; i++) {
        let link   = document.createElement('link');
        link.type  = 'text/css';
        link.href  = styles[i];
        link.rel   = 'stylesheet';
        head.appendChild(link);
    }
};

lazyLoadStylesheets();