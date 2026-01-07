import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const todosRef = (uid) => collection(db, "users", uid, "todos");

export const getTodos = async (uid) => {
  const snapshot = await getDocs(todosRef(uid));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addTodo = (uid, title) =>
  addDoc(todosRef(uid), { title, completed: false });

export const updateTodo = (uid, id, data) =>
  updateDoc(doc(db, "users", uid, "todos", id), data);

export const deleteTodo = (uid, id) =>
  deleteDoc(doc(db, "users", uid, "todos", id));
