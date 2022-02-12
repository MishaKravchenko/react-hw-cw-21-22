import Joi from "joi";


export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp("^[[a-zA-ZА-яіІїЇ]{1,20}$")).required().messages({
        'string.empty' : 'model" не може бути пустим',
        'string.pattern.base' : 'Тільки букви! Мін 1 Макс 20'
    }),

    price: Joi.number().min(0).max(1000000).messages({
        'number.base':'Ціна може бути від 1 - 1 000 000',
        'number.min':'Ціна має бути більше 1',
        'number.max':'Ціна має бути меншою за 1 000 000'
    }),

    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base':'Рік може бути від 1900 - до теперішнього',
        'number.min':'Рік має бути більший за 1900',
        'number.max':'Рік має бути менший за поточний'
    })
})
