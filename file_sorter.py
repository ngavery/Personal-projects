import os
import shutil

DESTINATION_FOLDERS = {
"C:\\Users\\avery\\OneDrive\\CSP illustrations": [".clip", ".png", ".psd"],
"C:\\Users\\avery\\OneDrive\\Pictures": [".jpg", ".jpeg"]
}

def sort_files(source_directory):
    # Loop through each file in directory
    for filename in os.listdir(source_directory):
        _, file_extension = os.path.splitext(filename) # Get file extension

        for folder, extensions in DESTINATION_FOLDERS.items():

            if file_extension.lower() in extensions: # Determine if file extension matches
                DESTINATION_PATH = os.path.join(folder, filename)

                file_path = os.path.join(source_directory, filename) # Get file path
                
                # Move file to designated folder
                shutil.move(file_path, DESTINATION_PATH) # Original file path, new file path

                print(f"Moved: {filename} to {folder}")

if __name__ == "__main__":
    directory_to_sort = input("Enter the path of the directory to sort: ")
    sort_files(directory_to_sort)
    print("Sorting complete.")
