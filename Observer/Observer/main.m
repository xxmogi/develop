// Mac OS X の Cocoaフレームワークで実装されている 
//Key Value Observing(KVO)の実装例です。そこまで詳しくないので結構説明が適当です…
// Objective-cはあまりに特殊で分かりにくいと思うので、結構コメントいれたつもりです。
#import <Foundation/Foundation.h>
#include <stdio.h>
#import "Observer.h"
#import "Subject.h"
int main (int argc, const char * argv[])
{
    @autoreleasepool {
        //Observerのインスタンスobsを初期化
        Observer *obs = [[Observer alloc]init];
        //Subjectのインスタンスsbjを初期化
        Subject *sbj = [[Subject alloc]init];
        
        //Subjectのオブザーバとしてobsを指定。通知のkeyは"value"。
        // options,contextには色々渡せるが、今回は特筆することなし(そこら辺までわかってない。)
        [sbj addObserver:obs 
              forKeyPath:@"value" 
                 options:(NSKeyValueObservingOptionNew|NSKeyValueObservingOptionOld) 
                 context:NULL];
        
        NSLog(@"subjectのvalueを表示");
        [sbj message];
        NSLog(@"subjectのvalueを変更");
        [sbj setValue:@"changed" forKey:@"value"];
        NSLog(@"subjectのvalueを表示");
        [sbj message];
        
        [sbj setValue:@"もっかい変更" forKey:@"value"];
        
        //Subjectのオブザーバを解除
        [sbj removeObserver:obs forKeyPath:@"value"];
        
    }
    return 0;
}

