import MyMessage from "./Messages/MyMessage/MyMessage";
import Partner from "./Messages/PartnerMessage/Partner";

function Main (){
        return <main className='d-flex flex-column-reverse gap-2'>
        <MyMessage/>
        <Partner/>
        <MyMessage/>
      </main>
    }

export default Main;