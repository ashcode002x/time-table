
exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ apiUrl: "https://aashish836863.pythonanywhere.com/timetable/" }),
    };
  };
  