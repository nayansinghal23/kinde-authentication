### Authentication using Kinde

- Pitfall-1 :-
    - SSG is default in NextJS means during runtime we don't have to do a lot of computations as its already done during the build.
    - But what will happen if we do something that will opt the page out of static to dynamic rendering eg:- if we use cookies, headers, searchParams, etc.
    - Solution -> Middleware check which will allow authenticate user to access the page as well as static rendering.