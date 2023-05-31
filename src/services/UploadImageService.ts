import axios from "axios";

const UploadImageService = ( () =>{
    const uploadImageEndpoint = "https://localhost:7012/UploadImage";

    const uploadImage = async (image: File) => {
        const formData = new FormData();
        formData.append("file", image);
    
        const result = await axios({
          url: uploadImageEndpoint,
          method: "POST",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
    
        formData.delete("file");
        return result.data;
      };

      return {
        uploadImage
      }
})()

export default UploadImageService;
