import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';



export async function GET(request, {params}) {
    
    const file  = await  fs.readFile(process.cwd() + '/src/app/api/base/data.json', 'utf8');

    const id = params.id;

    const usuarios =  await JSON.parse(file);
    
    if(id > 0 && id <= usuarios.usuarios.length){
        return  NextResponse.json(usuarios.usuarios.find((user)=> user.id == id));
    }else{
        return id == 0 ? NextResponse.json(usuarios.usuarios) : NextResponse.redirect("http://localhost:3000/error")
    }
}

