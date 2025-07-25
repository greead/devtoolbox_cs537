const videoData = [
    {
        "name": "A* search algorithm",
        "section_id": "a-star",
        "description": "The A* algorithm is a widely used pathfinding algorithm in computer science that efficiently calculates the shortest path between a starting point and a goal point on a graph, by considering both the cost of reaching a node and an estimated cost to reach the goal from that node, making it particularly effective for complex navigation problems like finding the best route on a map.",
        "video_link": "https://www.youtube.com/embed/-L-WgKMFuhE?si=qIKJDIkWcfqaXwfm",
        "source": {
            "source_name": "Sebastian Lague (YouTube)",
            "source_link": "https://www.youtube.com/@SebastianLague"
        }
    },
    {
        "name": "Wave Function Collapse algorithm",
        "section_id": "wave-func-collapse",
        "description": "A \"wave function collapse\" algorithm is a procedural generation technique that creates images, maps, or other structures by arranging tiles based on rules and constraints, drawing inspiration from the concept of wave function collapse in quantum mechanics, where a system with multiple possible states \"collapses\" into a single definite state when observed; essentially, it iteratively chooses the most likely tile to place based on its neighbors, gradually building a complete structure with a consistent pattern.",
        "video_link": "https://www.youtube.com/embed/2SuvO4Gi7uY?si=TGzOS2iYTtncpsfL",
        "source": {
            "source_name": "Martin Donald (YouTube)",
            "source_link": "https://www.youtube.com/channel/UC8bYucAICXmYet8pZ5Ja9Dw"
        }
    }
]

export default function getVideoData() { return videoData }
