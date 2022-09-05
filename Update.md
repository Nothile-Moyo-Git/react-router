# Update notes for React v5 to V6

Change Switch for Route
Keep BrowserRouter
Instead of using a child element, use the "element={JSX object}" prop instead on your Route component
Dynamic routes still work the same
All /* to the url instead of the "exact" prop

activeClassName was removed from NavLink. 
In your className prop for navLink, you can use a dynamic function inside of it with an object called navData.
It has an isActive prop which is true, return a className dynamically

Instead of using redirect, we use the Navigate component inside of element.
e.g <Route path="/" element={<Navigate replace to="/welcome"}/>

every Route must now be wrapped in Routes

Instead of loading the component, set the path as "to" in your <Link/> element

You can nest "route" components in order to get the children working

If you nest Route components, you'll need to use the component called <Outlet/> in order to output nested content

useHistory has been replaced with useNavigate
You can define it by writing "const navigate = useNavigate()"
It takes 2 arguments, a url string and an object. Within the object you can define the replace property in order to define a redirect or new page link

There is no prompt functionality in React Router v5
