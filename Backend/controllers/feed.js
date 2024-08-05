const {validationResult} = require("express-validator");

const Post = require("../models/post")

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post!",
        imageUrl: "images/duck.jpg",
        creator: {
          name: "Maximilian",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty) {
    return res.json({
      message: "Validation failed, entered data is incorrect.",
    });
  }

  const title = req.body.title;
  const content = req.body.content;
  
  // Create post in db
  const post = new Post({
    title: title,
    content: content,
    creator: { name: "Faiz Khan" },
    imageUrl: 'images/pic.jpg'
  })

  post.save().then((result) => {
    // console.log(result);
    res.json({
      message: "Post created successfully.",
      post: result
    })
  }).catch(err => console.log(err))
};
