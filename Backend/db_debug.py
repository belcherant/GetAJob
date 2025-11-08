from db import Database_api, DB_PATH
import os

def delete_db():
    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)

def test_post(db:Database_api):
    print("---- test all post functions")
    print("create new post")
    res = db.post.create_post("test_title", "test_description", 1)
    res = db.post.create_post("test_title1", "test_description1", 1)
    print(res)
    print()
    print("select post by id")
    res = db.post.select_post(1)
    print(res)
    print()
    print("select non-exist post by id")
    res = db.post.select_post(10)
    print(res)
    print()
    print("select post own by user id 1")
    res = db.post.select_user_post(1)
    print(res)
    print()
    print("select post own by non-exist user")
    res = db.post.select_user_post(1000)
    print(res)
    print()
    print("modify post")


def test_message(db:Database_api):
    pass

def test_post_tag(db:Database_api):
    pass

def test_tag(db:Database_api):
    pass

def test_user_report(db:Database_api):
    pass

# do we need a post report seperate from user report? 
def test_post_report(db:Database_api):
    pass

# all test case success
def test_user(db:Database_api):
    # test create account
    print("---- test create account ----")
    print("insert invalid user:")
    res = db.user.create_account("1", "12345678", "example@gmail.com")
    print(res)
    print()
    print("insert a user:")
    res = db.user.create_account("test_user", "test_password", "example@gmail.com")
    print(res)
    print()
    print("insert duplicate user:")
    res = db.user.create_account("test_user", "test_password", "example@gmail.com")
    print(res)
    print()

    # test get/update user profile
    print("---- test get user profile ----" )
    print("get the user by user name")
    res = db.user.get_user_profile("test_user")
    print(res)
    print()
    print("get non-exist user by user name")
    res = db.user.get_user_profile("do_not_exist")
    print(res)
    print()
    print("update user profile")
    res = db.user.update_user_profile("test_user", email="new@gmail.com", phone="1234567890", first_name="user_frist_name", last_name="user_last_name")
    print(res)
    print()
    print("get user after updated")
    res = db.user.get_user_profile("test_user")
    print(res)
    print()
    
    # test ban/if_banned/unban function
    print("---- test ban/if_banned/unban function ----")
    print("check if user is banned")
    res = db.user.if_user_banned("test_user")
    print(res)
    print()
    print("ban user")
    res = db.user.ban_user("test_user")
    print(res)
    print()
    print("check if user is banned")
    res = db.user.if_user_banned("test_user")
    print(res)
    print()
    print("unban user")
    res = db.user.unban_user("test_user")
    print(res)
    print()
    print("check if user is banned")
    res = db.user.if_user_banned("test_user")    
    print(res)
    print()
    
    # test verify/update password
    print("---- test verify/update password ----")
    print("verify password (if login) with wrong password")
    res = db.user.verify_password("test_user", "test")
    print(res)
    print()
    print("verify password with correct password")
    res = db.user.verify_password("test_user", "test_password")
    print(res)
    print()
    print("update password")
    res = db.user.update_password("test_user", "new_password")
    print(res)
    print()
    print("verify with old password")
    res = db.user.verify_password("test_user", "test_password")
    print(res)
    print()
    print("verify with new password")
    res = db.user.verify_password("test_user", "new_password")
    print(res)
    print()

    print("---- test get user id ----")
    print("get user id:")
    res = db.user.get_user_id("test_user")
    print(res)
    print()

    print("---- test update user name / delete user ----")
    print("update user name")
    res = db.user.update_user_name("new_user", "test_user")
    print(res)
    print()
    print("delete user with old name")
    res = db.user.delete_user("test_user")
    print(res)
    print()
    print("delete user with new name")
    res = db.user.delete_user("new_user")
    print(res)
    print()

def apply_test_data(db:Database_api):
    print("---- insert test users ----")
    # generate test user
    test_user = [{"user_name":f"test_user{n+1}", "email":f"test_email{n+1}", "password":f"test_password{n+1}"} for n in range(10)]
    for i in test_user:
        res = db.user.create_account(i["user_name"], i["password"], i["email"])
        print(f"add {i['user_name']}: {res}")

    print("---- finish adding test data ----\n")
if __name__ == "__main__":
    delete_db()
    db = Database_api()
    apply_test_data(db)
    # test_user(db)
    test_post(db)
    # db.terminal()
