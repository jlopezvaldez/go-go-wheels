import PocketBase from 'pocketbase'

export const pb = new PocketBase(import.meta.env.POCKETBASE_URL ||
    process.env.POCKETBASE_URL) 


    export async function newQuote(phoneNumber:string){
        return await pb.collection('quotes').create({
            phone_number: phoneNumber
        })
    }

    export async function completeQuote(id:string, data:any){
        return await pb.collection('quotes').update(id,data)
    }