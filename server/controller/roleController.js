const roles=['STUDENT','ADMIN','COORDINATOR','HR']

const studentRole=(req,res,next)=>{
    const {role}=req.user
    if(role=="STUDENT") next()
    else res.send("unauthorised")
}

const hrRole=(req,res,next)=>{
    const {role}=req.user
    if(role=="HR") next()
    else res.send("unauthorised")
}
const adminRole=(req,res,next)=>{
    const {role}=req.user
    if(role=="ADMIN") next()
    else res.send("unauthorised")
}

const coordinatorRole=(req,res,next)=>{
    const {role}=req.user
    if(role=="COORDINATOR") next()
    else res.send("unauthorised")
}

module.exports={studentRole,hrRole,coordinatorRole,adminRole}