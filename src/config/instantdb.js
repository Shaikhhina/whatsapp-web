import { init, id } from "@instantdb/react";

const db = init({
  appId: "6eebf6db-763f-48d1-b49c-1acac3cbc869", 
});

export const signUpUser = async (userData) => {
  try {
    // Proceed to store the new user in the "users" collection
    await db.transact([
      db.tx.user[id()].update({
        email: userData.email.trim(),
        password: userData.password.trim(),
      }),
    ]);

    // Storing in a separate "user_profiles" collection
      await db.transact([
        db.tx.user_profiles[id()].update({
          userId: id(),
          email: userData.email,
          name: "", 
          bio: "Hey, there I am using Whatsapp", 
          avatar: "", 
          lastSeen: Date.now(),
        }),
      ]);
  
      // Storing in a separate "user_chats" collection
      await db.transact([
        db.tx.user_chats[id()].update({
          chatData: [],
        }),
      ]);

    return { success: true };
  } catch (error) {
    console.error("Error signing up user:", error); 
    
  }
};

export default db;
