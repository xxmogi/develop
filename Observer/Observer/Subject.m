#import "Subject.h"
//Subjectの実装
@implementation Subject
//初期化のメソッド
// コンストラクタと同じモノ
-(id)init
{
    self = [super init];
    if(self != nil){
        //UTF-8文字列からNSStringを作成。
        value = [[NSString alloc]initWithString:@"init"];
    }
    return self;
}

//valueの値を変更するメソッド

-(void)setValue:(id)value forKey:(NSString *)key
{
    NSLog(@"\tSubject  ' ω')\"%@\"の値が変更されました",key);
    //Observerへの通知を実行させるためにNSObjectのsetValue:forKey:を呼んでいる。
    // (setValueを実行すると、Observerへの通知が実行されるようになっている。)
    [super setValue:value forKey:key];
    
   
}
-(void)message
{
    //コンソールにvalueの値を表示する。 %@ はUTF-8文字列を表す。
    NSLog(@"\tSubject  ' ω')\"value\"は\"%@\"です.",value);
}
@end
