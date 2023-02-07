import shoesRouter from './shoes.js';
import categoryRouter from './category.js';
import orderRouter from './order.js';
import favoriteRouter from './favorite.js'; 
function routing(app) {

	/* --- User routes --- */
	app.use("/shoes", shoesRouter);
    app.use("/category", categoryRouter);
    app.use("/order", orderRouter);
    app.use("/favorite", favoriteRouter);
    // / Notfound routes /
    app.use("*", (req, res, next) => {
        res.status(404).json({
            message: "not-found",
            error: "not-found"
        });
    });
}

export default routing;
