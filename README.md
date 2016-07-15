# tutorial
## Build Local Git
### Install and Build Source Tree
Download Source Tree from [here](https://www.sourcetreeapp.com/)
If you wanna Japanese version, you can download from [here](https://ja.atlassian.com/software/sourcetree/overview/)

### Easy to Make Diff(Not all HTML)
#### 1. Make patch file.

```export_diff_zip.bat
EQU "" (
  set PARAM1=HEAD
  set PARAM2=%1
) else (
  set PARAM1=%1
  set PARAM2=%2
)
 
setlocal enabledelayedexpansion
set RET_DIR=
for /F "usebackq" %%i in (`git diff --name-only %PARAM1% %PARAM2%`) do (
  set RET_DIR=!RET_DIR! "%%i"
)
 
git archive --format=zip --prefix=archive/ %PARAM1% %RET_DIR% -o archive.zip
```

#### 2. Setting at Source Tree
Menu => Tool => Option => Custom Action => Add

- Choose export_diff_zip.bat as script.
- Parameter is ```$SHA```

### Prepare for Github or Bitbucket
You need to make encripted key for secure connect with Github or Bitbucket. Please refer to this site.

[http://guides.beanstalkapp.com/version-control/git-on-windows.html](http://guides.beanstalkapp.com/version-control/git-on-windows.html)

Then please register your key to Github or Bitbucket!

### Let's Use Source Tree
#### Getting Start!
1. When you start coding, please set and initial commit. 
2. Coding
3. When you finish coding, please commit.
4. When you make not all html, you can make it in 1 sec by custom action.
5. When you submit data, please add tag.
