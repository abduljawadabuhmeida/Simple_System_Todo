const TodoModel = require('../model/TodoModel');

exports.create = async (req, res) => {
    try {
        const title = req.body.title
        const description = req.body.description
        if (!title.trim() || !description.trim()) {
            return res.json({
                message: 'title is required'
            })
        }

        await TodoModel.create({
            title: title,
            description: description,
            date: new Date
        }).then((data) => {
            return res.json({
                msg: 'todo created',
                state: 1,
                data: data,
            })
        }).catch((err) => {
            console.log(err)
            return res.json({
                msg: 'todo not created',
                state: 0,
                data: [],
            })
        })

    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error Server',
            state: 0,
            data: [],
        })

    }


}
exports.getall = async (req, res) => {
    try {
        const todos = await TodoModel.find()
        if (todos) {
            return res.json({
                msg: 'viewed todos',
                state: 1,
                data: todos
            })
        } res.json({
            msg: 'Not found todos',
            state: 1,
            data: todos
        })
    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error Server',
            state: 0,
            data: [],
        })
    }
}
exports.getbyid = async (req, res) => {
    try {
        const todos = await TodoModel.findOne({
            _id: req.params.id
        })
        if (todos) {
            return res.json({
                msg: 'viewed todos',
                state: 1,
                data: todos
            })
        } res.json({
            msg: 'Not found todos',
            state: 1,
            data: todos
        })
    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error Server',
            state: 0,
            data: [],
        })
    }
}
exports.update = async (req, res) => {
    try {
        const todos = await TodoModel.findOne({ _id: req.params.id })
        await TodoModel.updateOne({ _id: req.params.id }, { completed: true }).then(() => {
            return res.json({
                msg: `task ${todos.title} completed successfully `,
                state: 1,
                data: []
            })
        }).catch(err => {
            console.log(err)
            return res.json({
                msg: 'todo not updated',
                state: 0,
                data: []
            })
        })

    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error Server',
            state: 0,
            data: [],
        })

    }
}
exports.delete = async (req, res) => {
    try {
        await TodoModel.findOneAndDelete({
            _id: req.params.id
        }).then(() => {
            return res.json({
                msg: 'todo deleted',
                state: 1,
                data: []
            })
        }).catch(err => {
            console.log(err)
            return res.json({
                msg: 'todo not deleted',
                state: 0,
                data: []
            })
        }
        )

    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error Server',
            state: 0,
            data: [],
        })

    }
}