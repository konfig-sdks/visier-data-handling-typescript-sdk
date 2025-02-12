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
 * @interface TenantDataUploadUpdateStatusResponseDTO
 */
export interface TenantDataUploadUpdateStatusResponseDTO {
    /**
     * The analytic tenant that the exclusion operation was conducted for.
     * @type {string}
     * @memberof TenantDataUploadUpdateStatusResponseDTO
     */
    'tenantCode'?: string;
    /**
     * The upload time of the data upload
     * @type {string}
     * @memberof TenantDataUploadUpdateStatusResponseDTO
     */
    'uploadTime'?: string;
    /**
     * The outcome of the exclusion operation.
     * @type {string}
     * @memberof TenantDataUploadUpdateStatusResponseDTO
     */
    'status'?: string;
    /**
     * If applicable, the message explains why errors were encountered during the exclusion operation.
     * @type {string}
     * @memberof TenantDataUploadUpdateStatusResponseDTO
     */
    'message'?: string;
}

