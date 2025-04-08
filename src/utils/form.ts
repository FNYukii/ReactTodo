const SAMPLE_TODO_CONTENTS = [
  '買い物',
  '洗濯',
  '部屋を掃除する',
  '新しい家具を探す',
  'なぜ空は青いのか調べる',
  'ペットと遊ぶ',
  '推しのために何ができるか考える',
  '友人の家を訪ねる',
  '旅行の計画を立てる',
  '新しい趣味を見つける',
]

/**
 * Todoのサンプルを生成する
 * @returns {string}　Todoのcontentのサンプル
 */
export const generateSampleTodoContent = (): string => {
  const rand = Math.floor(Math.random() * SAMPLE_TODO_CONTENTS.length)
  return SAMPLE_TODO_CONTENTS[rand]
}
