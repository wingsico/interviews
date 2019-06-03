#include <iostream>

typedef struct node
{
  int data;
  struct node *next;
} LNODE, *linkdlist;

linkdlist listinit()
{
  node *L;
  L = (node *)malloc(sizeof(node));
  if (L == NULL)
    printf("申请内存空间失败\n");
  L->next = NULL;
  return L;
}

void listins(linkedlist L, int i, int x) {
node *pre;
    pre = L;
    int tempi = 0;
    for (tempi = 1; tempi < i; tempi++)
        pre = pre->next;                 //查找第i个位置的前驱结点
    node *p;                                //插入的结点为p
    p = (Node *)malloc(sizeof(Node));
    p->data = x;
    p->next = pre->next;
    pre->next = p;

    return L;
}
