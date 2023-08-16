#define _GNU_SOURCE
#include <sys/mount.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <stdio.h>
#include <sched.h>
#include <signal.h>
#include <unistd.h>
#define STACK_SIZE (1024 * 1024)

static char child_stack[STACK_SIZE];

char* const child_args[] = {
  "/bin/bash",
  NULL
};

int child_main(void* arg)
{
  printf("Child - inside the child!\n");
  printf("Child - child id: %d\n", getpid());
  printf("Child - parent id: %d\n", getppid());
  execv(child_args[0], child_args);
  printf("Something's wrong!\n");
  return 1;
}

int main()
{
  printf("Parent – ready to clone\n");

  int child_pid = clone(child_main, child_stack + STACK_SIZE, CLONE_NEWPID | SIGCHLD, NULL);

  printf("Parent - parent id: %d\n", getpid());
  printf("Parent - child id: %d\n", child_pid);
  waitpid(child_pid, NULL, 0);
  printf("Parent - done!\n");
  return 0;
}