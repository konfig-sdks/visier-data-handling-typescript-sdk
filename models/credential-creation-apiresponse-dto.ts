/*
Visier Data and Job Handling APIs

Visier APIs for data and job handling

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SubjectMissingAccessDTO } from './subject-missing-access-dto';

/**
 * 
 * @export
 * @interface CredentialCreationAPIResponseDTO
 */
export interface CredentialCreationAPIResponseDTO {
    /**
     * The unique ID of the newly created credential.
     * @type {string}
     * @memberof CredentialCreationAPIResponseDTO
     */
    'uuid'?: string;
    /**
     * The symbol name of the newly created credential.
     * @type {string}
     * @memberof CredentialCreationAPIResponseDTO
     */
    'symbolName'?: string;
    /**
     * The object name of the newly created credential.
     * @type {string}
     * @memberof CredentialCreationAPIResponseDTO
     */
    'objectName'?: string;
    /**
     * The properties that the credential cannot access despite successful authentication.  This is only returned for authentications that do not grant access to all data.
     * @type {Array<SubjectMissingAccessDTO>}
     * @memberof CredentialCreationAPIResponseDTO
     */
    'missingConnectionProperties'?: Array<SubjectMissingAccessDTO>;
}

