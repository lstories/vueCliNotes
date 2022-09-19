## 配置项props
功能: 让组件接收外部传过来的数据

1. 传递数据
    ```
        <Demo name="xxx"/>
    ```
2. 接收数据:
    ```
        第一种方式(只接收): 
            props: ['name','age',..]
        第二种方式:
            
            props:{
                name: String,
                age: Number,
            }

        第三种方式(限制类型, 限制必要性, 指定默认值):
            props:{
                name:{
                    type: string,   // 类型
                    required: true  // 必要的
                },
                age: {
                    type: string,
                    default: 99     // 默认值
                },
                sex:{
                    type: string,
                    required: true
                }
            }
    ```

**备注:** props是只读的, Vue底层会监测你对props的修改, 如果进行了修改, 如果进行了修改, 就会发出警告, 若业务需求确实需要修改, 那么请复制props的内容到data中一份, 然后去修改data中的数据
