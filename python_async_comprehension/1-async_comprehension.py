#!/usr/bin/env python3
"""This module provides a coroutines named async_comprehension"""
async_genrator = __import__("0-async_generator").async_genrator
from typing import List


async def async_comprehension() -> List[float]:
    """This function returns a list of random numbers"""
    return [i async for i in async_genrator()]
