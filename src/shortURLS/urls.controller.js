const urls = require("../data/urls-data");
const uses = require("../data/uses-data");



function list(req, res){
    const { useId } = req.params;
    res.json({data: urls.filter(useId ? url => url.use_id === useId : () => true)});
}

function bodyDataHas(propertyName){
    return function (req, res, next){
        const {data = {} } = req.body;
        if(data[propertyName]){
            return next();
        }
        next({
            status: 400,
            message: `Must include a ${propertyName}`,
        });
    };
}

function create(req, res){
    const {data : { href } ={} } = req.body;
    const newUrlId = urls.length + 1;
    const newUrl = {
        id: newUrlId,
        href: href,
    }
    urls.push(newUrl);
    res.status(201).send({data:newUrl});
}

function urlExists(req, res, next){
    const {urlId} = req.params;
    const foundUrl = urls.find(url => url.id === Number(urlId));
    if(foundUrl){
        res.locals.url = foundUrl;
        return next()
    }
    next({
        status: 404,
        message: `Url id not found: ${urlId}`,
    })
}

function read(req, res){
    const newUse = {
      id: uses.length + 1,
      urlId: res.locals.url.id,
      time:Date.now()
    }
    uses.push(newUse);
    res.json({data: res.locals.url});
};

function update(req, res){
    const url = res.locals.url;
    const {data : { href } = {} } = req.body;
    
    url.href = href;

    res.json({data: url})
}

function destroy(req, res){
    const { urlId } = req.params;
    const index = urls.findIndex((url) => url.id === Number(urlId));
    const deleteUrls = urls.splice(index, 1);
    res.sendStatus(204);
}

module.exports = {
    list,
    create: [
        bodyDataHas("href"),
        create
    ],
    read: [
        urlExists,
        read,
    ],
    update: [
        urlExists,
        bodyDataHas("href"),
        update
    ],
    delete: [
        urlExists,
        destroy,
    ],
  urlExists,
};