"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_MSGS = void 0;
var ERROR_MSGS;
(function (ERROR_MSGS) {
    ERROR_MSGS["FAIL"] = "fail";
    ERROR_MSGS["ERRORS"] = "errors";
    ERROR_MSGS["ERROR"] = "error";
    ERROR_MSGS["GENERIC_ERROR"] = "Algo sali\u00F3 mal";
    ERROR_MSGS["INVALID_CREDENTIALS"] = "Credenciales inv\u00E1lidas";
    ERROR_MSGS["SESION_NOT_STARTED"] = "Sesi\u00F3n no iniciada";
    ERROR_MSGS["UNAUTHORIZED"] = "No autorizado";
    ERROR_MSGS["NOT_FOUND"] = "No encontrado";
    ERROR_MSGS["PERMISSION_DENIED"] = "Permiso denegado";
    ERROR_MSGS["USER_NOT_FOUND"] = "Usuario no encontrado";
    ERROR_MSGS["USER_ALREADY_EXISTS"] = "Usuario ya existe";
    ERROR_MSGS["USER_NOT_CREATED"] = "Usuario no creado";
    ERROR_MSGS["USER_NOT_UPDATED"] = "Usuario no actualizado";
    ERROR_MSGS["USER_NOT_DELETED"] = "Usuario no eliminado";
    ERROR_MSGS["EMAIL_NOT_FOUND"] = "Email no encontrado";
    ERROR_MSGS["EMAIL_ALREADY_EXISTS"] = "Email ya existe";
    ERROR_MSGS["EMAIL_NOT_CREATED"] = "Email no creado";
    ERROR_MSGS["EMAIL_NOT_UPDATED"] = "Email no actualizado";
    ERROR_MSGS["EMAIL_CARACTERS_REQUIRED"] = "EL email debe tener los caracteres requeridos";
    ERROR_MSGS["PASSWORD_NOT_CREATED"] = "Contrase\u00F1a no creada";
    ERROR_MSGS["PASSWORD_HAVE_TO_MATCH"] = "Las contrase\u00F1as deben coincidir";
    ERROR_MSGS["PASSWORD_CARACTERS_REQUIRED"] = "La contrase\u00F1a debe tener los caracteres requeridos";
    ERROR_MSGS["SAME_PASSWORD"] = "La contrase\u00F1a debe ser diferente a la actual";
    ERROR_MSGS["RESOURSE_NOT_FOUND"] = "Recurso no encontrado";
    ERROR_MSGS["RESOURSE_ALREADY_EXISTS"] = "Recurso ya existe en la base de datos";
    ERROR_MSGS["JWT_INVALID_TOKEN"] = "invalid token";
    ERROR_MSGS["JWT_MALFORMED"] = "jwt malformed";
    ERROR_MSGS["JWT_INVALID_SIGNATURE"] = "invalid signature";
    ERROR_MSGS["SESSION_EXPIRED"] = "Su sesi\u00F3n ha expirado, inicie sesi\u00F3n nuevamente.";
    ERROR_MSGS["SESSION_DATA_TAMPERED"] = "Los datos de tu sesi\u00F3n han sido manipulados.";
    ERROR_MSGS["TOKEN_GENERATION_ERROR"] = "No se gener\u00F3 el token.";
    ERROR_MSGS["SERVER_ERROR"] = "Error en el servidor.";
    ERROR_MSGS["UNAUTHORIZED_ACCESS"] = "Acceso no autorizado.";
    ERROR_MSGS["UNAUTHORIZED_ACCESS_TO_RESOURCE"] = "Acceso no autorizado al recurso.";
    ERROR_MSGS["SEARCH_ERROR"] = "Error en la b\u00FAsqueda.";
    ERROR_MSGS["SEARCH_ERROR_NO_RESULTS"] = "No se encontraron resultados.";
    ERROR_MSGS["SEARCH_ERROR_ONLY_3_FILTERS"] = "Solo se permiten 3 filtros.";
    ERROR_MSGS["SEARCH_ERROR_INVALID_FILTER"] = "Filtro inv\u00E1lido.";
    ERROR_MSGS["RECEPIE_NOT_FOUND"] = "Receta no encontrada.";
    ERROR_MSGS["RECEPIE_NOT_CREATED"] = "Receta no creada.";
    ERROR_MSGS["RECEPIE_NOT_UPDATED"] = "Receta no actualizada.";
    ERROR_MSGS["RECEPIE_NOT_DELETED"] = "Receta no eliminada.";
    ERROR_MSGS["RECEPIE_ALREADY_EXISTS"] = "Receta ya existe.";
    ERROR_MSGS["RECEPIE_NOT_FOUND_IN_DB"] = "Receta no encontrada en la base de datos.";
})(ERROR_MSGS || (exports.ERROR_MSGS = ERROR_MSGS = {}));
