const express = require('express');
const app = express();
const serviceName = process.env.SERVICE_NAME || 'Unknown-Service';

// Основен endpoint
app.get('/', (req, res) => {
  console.log(`[${serviceName}] Request received`);
  res.json({ 
    service: serviceName, 
    status: 'Operational', 
    timestamp: new Date() 
  });
});

// Endpoint за проверка на здравето
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Endpoint за симулация на натоварване
app.get('/process', (req, res) => {
    let result = 0;
    // Тежка математическа операция
    for(let i=0; i< 1000000; i++) { result += Math.random(); }
    res.json({ 
        msg: "Processing complete", 
        service: serviceName,
        load_test: result 
    });
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`🚀 ${serviceName} started on port ${PORT}`);
});