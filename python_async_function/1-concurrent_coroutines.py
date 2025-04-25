#!/usr/bin/env python3
"""This module provides an async function"""
import random
import asyncio
from typing import List


async def wait_random(max_delay: int = 10) -> float:
    """
    This function waits for a random delay between 0 and max_delay seconds
    and returns the delay.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Wait for n random delays between 0 and max_delay seconds
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    return [await task for task in asyncio.as_completed(tasks)]
