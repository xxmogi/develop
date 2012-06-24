#import "Observer.h"
//Observerの実装ここから
@implementation Observer

//observeValueForKeyPath
//  通知を受けるメソッド。keyPathには、通知setValue:forKeyで指定したkeyが送られます。
//複数通知がある場合はこのkeyPathで処理を切りかえたりできる。
//NSObjectのメソッドをオーバーライドして使っている。

-(void) observeValueForKeyPath:(NSString *)keyPath
                      ofObject:(id)object 
                        change:(NSDictionary *)change 
                       context:(void *)context
{
    //コンソールに表示
    NSLog(@"\tObserver *'-')通知を受けたよ.");
}
@end//Observerの実装ここまで
