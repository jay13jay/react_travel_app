# Notes

## Create an array of numbers
```js
{Array.from({ length: 20 }, (_, i) => i + 1)

// then you can map it
{Array.from({ length: 20 }, (_, i) => i + 1).map
    ((num) => (
        <option key={num} value={num}>
            {num}
        </option>
    ))}
```