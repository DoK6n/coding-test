# Tree의 데이터를 가져오는 방법

> 모든 데이터를 가져오는 방법 3가지
>
> - Inorder, Preorder, Postorder

```mermaid
flowchart TD
    1((1)) --- 2((2))
    2((2)) --- 4((4)) & 5((5))
    1((1)) --- 3((3))
```

### Inorder(중위순회)

> Left &rarr; Root &rarr; Right
>
> - 4 &rarr; 2 &rarr; 5 &rarr; 1 &rarr; 3

### Preorder(전위순회)

> Root &rarr; Left &rarr; Right
>
> - 1 &rarr; 2 &rarr; 4 &rarr; 5 &rarr; 3

### Postorder(후위순회)

> Left &rarr; Right &rarr; Root
>
> - 4 &rarr; 5 &rarr; 2 &rarr; 3 &rarr; 1
