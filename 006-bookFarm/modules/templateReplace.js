module.exports = (temp, product) => {
    let output = temp.replace(/{%BOOKTITLE%}/g, product.bookName);
    output = output.replace(/{%COUNT%}/g, product.count);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{{%ID%}}/g, product.id);
    output = output.replace(/{%WRITER%}/g, product.writer);
    output = output.replace(/{%GANRE%}/g, product.genre);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%IMAGE%}/g, product.icon);

    if (!product.double)
        output = output.replace(/{%NOT_DOUBLE%}/g, "not_double");
    return output;
};
