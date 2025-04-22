#!/usr/bin/env python3
"""This module provides the to_kv function"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple:
    """
    This function returns a tuple of two elements
    """
    v = v ** 2
    return tuple(k, v)
