import { Collection, Document, Filter, FindOptions, ObjectId } from "mongodb";
import { db } from "../db/db.js";
import { Value } from "@sinclair/typebox/value";
import { TObject } from "@sinclair/typebox";

export abstract class BaseModel<T extends Document> {
  protected collection: Collection<T>;

  constructor(collectionName: string) {
    this.collection = db.collection<T>(collectionName);
  }

  protected abstract getSchema(): TObject;

  async insertOne(item: T) {
    const validatedItem = Value.Parse(this.getSchema(), item);
    // @ts-ignore
    return this.collection.insertOne(validatedItem);
  }

  async find(filter: Filter<T> = {}, options?: FindOptions<T>) {
    return this.collection.find(filter, options).toArray();
  }

  async findById(id: string) {
    // @ts-ignore
    return this.collection.findOne({ _id: new ObjectId(id) });
  }

  // ...
}
