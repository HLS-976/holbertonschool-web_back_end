#!/usr/bin env python3
"""This module provides the to_kv function"""
from typing import Tuple


def to_kv(k: str, v: int | float) -> Tuple:
    """
    This function returns a tuple of two elements
    """
    return (k, v ** 2)
