package com.wholeman.descendingstring

class DescOrderString {
    fun getDescOrderString(s: String): String = s.toCharArray().sortedDescending().joinToString("")
}
