# tutorial

## Purpose of this Tutorial
- Learn how to use Git
- Learn merit of Git
- Learn what Git can do
	- Record changing work history
	- Easy to make not all html
	- Merge only your changed files to master branch

## Assumed Situation
- All member Join this project and modify at same time.
- Sawada is director role.

## Flow
1. Clone sorce code from Github
2. Make branch before you change(in this case, branch name is your name)
3. Work on your issue
	- issue is [here](https://github.com/arca2533/tutorial/issues)
	- When you resolved one issue, please commit with issue number
	- For example, commit is like this ```#1 Add title```
4. When you have done all your issue, push to Github
5. Comment to issue to tell me your task is done
6. Pull request to master blanch
7. Sawada will check and change issue status to resolved if OK
8. When all your task is done, Sawada will accept your pull request
9. Then your changing merges to master branch

## Build Local Git
### Install and Build Source Tree
Download Source Tree from [here](https://www.sourcetreeapp.com/)
If you wanna Japanese version, you can download from [here](https://ja.atlassian.com/software/sourcetree/overview/)

### Easy to Make Diff(Not all HTML)
#### 1. Make patch file.

##### export\_diff\_zip.bat
```
if "%2" EQU "" (
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
 
git archive --format=zip --prefix=archive/ %PARAM1% %RET_DIR% -o ../not_all_data.zip
```

If error occured, please install Git from [here](https://git-scm.com/).
And please restart.

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
