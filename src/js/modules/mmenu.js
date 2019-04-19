import 'mmenu';
// import 'mburger';

$(function() {
    const $headerMenu = $('#my-menu');
    Mmenu.configs.classNames.selected = 'active';
    Mmenu.configs.offCanvas.page.selector = '#my-page';
    $headerMenu.mmenu(
        {
            extensions: [
                'listview-justify',
                'theme-dark',
                'pagedim-black'
            ]
        }
    );
});

