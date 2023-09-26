// Example 1-10. ch1-c-threads/happycoin-threads.c

#include <pthread.h>

struct happy_result {
  size_t count;
  uint64_t * nums;
};
