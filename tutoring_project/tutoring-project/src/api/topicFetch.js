export const topicFetch = async (page, filter) => {
  try {
    const response = await fetch(`http://localhost:4000/topics?page=${page}&filter=${filter}`, {
      header: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Topic Fetch Error:", error);
  } finally {
  }
};
