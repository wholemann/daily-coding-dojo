package com.wholeman.devidednumberss

import org.junit.Before
import org.junit.Test
import org.assertj.core.api.Assertions.assertThat

/**
 * Created by wholeman on 08/11/2019
 * Github : http://github.com/wholemann
 * E-Mail : wholeman.dev@gmail.com
 */
class DividedNumbersTest {

    lateinit var devidedNumbers: DividedNumbers

    @Before
    fun setUp() {
        devidedNumbers = DividedNumbers()
    }

    @Test
    fun `getDividedNumbers`() {
        assertThat(devidedNumbers.getDividedNumbers(intArrayOf(5, 9, 7, 10), 5)).isEqualTo(intArrayOf(5, 10))
        assertThat(devidedNumbers.getDividedNumbers(intArrayOf(2, 36, 1, 3), 1)).isEqualTo(intArrayOf(1, 2, 3, 36))
        assertThat(devidedNumbers.getDividedNumbers(intArrayOf(3, 2, 6), 10)).isEqualTo(intArrayOf(-1))
    }
}