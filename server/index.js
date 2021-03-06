const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")
const Module = require("module")
const serveStatic = require('serve-static')
const port = process.env.PORT || 3000

require("dotenv").config()
app.use(require("cors")())

function deleteProperty(object, attrs) {
  const newObject = { ...object }
  attrs.forEach(item => delete newObject[item])
  return newObject
}


const data = require("./data")

const dataClasses = []
data.forEach(item => {
  item.classes = +(item.classes + "").replace(/\s/g, "")
  if (item.classes in dataClasses) {
    dataClasses[item.classes].push(item)
  } else {
    dataClasses[item.classes] = [item]
  }
})

function findLesson({ classes, week, level }) {
  return thisData = data.find(item => item.classes == classes && item.week == week && item.level == level)
}

app.route("/api/get-subject/class/:classes/week/:week/level/:level").get(({ params }, res) => {

  const thisData = findLesson(params)
  let data

  if (thisData) {
    const { name, classes, week, level, questions } = thisData
    data = {
      statusCode: 200,
      data: {
        name,
        classes,
        week,
        level,
        questions
      }
    }
  } else {
    data = {
      statusCode: 404,
      message: "Can't find this a document."
    }
  }

  res.status(data.statusCode).json(data)
})

app.route("/api/get-basic-subject/class/:classes/week/:week/level/:level").get(({ params }, res) => {

  const thisData = findLesson(params)
  let data

  if (thisData) {
    data = {
      statusCode: 200,
      data: deleteProperty(thisData, ["questions"])
    }
  } else {
    data = {
      statusCode: 404
    }
  }

  res.status(data.statusCode).json(data)
})

app.route("/api/get-all-subject(/page/:page)?").get(({ params, query }, res) => {
  const classes = query.class || 0,
    page = Math.max(params.page || 1) - 1
  let thisData

  if (classes > 0) {
    thisData = {
      statusCode: 200,
      data: dataClasses[classes]
    }

    if (!thisData) {
      thisData = { statusCode: 404 }
    }
  } else {
    thisData = {
      statusCode: 200,
      data: data
    }
  }

  res.status(thisData.statusCode).json({
    ...thisData,
    data: thisData.data?.filter(e => !query.type || e.type ?.toLowerCase() == query.type ?.toLowerCase())
      .slice(page * 20, Math.min((page + 1) * 20, data.length))
      .map(item => deleteProperty(item, ["questions"])) || []
  })
})


app.route("/api/resources/assets/*").get((req, res) => {
  const itPath = `${__dirname}/assets/${req.params[0].replace("..", "")}`

  if (fs.existsSync(itPath)) {
    res.sendFile(itPath)
  } else {
    res.status(404).send("Not Found")
  }
})
app.route("/api/search-subject").get(({ query }, res) => {
  const dataResult = data.filter(item => item.name.replace(/\s/g, "").toLowerCase().indexOf(query.query?.replace(/s/g, "").toLowerCase()) > -1)
  res.json({
    statusCode: 200,
    data: (!!query.query ? dataResult : data.slice(0, 20)).map(e => deleteProperty(e, ["questions", "description", "image"]))
  })
})

app.use(require("connect-history-api-fallback")())
app.use(serveStatic(__dirname + "/../dist"))

app.listen(port, () => console.log(`App is running in port ${port}`));
