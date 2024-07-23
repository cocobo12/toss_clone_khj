import { insertPassbook } from "../util/database";

function AddPassbook({ navigation }) {
    async function createPassbookHandler(passbook) {
        await insertPassbook(passbook);
        navigation.navigate('',{

        });
    }

    return;
}

export default AddPassbook;