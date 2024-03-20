/*
Visier Data and Job Handling APIs

Visier APIs for data and job handling

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface DataVersionObject
 */
export interface DataVersionObject {
    /**
     * The tenant code for the analytic tenant that you are disabling a data version.
     * @type {string}
     * @memberof DataVersionObject
     */
    'tenantCode'?: string;
    /**
     * The data version to disable for a particular analytic tenant.
     * @type {string}
     * @memberof DataVersionObject
     */
    'dataVersions'?: string;
}
