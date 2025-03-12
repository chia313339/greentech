#!/usr/bin/env python3
import sys
import os

# Vue 檔案範本，會將 {name} 替換為檔案名稱（不含副檔名）
template = """<template>
  <div class="page-content">
    <h1>healthtech-{name}</h1>
  </div>
</template>

<script>
export default {{
  name: '{name}'
}}
</script>

<style scoped>
.page-content {{
  padding: 20px;
}}
</style>
"""

def main():
    if len(sys.argv) < 2:
        print("用法: python generate_vue.py 檔案名稱1 [檔案名稱2 ...]")
        sys.exit(1)

    # 指定產生檔案的資料夾，例如存放於 src/views/<subfolder>
    # 這裡以當前資料夾下的 "views" 為例
    output_dir = "src/views/healthtech/"
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for arg in sys.argv[1:]:
        # 如果傳入的檔案名稱不含副檔名，自動加上 .vue
        file_name = arg if arg.endswith(".vue") else arg + ".vue"
        file_path = os.path.join(output_dir, file_name)
        content = template.format(name=arg)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"已產生 {file_path}")

if __name__ == "__main__":
    main()
