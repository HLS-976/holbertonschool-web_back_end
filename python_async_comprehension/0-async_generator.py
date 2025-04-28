#!/usr/bin/env python3
"""This module provides a coroutines"""
import random
import asyncio


async def async_generator():
    """Asynchronously generates random numbers."""
    for _ in range(10):
        return await asyncio.sleep(1)
