package com.wholeman.devidednumberss

class DividedNumbers {
    fun getDividedNumbers(array: IntArray, divisor: Int): IntArray {
        val dividedNumbers = array.filter{ it % divisor == 0 }.sorted().toIntArray()
        return if (dividedNumbers.isNotEmpty()) dividedNumbers else intArrayOf(-1)
    }
}