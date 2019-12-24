package com.wholeman.str2int

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

    fun str2Int(s: String) = s.toInt()

class SolutionTest {

    @Test
    fun `convert string to integer`() {
        assertThat(str2Int("1234")).isEqualTo(1234)
        assertThat(str2Int("-1234")).isEqualTo(-1234)
    }
}