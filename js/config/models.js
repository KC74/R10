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

  return faves.length === 0 ? false : faves;
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

  if (faves.length === 0) {
    try {
      realm.write(() => {
        const fave = realm.create("Faves", {
          id,
          faved_on: new Date(Date.now())
        });
        console.log("Successfully added!", fave);
        console.log("Path:", realm.path);
        return fave;
      });
    } catch (e) {
      console.log(e);
      return e;
    }
  } else {
    console.log("ID exists already!", id);
  }
};

export const removeFave = id => {
  let faves = realm.objects("Faves").filtered("id == $0", id);

  if (faves.length === 1) {
    try {
      realm.write(() => {
        const fave = realm.delete(faves);
        console.log("Successfully removed!", id);
        return fave;
      });
    } catch (e) {
      console.log(e);
      return e;
    }
  } else {
    console.log("ID does not exist!", id);
  }
};

export default realm;
