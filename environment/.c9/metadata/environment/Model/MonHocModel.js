{"filter":false,"title":"MonHocModel.js","tooltip":"/Model/MonHocModel.js","undoManager":{"mark":57,"position":57,"stack":[[{"start":{"row":0,"column":0},"end":{"row":133,"column":0},"action":"insert","lines":["// Configure the region","const AWS = require('aws-sdk');","","// Configure the region","AWS.config.update({","  region: 'us-east-1'","});","","//","const sqs = new AWS.SQS({apiVersion: '2012-11-05'});","var docClient = new AWS.DynamoDB.DocumentClient();","async function Get()","{","    const params = {","    TableName : 'Lops'","  }","  try{","    let Records=await docClient.scan(params).promise()","    return Records;","  }","  catch(error){","    console.log(error);","  }","}","async function Create(Data)","{","    let LopData = {","        'MaLop': Data.MaLop,","        'TenLop': Data.TenLop,","        'MaLop':Data.MaLop","    }","    let sqsLopData = {","        MessageAttributes: {","          \"MaLop\": {","            DataType: \"String\",","            StringValue: LopData.MaLop","          },","          \"TenLop\": {","            DataType: \"String\",","            StringValue: LopData.TenLop","          },","          \"MaLop\": {","            DataType: \"String\",","            StringValue: LopData.MaLop","          }","        },","        MessageBody: JSON.stringify(LopData),","        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/588509624082/InsertLop'","    };","    let sendSqsMessage = sqs.sendMessage(sqsLopData).promise();","    sendSqsMessage.then((data) => {","        console.log(`OrdersSvc | SUCCESS: ${data.MessageId}`);","        return","    }).catch((err) => {","        console.log(`OrdersSvc | ERROR: ${err}`);","    });","}","async function GetById(ID)","{","  var params = {","  TableName: 'Lops',","  FilterExpression: '#name = :value',","  ExpressionAttributeValues: { ':value': ID },","  ExpressionAttributeNames: { '#name': 'MaLop' }","}","try {","    const data = await docClient.scan(params).promise()","    return data","  } catch(error){","    console.log(error);","  }","}","async function Update(ID,TenLop,MaLop){","    let LopData = {","        'MaLop': ID,","        'TenLop': TenLop,","        'MaLop':MaLop","    }","    let sqsLopData = {","        MessageAttributes: {","          \"MaLop\": {","            DataType: \"String\",","            StringValue: LopData.MaLop","          },","          \"TenLop\": {","            DataType: \"String\",","            StringValue: LopData.TenLop","          },","          \"MaLop\": {","            DataType: \"String\",","            StringValue: LopData.MaLop","          }","        },","        MessageBody: JSON.stringify(LopData),","        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/588509624082/UpdateLop'","    };","    let sendSqsMessage = sqs.sendMessage(sqsLopData).promise();","    sendSqsMessage.then((data) => {","        console.log(`OrdersSvc | SUCCESS: ${data.MessageId}`);","        return","    }).catch((err) => {","        console.log(`OrdersSvc | ERROR: ${err}`);","    });","}","async function Delete(ID){","    let LopData = {","        'MaLop': ID","    }","    let sqsLopData = {","        MessageAttributes: {","          \"MaLop\": {","            DataType: \"String\",","            StringValue: LopData.MaLop","          }","        },","        MessageBody: JSON.stringify(LopData),","        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/588509624082/DeleteLop'","    };","    let sendSqsMessage = sqs.sendMessage(sqsLopData).promise();","    sendSqsMessage.then((data) => {","        console.log(`OrdersSvc | SUCCESS: ${data.MessageId}`);","        return","    }).catch((err) => {","        console.log(`OrdersSvc | ERROR: ${err}`);","    });","}","module.exports={","    Get:Get,","    Create:Create,","    GetById:GetById,","    Update:Update,","    Delete:Delete","}",""],"id":1}],[{"start":{"row":14,"column":17},"end":{"row":14,"column":20},"action":"remove","lines":["Lop"],"id":2},{"start":{"row":14,"column":17},"end":{"row":14,"column":23},"action":"insert","lines":["MonHoc"]},{"start":{"row":26,"column":8},"end":{"row":26,"column":11},"action":"remove","lines":["Lop"]},{"start":{"row":26,"column":8},"end":{"row":26,"column":14},"action":"insert","lines":["MonHoc"]},{"start":{"row":27,"column":11},"end":{"row":27,"column":14},"action":"remove","lines":["Lop"]},{"start":{"row":27,"column":11},"end":{"row":27,"column":17},"action":"insert","lines":["MonHoc"]},{"start":{"row":27,"column":27},"end":{"row":27,"column":30},"action":"remove","lines":["Lop"]},{"start":{"row":27,"column":27},"end":{"row":27,"column":33},"action":"insert","lines":["MonHoc"]},{"start":{"row":28,"column":12},"end":{"row":28,"column":15},"action":"remove","lines":["Lop"]},{"start":{"row":28,"column":12},"end":{"row":28,"column":18},"action":"insert","lines":["MonHoc"]},{"start":{"row":28,"column":29},"end":{"row":28,"column":32},"action":"remove","lines":["Lop"]},{"start":{"row":28,"column":29},"end":{"row":28,"column":35},"action":"insert","lines":["MonHoc"]},{"start":{"row":29,"column":11},"end":{"row":29,"column":14},"action":"remove","lines":["Lop"]},{"start":{"row":29,"column":11},"end":{"row":29,"column":17},"action":"insert","lines":["MonHoc"]},{"start":{"row":29,"column":26},"end":{"row":29,"column":29},"action":"remove","lines":["Lop"]},{"start":{"row":29,"column":26},"end":{"row":29,"column":32},"action":"insert","lines":["MonHoc"]},{"start":{"row":31,"column":11},"end":{"row":31,"column":14},"action":"remove","lines":["Lop"]},{"start":{"row":31,"column":11},"end":{"row":31,"column":17},"action":"insert","lines":["MonHoc"]},{"start":{"row":33,"column":13},"end":{"row":33,"column":16},"action":"remove","lines":["Lop"]},{"start":{"row":33,"column":13},"end":{"row":33,"column":19},"action":"insert","lines":["MonHoc"]},{"start":{"row":35,"column":25},"end":{"row":35,"column":28},"action":"remove","lines":["Lop"]},{"start":{"row":35,"column":25},"end":{"row":35,"column":31},"action":"insert","lines":["MonHoc"]},{"start":{"row":35,"column":38},"end":{"row":35,"column":41},"action":"remove","lines":["Lop"]},{"start":{"row":35,"column":38},"end":{"row":35,"column":44},"action":"insert","lines":["MonHoc"]},{"start":{"row":37,"column":14},"end":{"row":37,"column":17},"action":"remove","lines":["Lop"]},{"start":{"row":37,"column":14},"end":{"row":37,"column":20},"action":"insert","lines":["MonHoc"]},{"start":{"row":39,"column":25},"end":{"row":39,"column":28},"action":"remove","lines":["Lop"]},{"start":{"row":39,"column":25},"end":{"row":39,"column":31},"action":"insert","lines":["MonHoc"]},{"start":{"row":39,"column":39},"end":{"row":39,"column":42},"action":"remove","lines":["Lop"]},{"start":{"row":39,"column":39},"end":{"row":39,"column":45},"action":"insert","lines":["MonHoc"]},{"start":{"row":41,"column":13},"end":{"row":41,"column":16},"action":"remove","lines":["Lop"]},{"start":{"row":41,"column":13},"end":{"row":41,"column":19},"action":"insert","lines":["MonHoc"]},{"start":{"row":43,"column":25},"end":{"row":43,"column":28},"action":"remove","lines":["Lop"]},{"start":{"row":43,"column":25},"end":{"row":43,"column":31},"action":"insert","lines":["MonHoc"]},{"start":{"row":43,"column":38},"end":{"row":43,"column":41},"action":"remove","lines":["Lop"]},{"start":{"row":43,"column":38},"end":{"row":43,"column":44},"action":"insert","lines":["MonHoc"]},{"start":{"row":46,"column":36},"end":{"row":46,"column":39},"action":"remove","lines":["Lop"]},{"start":{"row":46,"column":36},"end":{"row":46,"column":42},"action":"insert","lines":["MonHoc"]},{"start":{"row":47,"column":74},"end":{"row":47,"column":77},"action":"remove","lines":["Lop"]},{"start":{"row":47,"column":74},"end":{"row":47,"column":80},"action":"insert","lines":["MonHoc"]},{"start":{"row":49,"column":44},"end":{"row":49,"column":47},"action":"remove","lines":["Lop"]},{"start":{"row":49,"column":44},"end":{"row":49,"column":50},"action":"insert","lines":["MonHoc"]},{"start":{"row":60,"column":14},"end":{"row":60,"column":17},"action":"remove","lines":["Lop"]},{"start":{"row":60,"column":14},"end":{"row":60,"column":20},"action":"insert","lines":["MonHoc"]},{"start":{"row":63,"column":42},"end":{"row":63,"column":45},"action":"remove","lines":["Lop"]},{"start":{"row":63,"column":42},"end":{"row":63,"column":48},"action":"insert","lines":["MonHoc"]},{"start":{"row":72,"column":28},"end":{"row":72,"column":31},"action":"remove","lines":["Lop"]},{"start":{"row":72,"column":28},"end":{"row":72,"column":34},"action":"insert","lines":["MonHoc"]},{"start":{"row":72,"column":37},"end":{"row":72,"column":40},"action":"remove","lines":["Lop"]},{"start":{"row":72,"column":37},"end":{"row":72,"column":43},"action":"insert","lines":["MonHoc"]},{"start":{"row":73,"column":8},"end":{"row":73,"column":11},"action":"remove","lines":["Lop"]},{"start":{"row":73,"column":8},"end":{"row":73,"column":14},"action":"insert","lines":["MonHoc"]},{"start":{"row":74,"column":11},"end":{"row":74,"column":14},"action":"remove","lines":["Lop"]},{"start":{"row":74,"column":11},"end":{"row":74,"column":17},"action":"insert","lines":["MonHoc"]},{"start":{"row":75,"column":12},"end":{"row":75,"column":15},"action":"remove","lines":["Lop"]},{"start":{"row":75,"column":12},"end":{"row":75,"column":18},"action":"insert","lines":["MonHoc"]},{"start":{"row":75,"column":24},"end":{"row":75,"column":27},"action":"remove","lines":["Lop"]},{"start":{"row":75,"column":24},"end":{"row":75,"column":30},"action":"insert","lines":["MonHoc"]},{"start":{"row":76,"column":11},"end":{"row":76,"column":14},"action":"remove","lines":["Lop"]},{"start":{"row":76,"column":11},"end":{"row":76,"column":17},"action":"insert","lines":["MonHoc"]},{"start":{"row":76,"column":21},"end":{"row":76,"column":24},"action":"remove","lines":["Lop"]},{"start":{"row":76,"column":21},"end":{"row":76,"column":27},"action":"insert","lines":["MonHoc"]},{"start":{"row":78,"column":11},"end":{"row":78,"column":14},"action":"remove","lines":["Lop"]},{"start":{"row":78,"column":11},"end":{"row":78,"column":17},"action":"insert","lines":["MonHoc"]},{"start":{"row":80,"column":13},"end":{"row":80,"column":16},"action":"remove","lines":["Lop"]},{"start":{"row":80,"column":13},"end":{"row":80,"column":19},"action":"insert","lines":["MonHoc"]},{"start":{"row":82,"column":25},"end":{"row":82,"column":28},"action":"remove","lines":["Lop"]},{"start":{"row":82,"column":25},"end":{"row":82,"column":31},"action":"insert","lines":["MonHoc"]},{"start":{"row":82,"column":38},"end":{"row":82,"column":41},"action":"remove","lines":["Lop"]},{"start":{"row":82,"column":38},"end":{"row":82,"column":44},"action":"insert","lines":["MonHoc"]},{"start":{"row":84,"column":14},"end":{"row":84,"column":17},"action":"remove","lines":["Lop"]},{"start":{"row":84,"column":14},"end":{"row":84,"column":20},"action":"insert","lines":["MonHoc"]},{"start":{"row":86,"column":25},"end":{"row":86,"column":28},"action":"remove","lines":["Lop"]},{"start":{"row":86,"column":25},"end":{"row":86,"column":31},"action":"insert","lines":["MonHoc"]},{"start":{"row":86,"column":39},"end":{"row":86,"column":42},"action":"remove","lines":["Lop"]},{"start":{"row":86,"column":39},"end":{"row":86,"column":45},"action":"insert","lines":["MonHoc"]},{"start":{"row":88,"column":13},"end":{"row":88,"column":16},"action":"remove","lines":["Lop"]},{"start":{"row":88,"column":13},"end":{"row":88,"column":19},"action":"insert","lines":["MonHoc"]},{"start":{"row":90,"column":25},"end":{"row":90,"column":28},"action":"remove","lines":["Lop"]},{"start":{"row":90,"column":25},"end":{"row":90,"column":31},"action":"insert","lines":["MonHoc"]},{"start":{"row":90,"column":38},"end":{"row":90,"column":41},"action":"remove","lines":["Lop"]},{"start":{"row":90,"column":38},"end":{"row":90,"column":44},"action":"insert","lines":["MonHoc"]},{"start":{"row":93,"column":36},"end":{"row":93,"column":39},"action":"remove","lines":["Lop"]},{"start":{"row":93,"column":36},"end":{"row":93,"column":42},"action":"insert","lines":["MonHoc"]},{"start":{"row":94,"column":74},"end":{"row":94,"column":77},"action":"remove","lines":["Lop"]},{"start":{"row":94,"column":74},"end":{"row":94,"column":80},"action":"insert","lines":["MonHoc"]},{"start":{"row":96,"column":44},"end":{"row":96,"column":47},"action":"remove","lines":["Lop"]},{"start":{"row":96,"column":44},"end":{"row":96,"column":50},"action":"insert","lines":["MonHoc"]},{"start":{"row":105,"column":8},"end":{"row":105,"column":11},"action":"remove","lines":["Lop"]},{"start":{"row":105,"column":8},"end":{"row":105,"column":14},"action":"insert","lines":["MonHoc"]},{"start":{"row":106,"column":11},"end":{"row":106,"column":14},"action":"remove","lines":["Lop"]},{"start":{"row":106,"column":11},"end":{"row":106,"column":17},"action":"insert","lines":["MonHoc"]},{"start":{"row":108,"column":11},"end":{"row":108,"column":14},"action":"remove","lines":["Lop"]},{"start":{"row":108,"column":11},"end":{"row":108,"column":17},"action":"insert","lines":["MonHoc"]},{"start":{"row":110,"column":13},"end":{"row":110,"column":16},"action":"remove","lines":["Lop"]},{"start":{"row":110,"column":13},"end":{"row":110,"column":19},"action":"insert","lines":["MonHoc"]},{"start":{"row":112,"column":25},"end":{"row":112,"column":28},"action":"remove","lines":["Lop"]},{"start":{"row":112,"column":25},"end":{"row":112,"column":31},"action":"insert","lines":["MonHoc"]},{"start":{"row":112,"column":38},"end":{"row":112,"column":41},"action":"remove","lines":["Lop"]},{"start":{"row":112,"column":38},"end":{"row":112,"column":44},"action":"insert","lines":["MonHoc"]},{"start":{"row":115,"column":36},"end":{"row":115,"column":39},"action":"remove","lines":["Lop"]},{"start":{"row":115,"column":36},"end":{"row":115,"column":42},"action":"insert","lines":["MonHoc"]},{"start":{"row":116,"column":74},"end":{"row":116,"column":77},"action":"remove","lines":["Lop"]},{"start":{"row":116,"column":74},"end":{"row":116,"column":80},"action":"insert","lines":["MonHoc"]},{"start":{"row":118,"column":44},"end":{"row":118,"column":47},"action":"remove","lines":["Lop"]},{"start":{"row":118,"column":44},"end":{"row":118,"column":50},"action":"insert","lines":["MonHoc"]}],[{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"remove","lines":["c"],"id":3},{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"remove","lines":["o"]},{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"remove","lines":["H"]}],[{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"remove","lines":["c"],"id":4},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"remove","lines":["o"]},{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"remove","lines":["H"]}],[{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"remove","lines":["c"],"id":5},{"start":{"row":29,"column":15},"end":{"row":29,"column":16},"action":"remove","lines":["o"]},{"start":{"row":29,"column":14},"end":{"row":29,"column":15},"action":"remove","lines":["H"]},{"start":{"row":29,"column":13},"end":{"row":29,"column":14},"action":"remove","lines":["n"]},{"start":{"row":29,"column":12},"end":{"row":29,"column":13},"action":"remove","lines":["o"]},{"start":{"row":29,"column":11},"end":{"row":29,"column":12},"action":"remove","lines":["M"]},{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"remove","lines":["a"]},{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"remove","lines":["M"]}],[{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"insert","lines":["S"],"id":6},{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"insert","lines":["o"]},{"start":{"row":29,"column":11},"end":{"row":29,"column":12},"action":"insert","lines":["T"]},{"start":{"row":29,"column":12},"end":{"row":29,"column":13},"action":"insert","lines":["i"]},{"start":{"row":29,"column":13},"end":{"row":29,"column":14},"action":"insert","lines":["e"]},{"start":{"row":29,"column":14},"end":{"row":29,"column":15},"action":"insert","lines":["t"]}],[{"start":{"row":29,"column":30},"end":{"row":29,"column":31},"action":"insert","lines":[","],"id":7}],[{"start":{"row":29,"column":31},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":30,"column":0},"end":{"row":30,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":30,"column":8},"end":{"row":30,"column":10},"action":"insert","lines":["''"],"id":9}],[{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["T"],"id":10},{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["i"]},{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["n"]}],[{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["C"],"id":11},{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":["h"]},{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":["i"]}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":[":"],"id":12},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["d"]}],[{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"remove","lines":["d"],"id":13}],[{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["D"],"id":14},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["a"]}],[{"start":{"row":30,"column":17},"end":{"row":30,"column":19},"action":"remove","lines":["Da"],"id":15},{"start":{"row":30,"column":17},"end":{"row":30,"column":21},"action":"insert","lines":["Data"]}],[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["."],"id":16},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["T"]},{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["i"]},{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["n"]}],[{"start":{"row":30,"column":22},"end":{"row":30,"column":25},"action":"remove","lines":["Tin"],"id":17},{"start":{"row":30,"column":22},"end":{"row":30,"column":28},"action":"insert","lines":["TinChi"]}],[{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"remove","lines":["c"],"id":18},{"start":{"row":27,"column":28},"end":{"row":27,"column":29},"action":"remove","lines":["o"]},{"start":{"row":27,"column":27},"end":{"row":27,"column":28},"action":"remove","lines":["H"]}],[{"start":{"row":28,"column":30},"end":{"row":28,"column":31},"action":"remove","lines":["o"],"id":19}],[{"start":{"row":28,"column":30},"end":{"row":28,"column":31},"action":"remove","lines":["c"],"id":20},{"start":{"row":28,"column":29},"end":{"row":28,"column":30},"action":"remove","lines":["H"]}],[{"start":{"row":29,"column":29},"end":{"row":29,"column":30},"action":"remove","lines":["c"],"id":21},{"start":{"row":29,"column":28},"end":{"row":29,"column":29},"action":"remove","lines":["o"]},{"start":{"row":29,"column":27},"end":{"row":29,"column":28},"action":"remove","lines":["H"]},{"start":{"row":29,"column":26},"end":{"row":29,"column":27},"action":"remove","lines":["n"]},{"start":{"row":29,"column":25},"end":{"row":29,"column":26},"action":"remove","lines":["o"]},{"start":{"row":29,"column":24},"end":{"row":29,"column":25},"action":"remove","lines":["M"]},{"start":{"row":29,"column":23},"end":{"row":29,"column":24},"action":"remove","lines":["a"]},{"start":{"row":29,"column":22},"end":{"row":29,"column":23},"action":"remove","lines":["M"]}],[{"start":{"row":29,"column":22},"end":{"row":29,"column":23},"action":"insert","lines":["S"],"id":22},{"start":{"row":29,"column":23},"end":{"row":29,"column":24},"action":"insert","lines":["o"]},{"start":{"row":29,"column":24},"end":{"row":29,"column":25},"action":"insert","lines":["T"]}],[{"start":{"row":29,"column":22},"end":{"row":29,"column":25},"action":"remove","lines":["SoT"],"id":23},{"start":{"row":29,"column":22},"end":{"row":29,"column":28},"action":"insert","lines":["SoTiet"]}],[{"start":{"row":34,"column":11},"end":{"row":34,"column":19},"action":"remove","lines":["MaMonHoc"],"id":24},{"start":{"row":34,"column":11},"end":{"row":34,"column":16},"action":"insert","lines":["MaMon"]}],[{"start":{"row":38,"column":19},"end":{"row":38,"column":20},"action":"remove","lines":["c"],"id":25},{"start":{"row":38,"column":18},"end":{"row":38,"column":19},"action":"remove","lines":["o"]},{"start":{"row":38,"column":17},"end":{"row":38,"column":18},"action":"remove","lines":["H"]}],[{"start":{"row":36,"column":43},"end":{"row":36,"column":44},"action":"remove","lines":["c"],"id":26},{"start":{"row":36,"column":42},"end":{"row":36,"column":43},"action":"remove","lines":["o"]},{"start":{"row":36,"column":41},"end":{"row":36,"column":42},"action":"remove","lines":["H"]}],[{"start":{"row":40,"column":44},"end":{"row":40,"column":45},"action":"remove","lines":["c"],"id":27},{"start":{"row":40,"column":43},"end":{"row":40,"column":44},"action":"remove","lines":["o"]},{"start":{"row":40,"column":42},"end":{"row":40,"column":43},"action":"remove","lines":["H"]}],[{"start":{"row":42,"column":18},"end":{"row":42,"column":19},"action":"remove","lines":["c"],"id":28},{"start":{"row":42,"column":17},"end":{"row":42,"column":18},"action":"remove","lines":["o"]},{"start":{"row":42,"column":16},"end":{"row":42,"column":17},"action":"remove","lines":["H"]},{"start":{"row":42,"column":15},"end":{"row":42,"column":16},"action":"remove","lines":["n"]},{"start":{"row":42,"column":14},"end":{"row":42,"column":15},"action":"remove","lines":["o"]},{"start":{"row":42,"column":13},"end":{"row":42,"column":14},"action":"remove","lines":["M"]},{"start":{"row":42,"column":12},"end":{"row":42,"column":13},"action":"remove","lines":["a"]},{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"remove","lines":["M"]}],[{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"insert","lines":["S"],"id":29},{"start":{"row":42,"column":12},"end":{"row":42,"column":13},"action":"insert","lines":["o"]}],[{"start":{"row":42,"column":11},"end":{"row":42,"column":13},"action":"remove","lines":["So"],"id":30},{"start":{"row":42,"column":11},"end":{"row":42,"column":17},"action":"insert","lines":["SoTiet"]}],[{"start":{"row":44,"column":43},"end":{"row":44,"column":44},"action":"remove","lines":["c"],"id":31},{"start":{"row":44,"column":42},"end":{"row":44,"column":43},"action":"remove","lines":["o"]},{"start":{"row":44,"column":41},"end":{"row":44,"column":42},"action":"remove","lines":["H"]},{"start":{"row":44,"column":40},"end":{"row":44,"column":41},"action":"remove","lines":["n"]},{"start":{"row":44,"column":39},"end":{"row":44,"column":40},"action":"remove","lines":["o"]},{"start":{"row":44,"column":38},"end":{"row":44,"column":39},"action":"remove","lines":["M"]},{"start":{"row":44,"column":37},"end":{"row":44,"column":38},"action":"remove","lines":["a"]},{"start":{"row":44,"column":36},"end":{"row":44,"column":37},"action":"remove","lines":["M"]}],[{"start":{"row":44,"column":36},"end":{"row":44,"column":37},"action":"insert","lines":["S"],"id":32}],[{"start":{"row":44,"column":36},"end":{"row":44,"column":37},"action":"remove","lines":["S"],"id":33},{"start":{"row":44,"column":36},"end":{"row":44,"column":42},"action":"insert","lines":["SoTiet"]}],[{"start":{"row":45,"column":11},"end":{"row":45,"column":12},"action":"insert","lines":[","],"id":34}],[{"start":{"row":45,"column":12},"end":{"row":46,"column":0},"action":"insert","lines":["",""],"id":35},{"start":{"row":46,"column":0},"end":{"row":46,"column":10},"action":"insert","lines":["          "]}],[{"start":{"row":46,"column":10},"end":{"row":49,"column":11},"action":"insert","lines":["\"SoTiet\": {","            DataType: \"String\",","            StringValue: MonHocData.SoTiet","          }"],"id":36}],[{"start":{"row":46,"column":16},"end":{"row":46,"column":17},"action":"remove","lines":["t"],"id":37},{"start":{"row":46,"column":15},"end":{"row":46,"column":16},"action":"remove","lines":["e"]},{"start":{"row":46,"column":14},"end":{"row":46,"column":15},"action":"remove","lines":["i"]},{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"remove","lines":["T"]},{"start":{"row":46,"column":12},"end":{"row":46,"column":13},"action":"remove","lines":["o"]},{"start":{"row":46,"column":11},"end":{"row":46,"column":12},"action":"remove","lines":["S"]}],[{"start":{"row":46,"column":11},"end":{"row":46,"column":12},"action":"insert","lines":["i"],"id":38}],[{"start":{"row":46,"column":11},"end":{"row":46,"column":12},"action":"remove","lines":["i"],"id":39}],[{"start":{"row":46,"column":11},"end":{"row":46,"column":12},"action":"insert","lines":["T"],"id":40},{"start":{"row":46,"column":12},"end":{"row":46,"column":13},"action":"insert","lines":["i"]},{"start":{"row":46,"column":13},"end":{"row":46,"column":14},"action":"insert","lines":["n"]}],[{"start":{"row":46,"column":11},"end":{"row":46,"column":14},"action":"remove","lines":["Tin"],"id":41},{"start":{"row":46,"column":11},"end":{"row":46,"column":17},"action":"insert","lines":["TinChi"]}],[{"start":{"row":48,"column":41},"end":{"row":48,"column":42},"action":"remove","lines":["t"],"id":42},{"start":{"row":48,"column":40},"end":{"row":48,"column":41},"action":"remove","lines":["e"]},{"start":{"row":48,"column":39},"end":{"row":48,"column":40},"action":"remove","lines":["i"]},{"start":{"row":48,"column":38},"end":{"row":48,"column":39},"action":"remove","lines":["T"]},{"start":{"row":48,"column":37},"end":{"row":48,"column":38},"action":"remove","lines":["o"]},{"start":{"row":48,"column":36},"end":{"row":48,"column":37},"action":"remove","lines":["S"]}],[{"start":{"row":48,"column":36},"end":{"row":48,"column":37},"action":"insert","lines":["T"],"id":43},{"start":{"row":48,"column":37},"end":{"row":48,"column":38},"action":"insert","lines":["i"]},{"start":{"row":48,"column":38},"end":{"row":48,"column":39},"action":"insert","lines":["n"]}],[{"start":{"row":48,"column":36},"end":{"row":48,"column":39},"action":"remove","lines":["Tin"],"id":44},{"start":{"row":48,"column":36},"end":{"row":48,"column":42},"action":"insert","lines":["TinChi"]}],[{"start":{"row":68,"column":47},"end":{"row":68,"column":48},"action":"remove","lines":["c"],"id":45},{"start":{"row":68,"column":46},"end":{"row":68,"column":47},"action":"remove","lines":["o"]},{"start":{"row":68,"column":45},"end":{"row":68,"column":46},"action":"remove","lines":["H"]}],[{"start":{"row":77,"column":44},"end":{"row":108,"column":1},"action":"remove","lines":["{","    let MonHocData = {","        'MaMonHoc': ID,","        'TenMonHoc': TenMonHoc,","        'MaMonHoc':MaMonHoc","    }","    let sqsMonHocData = {","        MessageAttributes: {","          \"MaMonHoc\": {","            DataType: \"String\",","            StringValue: MonHocData.MaMonHoc","          },","          \"TenMonHoc\": {","            DataType: \"String\",","            StringValue: MonHocData.TenMonHoc","          },","          \"MaMonHoc\": {","            DataType: \"String\",","            StringValue: MonHocData.MaMonHoc","          }","        },","        MessageBody: JSON.stringify(MonHocData),","        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/588509624082/UpdateMonHoc'","    };","    let sendSqsMessage = sqs.sendMessage(sqsMonHocData).promise();","    sendSqsMessage.then((data) => {","        console.log(`OrdersSvc | SUCCESS: ${data.MessageId}`);","        return","    }).catch((err) => {","        console.log(`OrdersSvc | ERROR: ${err}`);","    });","}"],"id":45},{"start":{"row":77,"column":44},"end":{"row":113,"column":1},"action":"insert","lines":["{","    let MonHocData = {","        'MaMon': Data.MaMon,","        'TenMon': Data.TenMon,","        'SoTiet':Data.SoTiet,","        'TinChi':Data.TinChi","    }","    let sqsMonHocData = {","        MessageAttributes: {","          \"MaMon\": {","            DataType: \"String\",","            StringValue: MonHocData.MaMon","          },","          \"TenMon\": {","            DataType: \"String\",","            StringValue: MonHocData.TenMon","          },","          \"SoTiet\": {","            DataType: \"String\",","            StringValue: MonHocData.SoTiet","          },","          \"TinChi\": {","            DataType: \"String\",","            StringValue: MonHocData.TinChi","          }","        },","        MessageBody: JSON.stringify(MonHocData),","        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/588509624082/InsertMonHoc'","    };","    let sendSqsMessage = sqs.sendMessage(sqsMonHocData).promise();","    sendSqsMessage.then((data) => {","        console.log(`OrdersSvc | SUCCESS: ${data.MessageId}`);","        return","    }).catch((err) => {","        console.log(`OrdersSvc | ERROR: ${err}`);","    });","}"]}],[{"start":{"row":77,"column":25},"end":{"row":77,"column":43},"action":"remove","lines":["TenMonHoc,MaMonHoc"],"id":47},{"start":{"row":77,"column":25},"end":{"row":77,"column":26},"action":"insert","lines":["D"]}],[{"start":{"row":77,"column":25},"end":{"row":77,"column":26},"action":"remove","lines":["D"],"id":48},{"start":{"row":77,"column":25},"end":{"row":77,"column":29},"action":"insert","lines":["Data"]}],[{"start":{"row":79,"column":17},"end":{"row":79,"column":27},"action":"remove","lines":["Data.MaMon"],"id":49}],[{"start":{"row":79,"column":17},"end":{"row":79,"column":18},"action":"insert","lines":["I"],"id":50},{"start":{"row":79,"column":18},"end":{"row":79,"column":19},"action":"insert","lines":["d"]}],[{"start":{"row":79,"column":18},"end":{"row":79,"column":19},"action":"remove","lines":["d"],"id":51}],[{"start":{"row":79,"column":18},"end":{"row":79,"column":19},"action":"insert","lines":["D"],"id":52}],[{"start":{"row":116,"column":16},"end":{"row":116,"column":17},"action":"remove","lines":["c"],"id":53},{"start":{"row":116,"column":15},"end":{"row":116,"column":16},"action":"remove","lines":["o"]},{"start":{"row":116,"column":14},"end":{"row":116,"column":15},"action":"remove","lines":["H"]}],[{"start":{"row":120,"column":18},"end":{"row":120,"column":19},"action":"remove","lines":["c"],"id":54},{"start":{"row":120,"column":17},"end":{"row":120,"column":18},"action":"remove","lines":["o"]},{"start":{"row":120,"column":16},"end":{"row":120,"column":17},"action":"remove","lines":["H"]}],[{"start":{"row":122,"column":43},"end":{"row":122,"column":44},"action":"remove","lines":["c"],"id":55},{"start":{"row":122,"column":42},"end":{"row":122,"column":43},"action":"remove","lines":["o"]},{"start":{"row":122,"column":41},"end":{"row":122,"column":42},"action":"remove","lines":["H"]}],[{"start":{"row":104,"column":19},"end":{"row":104,"column":80},"action":"remove","lines":["https://sqs.us-east-1.amazonaws.com/588509624082/InsertMonHoc"],"id":56},{"start":{"row":104,"column":19},"end":{"row":104,"column":80},"action":"insert","lines":["https://sqs.us-east-1.amazonaws.com/588509624082/InsertMonHoc"]}],[{"start":{"row":104,"column":19},"end":{"row":104,"column":80},"action":"remove","lines":["https://sqs.us-east-1.amazonaws.com/588509624082/InsertMonHoc"],"id":57},{"start":{"row":104,"column":19},"end":{"row":104,"column":80},"action":"insert","lines":["https://sqs.us-east-1.amazonaws.com/588509624082/UpdateMonHoc"]}],[{"start":{"row":126,"column":19},"end":{"row":126,"column":80},"action":"remove","lines":["https://sqs.us-east-1.amazonaws.com/588509624082/DeleteMonHoc"],"id":58},{"start":{"row":126,"column":19},"end":{"row":126,"column":80},"action":"insert","lines":["https://sqs.us-east-1.amazonaws.com/588509624082/DeleteMonHoc"]}]]},"ace":{"folds":[{"start":{"row":25,"column":1},"end":{"row":61,"column":0},"placeholder":"..."}],"scrolltop":637,"scrollleft":0,"selection":{"start":{"row":80,"column":27},"end":{"row":80,"column":27},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":80,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1637772797544,"hash":"a845df82f62ebead9955949bddf1ad2a887046da"}