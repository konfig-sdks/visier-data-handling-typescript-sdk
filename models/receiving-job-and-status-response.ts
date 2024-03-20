/*
Visier Data and Job Handling APIs

Visier APIs for data and job handling

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReceivingJob } from './receiving-job';

/**
 * 
 * @export
 * @interface ReceivingJobAndStatusResponse
 */
export interface ReceivingJobAndStatusResponse {
    /**
     * The ID of the dispatching job that generated the extraction jobs.
     * @type {string}
     * @memberof ReceivingJobAndStatusResponse
     */
    'parentJobId'?: string;
    /**
     * The tenant that owns the dispatching job. This is usually the administrating tenant.
     * @type {string}
     * @memberof ReceivingJobAndStatusResponse
     */
    'parentTenantCode'?: string;
    /**
     * The number of receiving jobs to return. The maximum number of jobs to return is 1000.
     * @type {number}
     * @memberof ReceivingJobAndStatusResponse
     */
    'limit'?: number;
    /**
     * The index to start retrieving results from, also known as offset. The index begins at 0.
     * @type {number}
     * @memberof ReceivingJobAndStatusResponse
     */
    'start'?: number;
    /**
     * A list of receiving job information.
     * @type {Array<ReceivingJob>}
     * @memberof ReceivingJobAndStatusResponse
     */
    'receivingJobs'?: Array<ReceivingJob>;
}

