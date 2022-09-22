import { useState } from "react";

const DeleteUser = ({ handleDeleteUser }) => {
    //set state of delete user function
    const [deleteUserId, setUserIdToDelete] = useState("");
    
    return (
        <div>
            <h3>Delete User</h3>
            <form id="delete-user" onSubmit={(e)=> {
            e.preventDefault()
            handleDeleteUser(deleteUserId)
            setUserIdToDelete("")
            }} >
                <fieldset>
                    <label>User ID</label>
                    <input type="number" id="delete-user-id" value={deleteUserId}
                    onChange={(e)=> setUserIdToDelete(e.target.value)}/>
                </fieldset>
                <input type="submit" />
            </form>
        </div>
    )
};
export default DeleteUser;