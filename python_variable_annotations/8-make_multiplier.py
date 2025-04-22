#!/usr/bin/env python3
"""This module provides the function make_multiplier"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    This function returns a function
    that multiplies a float by the multiplier
    """
    return lambda x: x * multiplier
