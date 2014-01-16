闲着无聊做了这个算钱的脚本
eg
	money = 
	{
	"LT": [16, 15, 17],
	"Yuta": [15, 17],
	"Yan": [10],
	"Yiyi": []
	}
	说明了在这次旅行中：
		LT   花了 16， 15， 17
		Yuta 花了 15， 17
		Yan  花了 10
		Yiyi 花了 

调用 calculateBills 函数进行钱数统计和分配
 calculateBills(money)

 以下为结果
  =>

Num of person: 4

Given Data: 
{ LT: [ 16, 15, 17 ], Yuta: [ 15, 17 ], Yan: [ 10 ], Yiyi: [] }

Everybody paid in total: 
{ LT: 48, Yuta: 32, Yan: 10, Yiyi: 0 }

Average: 
22.5

===================

For: LT
He should get : 25.5

For: Yuta
He should get : 9.5

For: Yan
He should pay others: -12.5

For: Yiyi
He should pay others: -22.5
{ LT: 25.5, Yuta: 9.5, Yan: -12.5, Yiyi: -22.5 }

==================
Yan PAY LT : 12.5
Yiyi PAY LT : 13
Yiyi PAY Yuta : 9.5







eeeee