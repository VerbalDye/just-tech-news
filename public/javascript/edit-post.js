async function editFormHandler(event) {
    event.preventDefault();

    console.log(document.querySelector('input[name="post-title"]'));
    const title_text = document.querySelector('input[name="post-title"]').value.trim()

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: title_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);