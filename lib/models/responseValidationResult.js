/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ResponseValidationResult class.
 * @constructor
 * Describes the validation result of the live response.
 *
 * @member {boolean} [successfulResponse] Describes the status of live response
 * validation.
 *
 * @member {object} [operationInfo] The corresponding operation in openapi spec
 * that was used for validating the response.
 *
 * @member {string} [operationInfo.operationId] The id of the operation against
 * which validation happened. This will help find the problematic information
 * in the spec and will be useful in preparing report.
 *
 * @member {string} [operationInfo.apiVersion] Describes the api-version of the
 * openapi specification. This will help find the openapi spec corresponding to
 * that api-version and will be useful in preparing report.
 *
 * @member {object} [errors] Provides more information about live response
 * validation.
 *
 */
class ResponseValidationResult {
  constructor() {
  }

  /**
   * Defines the metadata of ResponseValidationResult
   *
   * @returns {object} metadata of ResponseValidationResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResponseValidationResult',
      type: {
        name: 'Composite',
        className: 'ResponseValidationResult',
        modelProperties: {
          successfulResponse: {
            required: false,
            readOnly: true,
            serializedName: 'successfulResponse',
            type: {
              name: 'Boolean'
            }
          },
          operationInfo: {
            required: false,
            readOnly: true,
            serializedName: 'operationInfo',
            type: {
              name: 'Composite',
              className: 'OperationInfo'
            }
          },
          errors: {
            required: false,
            serializedName: 'errors',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = ResponseValidationResult;