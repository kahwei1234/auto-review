import BOLoginPage from "../page-objects/BOLoginPage";

class BOLoginFlow {

    async BOlogin_sit1 (staffid, staffpassword) {
        //Go to the URL
        await BOLoginPage.open_bo1();
        //Click the staffID field
        await BOLoginPage.staff_id_field.click();
        //Insert username
        await BOLoginPage.staff_id.setValue(staffid);
        //Wait
        await browser.pause(1000);
        //Click the login button
        await BOLoginPage.staff_password_field.click();
        //Wait
        await browser.pause(1000);
        //Insert password
        await BOLoginPage.staff_password.setValue(staffpassword);
        //Click the login button
        await BOLoginPage.login_button.click();
        //Wait
        await browser.pause(5000);
    }

    async BOlogin_sit2 (staffid, staffpassword) {
        //Go to the URL
        await BOLoginPage.open_bo2();
        //Click the staffID field
        await BOLoginPage.staff_id_field.click();
        //Insert username
        await BOLoginPage.staff_id.setValue(staffid);
        //Wait
        await browser.pause(1000);
        //Click the login button
        await BOLoginPage.staff_password_field.click();
        //Wait
        await browser.pause(1000);
        //Insert password
        await BOLoginPage.staff_password.setValue(staffpassword);
        //Click the login button
        await BOLoginPage.login_button.click();
        //Wait
        await browser.pause(5000);
    }
}

export default new BOLoginFlow