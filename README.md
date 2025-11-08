# GetAJob
Webpage for CSC 131 section 4 group 5

### Description
Our job platform is a web-based system that connects contractors and clients to small or large job opportunities. Our purpose is to provide an easy to use, streamlined system where someone can list / find jobs no matter the size.

### Database api
 - __User__:
    | Function Name | Input | Return Value | Description |
    |---------------|-------|--------------|-------------|
    | create_account | username, password, email | success | Insert user into database |
    | get_user_profile | username | password, email, phone... | get all user data |
    | get_user_id | username | user id | get user id |
    | if_user_banned | username | True/False | check if user is banned |
    | verify_password | username, password | True/False | check if password match the user's password, use for logging in account |
    | update_user_name | new username, old username | success | change username from old to new |
    | update_password | username, new password | success | change user password |
    | update_user_profile | username, email, phone... | success | update a user's profile(pass in only the one that needs to be updated) |
    | ban_user | username | success | ban a user (only admin has permision to ban) |
    | unban_user | username | success | unban a user (only admin has permision to unban) |
    | delete_user | username | success | delete your account |

- __Post__:
    | Function Name | Input | Return Value | Description |
    |---------------|-------|--------------|-------------|
    



### Contact Information
- anthonybelcher@csus.edu
- mboyle@csus.edu
- jaredshicks@csus.edu
- dvillasenor2@csus.edu
- chenwang@csus.edu
