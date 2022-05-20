// defines table relationships and exports them for use
const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comment');

// one user ownes each post
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// users and posts are highly associated through votes
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

// users own their votes
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

// posts also own their votes
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

// define that users and post will have many votes
User.hasMany(Vote, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

module.exports = { User, Post, Vote, Comment };