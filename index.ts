export const handler = async(event: any) => {
    console.log(event)

    return{
        statusCode: 200,
        body: JSON.stringify({message: 'Hello World! This is my first Typescript application.'})
    }
}