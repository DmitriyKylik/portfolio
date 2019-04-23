import 'mmenu';
import 'mburger';

export const init = (element) => {
    $(element).mmenu(
        {
            extensions: [
                'theme-dark',
                'pagedim-black'
            ]
        }
    );
};

