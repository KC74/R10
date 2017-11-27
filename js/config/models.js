import Realm from "realm";

const FavesSchema = {
  name: "Faves",
  primaryKey: "id",
  properties: {
    id: { type: "string" },
    faved_on: { type: "date" }
  }
};

// const realm = new Realm({
//   schema: [FavesSchema],
//   path:
//     "/Users/Ken/Documents/RED Academy/Fullstack Development/App-Dev/Projects/R10/R10/local-realm/r10.realm"
// });

const realm = new Realm({
  schema: [FavesSchema]
});

export const getFaves = () => {
  let faves = realm.objects("Faves");

  return faves.length === 0 ? {} : faves;
};

export const isFaved = id => {
  const session =
    getFaves().length > 0 ? getFaves().filtered("id == $0", id) : 0;

  if (session.length) {
    return true;
  }
  return false;
};

export const deleteAllFaves = () => {
  try {
    realm.write(() => {
      realm.deleteAll();
    });
    console.log("Removed all!");
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const addFave = id => {
  let faves = realm.objects("Faves").filtered("id == $0", id);
  try {
    realm.write(() => {
      realm.create("Faves", {
        id,
        faved_on: new Date(Date.now())
      });
      console.log("Successfully added!", realm.path);
    });
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const removeFave = id => {
  let faves = realm.objects("Faves").filtered("id == $0", id);
  try {
    realm.write(() => {
      realm.delete(faves);
      console.log("Successfully removed!", id);
      console.log("Successfully removed!", realm.path);
    });
  } catch (e) {
    console.log(e);
    return e;
  }
};

export default realm;
