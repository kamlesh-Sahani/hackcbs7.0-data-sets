// models/Folder.ts
import { Schema, model, Document } from 'mongoose';

interface IFolder extends Document {
  name: string;
  collaborators: Schema.Types.ObjectId[];
}

const FolderSchema = new Schema<IFolder>({
  name: { type: String, required: true },
  collaborators: [{ type: Schema.Types.ObjectId, ref: 'MyEventUser' }],
});

const Folder = model<IFolder>('Folder', FolderSchema);
export { Folder };
