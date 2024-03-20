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
 * @interface JobCancellationResultDTO
 */
export interface JobCancellationResultDTO {
    /**
     * The analytic tenant whose job the cancel operation was conducted for.
     * @type {string}
     * @memberof JobCancellationResultDTO
     */
    'tenantCode'?: string;
    /**
     * The job ID of the job that the cancel operation was conducted for.
     * @type {string}
     * @memberof JobCancellationResultDTO
     */
    'jobId'?: string;
    /**
     * The job type associated with the job ID.
     * @type {string}
     * @memberof JobCancellationResultDTO
     */
    'jobType'?: string;
    /**
     * If applicable, the job ID of the job that spawned the given job.
     * @type {string}
     * @memberof JobCancellationResultDTO
     */
    'parentJobId'?: string;
    /**
     * The status of the cancellation.
     * @type {string}
     * @memberof JobCancellationResultDTO
     */
    'cancelStatus'?: JobCancellationResultDTOCancelStatusEnum;
    /**
     * The job status after the cancel operation. If successful, the status is either Cancelled or Cancelling.
     * @type {string}
     * @memberof JobCancellationResultDTO
     */
    'jobStatus'?: string;
    /**
     * If applicable, the message explains what errors occurred while cancelling the jobs.
     * @type {string}
     * @memberof JobCancellationResultDTO
     */
    'message'?: string;
}

type JobCancellationResultDTOCancelStatusEnum = 'CANCEL_FAILED' | 'CANCEL_SUCCEEDED'


