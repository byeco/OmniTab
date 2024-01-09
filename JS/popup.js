document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('optimizeButton').addEventListener('click', async function() {
      try {
        // Original code from the textarea
        var originalCode = document.getElementById('codeInput').value;
  
        // OpenAI API endpoint
        var apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  
        // OpenAI API key
        var apiKey = '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';
  
        // Prepare the request data
        var requestData = {
          prompt: `Optimize the following code:\n\n${originalCode}`,
          max_tokens: 150,          // Maximum number of tokens for the returned text
          temperature: 0.7,         // Creativity level, ranging from 0.0 to 1.0
          top_p: 1.0,               // Alternative creativity setting, ranging from 0.0 to 1.0
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        };
  
        // Send a POST request to the OpenAI API
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify(requestData),
        });
  
        // Check if the API request was successful
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
  
        // Parse the JSON response from the API
        const data = await response.json();
  
        // Extract the optimized code from the API response
        const optimizedCode = data.choices[0].text;
  
        // Display the optimized code in the 'result' element
        document.getElementById('result').innerText = optimizedCode;
      } catch (error) {
        console.error('Error:', error);
      }
    });
  });
  