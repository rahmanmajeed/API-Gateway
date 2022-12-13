/**
########################
Author: Majeed
Description:: service-registry-schema.js
Date: 11-Dec-22

########################
*/

const Mongoose = require("mongoose");

const ServiceRegistrySchema = new Mongoose.Schema({
  serviceId: {
    type: String,
  },
  serviceHost: {
    type: String,
  },
  servicePort: {
    type: Number,
  },
  serviceProtocol: {
    type: String,
  },
  endpointId: {
    type: String,
  },
  endpointPath: {
    type: String,
  },
  endpointUrl: {
    type: String,
  },
  domain: {
    type: String,
  },
  ts: {
    type: String,
  },
});

module.exports = ServiceRegistrySchema;
