import Realm from "realm";

const FavesSchema = {
  name: "Faves",
  primaryKey: "id",
  properties: {
    id: { type: "string" },
    faved_on: { type: "date" }
  }
};

const realm = new Realm({
  schema: [FavesSchema],
  path:
    "/Users/Ken/Documents/RED Academy/Fullstack Development/App-Dev/Projects/R10/R10/local-realm/r10.realm"
});

export const getFaves = () => {
  let faves = realm.objects("Faves");

  console.log(faves);
  return faves;
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
        console.log(fave.id, fave.faved_on);
        return fave;
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("ID exists already!", faves);
  }
};

export const removeFave = id => {
  let faves = realm.objects("Faves").filtered("id == $0", id);

  if (faves.length === 1) {
    try {
      realm.write(() => {
        const fave = realm.delete(faves);
        console.log("deleted successfully.", id);
        return fave;
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("ID does not exist!", id);
  }
};

export default realm;
