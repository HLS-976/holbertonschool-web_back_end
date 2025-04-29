#!/usr/bin/env python3
"""
Module 1-async_comprehension - Async Comprehension
"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    This function return a list of random numbers given by async_generator
    """
    return [i async for i in async_generator()]
