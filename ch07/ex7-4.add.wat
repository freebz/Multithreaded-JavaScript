;; Example 7-4. WAT 파일로 변환된 AssemblyScript add 함수

(module
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (memory $0 0)
 (export "add" (func $add/add))
 (export "memory" (memory $0))
 (func $add/add (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
 )
)
