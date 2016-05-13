import { Schema /* , arrayOf */ } from 'normalizr';

const posts = new Schema('posts');

posts.define({});

export {
  posts,
};
