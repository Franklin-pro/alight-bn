import errormessage from "../utils/errormessage.js";
import jwt from "jsonwebtoken";

const VerifyAccess = (passrole) => {
    return (req, res, next) => {
        const token = req.headers["alight"];
        if (!token) {
            return errormessage(res, 401, `No token provided`);
        } else {
            try {
                const verifytoken = jwt.verify(token, process.env.SECRET_KEY, { expiresIn: "1d" });
                req.user = verifytoken.user;
                if (passrole !== verifytoken.user.Role) {
                    return errormessage(res, 401, `You don't have access`);
                } else {
                    next();
                }
            } catch (error) {
                if (error instanceof jwt.JsonWebTokenError) {
                    return errormessage(res, 401, `Invalid token`);
                }
                // Handle other errors, if needed
                return errormessage(res, 500, `Internal server error`);
            }
        }
    };
};

export default VerifyAccess;
