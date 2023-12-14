"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var requireAuth = function (req, res, next) {
    if (!req.cookies.Authorization) {
        return res.status(401).json({
            code: 401,
            message: 'Unauthorized',
            data: null,
        });
    }
    return next();
};
exports.requireAuth = requireAuth;
//# sourceMappingURL=requireAuth.middleware.js.map