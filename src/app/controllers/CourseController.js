const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {

    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course =>
                res.render('courses/show', { course: mongooseToObject(course) })
            )
            .catch(next);
    }

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    //[POST] /courses/store
    store(req, res) {
        var num1 = Number(req.body.num1);
        var num2 = Number(req.body.num2);

        var result = num1 + num2;

        res.send("Addition - " + result);

        // res.json(req.body);
        // console.log(req)
        // // console.log(res)
        // res.json(req.body);
        // req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`
        // const course = new Course(req.body)
        // course.save();
        // res.send('COURSE SAVED')
    }

}

module.exports = new CourseController;