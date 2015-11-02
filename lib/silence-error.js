
var restErrors = {
	custom : function (statusCode, restCode){
		return { "statusCode" : statusCode, "restCode": restCode };
	},
	badRequest : function badRequest (){
		return this.custom(400, "badRequest");
	},
	missingHeader : function missingHeader(headerName){
		var e = this.custom(400, "missingHeader");
		e.name = headerName;
		return e;
	},
	invalidBody : function invalidBody(){
		return this.custom(400, "invalidBody");
	},
	authRequired : function authRequired(){
		return this.custom(401, "authRequired");
	},
	authFailed : function authFailed(){
		return this.custom(401, "authFailed");
	},
	forbidden : function forbidden(){
		return this.custom(403, "forbidden");
	},
	resourceNotFound : function resourceNotFound(){
		return this.custom(404, "resourceNotFound");
	},
	notAllowed : function notAllowed () {
		return this.custom(405, "notAllowed");
	},
	unsupportedMediaType : function unsupportedMediaType(rejected, supported){
		var e = this.custom(415, "unsupportedMediaType");
		e.rejected = rejected;
		e.supported = supported;
		return e;
	},
	paramsValidation : function paramsValidation(errors){
		var e = this.custom(422, "paramsValidation");	
		e.errors = errors;
		return e;
	},
	internalServerError : function internalServerError(stack){
		var e = this.custom(500, "internalServerError");
		e.stack = stack;
		return e;
	},
	notImplemented : function notImplemented(stack){
		return this.custom(501, "notImplemented");
	},
	gatewayBadDialog : function gatewayBadDialog(){
		return this.custom(502, "gatewayBadDialog");
	}

};

module.exports = restErrors;