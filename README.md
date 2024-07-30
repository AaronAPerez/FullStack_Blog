<!-- Goal is to Create FullStack web app for Blog site -->
<!-- Backend will be done .Net 8, web api, web api, EF core, SQL Server -->
<!-- Deploy with Azure Static web apps -->

<!-- Create an API  for Blog, This must handle allCRUD functions -->

<!-- CRUD
Create
Read
Update
Delete
-->

<!-- In this app, the user should be able to login so we need login page -->

<!-- Create Account Page -->
<!-- Blog view post page of published items -->
<!-- Dashboard page(this is the profile will edit delete, publish and unpublish your blog post) -->

<!-- SQL Server from azure for our Database -->

<!-- Folder structure -->

<!-- Login//endpoint

        AddUser//endpoint
        UpdateUser//endpoint
        DeleteUser//endpoint
        -->

<!-- BlogController

        AddBlogItems//endpoint C
        GetAll>



-->

<!------------- Models ---------------->

<!-- Model Folder -->

<!-- UserModel

        id int
        username string
        Salt string
        Hash string        
-->

<!-- BlogItemModel

        id int
        UserId int
        PublishName string
        Title string
        Image string
        Description string
        Date string
        Category string
        IsPublished bool
        IsDeleted bool
        
-->
<!-------------------- Items that will be saved to our database are above ----------------------->

<!-- LoginModel
        Username string
        Password string
    CreateAccountModel
        Id int
        Username string
        Password string
    Password Model
        Salt string
        Hash string
    -->

<!-- Services//Folder

    UserService//file
        GetUserByUser
        Login
        AddUser
        DeleteUser
     BlogItemService
        Get   
    -->