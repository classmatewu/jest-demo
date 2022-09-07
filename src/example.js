const https = require('https')
const axios = require('axios')

const multiply = (a, b) => {
  return a * b
}

const fetchData = () => {
  return new Promise((resolve, reject) => {
    // const options = {
    //   hostname: 'opendata.baidu.com',
    //   port: 443,
    //   path: '/api.php?query=0.0.0.0&co=&resource_id=6006&oe=utf8',
    //   method: 'GET'
    // }
    const url = "https://opendata.baidu.com/api.php?query=0.0.0.0&co=&resource_id=6006&oe=utf8"
    
    const req = https.request(url, res => {
      console.log(`状态码: ${res.statusCode}`)
    
      res.on('data', d => {
        process.stdout.write(d)
        resolve(JSON.parse(d.toString()))
      })
    })

    req.on('error', error => {
      console.error(error)
      resolve(error)
    })
    
    req.end()
  })
}

const axiosData = () => {
  return axios.get("https://opendata.baidu.com/api.php?query=0.0.0.0&co=&resource_id=6006&oe=utf8")
}

const runFn = fn => {
  fn('fn runned')
}

export {
  multiply,
  fetchData,
  axiosData,
  runFn,
}