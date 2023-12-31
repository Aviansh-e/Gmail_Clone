

import Email from "../model/email.js"

export const savesentEmails = (request, response) => {
    try {
        const email = new Email(request.body);
        email.save();
        response.status(200).json('email saved successfully');
    }
    catch (error) {
        response.status(500).json(error.message);
    }
}
export const getEmails = async (request, response) => {
    try {
        let emails;
        if (request.params.type === 'bin') {
            emails = await Email.find({ bin: true });
        }
        else if (request.params.type === 'allmail') {
            emails = await Email.find({});
        }
        else {
            emails = await Email.find({ type: request.params.type });
        }
        return response.status(200).json(emails);
    } catch (error) {
        response.status(500).json(error.message);
    }
}
export const savedraft = async (request, response) => {
    try {
        if (request.params.type == 'draft') {
            const email = new Email(request.body);
            email.save();
            response.status(200).json('email saved into draft successfully');
        }
    }
    catch (error) {
        response.status(500).json(error.message);
    }
}
export const moveEmailsToBin = async (request, response) => {
    try {
        await Email.updateMany({ _id: { $in: request.body } }, { $set: { bin: true, starred: false, type: '' } });
        return response.status(200).json("email deleted successfully");
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message);
    }
}