/*
Visier Data and Job Handling APIs

Visier APIs for data and job handling

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProcessingJob } from './processing-job';

/**
 * 
 * @export
 * @interface ProcessingJobAndStatusResponse
 */
export interface ProcessingJobAndStatusResponse {
    /**
     * The ID of the dispatching job that generated the extraction jobs.
     * @type {string}
     * @memberof ProcessingJobAndStatusResponse
     */
    'parentJobId'?: string;
    /**
     * The tenant that owns the dispatching job. This is usually the administrating tenant.
     * @type {string}
     * @memberof ProcessingJobAndStatusResponse
     */
    'parentTenantCode'?: string;
    /**
     * The number of processing jobs to return. The maximum number of jobs to return is 1000.
     * @type {number}
     * @memberof ProcessingJobAndStatusResponse
     */
    'limit'?: number;
    /**
     * The index to start retrieving results from, also known as offset. The index begins at 0.
     * @type {number}
     * @memberof ProcessingJobAndStatusResponse
     */
    'start'?: number;
    /**
     * A list of processing job information.
     * @type {Array<ProcessingJob>}
     * @memberof ProcessingJobAndStatusResponse
     */
    'processingJobs'?: Array<ProcessingJob>;
}

