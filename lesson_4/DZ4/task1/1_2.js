'use strict'

/**
 * Конструктор
 * @param {string} author
 * @param {string} text
 * @constructor {}
 */
function Post_es5(author, text) {
    this.author = author
    this.text = text
    this.date = new Date()

}

/**
 * Метод для Конструктора Post_es5
 * @param text {string}
 * @returns {string}
 */
Post_es5.prototype.edit = function (text) {
    return this.text = text
}


/**
 *
 * @param author
 * @param text
 * @constructor
 */
function AttachedPost(author, text) {
    Post_es5.call(this, author, text)
    this.highlighted = false
}

AttachedPost.prototype = Object.create(Post_es5.prototype);
AttachedPost.prototype.constructor = AttachedPost;


AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true
}


const post1 = new Post_es5('egor', 'lorem')


const attpost1 = new AttachedPost('roma', 'lorem dem ed')

console.log(attpost1)
console.log(post1)

/**
 *
 */
class Post_es6 {
    constructor(author, text) {
        this.author = author;
        this.text = text;
        this.date = new Date();
    }

    edit(text) {
        return this.text = text
    }
}

class AttachedPost_es6 extends Post_es6 {
    constructor(author, text) {
        super(author, text);
        this.highlighted = false
    }

    makeTextHighlighted() {
        this.highlighted = true
    }

}

const at = new AttachedPost_es6("petr", "tezxt")

console.log(at)
at.edit("new text")
at.makeTextHighlighted()
console.log(at)
