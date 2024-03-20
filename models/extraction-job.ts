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
 * @interface ExtractionJob
 */
export interface ExtractionJob {
    /**
     * The ID of the extraction job.
     * @type {string}
     * @memberof ExtractionJob
     */
    'extractionJobId'?: string;
    /**
     * The tenant code of the analytic tenant for the extraction job.
     * @type {string}
     * @memberof ExtractionJob
     */
    'tenantCode'?: string;
    /**
     * The current state of the job.  - Valid values: Pending, Running, Succeeded, Failed, Error, Cancelling, Cancelled, RolledBack, Rescheduling, Rescheduled.
     * @type {string}
     * @memberof ExtractionJob
     */
    'status'?: string;
    /**
     * The current stage of the job. This is not returned if the stage is \"Completed\".  - Valid values: Initialize, Retrieve Main Subject, Retrieve Secondary Subjects, Retrieve Custom Subjects, Process Records, Publish Artifacts, Publish Records, Completed.
     * @type {string}
     * @memberof ExtractionJob
     */
    'currentStage'?: string;
}
