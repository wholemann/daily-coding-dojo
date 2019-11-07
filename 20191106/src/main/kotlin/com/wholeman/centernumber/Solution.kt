package com.wholeman.centernumber

class Solution {
    fun getCenterNumber(s: String): String {
        var center: Int = s.length / 2
        if (s.length % 2 == 0) {
            return s.substring(center - 1, center + 1)
        }
        return s[center].toString()
    }
}
