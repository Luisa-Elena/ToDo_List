# To-Do List in React

### Contents of this file
- Description
- Installation
- Usage
- Documentation

## Description
- You can add items to your to do list, check them (task completed) or delete them.
- You can also filter the tasks from the list by searching some specific word or task.

## Installation

Here are the steps you need to follow to clone this repository: 

1. Install Git:
If you don't have Git installed, download and install it from https://git-scm.com/.

2. Navigate to the directory where you want to clone the repository. In your terminal, type: 

```sh
cd path/to/your/directory
```
or you can directly open the built-in terminal from VSCode.

3. Clone the reporitory, using: 
```sh
git clone "https://github.com/Luisa-Elena/ToDo_List.git"
```

4. Install the dependencies: 
```sh
cd ToDo_List
cd vite-project
npm install
```

5. In order to run the project, navigate in the vite-project directory and type:
```sh
npm run dev
```

6. Type 'o' to open the web page.

## Usage
- Type what you want to add in the list and click the Add button. Now the item is added. All the notes are stored in local storage so they will not be lost after refreshing the page.

## Documentation
- The App component is the main component that renders the Notes App interface. It manages the state for notes, newNote, noteId, and search. It also includes functions for creating, adding, deleting notes, and searching notes.
- States:
1. notes: An array containing the list of notes fetched from local storage.
2. newNote: Represents the new note being created with an id and text.
3. noteId: Represents the unique id for each note.
4. search: Represents the search input to filter notes based on text.
- Functions: 
1. createNewNote:
    Updates the newNote state based on user input.
2. addNote:
    Updates the newNote state based on user input.
    Increments the id (this will be used for the new note)
    Assigns the id to the added note
3. deleteNote:
    Deletes a note with the specified id from the notes array.
4. searchNotes:
    Updates the search state based on user input.
- useEffect: Updates local storage with the latest notes whenever the notes state changes.
- Rendering:
    - Renders controlled input fields for creating new notes and searching existing notes.
    -  Maps over the notes array to render individual Note components.
    -  The notes array is filtered based on the search state such that the notesElements array is the one containing the notes that should be displayed.
- The Note component represents an individual note item. It includes a checkbox to mark the note as done, displays the note text, and provides an option to delete the note.
- The isDone state represents the completion status of the note.
- The toggle function toggles the completion status of the note.
- The Note component also receives props:
    - key: this is actualy the note id
    - text: the note's text
    - deleteNote(): function which is actually the delete function from the parent component (App) called for the id of this particular note such that it can be deleted
