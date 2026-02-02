---
layout: "../../components/blog/BlogPostLayout.astro"
title: Timing-Safe Comparison with timingSafeEqual
description: "Learn why using === for comparing secrets is vulnerable to timing attacks, and how to use Node.js's timingSafeEqual for secure string comparison."
imageUrl: "/images/timing-safe-comparison.png"
date: 2026-02-02
---

# TL;DR

Use `timingSafeEqual` when comparing sensitive strings.

```typescript
import { timingSafeEqual } from "crypto";

function safeCompare(provided: string, expected: string): boolean {
  const providedBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expected);

  if (providedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(providedBuffer, expectedBuffer);
}
```


# The Problem


## Why `===` is Vulnerable

When comparing two strings, it's tempting to use the `===` operator:

```typescript
function validateApiKey(provided: string, expected: string): boolean {
  return provided === expected;  // Vulnerable!
}
```

The problem is that `===` short-circuits on the first mismatched character. Attackers can measure these timing differences to guess the string character by character.


## Timing Attack Example

String comparisons are frequently needed for authorization checks—validating JWT tokens, API keys, etc.

Attackers can send multiple requests, measuring response times to incrementally guess the secret:

```bash
Attempt 1: "a_live_abc123xyz"  → 0.102ms (fails at index 0)
Attempt 2: "s_live_abc123xyz"  → 0.108ms (slightly slower - 's' matches!)
Attempt 3: "sa_live_abc123xyz" → 0.103ms (fails at index 1)
Attempt 4: "sk_live_abc123xyz" → 0.115ms (even slower - 'sk' matches!)
```


# The Solution


## What is `timingSafeEqual`?

`timingSafeEqual` is a function from Node.js's `crypto` module that compares two buffers in constant time, preventing timing attacks.

[Node.js Documentation](https://nodejs.org/api/crypto.html#cryptotimingsafeequala-b)


## How It Works

Unlike `===`, `timingSafeEqual` compares every byte, taking the same amount of time regardless of whether the strings match or have varying lengths.

```typescript
import { timingSafeEqual } from "crypto";

function safeCompare(provided: string, expected: string): boolean {
  const providedBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expected);

  if (providedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(providedBuffer, expectedBuffer);
}
```


# When to Use

Use `timingSafeEqual` when comparing:

- API keys
- JWT tokens
- Passwords or password hashes
- HMAC signatures
- Session tokens
- Webhook signatures
- Any secret value
