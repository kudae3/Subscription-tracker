import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });
        console.log(subscription);
        if(!subscription){
            const error = new Error('Subscription could not be created');
            error.statusCode = 400;
            throw error;
        }
        res.status(200).json({
            success: true,
            data: subscription
        });
    } catch (error) {
        next(error);
    }
};

export const getUserSubscriptions = async (req, res, next) => {
    try {

        if(req.user._id.toString() !== req.params.id){
            const error = new Error('Unauthorized');
            error.statusCode = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({ user: req.user._id });
        res.status(200).json({
            success: true,
            data: subscriptions
        });
        
    } catch (error) {
        next(error);
    }
}