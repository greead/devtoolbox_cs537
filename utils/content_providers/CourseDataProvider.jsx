const courseData = [
    {
        "name": "Django",
        "section_id": "section-django",
        "technology": ["back-end framework", "full-stack framework"],
        "description": "Django is a free, open-source web framework that helps developers build web applications using Python.",
        "course_links": [
            {
                "course_title": "Django tutorial",
                "course_link": "https://docs.djangoproject.com/en/5.1/intro/tutorial01/"
            }
        ]
    },
    {
        "name": "OpenGL",
        "section_id": "section-opengl",
        "technology": ["graphics"],
        "description": "OpenGL, or Open Graphics Library, is a cross-platform, cross-language API that allows developers to create 2D and 3D graphics for a variety of applications.",
        "course_links": [
            {
                "course_title": "Learn OpenGL",
                "course_link": "https://learnopengl.com/"
            }
        ]
    },
    {
        "name": "Svelte & SvelteKit",
        "section_id": "section-svelte",
        "technology": ["front-end framework", "full-stack framework"],
        "description": "Svelte is a lightweight framework that compiles code into optimized JavaScript to improve performance. It's used to build user interface (UI) components, and it can be used to build an entire app or added to an existing codebase. Svelte's compiler automatically recompiles and re-renders UI elements when data changes, avoiding the overhead of traditional frameworks like React and Vue. SvelteKit is a framework for rapidly developing robust, performant web applications using Svelte.",
        "course_links": [
            {
                "course_title": "Learn Svelte",
                "course_link": "https://learn.svelte.dev/tutorial/welcome-to-svelte"
            }
        ]
    },
    {
        "name": "TensorFlow & TensorFlow Lite",
        "section_id": "section-tensorflow",
        "technology": ["machine learning"],
        "description": "TensorFlow is an open-source machine learning platform that helps developers build and deploy machine learning models. TensorFlow Lite (TFLite) is a free and open-source framework that allows developers to run machine learning models on devices like mobile phones, computers, and IoT devices. TFLite is designed for on-device inference, or edge computing.",
        "course_links": [
            {
                "course_title": "Intro to TensorFlow for Deep Learning",
                "course_link": "https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187"
            },
            {
                "course_title": "Introduction to TensorFlow Lite",
                "course_link": "https://www.udacity.com/course/intro-to-tensorflow-lite--ud190"
            }
        ]
    }
]

export default function getCourseData() { return courseData }