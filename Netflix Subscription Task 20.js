
class User{
    static count = 0;
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
      User.count++
    }
    printNumberOfUsers(){
        console.log("currentnumberofusers =", User.count)
    }
}

class Member extends User {
  constructor(username, email, password ) {
      
    super(username, email, password );     // complete the super function only. Do not make any other changes
    
    this.membershipactivetilldate = new Date(2023, 2, 3)//assume user has joined ur platform on 3rd March
    
    this.package = ' ';
  }
  
    //Based on the package bought, increase the membershipactivetilldate
    //Monthly membership increases the va1idity by 1 month
    //Yearly membership increases the va1idity by 1 year
  purchaseMembership(membershippackagename) {
      
    //   Complete this function
    this.package = membershippackagename;
    if(this.package === 'MONTHLYPACKAGE') {
        this.membershipactivetilldate.setMonth(this.membershipactivetilldate.getMonth() + 1);
    }
    else if(this.package === 'YEARLYPACKAGE') {
        this.membershipactivetilldate.setFullYear(this.membershipactivetilldate.getFullYear() + 1);
    }
 
  }

  subscriptionActiveTill() {
    console.log(
      this.username +
        " is subscribed to " +
        this.package + " uptill " + this.membershipactivetilldate.toDateString()
    );
  }

}

function createNewStudents(username, email, password, membershippackagename){
    const mike = new Member(username, email, password);  
    mike.purchaseMembership(membershippackagename);
    mike.subscriptionActiveTill();

}
