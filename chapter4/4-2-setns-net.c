#define _GNU_SOURCE
#include <fcntl.h>
#include <sched.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

char* const child_args[] = {
  "/bin/bash",
  NULL
};


int main(int argc, char *argv[])
{
  // 試著開啟我們傳入的 file descriptor
  int fd = open(argv[1], O_RDONLY | O_CLOEXEC);
  if(fd == -1) {
    printf("Failed to open file!\n");
    return 1;
  }

  // 呼叫 setns 設定這個 namespace
  if(setns(fd, 0) == -1) {
    printf("setns failed!\n");
  }

  // 執行 child_args[0]，也就是 /bin/bash
  execvp(child_args[0], child_args);

  return 0;
}