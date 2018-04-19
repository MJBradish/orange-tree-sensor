const config = require("./config")
const AWS = require ("aws-sdk")
AWS.config.update (new AWS.Config({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  region: "eu-west-2"
}))
const cloudwatch = new AWS.CloudWatch ();

let params = {
  MetricData: [
    {
      MetricName: 'Moisture value',
      StorageResolution: 60,
      Timestamp: new Date,
      Value: 0.0
    },
  ],
  Namespace: 'Orange tree'
};



cloudwatch.putMetricData(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});
