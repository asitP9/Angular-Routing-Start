export class authService{
    isLoggedIn:boolean=false;

    logIn(){
        this.isLoggedIn=true;
    }
    logOut(){
        this.isLoggedIn=false;
    }
    isUserLoggedIn(){
        const promise=new Promise(
        (resolve,reject)=>{
            setTimeout(()=>{resolve(this.isLoggedIn);
        },800);
        });
        return promise;
    }
    }

