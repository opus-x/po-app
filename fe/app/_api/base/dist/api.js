/**
 * Covid19 Citizen Portal
 * Covid19 Citizen Portal
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var url = require("url");
var isomorphicFetch = require("isomorphic-fetch");
var assign = require("core-js/library/fn/object/assign");
var BASE_PATH = "https://covid19.int.xcp/api/v1".replace(/\/+$/, "");
var BaseAPI = (function () {
    function BaseAPI(fetch, basePath) {
        if (fetch === void 0) { fetch = isomorphicFetch; }
        if (basePath === void 0) { basePath = BASE_PATH; }
        this.basePath = basePath;
        this.fetch = fetch;
    }
    return BaseAPI;
}());
exports.BaseAPI = BaseAPI;
;
/**
 * AuthorizationcontrollerApi - fetch parameter creator
 */
exports.AuthorizationcontrollerApiFetchParamCreator = {
    /**
     *
     * @summary Sent SMS with auth code
     * @param sendCodeRequest send sms login request dto
     */
    sendCodeUsingPOST: function (params, options) {
        // verify required parameter "sendCodeRequest" is set
        if (params["sendCodeRequest"] == null) {
            throw new Error("Missing required parameter sendCodeRequest when calling sendCodeUsingPOST");
        }
        var baseUrl = "/authorizations/send-code";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["sendCodeRequest"]) {
            fetchOptions.body = JSON.stringify(params["sendCodeRequest"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     *
     * @summary Verify code from SMS
     * @param personUid Uid of person
     * @param smsCode Code received in SMS
     */
    verifyCodeUsingPOST: function (params, options) {
        var baseUrl = "/authorizations/verify-code";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "personUid": params["personUid"],
            "smsCode": params["smsCode"],
        });
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * AuthorizationcontrollerApi - functional programming interface
 */
exports.AuthorizationcontrollerApiFp = {
    /**
     *
     * @summary Sent SMS with auth code
     * @param sendCodeRequest send sms login request dto
     */
    sendCodeUsingPOST: function (params, options) {
        var fetchArgs = exports.AuthorizationcontrollerApiFetchParamCreator.sendCodeUsingPOST(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     *
     * @summary Verify code from SMS
     * @param personUid Uid of person
     * @param smsCode Code received in SMS
     */
    verifyCodeUsingPOST: function (params, options) {
        var fetchArgs = exports.AuthorizationcontrollerApiFetchParamCreator.verifyCodeUsingPOST(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * AuthorizationcontrollerApi - object-oriented interface
 */
var AuthorizationcontrollerApi = (function (_super) {
    __extends(AuthorizationcontrollerApi, _super);
    function AuthorizationcontrollerApi() {
        _super.apply(this, arguments);
    }
    /**
     *
     * @summary Sent SMS with auth code
     * @param sendCodeRequest send sms login request dto
     */
    AuthorizationcontrollerApi.prototype.sendCodeUsingPOST = function (params, options) {
        return exports.AuthorizationcontrollerApiFp.sendCodeUsingPOST(params, options)(this.fetch, this.basePath);
    };
    /**
     *
     * @summary Verify code from SMS
     * @param personUid Uid of person
     * @param smsCode Code received in SMS
     */
    AuthorizationcontrollerApi.prototype.verifyCodeUsingPOST = function (params, options) {
        return exports.AuthorizationcontrollerApiFp.verifyCodeUsingPOST(params, options)(this.fetch, this.basePath);
    };
    return AuthorizationcontrollerApi;
}(BaseAPI));
exports.AuthorizationcontrollerApi = AuthorizationcontrollerApi;
;
/**
 * AuthorizationcontrollerApi - factory interface
 */
exports.AuthorizationcontrollerApiFactory = function (fetch, basePath) {
    return {
        /**
         *
         * @summary Sent SMS with auth code
         * @param sendCodeRequest send sms login request dto
         */
        sendCodeUsingPOST: function (params, options) {
            return exports.AuthorizationcontrollerApiFp.sendCodeUsingPOST(params, options)(fetch, basePath);
        },
        /**
         *
         * @summary Verify code from SMS
         * @param personUid Uid of person
         * @param smsCode Code received in SMS
         */
        verifyCodeUsingPOST: function (params, options) {
            return exports.AuthorizationcontrollerApiFp.verifyCodeUsingPOST(params, options)(fetch, basePath);
        },
    };
};
/**
 * HealthcheckcontrollerApi - fetch parameter creator
 */
exports.HealthcheckcontrollerApiFetchParamCreator = {
    /**
     *
     * @summary Fills exposure form
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param exposureDto Health check&#39;s data - exposure
     */
    personsPersonUidHealthCheckExposurePut: function (params, options) {
        // verify required parameter "personUid" is set
        if (params["personUid"] == null) {
            throw new Error("Missing required parameter personUid when calling personsPersonUidHealthCheckExposurePut");
        }
        // verify required parameter "exposureDto" is set
        if (params["exposureDto"] == null) {
            throw new Error("Missing required parameter exposureDto when calling personsPersonUidHealthCheckExposurePut");
        }
        var baseUrl = "/persons/{personUid}/health-check/exposure"
            .replace("{" + "personUid" + "}", "" + params["personUid"]);
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "PUT" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["exposureDto"]) {
            fetchOptions.body = JSON.stringify(params["exposureDto"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     *
     * @summary Fills actual health check form
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param simptomsDto Health check&#39;s data - simptoms
     */
    personsPersonUidHealthCheckSymptomsPut: function (params, options) {
        // verify required parameter "personUid" is set
        if (params["personUid"] == null) {
            throw new Error("Missing required parameter personUid when calling personsPersonUidHealthCheckSymptomsPut");
        }
        // verify required parameter "simptomsDto" is set
        if (params["simptomsDto"] == null) {
            throw new Error("Missing required parameter simptomsDto when calling personsPersonUidHealthCheckSymptomsPut");
        }
        var baseUrl = "/persons/{personUid}/health-check/symptoms"
            .replace("{" + "personUid" + "}", "" + params["personUid"]);
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "PUT" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["simptomsDto"]) {
            fetchOptions.body = JSON.stringify(params["simptomsDto"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     *
     * @summary Fills testing place form
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param testingPlaceDto Health check&#39;s data - testing place
     */
    personsPersonUidHealthCheckTestingPlacePut: function (params, options) {
        // verify required parameter "personUid" is set
        if (params["personUid"] == null) {
            throw new Error("Missing required parameter personUid when calling personsPersonUidHealthCheckTestingPlacePut");
        }
        // verify required parameter "testingPlaceDto" is set
        if (params["testingPlaceDto"] == null) {
            throw new Error("Missing required parameter testingPlaceDto when calling personsPersonUidHealthCheckTestingPlacePut");
        }
        var baseUrl = "/persons/{personUid}/health-check/testing-place"
            .replace("{" + "personUid" + "}", "" + params["personUid"]);
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "PUT" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["testingPlaceDto"]) {
            fetchOptions.body = JSON.stringify(params["testingPlaceDto"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * HealthcheckcontrollerApi - functional programming interface
 */
exports.HealthcheckcontrollerApiFp = {
    /**
     *
     * @summary Fills exposure form
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param exposureDto Health check&#39;s data - exposure
     */
    personsPersonUidHealthCheckExposurePut: function (params, options) {
        var fetchArgs = exports.HealthcheckcontrollerApiFetchParamCreator.personsPersonUidHealthCheckExposurePut(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     *
     * @summary Fills actual health check form
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param simptomsDto Health check&#39;s data - simptoms
     */
    personsPersonUidHealthCheckSymptomsPut: function (params, options) {
        var fetchArgs = exports.HealthcheckcontrollerApiFetchParamCreator.personsPersonUidHealthCheckSymptomsPut(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     *
     * @summary Fills testing place form
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param testingPlaceDto Health check&#39;s data - testing place
     */
    personsPersonUidHealthCheckTestingPlacePut: function (params, options) {
        var fetchArgs = exports.HealthcheckcontrollerApiFetchParamCreator.personsPersonUidHealthCheckTestingPlacePut(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * HealthcheckcontrollerApi - object-oriented interface
 */
var HealthcheckcontrollerApi = (function (_super) {
    __extends(HealthcheckcontrollerApi, _super);
    function HealthcheckcontrollerApi() {
        _super.apply(this, arguments);
    }
    /**
     *
     * @summary Fills exposure form
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param exposureDto Health check&#39;s data - exposure
     */
    HealthcheckcontrollerApi.prototype.personsPersonUidHealthCheckExposurePut = function (params, options) {
        return exports.HealthcheckcontrollerApiFp.personsPersonUidHealthCheckExposurePut(params, options)(this.fetch, this.basePath);
    };
    /**
     *
     * @summary Fills actual health check form
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param simptomsDto Health check&#39;s data - simptoms
     */
    HealthcheckcontrollerApi.prototype.personsPersonUidHealthCheckSymptomsPut = function (params, options) {
        return exports.HealthcheckcontrollerApiFp.personsPersonUidHealthCheckSymptomsPut(params, options)(this.fetch, this.basePath);
    };
    /**
     *
     * @summary Fills testing place form
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param testingPlaceDto Health check&#39;s data - testing place
     */
    HealthcheckcontrollerApi.prototype.personsPersonUidHealthCheckTestingPlacePut = function (params, options) {
        return exports.HealthcheckcontrollerApiFp.personsPersonUidHealthCheckTestingPlacePut(params, options)(this.fetch, this.basePath);
    };
    return HealthcheckcontrollerApi;
}(BaseAPI));
exports.HealthcheckcontrollerApi = HealthcheckcontrollerApi;
;
/**
 * HealthcheckcontrollerApi - factory interface
 */
exports.HealthcheckcontrollerApiFactory = function (fetch, basePath) {
    return {
        /**
         *
         * @summary Fills exposure form
         * @param personUid Unique Person&#39;s ID (person_uid.person)
         * @param exposureDto Health check&#39;s data - exposure
         */
        personsPersonUidHealthCheckExposurePut: function (params, options) {
            return exports.HealthcheckcontrollerApiFp.personsPersonUidHealthCheckExposurePut(params, options)(fetch, basePath);
        },
        /**
         *
         * @summary Fills actual health check form
         * @param personUid Unique Person&#39;s ID (person_uid.person)
         * @param simptomsDto Health check&#39;s data - simptoms
         */
        personsPersonUidHealthCheckSymptomsPut: function (params, options) {
            return exports.HealthcheckcontrollerApiFp.personsPersonUidHealthCheckSymptomsPut(params, options)(fetch, basePath);
        },
        /**
         *
         * @summary Fills testing place form
         * @param personUid Unique Person&#39;s ID (person_uid.person)
         * @param testingPlaceDto Health check&#39;s data - testing place
         */
        personsPersonUidHealthCheckTestingPlacePut: function (params, options) {
            return exports.HealthcheckcontrollerApiFp.personsPersonUidHealthCheckTestingPlacePut(params, options)(fetch, basePath);
        },
    };
};
/**
 * PersoncontrollerApi - fetch parameter creator
 */
exports.PersoncontrollerApiFetchParamCreator = {
    /**
     *
     * @summary GET actual person and health status
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     */
    personsPersonUidGet: function (params, options) {
        // verify required parameter "personUid" is set
        if (params["personUid"] == null) {
            throw new Error("Missing required parameter personUid when calling personsPersonUidGet");
        }
        var baseUrl = "/persons/{personUid}"
            .replace("{" + "personUid" + "}", "" + params["personUid"]);
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     *
     * @summary Updates actual person's and health status
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param personDto Person&#39;s data
     */
    personsPersonUidPut: function (params, options) {
        // verify required parameter "personUid" is set
        if (params["personUid"] == null) {
            throw new Error("Missing required parameter personUid when calling personsPersonUidPut");
        }
        // verify required parameter "personDto" is set
        if (params["personDto"] == null) {
            throw new Error("Missing required parameter personDto when calling personsPersonUidPut");
        }
        var baseUrl = "/persons/{personUid}"
            .replace("{" + "personUid" + "}", "" + params["personUid"]);
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "PUT" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["personDto"]) {
            fetchOptions.body = JSON.stringify(params["personDto"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * PersoncontrollerApi - functional programming interface
 */
exports.PersoncontrollerApiFp = {
    /**
     *
     * @summary GET actual person and health status
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     */
    personsPersonUidGet: function (params, options) {
        var fetchArgs = exports.PersoncontrollerApiFetchParamCreator.personsPersonUidGet(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     *
     * @summary Updates actual person's and health status
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param personDto Person&#39;s data
     */
    personsPersonUidPut: function (params, options) {
        var fetchArgs = exports.PersoncontrollerApiFetchParamCreator.personsPersonUidPut(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * PersoncontrollerApi - object-oriented interface
 */
var PersoncontrollerApi = (function (_super) {
    __extends(PersoncontrollerApi, _super);
    function PersoncontrollerApi() {
        _super.apply(this, arguments);
    }
    /**
     *
     * @summary GET actual person and health status
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     */
    PersoncontrollerApi.prototype.personsPersonUidGet = function (params, options) {
        return exports.PersoncontrollerApiFp.personsPersonUidGet(params, options)(this.fetch, this.basePath);
    };
    /**
     *
     * @summary Updates actual person's and health status
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param personDto Person&#39;s data
     */
    PersoncontrollerApi.prototype.personsPersonUidPut = function (params, options) {
        return exports.PersoncontrollerApiFp.personsPersonUidPut(params, options)(this.fetch, this.basePath);
    };
    return PersoncontrollerApi;
}(BaseAPI));
exports.PersoncontrollerApi = PersoncontrollerApi;
;
/**
 * PersoncontrollerApi - factory interface
 */
exports.PersoncontrollerApiFactory = function (fetch, basePath) {
    return {
        /**
         *
         * @summary GET actual person and health status
         * @param personUid Unique Person&#39;s ID (person_uid.person)
         */
        personsPersonUidGet: function (params, options) {
            return exports.PersoncontrollerApiFp.personsPersonUidGet(params, options)(fetch, basePath);
        },
        /**
         *
         * @summary Updates actual person's and health status
         * @param personUid Unique Person&#39;s ID (person_uid.person)
         * @param personDto Person&#39;s data
         */
        personsPersonUidPut: function (params, options) {
            return exports.PersoncontrollerApiFp.personsPersonUidPut(params, options)(fetch, basePath);
        },
    };
};
/**
 * TreatmentcontrollerApi - fetch parameter creator
 */
exports.TreatmentcontrollerApiFetchParamCreator = {
    /**
     *
     * @summary Fills actual data about treatment for covid19 positive patients
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param treatmentDto Treatment&#39;s data
     */
    personsPersonUidTreatmentPut: function (params, options) {
        // verify required parameter "personUid" is set
        if (params["personUid"] == null) {
            throw new Error("Missing required parameter personUid when calling personsPersonUidTreatmentPut");
        }
        // verify required parameter "treatmentDto" is set
        if (params["treatmentDto"] == null) {
            throw new Error("Missing required parameter treatmentDto when calling personsPersonUidTreatmentPut");
        }
        var baseUrl = "/persons/{personUid}/treatment"
            .replace("{" + "personUid" + "}", "" + params["personUid"]);
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "PUT" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["treatmentDto"]) {
            fetchOptions.body = JSON.stringify(params["treatmentDto"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * TreatmentcontrollerApi - functional programming interface
 */
exports.TreatmentcontrollerApiFp = {
    /**
     *
     * @summary Fills actual data about treatment for covid19 positive patients
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param treatmentDto Treatment&#39;s data
     */
    personsPersonUidTreatmentPut: function (params, options) {
        var fetchArgs = exports.TreatmentcontrollerApiFetchParamCreator.personsPersonUidTreatmentPut(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * TreatmentcontrollerApi - object-oriented interface
 */
var TreatmentcontrollerApi = (function (_super) {
    __extends(TreatmentcontrollerApi, _super);
    function TreatmentcontrollerApi() {
        _super.apply(this, arguments);
    }
    /**
     *
     * @summary Fills actual data about treatment for covid19 positive patients
     * @param personUid Unique Person&#39;s ID (person_uid.person)
     * @param treatmentDto Treatment&#39;s data
     */
    TreatmentcontrollerApi.prototype.personsPersonUidTreatmentPut = function (params, options) {
        return exports.TreatmentcontrollerApiFp.personsPersonUidTreatmentPut(params, options)(this.fetch, this.basePath);
    };
    return TreatmentcontrollerApi;
}(BaseAPI));
exports.TreatmentcontrollerApi = TreatmentcontrollerApi;
;
/**
 * TreatmentcontrollerApi - factory interface
 */
exports.TreatmentcontrollerApiFactory = function (fetch, basePath) {
    return {
        /**
         *
         * @summary Fills actual data about treatment for covid19 positive patients
         * @param personUid Unique Person&#39;s ID (person_uid.person)
         * @param treatmentDto Treatment&#39;s data
         */
        personsPersonUidTreatmentPut: function (params, options) {
            return exports.TreatmentcontrollerApiFp.personsPersonUidTreatmentPut(params, options)(fetch, basePath);
        },
    };
};
