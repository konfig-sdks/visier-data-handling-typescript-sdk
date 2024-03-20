<div align="center">

[![Visit Visier](./header.png)](https://visier.com)

# [Visier](https://visier.com)<a id="visier"></a>

Visier APIs for data and job handling

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`visierdatahandling.dataAndJobHandling.assignConnectorCredential`](#visierdatahandlingdataandjobhandlingassignconnectorcredential)
  * [`visierdatahandling.dataAndJobHandling.cancelJobs`](#visierdatahandlingdataandjobhandlingcanceljobs)
  * [`visierdatahandling.dataAndJobHandling.createConnectorCredential`](#visierdatahandlingdataandjobhandlingcreateconnectorcredential)
  * [`visierdatahandling.dataAndJobHandling.dataConnectorCredentials`](#visierdatahandlingdataandjobhandlingdataconnectorcredentials)
  * [`visierdatahandling.dataAndJobHandling.dataConnectors`](#visierdatahandlingdataandjobhandlingdataconnectors)
  * [`visierdatahandling.dataAndJobHandling.deleteConnectorCredential`](#visierdatahandlingdataandjobhandlingdeleteconnectorcredential)
  * [`visierdatahandling.dataAndJobHandling.disableDV`](#visierdatahandlingdataandjobhandlingdisabledv)
  * [`visierdatahandling.dataAndJobHandling.dispatchingJobStatus`](#visierdatahandlingdataandjobhandlingdispatchingjobstatus)
  * [`visierdatahandling.dataAndJobHandling.excludeDataUplaods`](#visierdatahandlingdataandjobhandlingexcludedatauplaods)
  * [`visierdatahandling.dataAndJobHandling.extractionJobAndStatus`](#visierdatahandlingdataandjobhandlingextractionjobandstatus)
  * [`visierdatahandling.dataAndJobHandling.includeDataUploads`](#visierdatahandlingdataandjobhandlingincludedatauploads)
  * [`visierdatahandling.dataAndJobHandling.jobIdStatus`](#visierdatahandlingdataandjobhandlingjobidstatus)
  * [`visierdatahandling.dataAndJobHandling.jobStatus`](#visierdatahandlingdataandjobhandlingjobstatus)
  * [`visierdatahandling.dataAndJobHandling.latestEnabledDV`](#visierdatahandlingdataandjobhandlinglatestenableddv)
  * [`visierdatahandling.dataAndJobHandling.processingJobAndStatus`](#visierdatahandlingdataandjobhandlingprocessingjobandstatus)
  * [`visierdatahandling.dataAndJobHandling.processingJobStatus`](#visierdatahandlingdataandjobhandlingprocessingjobstatus)
  * [`visierdatahandling.dataAndJobHandling.receivingJobAndStatus`](#visierdatahandlingdataandjobhandlingreceivingjobandstatus)
  * [`visierdatahandling.dataAndJobHandling.receivingJobStatus`](#visierdatahandlingdataandjobhandlingreceivingjobstatus)
  * [`visierdatahandling.dataAndJobHandling.retrieveDataUploads`](#visierdatahandlingdataandjobhandlingretrievedatauploads)
  * [`visierdatahandling.dataAndJobHandling.startExtraction`](#visierdatahandlingdataandjobhandlingstartextraction)
  * [`visierdatahandling.dataAndJobHandling.startLoad`](#visierdatahandlingdataandjobhandlingstartload)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Visier&serviceName=DataHandling&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { VisierDataHandling } from "visier-data-handling-typescript-sdk";

const visierdatahandling = new VisierDataHandling({
  // Defining the base path is optional and defaults to https://vanity.api.visier.io
  // basePath: "https://vanity.api.visier.io",
  apiKeyAuth: "API_KEY",
  accessToken: "ACCESS_TOKEN",
  cookieAuth: "API_KEY",
});

const assignConnectorCredentialResponse =
  await visierdatahandling.dataAndJobHandling.assignConnectorCredential({});

console.log(assignConnectorCredentialResponse);
```

## Reference<a id="reference"></a>


### `visierdatahandling.dataAndJobHandling.assignConnectorCredential`<a id="visierdatahandlingdataandjobhandlingassignconnectorcredential"></a>

This API allows you to assign a connector credential to a data connector.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignConnectorCredentialResponse =
  await visierdatahandling.dataAndJobHandling.assignConnectorCredential({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### connectors: [`Connector`](./models/connector.ts)[]<a id="connectors-connectormodelsconnectorts"></a>

A list of objects representing the data connectors to be assigned with credentials.

#### 🔄 Return<a id="🔄-return"></a>

[AssignConnectorCredentialsResponseDTO](./models/assign-connector-credentials-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-connectors/assignCredentials` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.cancelJobs`<a id="visierdatahandlingdataandjobhandlingcanceljobs"></a>

Use this API to cancel a list of processing jobs, upload jobs, receiving jobs, and extraction jobs.

 Note: Receiving jobs with the Running status cannot be cancelled.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelJobsResponse =
  await visierdatahandling.dataAndJobHandling.cancelJobs({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobIds: `string`[]<a id="jobids-string"></a>

A list of jobs to cancel. The maximum number of jobs that can be cancelled is 500.

#### 🔄 Return<a id="🔄-return"></a>

[JobCancellationResultsDTO](./models/job-cancellation-results-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/jobs/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.createConnectorCredential`<a id="visierdatahandlingdataandjobhandlingcreateconnectorcredential"></a>

Use this API to create connector credentials for a specified tenant. Connector credentials allow Visier to
 retrieve data from your source systems through an integration user in the source system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createConnectorCredentialResponse =
  await visierdatahandling.dataAndJobHandling.createConnectorCredential({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataProviderAuthParams: [`DataProviderAuthParamsDTO`](./models/data-provider-auth-params-dto.ts)<a id="dataproviderauthparams-dataproviderauthparamsdtomodelsdata-provider-auth-params-dtots"></a>

The authentication information for the credential.

##### dataProviderBasicInformation: [`DataProviderBasicInformationDTO`](./models/data-provider-basic-information-dto.ts)<a id="dataproviderbasicinformation-dataproviderbasicinformationdtomodelsdata-provider-basic-information-dtots"></a>

The display name and description for the credential.

##### dataProviderMetadata: [`DataProviderBasicMetadataDTO`](./models/data-provider-basic-metadata-dto.ts)<a id="dataprovidermetadata-dataproviderbasicmetadatadtomodelsdata-provider-basic-metadata-dtots"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of a specific analytic tenant that you want to create the credential for.

#### 🔄 Return<a id="🔄-return"></a>

[CredentialCreationAPIResponseDTO](./models/credential-creation-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-connector-credentials` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.dataConnectorCredentials`<a id="visierdatahandlingdataandjobhandlingdataconnectorcredentials"></a>

Use this API to retrieve a list of the connector credentials in a specified tenant. Connector credentials allow
 Visier to retrieve data from your source systems through an integration user in the source system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const dataConnectorCredentialsResponse =
  await visierdatahandling.dataAndJobHandling.dataConnectorCredentials({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of a specific analytic tenant that you want to retrieve for.

##### limit: `number`<a id="limit-number"></a>

The limit to retrieve.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

#### 🔄 Return<a id="🔄-return"></a>

[ExtractorCredentialsAPIDTO](./models/extractor-credentials-apidto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-connector-credentials` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.dataConnectors`<a id="visierdatahandlingdataandjobhandlingdataconnectors"></a>

Use this API to retrieve a list of the data connectors in a specified tenant. Data connectors are an alternative
 to generating flat files and transferring them to Visier via SFTP.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const dataConnectorsResponse =
  await visierdatahandling.dataAndJobHandling.dataConnectors({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of a specific analytic tenant that you want to retrieve for.

##### limit: `number`<a id="limit-number"></a>

The limit to retrieve.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

#### 🔄 Return<a id="🔄-return"></a>

[ImportDefinitionsAPIDTO](./models/import-definitions-apidto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-connectors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.deleteConnectorCredential`<a id="visierdatahandlingdataandjobhandlingdeleteconnectorcredential"></a>

Use this API to delete connector credentials from your tenants. Credentials that are no longer valid
 should be deleted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteConnectorCredentialResponse =
  await visierdatahandling.dataAndJobHandling.deleteConnectorCredential({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The credentialId of the credential you want to delete.

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of the analytic tenant in which the credential you\'re deleting.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-connector-credentials/:id` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.disableDV`<a id="visierdatahandlingdataandjobhandlingdisabledv"></a>

If you discover that a data version is not what is expected after running metric value validation on a data load,
 you may want to disable the data version for that processing job.

 Use this API to disable the latest enabled data versions for affected analytic tenants or to disable a particular
 data version for each analytic tenant.

 Note: Disabling an older data version may not have an effect on the state of the solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const disableDVResponse = await visierdatahandling.dataAndJobHandling.disableDV(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### model: [`DisableDVModel`](./models/disable-dvmodel.ts)<a id="model-disabledvmodelmodelsdisable-dvmodelts"></a>

A form body key that contains a collection of key-value pairs.

#### 🔄 Return<a id="🔄-return"></a>

[DisableDVResponse](./models/disable-dvresponse.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-versions/disable` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.dispatchingJobStatus`<a id="visierdatahandlingdataandjobhandlingdispatchingjobstatus"></a>

Use this API to retrieve the status of a dispatching job, including its job ID and the number of jobs it generated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const dispatchingJobStatusResponse =
  await visierdatahandling.dataAndJobHandling.dispatchingJobStatus({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobId: `string`<a id="jobid-string"></a>

The ID of the job you want to retrieve.

#### 🔄 Return<a id="🔄-return"></a>

[DispatchingJobStatusResponse](./models/dispatching-job-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/jobs/dispatching-jobs/:jobId` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.excludeDataUplaods`<a id="visierdatahandlingdataandjobhandlingexcludedatauplaods"></a>

Use this API to exclude either a specified list of data uploads or all data uploads for each analytic tenant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const excludeDataUplaodsResponse =
  await visierdatahandling.dataAndJobHandling.excludeDataUplaods({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### model: [`UploadToExcludeModel`](./models/upload-to-exclude-model.ts)<a id="model-uploadtoexcludemodelmodelsupload-to-exclude-modelts"></a>

A form body key that contains a collection of key-value pairs.

#### 🔄 Return<a id="🔄-return"></a>

[TenantDataUploadsUpdateResponseDTO](./models/tenant-data-uploads-update-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data/uploads/exclude` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.extractionJobAndStatus`<a id="visierdatahandlingdataandjobhandlingextractionjobandstatus"></a>

Use this API to retrieve the statuses of extraction jobs associated with a dispatching job. The dispatching job
 is a "parent" to extraction jobs, which retrieve data from your source systems through data connectors.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const extractionJobAndStatusResponse =
  await visierdatahandling.dataAndJobHandling.extractionJobAndStatus({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dispatchingJobId: `string`<a id="dispatchingjobid-string"></a>

The ID of the dispatching job that generated the extraction jobs.

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of a specific analytic tenant that you want to retrieve the extraction job status for.  Use this if you are only interested in the results for one analytic tenant.

##### limit: `number`<a id="limit-number"></a>

The limit of extraction job statuses to retrieve.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

##### jobId: `string`<a id="jobid-string"></a>

The ID of the dispatching job you want to retrieve.

#### 🔄 Return<a id="🔄-return"></a>

[ExtractionJobAndStatusResponse](./models/extraction-job-and-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/jobs/dispatching-jobs/:jobId/extraction-jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.includeDataUploads`<a id="visierdatahandlingdataandjobhandlingincludedatauploads"></a>

Use this API to include either the specified list of data uploads or all data uploads for each analytic tenant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const includeDataUploadsResponse =
  await visierdatahandling.dataAndJobHandling.includeDataUploads({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### model: [`UploadToIncludeModel`](./models/upload-to-include-model.ts)<a id="model-uploadtoincludemodelmodelsupload-to-include-modelts"></a>

A form body key that contains a collection of key-value pairs.

#### 🔄 Return<a id="🔄-return"></a>

[TenantDataUploadsUpdateResponseDTO](./models/tenant-data-uploads-update-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data/uploads/include` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.jobIdStatus`<a id="visierdatahandlingdataandjobhandlingjobidstatus"></a>

Use this API to retrieve the list of statuses for a specific job with id `jobId`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const jobIdStatusResponse =
  await visierdatahandling.dataAndJobHandling.jobIdStatus({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobId: `string`<a id="jobid-string"></a>

The unique ID of the job to retrieve the status for.

#### 🔄 Return<a id="🔄-return"></a>

[ReceivingJobStatusResponse](./models/receiving-job-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/job-status/jobs/:jobId` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.jobStatus`<a id="visierdatahandlingdataandjobhandlingjobstatus"></a>

Use this API to retrieve the list of statuses for all jobs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const jobStatusResponse = await visierdatahandling.dataAndJobHandling.jobStatus(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startTime: `string`<a id="starttime-string"></a>

The start time from which to retrieve job statuses.

##### endTime: `string`<a id="endtime-string"></a>

The end time from which to retrieve job statuses.

##### status: `string`<a id="status-string"></a>

The specific status to restrict the list of job to.

#### 🔄 Return<a id="🔄-return"></a>

[ReceivingJobStatusResponse](./models/receiving-job-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/job-status/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.latestEnabledDV`<a id="visierdatahandlingdataandjobhandlinglatestenableddv"></a>

If you discover any inconsistencies after running metric value validation, you may want to find the data versions
 causing inconsistencies so you can later disable them.

 Use this API to retrieve up to five (5) of the latest enabled data versions for all your analytic tenants or a
 single specified analytic tenant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const latestEnabledDVResponse =
  await visierdatahandling.dataAndJobHandling.latestEnabledDV({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of a specific analytic tenant that you want to retrieve data versions for.  Use this if you are only interested in the results for one analytic tenant.

##### limit: `number`<a id="limit-number"></a>

The limit of analytic tenants to retrieve data versions for.  This parameter is not used if the tenantCode parameter is specified.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

##### numberOfVersions: `number`<a id="numberofversions-number"></a>

The number of latest enabled data versions to retrieve. The maximum value is 5.

#### 🔄 Return<a id="🔄-return"></a>

[MultipleTenantDataVersionsListDTO](./models/multiple-tenant-data-versions-list-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data-versions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.processingJobAndStatus`<a id="visierdatahandlingdataandjobhandlingprocessingjobandstatus"></a>

Use this API to retrieve the statuses of processing jobs associated with a dispatching job. The dispatching job
 is a "parent" to extraction jobs, which in turn generate processing jobs and receiving jobs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processingJobAndStatusResponse =
  await visierdatahandling.dataAndJobHandling.processingJobAndStatus({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dispatchingJobId: `string`<a id="dispatchingjobid-string"></a>

The ID of the dispatching job that generated the extraction jobs.

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of a specific analytic tenant that you want to retrieve the extraction job status for.  Use this if you are only interested in the results for one analytic tenant.

##### limit: `number`<a id="limit-number"></a>

The limit of extraction job statuses to retrieve.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

##### jobId: `string`<a id="jobid-string"></a>

The ID of the dispatching job you want to retrieve.

#### 🔄 Return<a id="🔄-return"></a>

[ProcessingJobAndStatusResponse](./models/processing-job-and-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/jobs/dispatching-jobs/:jobId/processing-jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.processingJobStatus`<a id="visierdatahandlingdataandjobhandlingprocessingjobstatus"></a>

Use this API to retrieve a list of statuses for all processing jobs associated with the given receiving job ID.
 Processing jobs deal with an individual analytic tenant's data load. A processing job is either triggered through
 the UI or is one of many processing jobs spawned from a receiving job. When a processing job is triggered as part
 of a set from an receiving job, it is associated to the receiving job through a Parent ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processingJobStatusResponse =
  await visierdatahandling.dataAndJobHandling.processingJobStatus({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of the tenant you want to retrieve the processing jobs for.  Use this if you are only interested in the results for one analytic tenant.

##### limit: `number`<a id="limit-number"></a>

The limit of processing jobs to retrieve per page.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

##### receivingJobId: `string`<a id="receivingjobid-string"></a>

The receiving job ID

#### 🔄 Return<a id="🔄-return"></a>

[ProcessingJobStatusResponse](./models/processing-job-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/jobs/processing-jobs/:receivingJobId` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.receivingJobAndStatus`<a id="visierdatahandlingdataandjobhandlingreceivingjobandstatus"></a>

Use this API to retrieve the statuses of receiving jobs associated with a dispatching job. The dispatching job
 is a "parent" to extraction jobs, which in turn generate processing jobs and receiving jobs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const receivingJobAndStatusResponse =
  await visierdatahandling.dataAndJobHandling.receivingJobAndStatus({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dispatchingJobId: `string`<a id="dispatchingjobid-string"></a>

The ID of the dispatching job that generated the extraction jobs.

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of a specific analytic tenant that you want to retrieve the extraction job status for.  Use this if you are only interested in the results for one analytic tenant.

##### limit: `number`<a id="limit-number"></a>

The limit of extraction job statuses to retrieve.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

##### jobId: `string`<a id="jobid-string"></a>

The ID of the dispatching job you want to retrieve.

#### 🔄 Return<a id="🔄-return"></a>

[ReceivingJobAndStatusResponse](./models/receiving-job-and-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/jobs/dispatching-jobs/:jobId/receiving-jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.receivingJobStatus`<a id="visierdatahandlingdataandjobhandlingreceivingjobstatus"></a>

After sending data to Visier, you may want to know the status of the receiving job and the associated tenant
 receiving jobs. A receiving job validates the transferred data and adds the transferred data to Visier's data
 store.

 Use this API to retrieve the receiving job status and summary of analytic tenant receiving jobs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const receivingJobStatusResponse =
  await visierdatahandling.dataAndJobHandling.receivingJobStatus({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobs: `boolean`<a id="jobs-boolean"></a>

If \"true\", returns the status of receiving jobs spawned by the receiving job specified by jobId.

##### tenantCode: `string`<a id="tenantcode-string"></a>

The tenant code of the tenant you want to retrieve the receiving jobs for. Use this if you are only interested  in the results for one analytic tenant.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

##### limit: `number`<a id="limit-number"></a>

The number of job statuses to return per page.

##### receivingJobId: `string`<a id="receivingjobid-string"></a>

The jobId provided after sending data to Visier.

#### 🔄 Return<a id="🔄-return"></a>

[ReceivingJobStatusResponse](./models/receiving-job-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/jobs/receiving-jobs/:receivingJobId` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.retrieveDataUploads`<a id="visierdatahandlingdataandjobhandlingretrievedatauploads"></a>

Use this API to retrieve the data uploads and whether they're included in one of:
 - A list of analytic tenants managed by you.
 - A single specified analytic tenant.
 - An upload job.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const retrieveDataUploadsResponse =
  await visierdatahandling.dataAndJobHandling.retrieveDataUploads({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uploadJobId: `string`<a id="uploadjobid-string"></a>

The job ID of an upload job. Use this if you are interested in the data uploads for a specific upload job.

##### tenantCode: `number`<a id="tenantcode-number"></a>

The tenant code of a specific analytic tenant that you want to retrieve the data uploads for.

##### limit: `number`<a id="limit-number"></a>

The limit of analytic tenants to retrieve data uploads for. This parameter is not used if the tenantCode parameter is specified.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

##### numberOfDataUploads: `number`<a id="numberofdatauploads-number"></a>

The maximum number of latest enabled data uploads to retrieve for each analytic tenant. The maximum value is 5.

#### 🔄 Return<a id="🔄-return"></a>

[TenantDataUploadsListResponseDTO](./models/tenant-data-uploads-list-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data/uploads` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.startExtraction`<a id="visierdatahandlingdataandjobhandlingstartextraction"></a>

Use this API to generate extraction jobs for a list of analytic tenants or for the administrating tenant.
 This API creates a dispatching job that generates one extraction job per tenant. The extraction jobs retrieve
 data from your source systems through data connectors. The dispatching job is the "parent" of the extraction
 jobs and its job ID is returned in the response.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const startExtractionResponse =
  await visierdatahandling.dataAndJobHandling.startExtraction({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### model: [`StartExtractionModel`](./models/start-extraction-model.ts)<a id="model-startextractionmodelmodelsstart-extraction-modelts"></a>

A form body key that contains a collection of key-value pairs.

#### 🔄 Return<a id="🔄-return"></a>

[StartExtractionResponse](./models/start-extraction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data/startExtractAndLoad` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierdatahandling.dataAndJobHandling.startLoad`<a id="visierdatahandlingdataandjobhandlingstartload"></a>

This API starts the data load process for all analytic tenants included in the specified data files uploaded
 to the Visier SFTP server. On success, you receive a job ID that can be filtered and searched for within the
 Jobs room in Visier. This job ID is associated with the receiving job, and related to all processing jobs that
 spawn for each analytic tenant.

 With the job ID, you can also call the next two APIs to retrieve the status of the receiving job and the status
 list of all related processing jobs.

 **Prerequisite:** You must first obtain Visier's public encryption key and upload the source data files to Visier's
 SFTP server. Files must have a .zip.gpg extension, meaning the files are encrypted using the PGP protocol and compressed.

 Visier provides SFTP server credentials and instructions. You can find the encryption key at https://www.visier.com/pgp/visier.public.pgp.asc.
 After downloading the file, open the file in a text editor or by dragging it into your browser.

 **Note:**
  - To see the full status of all analytic tenant data loads, navigate to the Jobs room in a project.
  - For performance and efficiency, Visier requires that the uncompressed batch file size is below 5 GB and that no
    more than 5000 tenants are included in a batch.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const startLoadResponse = await visierdatahandling.dataAndJobHandling.startLoad(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### model: Record<string, [`MapValue`](./models/map-value.ts)><a id="model-record"></a>

A form body key that contains a collection of key-value pairs.   **Note:** The only supported key value is `files` and the value is a comma-separated list of file names.  Example:  `\\\"files\\\": \\\"/path/to/file1.zip.gpg,/path/to/another/file.zip.gpg\\\"`

#### 🔄 Return<a id="🔄-return"></a>

[DataLoadResponse](./models/data-load-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/op/data/startload` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
