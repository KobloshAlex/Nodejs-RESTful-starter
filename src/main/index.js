require("dotenv").config({ path: "./src/main/config/.env" });
const app = require("./app");
const logger = require("./config/logger");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	logger.info(`server is up and running at ${PORT}`);
});
