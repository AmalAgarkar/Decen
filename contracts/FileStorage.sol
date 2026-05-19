// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FileStorage {

    struct File {
        string fileName;
        string cid;
        address uploader;
        uint256 timestamp;
    }

    File[] public files;

    event FileUploaded(
        string fileName,
        string cid,
        address uploader,
        uint256 timestamp
    );

    function uploadFile(
        string memory _fileName,
        string memory _cid
    ) public {

        files.push(
            File(
                _fileName,
                _cid,
                msg.sender,
                block.timestamp
            )
        );

        emit FileUploaded(
            _fileName,
            _cid,
            msg.sender,
            block.timestamp
        );
    }

    function getFiles() public view returns (File[] memory) {
        return files;
    }
}