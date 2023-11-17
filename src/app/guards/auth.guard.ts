import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "../model/user.model";
import {inject} from "@angular/core";


const currentUser = new User();
export const authGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const token = localStorage.getItem('currentUser');

    const router = inject(Router)
    if(token){
      // @ts-ignore
      console.log('currentUser-->',JSON.parse(token).role);
      console.log('route-->',route);
      // @ts-ignore
      let role = JSON.parse(token).role;
      if(route.data['roles'].indexOf(role) === -1)
      {
        router.navigate(['/401']);
        return false;
      }
      return true;
    }else{
      router.navigate(['/login'])
      return false;
    }
  };
