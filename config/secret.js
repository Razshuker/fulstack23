// קובץ שמכיל את כל המשתנים הסודיים
// dotenv -> ספרייה שיודעת לקרוא משתנים מקובץ איאנוי
require("dotenv").config();

exports.config = {
    mongoUser: process.env.DBUSER,
    mongoPass: process.env.DBPASS,
    tokenSecret: process.env.TOKENSECRET
}