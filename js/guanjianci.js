  function shieldFun(val){
	        val = val.replace(/\s+$/, '');
            let arrKeyWord = ["am poor", "doing work", "Earn money", "Getting to work", "go to work", "hard working", "help the people", "I am student", "job", "Jop", "need monay", "need to work", "need work", "No demand", "Online earning", "online warking", "online work", "poorest family", "Salary", "singles man", "special work", "stole", "Tickets", "TikTok", "viasen", "visa", "Waqas", "work abroad", "Work Love"];//广泛匹配
            
            let strKeyWord = "earning,earning money,Earnings,Good luck,help me,money,Nothing,Ok,Okay,Thank you,Thanks,To work,Very good,work with you,Working,Works,Yes,your help";//精确匹配 
           
            // 精确匹配
			
            if(strKeyWord.indexOf(val)!=-1){
               return true
            }else {
                let flag = false;
                arrKeyWord.forEach(ele=>{
                    if(val.indexOf(ele)!=-1){
                        console.log('ele',ele)
                        flag = true
                    }
                })
                return flag
            }
        }