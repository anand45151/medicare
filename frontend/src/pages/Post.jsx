import React, { useState } from 'react';

const Post = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [postedData, setPostedData] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new post object
    const newPost = {
      id: Date.now(),
      image: URL.createObjectURL(image),
      description: description,
    };
    // Update postedData state
    setPostedData([...postedData, newPost]);
    // Reset form
    setImage(null);
    setDescription('');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Post Section</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 font-semibold">Choose an image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-semibold">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            rows="4"
            className="border rounded-md py-2 px-3 w-full"
            placeholder="Write something about the post..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primaryColor py-2 px-6 text-white font-semibold rounded-md hover:bg-primaryColorDark"
        >
          Post
        </button>
      </form>

      {/* Display posted data */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Posted Data</h3>
        {postedData.map(post => (
          <div key={post.id} className="border rounded-md p-4 mb-4">
            <img
              src={post.image}
              alt="Posted"
              className="w-full mb-2 rounded-lg"
              style={{ maxWidth: '800px' }} // Adjust the max width as needed
            />
            <p className="text-gray-800 mb-2">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
