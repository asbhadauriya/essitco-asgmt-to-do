import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;   
export function middleware(req:NextRequest)
{
    const token=req.cookies.get('token')?.value
    const requestHeaders = new Headers(req.headers)
    const { pathname } = req.nextUrl;
const response=NextResponse.next({
  request:{
    headers:new Headers(req.headers)
  }
});
  if(token)
    {
      const authorizationHeaderValue = `Bearer ${token}`;
  response.headers.set('Authorization', authorizationHeaderValue);
    }
    
    if (
      pathname.startsWith("/_next") || // exclude Next.js internals
      pathname.startsWith("/api") || //  exclude all API routes
      pathname.startsWith("/static") || // exclude static files
      PUBLIC_FILE.test(pathname) // exclude all files in the public folder
    )
      return response


    if (token && !req.nextUrl.pathname.startsWith('/dashboard')) {
        
        return Response.redirect(new URL('/dashboard', req.url))
      }
     
      if (!token && !req.nextUrl.pathname.startsWith('/auth')) {

        return Response.redirect(new URL('/auth/login', req.url))
      }
     
      
     

        
      
    // const headers:any = {
        
        
    //     // token:req.cookies.get('token')?.value
    // };
    
    return response

        // New request headers
    //     headers:{
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhN2ViMzRkOS1iYTA2LTQwMjEtYjgzOC1mMGQ5NzViODBmMWEiLCJ1bmlxdWVfbmFtZSI6InMuYWtzaGF5QG1hYnpvbmUuY29tIiwibmJmIjoxNzEyMzE5MzMxLCJleHAiOjE3MTIzMjI5MzEsImlhdCI6MTcxMjMxOTMzMSwiaXNzIjoiaHR0cHM6Ly9temN1c3RvbWVyYXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vbXpjdXN0b21lcmFwaS5henVyZXdlYnNpdGVzLm5ldC8ifQ.CE7tC2W6zjaYBOg03JtnxHXgz2IofwBN3mxrSlQ4afs'
          
    //   },
    
    
}

