export class Blog {
      imageUrl: string;
      imageFile: FileList;
      title: string;
      text: string;

      constructor() {
            this.imageFile = null;
            this.imageUrl = '';
            this.title = '';
            this.text = '';
      }
}
