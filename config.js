// @ts-check

const config = {
  endpoint: "https://cosmosdb111.documents.azure.com:443/",
  key: "ZCw5ho3F6aP0i4WCryDSxDNCwDjIHiLDISKAcBo8nf1fey5IpIeow8vGdFh6T5lUoBG4zhFowVHDxMC2a6CCFQ==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
