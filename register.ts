import mailChecker from "mailchecker";

//เปลี่ยน u เป็น *
//เปลี่ยน o เป็น &
//เปลี่ยน 0 เป็น !
const database = [
    { email: 'nan@utk.ac.th', password: 'il&vey&*3!!!'}, // iloveyou3000
    { email: 'max@utk.ac.th', password: '*tkandme&!1'} //utkandmeo01
];

function decrypttionPassword(password: string){
    return password.replaceAll('*', 'u').replaceAll('&', 'o').replaceAll('!', '0')
}

function register(email: string, password: string) {
    //เช็คเมล์
    if (mailChecker.isValid(email)) {
        const user = database.filter(function (element, index) {
            return element.email.includes(email)
        }) // [{ email: 'nan@utk.ac.th',password: 'nan123456556'}], []
        
        if (user.length > 0) {
            console.log('พบอีเมลล์นี้ในระบบ โปรดตรวจสอบ')
        } else {
    }   //เช็ค password
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password,
            };
            database.push(userObject);
            console.log("สมัครสมาชิกเรียบร้อย");
            console.log(database)
        } else {
            console.log("รหัสผ่านต้องยาวมากกว่า 8 ตัวอักษร และไม่เกิน 16 ตัวอักษร");
        }
    } else {
        console.log("Email ไม่ถูกต้อง");
    }
}

register ("nan@utk.ac.th", "nan123456556")

function login(email: string, password: string) {
    if (mailChecker.isValid(email)) {
        const user = database.filter(function (element, index) {
            return element.email.includes(email)
        }) // [{ email: 'nan@utk.ac.th',password: 'nan123456556'}], []

        if (user.length > 0) {
            if (decrypttionPassword(user[0].password) === password) {
                console.log('เข้าสู่ระบบแล้ว ยินดีต้อนรับ')
            } else {
                console.log('รหัสผ่านไม่ถูกต้อง')
            }

        } else {
            console.log('ไม่พบ email ในระบบ')
        }
    } else {
        console.log('กรอก email ผิดรูปแบบ')
    }
}

// เรียกใช้ function login
login('nan@utk.ac.th', 'iloveyou3000')