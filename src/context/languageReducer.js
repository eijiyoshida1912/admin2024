const LanguageReducer = (state, action) => {
  switch (action.type) {
    case "ja": {
      return {
        language: "ja",
      };
    }
    case "en": {
      return {
        language: "en",
      };
    }
    default:
      return {
        language: "ja",
      };
  }
};

export default LanguageReducer;
