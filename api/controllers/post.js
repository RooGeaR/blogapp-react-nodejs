import { prisma } from "../db.js";
export const getPosts = async (req, res) => {
  try {
    const { search } = req.query;
    const posts = await prisma.post.findMany();
    return res.status(200).json(posts);
  } catch (error) {
    return res.send(error);
  }
};
export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
    });
    return res.status(200).json(post);
  } catch (error) {
    return res.send(error);
  }
};
export const addPost = async (req, res) => {
  try {
    const data = req.body;
    const createdUser = await prisma.post.create({ data });
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.send(error);
  }
};
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.post.delete({
      where: { id: Number(id) },
    });
    return res.json("Post has been deleted!");
  } catch (error) {
    return res.send(error);
  }
};
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await prisma.post.update({ where: { id: Number(id) }, data });
    return res.json("Post has been updated!");
  } catch (error) {
    return res.send(error);
  }
};
