'use strict';

//MSJ_ERROR
global.ANP = 'Acción no permitida.';

//BD_ERROR
global.STATUS_SUCCESS         = 0; // Todo correcto
global.STATUS_ERROR           = 1; // Bad Request - Error controlado
global.STATUS_ERROR_DB_OTHERS = 2; // Error no controlado

//HTTP RESPONSES
global.HTTP_200 = 200;  // Todo correcto
global.HTTP_400 = 400;  // Bad Request - Error controlado
global.HTTP_500 = 500;  // Error no controlado