const roles=['student','admin','coordinator','hr']

const studentRole=(req,res,next)=>{
    const {role}=req.user
    if(role=="student") next()
    else res.send("unauthorised")
}

const hrRole=(req,res,next)=>{
    const {role}=req.user
    if(role=="hr") next()
    else res.send("unauthorised")
}
const adminRole=(req,res,next)=>{
    const {role}=req.user
    if(role=="admin") next()
    else res.send("unauthorised")
}

const coordinatorRole=(req,res,next)=>{
    const {role}=req.user
    if(role=="coordinator") next()
    else res.send("unauthorised")
}