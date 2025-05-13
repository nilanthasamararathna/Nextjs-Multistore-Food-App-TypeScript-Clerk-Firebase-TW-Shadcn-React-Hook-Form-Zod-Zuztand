import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
    return ( 
        <div>
            This is the Dashboard <UserButton afterSignOutUrl="/" />
        </div>     
        );
}
 
export default SetupPage;