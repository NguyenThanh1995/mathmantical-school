module.exports = {

  name: "Dấu bé hơn, lớn hơn",
  description: "Đây là bài ôn tập của tuần 3.",
  image: "https://book.sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg",
  type: "Compare",
  week: 3,
  level: 1, classes: 1,
  questions: [
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/1/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/1/2.png")
    `,
      items: [">", "<", "="]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/2/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/2/2.png")
    `,
      items: [">", "<", "="]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/3/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/3/2.png")
    `,
      items: [">", "<", "="]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/4/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/4/2.png")
    `,
      items: [">", "<", "="]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/5/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/5/2.png")
    `,
      items: [">", "<", "="]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/6/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/6/2.png")
    `,
      items: [">", "<", "="]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/7/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/7/2.png")
    `,
      items: [">", "<", "="]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/8/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/8/2.png")
    `,
      items: [">", "<", "="]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/9/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/9/2.png")
    `,
      items: [">", "<", "="]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/10/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/10/2.png")
    `,
      items: [">", "<", "="]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
div.d-flex.align-items-center.justify-content-between
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/11/1.png")
  img(src="${process.env.baseURL}/api/resources/assets/class-1/t3/11/2.png")
    `,
      items: [">", "<", "="]
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 3 %text1 5
p.text-h5.text-center 4 %text2 1
p.text-h5.text-center 1 %text3 2 
    `,
      items: ["<, >, >", "<, =, >", "<, >, >", "=, <, <"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 3 %text1 2
p.text-h5.text-center 4 %text2 1
p.text-h5.text-center 5 %text3 5
    `,
      items: ["<, >, >", ">, >, =", "<, >, >", "=, <, <"],
      answer: 1
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 1 %text1 2 %text2 3
    `,
      items: ["<, <", "<, >", ">, >", "=, >"],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 5 %text1 4 %text2 1
    `,
      items: ["<, <", "<, >", ">, >", "=, >"],
      answer: 2
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 3 %text1 1 %text2 2
    `,
      items: ["<, <", "<, >", ">, >", ">, <"],
      answer: 3
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 5 %text1 3 %text2 3
    `,
      items: ["<, <", "<, >", ">, =", "=, >"],
      answer: 2
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 1 %text1 1 %text2 5
    `,
      items: ["<, <", "<, >", ">, =", "=, <"],
      answer: 3
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 1 %text1 2 %text2 4 %text3 5
    `,
      items: ["<, <, <", "<, >, >", ">, =, >", "=, <, ="],
      answer: 0
  },
    {
      type: "select",
      question: `
p.grey--text.text--darken-2 Điền dấu thích hợp
p.text-h5.text-center 5 %text1 3 %text2 1 %text3 4
    `,
      items: ["<, <, <", "<, >, >", ">, =, >", ">, >, <"],
      answer: 3
  }
]
}