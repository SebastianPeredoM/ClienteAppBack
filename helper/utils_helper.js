'use strict';

global.responseError = (error, res) => {
    // Errores de base de datos
    switch(error.status) {
        case global.STATUS_ERROR:
            error.status = global.HTTP_400; break;
        case global.STATUS_ERROR_DB_OTHERS:
            error.status = global.HTTP_500; break;
        default:
            if (error.status == undefined || error.status == null) {
                error.status = global.HTTP_500;
            }
            break;
    }
    return res.status(error.status).send(error);
};

//  VALIDACIONES
global.__isNullOrEmpty = (value, msj = global.ANP) => {
    if (typeof value == 'object' && value != null) {
        for (var elm of value) {
            if (String(elm).trim() == null || String(elm).trim() == '' || String(elm).trim() == 'null' || elm == undefined || elm == 'undefined') {
                throw { msj, status: global.HTTP_400
                      };
            }
        }
    } else {
        if (String(value).trim() == null || String(value).trim() == '' || String(value).trim() == 'null' || value == undefined || value == 'undefined') {
            throw { msj, status: global.HTTP_400
                  };
        }
    }
}

global.__maxLength = (value, max, msj = global.ANP) => {
    if (value.length > max) {
        throw { msj, status: global.HTTP_400 }
    }
}

global.__dateInvalid = (date, msj = global.ANP) => {
    const moment = require('moment');

    let mDate = moment(date);
    if (!mDate.isValid()) {
        throw { msj, status: global.HTTP_400 }
    }
}

global.__maxDaysFromDate = (date, days, msj = global.ANP) => {
    const moment = require('moment');

    const mDate = moment(date);
    const today = moment().startOf('day');

    if (mDate.diff(today, 'days') > days) {
        throw { msj, status: global.HTTP_400 }
    }
}

global.__minYearsFromDate = (date, years, msj = global.ANP) => {
    const moment = require('moment');

    const mDate = moment(date);
    const today = moment().startOf('day');

    if (mDate.diff(today, 'years') < -years) {
        throw { msj, status: global.HTTP_400 }
    }
}
