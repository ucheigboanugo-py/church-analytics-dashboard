// frontend/src/pages/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const FileUpload = () => {
    const [fileType, setFileType] = useState("attendance");
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const [branch, setBranch] = useState("");

    const handleFileTypeChange = (event) => {
        setFileType(event.target.value);
        setError(""); // Clear any existing error when file type changes
    };

    const handleBranchChange = (event) => {
        setBranch(event.target.value);
        setError(""); // Clear any existing error when branch changes
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === "text/csv") {
            setFile(selectedFile);
            setError("");
        } else {
            setError("Please upload a valid CSV file.");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!file) {
            setError("Please select a CSV file to upload.");
            return;
        }

        // Custom validation based on selected file type
        const expectedHeaders = {
            attendance: ["Member ID", "Name", "Date", "Status", "Branch", "Additional 1", "Additional 2", "Additional 3"],
            social_media: ["Member ID", "Name", "Platform", "Handle", "Engagement Score", "Additional 1", "Additional 2", "Additional 3"],
            members: ["Member ID", "First Name", "Last Name", "Email", "Phone", "Address", "Membership Date", "Additional 1"],
            visitors: ["Visitor ID", "First Name", "Last Name", "Visit Date", "Referral Source", "Contact", "Additional 1", "Additional 2"],
            events: ["Event ID", "Event Name", "Date", "Location", "Attendees Count", "Additional 1", "Additional 2", "Additional 3"],
            followup: ["Follow-up ID", "Member ID", "Date", "Contact Method", "Notes", "Additional 1", "Additional 2", "Additional 3"],
            secondtimers: ["Visitor ID", "First Name", "Last Name", "Second Visit Date", "Referral Source", "Contact", "Additional 1", "Additional 2"],
            branch: ["Branch ID", "Branch Name", "Location", "Leader Name", "Contact", "Additional 1", "Additional 2", "Additional 3"]
        };

        const reader = new FileReader();
        reader.onload = (e) => {
            const csvData = e.target.result;
            const [headers] = csvData.split("\n");

            const uploadedHeaders = headers.trim().split(",");
            const requiredHeaders = expectedHeaders[fileType];

            const isValid = requiredHeaders.every((header, index) => header === uploadedHeaders[index]);

            if (!isValid) {
                setError(`Invalid CSV format for ${fileType}. Expected headers: ${requiredHeaders.join(", ")}`);
                return;
            }

            // Process the CSV file here
            const formData = new FormData();
            formData.append('file', file);
            formData.append('fileType', fileType);
            formData.append('branch', branch);

            axios.post('http://localhost:3000/api/upload/csv', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(response => {
                console.log('File uploaded successfully:', response.data);
                setError(""); // Clear error on successful upload
            })
            .catch(error => {
                console.error('Error uploading file:', error);
                setError('Error uploading file. Please try again.');
            });
        };

        reader.readAsText(file);
    };

    return (
        <div className="file-upload-container">
            <div className="file-upload-header">
                <h2>Exclude Addresses from East Coast West</h2>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#"></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"></a>
                    </li>
                </ul>
            </div>
            <div className="file-upload-body">
                <div className="file-upload-section">
                    <h3>Upload a CSV</h3>
                    <p>Upload a .csv file with the following sample information. You can enter your column headers for up to 8 custom attributes.</p>
                    <a href="#" className="btn btn-link">Download Template</a>
                </div>
                <div className="file-upload-form">
                    <form>
                        <div className="form-group d-flex mb-3">
                            <div className="form-group flex-grow-1 me-2">
                                <label>Select file type:</label>
                                <select className="form-control" value={fileType} onChange={handleFileTypeChange}>
                                    <option value="attendance">Attendance</option>
                                    <option value="social_media">Social Media</option>
                                    <option value="members">Members</option>
                                    <option value="visitors">Visitors</option>
                                    <option value="events">Events</option>
                                    <option value="followup">Follow-Up</option>
                                    <option value="secondtimers">Second Timers</option>
                                    <option value="branch">Branch</option>
                                </select>
                            </div>
                            <div className="form-group flex-grow-1 ms-2">
                                <label>Select branch:</label>
                                <select className="form-control" value={branch} onChange={handleBranchChange}>
                                    <option value="">Select Branch</option>
                                    <option value="branch1">Branch 1</option>
                                    <option value="branch2">Branch 2</option>
                                    <option value="branch3">Branch 3</option>
                                    {/* Add more branches as needed */}
                                </select>
                            </div>
                        </div>
                        <div className="file-upload-area">
                            <input className="form-control" type="file" accept=".csv" onChange={handleFileChange} style={{ display: 'none' }} id="fileInput" />
                            <label htmlFor="fileInput" className="file-upload-label">
                                <FontAwesomeIcon icon={faCloudUploadAlt} className="file-upload-icon" />
                                <span>Drag & Drop your CSV File or browse</span>
                            </label>
                        </div>
                        <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
                        {error && <div className="error-message text-danger mt-3">{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
