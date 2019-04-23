import 'parsley';

const bindSubmit  = (element) => {
    element.on('submit', function() {
        if(element.parsley().isValid()) {
            element[0].reset();
            element.parsley().reset();
        }
    });
};

export const init = (element) => {
    element.parsley();
    bindSubmit(element);
};
