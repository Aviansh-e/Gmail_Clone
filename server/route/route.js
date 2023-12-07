import express from "express";
import { savesentEmails, getEmails, savedraft, moveEmailsToBin } from "../controller/email-controller.js";

const routes = express.Router();

routes.post('/save', savesentEmails);
routes.get('/emails/:type', getEmails);
routes.post('/save-draft', savesentEmails);
routes.post('/bin', moveEmailsToBin);

export default routes;
