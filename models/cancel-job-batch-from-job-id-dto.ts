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
 * @interface CancelJobBatchFromJobIdDTO
 */
export interface CancelJobBatchFromJobIdDTO {
    /**
     * A list of jobs to cancel. The maximum number of jobs that can be cancelled is 500.
     * @type {Array<string>}
     * @memberof CancelJobBatchFromJobIdDTO
     */
    'jobIds'?: Array<string>;
}
