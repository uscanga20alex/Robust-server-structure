const uses = require("../data/uses-data");

function list(req, res){
    res.json({data: uses});
};

function useExists(req, res, next){
    const {useId} = req.params;
    const foundUse = uses.find(use => use.id === Number(useId));
    if(foundUse){
        res.locals.use = foundUse;
        return next();
    }
    next({
        status: 404,
        message: `Use id not found: ${useId}`,
    });
}

function read(req, res){
    res.json({data: res.locals.use});
}

function destroy(req, res){
  const { useId } = req.params;
  const index = uses.findIndex((use) => use.id === Number(useId));
  const deleteUses = uses.splice(index, 1);
  res.sendStatus(204);
}

module.exports = {
    list,
    read: [useExists, read],
    useExists,
    delete: [useExists, destroy],
};