/*

	used to calculating money
	
*/

// eg
var money = 
{
	"LT": [16, 15, 17],
	"Yuta": [15, 17],
	"Yan": [10],
	"Yiyi": []
}

var calculatingBills = function(money_data)
{
	var total_money = {};
	var sum = 0;
	var count = 0;
	var num_of_person = Object.keys(money_data).length;
	console.log("\nNum of person: " + num_of_person);
	for(var person in money_data)
	{
		var money_paid = money_data[person];
		var sum_ = 0;
		count += money_paid.length;
		for(var i = 0; i < money_paid.length; i++)
		{
			sum_ += money_paid[i];
		}
		sum += sum_;
		total_money[person] = sum_;
	}

	var average_money = sum / num_of_person;

	console.log("\nGiven Data: ");
	console.log(money_data);
	console.log("\nEverybody paid in total: ");
	console.log(total_money);
	console.log("\nAverage: ");
	console.log(average_money);

	/*
		计算每个人该付多少， 该得到多少
	*/
	var pay_or_get_money_data = {}; 
	console.log("\n===================");
	for(var person in total_money)
	{
		var money_he_paid = total_money[person];
		console.log("\nFor: " + person);
		var get_money = false;
		if(money_he_paid - average_money > 0)
		{
			get_money = true;
		}

		if(get_money)
		{
			console.log("He should get : " + (money_he_paid - average_money));
		}
		else
		{
			console.log("He should pay others: " + (money_he_paid - average_money))
		}

		pay_or_get_money_data[person] = (money_he_paid - average_money);
	}

	console.log(pay_or_get_money_data);

	console.log("\n==================");
	/*
		计算谁付谁多少
	*/
	var check_done = function(data)
	{
		for(var i in data)
		{
			if(data[i]!=0)
				return false;
		}
		return true;
	}

	while(!check_done(pay_or_get_money_data))
	{
		for(var person in pay_or_get_money_data)
		{ 
			if(pay_or_get_money_data[person] > 0) // that person should get money
			{
				for(var another_person in pay_or_get_money_data)
				{
					if(pay_or_get_money_data[another_person] < 0) // that person should pay money
					{
						if(Math.abs(pay_or_get_money_data[another_person]) <= pay_or_get_money_data[person])
						{
							console.log(another_person + " PAY " + person + " : " + Math.abs(pay_or_get_money_data[another_person]));
							pay_or_get_money_data[person] -= Math.abs(pay_or_get_money_data[another_person]);
							pay_or_get_money_data[another_person] = 0;
						}
						else
						{
							console.log(another_person + " PAY " + person + " : " + pay_or_get_money_data[person])
							pay_or_get_money_data[another_person] = - (Math.abs(pay_or_get_money_data[another_person]) - pay_or_get_money_data[person]);
							pay_or_get_money_data[person] = 0;
							
						}
					}
				}
			}
		}
	}
}


calculatingBills(money);