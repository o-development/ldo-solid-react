import { DocumentError } from "../../errors/DocumentError";
import { Resource } from "../../resource/Resource";

export class BinaryResource extends Resource {
  protected fetchDocument(): Promise<DocumentError | undefined> {
    throw new Error("Method not implemented.");
  }
}
