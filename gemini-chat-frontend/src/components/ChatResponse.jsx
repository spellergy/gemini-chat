const ChatResponse = ({ response, loading }) => {
    if (loading) {
        return (
            <div className="container my-4">
                <div className="alert alert-info">Loading...</div>
            </div>
        );
    }

    if (!response) {
        return null;
    }

    // Extract the text content from the response structure
    const responseText = response.candidates?.[0]?.content?.parts?.[0]?.text;

    return (
        <div className="container my-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Response</h5>
                    <p className="card-text">{responseText || 'No response text available'}</p>
                    
                    {response.usageMetadata && (
                        <div className="mt-3 text-muted">
                            <small>
                                Model Version: {response.modelVersion}<br/>
                                Token Usage: {response.usageMetadata.totalTokens} tokens
                            </small>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatResponse;