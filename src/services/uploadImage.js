const IMGBB_API_KEY = "ba9803573d60e18fc86542c18f97b725"; //👈reemplazan por la suya ==> Acerca de... Get API
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {

  //Se usa FormData(puede cargar texto y archivos). Cuando se manda info con POST no se puede mandar imagen.
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error("Error al subir la imagen");
    }

    return data.data.url;
  } catch (error) {
    console.error("ImgBB error:", error);
    throw error;
  }
};
