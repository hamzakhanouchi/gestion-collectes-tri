const apiBaseUrl = "https://api.example.com";

const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${apiBaseUrl}/${endpoint}`, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Erreur API : ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
    throw error;
  }
};

export { fetchData };
