#!/usr/bin/env python3
"""This module provides an asynchronus function"""
import random
import asyncio


async def wait_random(max_delay=10):
    """
    This function waits for a random delay between 0 and max_delay seconds
    and returns the delay.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
