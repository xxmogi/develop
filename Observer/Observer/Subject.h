#import <Foundation/Foundation.h>
//Subjectクラス
// 属性としてNSString型(文字列型)のvalueを定義
@interface Subject : NSObject
{
    NSString *value;
}
// messageメソッド
//  valueの値を表示する。
-(void)message;


@end
