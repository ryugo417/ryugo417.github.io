### 仮想環境

仮想環境一覧を表示
```
$ conda info -e
```
仮想環境の作成
```
$ conda create -n 環境名 python=バージョン
```
仮想環境のactivate
```
$ conda activate 環境名
```
仮想環境のdeactivate
```
$ conda deactivate
```
仮想環境の削除
```
$ conda remove -n 環境名 --all
```

### CPUの操作

ファイルの移動
```
$ mv [オプション] 移動元 移動先

mv [オプション] ファイル1 ファイル2…… 移動先ディレクトリ
```

### GPUの操作

GPU usageの確認
```
$ nvidia-smi
```
Real time GPU usageの確認
```
$ watch –n 番号 nvidia-smi
```
GPUマシンの指定
```
$ export CUDA_VISIBLE_DEVICES=<gpu_id> 
```


### パスの指定

passを表示
```
$ echo $(変数)
```
PATHを入力
```
$ export 変数=(../../../..)
```



