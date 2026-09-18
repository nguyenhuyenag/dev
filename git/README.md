# Git

## Clone

## Remote

    git remote -v           # Liệt kê tên + URL

## Update URL

    > git remote set-url origin <URL>

    ** Có thể sửa trong file: .git/config

## Merge

    - Đứng ở nhánh 'main', click vào dev2 -> Merge dev 2 into main

    - Merge luôn diễn ra trên nhánh bạn đang đứng.
    - Nhánh đó sẽ nhận code từ nhánh được chỉ định.
        
        git checkout <NHÁNH NHẬN>
        git merge <NHÁNH NGUỒN>

    git log --oneline --graph --all

# Tóm tắt lệnh "cứu hộ" hay dùng:
    
    Tình huống                   | Lệnh
    -----------------------------|-----------------------------------------------
    Quên file trong commit cuối  | git add file && git commit --amend --no-edit
    Sửa message commit cuối      | git commit --amend -m "new msg"
    Bỏ thay đổi chưa add         | git restore file
    Bỏ file đã add               | git restore --staged file
    Xem branch đang ở đâu        | git status
    Xem lịch sử đẹp              | git log --oneline --graph
    Ai sửa dòng này              | git blame file
    Tìm commit gây bug           | git bisect start
    Cất code tạm                 | git stash / git stash pop
    Undo commit đã push          | git revert <hash>
    Lấy 1 commit từ branch khác  | git cherry-pick <hash>
    Xem remote                   | git remote -v
    -----------------------------|-----------------------------------------------
