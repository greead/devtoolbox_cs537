const docData = [
    {
        "name": "Emmet reference",
        "section_id": "emmet-ref",
        "description": "This is a reference document for Emmet short commands. Emmet is used to ease HTML development, and this reference helps ease the use of Emmet!",
        "document_path": "emmet_ref.pdf",
        "source": {
            "source_name": "Emmet.io",
            "source_link": "https://docs.emmet.io/cheat-sheet/"
        }
    },
    {
        "name": "Linear algebra reference",
        "section_id": "linear-algebra-ref",
        "description": "This is a full linear algebra reference document. It has reference information from basics of linear algebra to matrix calculus.",
        "document_path": "linear_algebra_ref.pdf",
        "source": {
            "source_name": "Stanford University",
            "source_link": "https://cs229.stanford.edu/section/cs229-linalg.pdf"
        }
    }
]

export default function getDocData() { return docData }