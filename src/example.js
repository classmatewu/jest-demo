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
    
      // Uncoverd Fncus，pnpm coverage 查看终端或者浏览器打开 /coverage/lcov-report/index.html 可查看结果
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

const getConfig = () => {
  return {
    port: 8080,
    url: 'http://localhost:3000',
  }
}

const timer = (callback) => {
  console.log('Ready...')
  setTimeout(() => {
    console.log("Time's up!")
    callback && callback()
  }, 3000)
}

// Uncoverd Fncus，pnpm coverage 查看终端或者浏览器打开 /coverage/lcov-report/index.html 可查看结果
const coverageTest = () => {
  console.log(1);
  const fn = () => {
    console.log(2);
  }
  fn()
}

export {
  multiply,
  fetchData,
  axiosData,
  runFn,
  getConfig,
  timer,
  coverageTest,
}