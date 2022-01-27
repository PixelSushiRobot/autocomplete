const completionSpec: Fig.Spec = {
  name: "fileicon",
  description: "Manage custom icons for files and folders on macOS",
  subcommands: [
    {
      name: "set",
      description: "SET a custom icon for a file or folder",
      args: [
        {
          name: "fileOrFolder",
          template: "filepaths",
        },
        {
          name: "[imageFile]",
          template: "filepaths",
        },
      ],
    },
    {
      name: "rm",
      description: "REMOVE a custom icon from a file or folder",
      args: {
        name: "fileOrFolder",
        template: "filepaths",
      },
    },
    {
      name: "get",
      description: "GET a file or folder's custom icon",
      args: [
        {
          name: "fileOrFolder",
          template: "filepaths",
        },
        {
          name: "[iconOutputFile]",
          template: "filepaths",
        },
      ],
      options: [
        {
          name: "-f",
          description: "Force replacement of existing output file",
        },
      ],
    },
    {
      name: "test",
      description: "TEST if a file or folder has a custom icon",
      args: {
        name: "fileOrFolder",
        template: "filepaths",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for abc",
    },
  ],
};
export default completionSpec;
