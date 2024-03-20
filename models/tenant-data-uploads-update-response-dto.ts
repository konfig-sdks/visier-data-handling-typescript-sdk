/*
Visier Data and Job Handling APIs

Visier APIs for data and job handling

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TenantDataUploadUpdateStatusResponseDTO } from './tenant-data-upload-update-status-response-dto';

/**
 * 
 * @export
 * @interface TenantDataUploadsUpdateResponseDTO
 */
export interface TenantDataUploadsUpdateResponseDTO {
    /**
     * The number of data uploads that failed during the exclusion operation.
     * @type {number}
     * @memberof TenantDataUploadsUpdateResponseDTO
     */
    'totalFailures'?: number;
    /**
     * The number of data uploads that were excluded successfully.
     * @type {number}
     * @memberof TenantDataUploadsUpdateResponseDTO
     */
    'totalSuccess'?: number;
    /**
     * A list of objects representing the results of the data upload exclusion.
     * @type {Array<TenantDataUploadUpdateStatusResponseDTO>}
     * @memberof TenantDataUploadsUpdateResponseDTO
     */
    'uploads'?: Array<TenantDataUploadUpdateStatusResponseDTO>;
}

