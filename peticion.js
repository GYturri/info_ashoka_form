var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://www.tfaforms.com/responses/processor',
  'headers': {
  },
  formData: {
    // AQUI TODOS LOS CAMPOS ejm. 'tfa_1': 'a',
    'tfa_dbFormId': '4835267',
    'tfa_dbControl': 'b2a87ea5dc89e18bdb1954c4243b6b34',
    'tfa_dbVersionId': '1',
    'tfa_dbResponseId': ''
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});