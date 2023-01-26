#!/usr/bin/env node
const findPrimes = require('./lib/findPrimes');

// Check and validate command line arguments
const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log('Please pass in a single argument for the max number');
  process.exit(1);
} else if (parseInt(args[0]) <= 0) {
  console.log('Please pass in a positive integer for the max number');
  process.exit(1);
}

// Find prime numbers
const max = args[0];
const primes = findPrimes(max);

// Log results
console.log(`Found ${primes.length} primes between 0 and ${max}`);
console.log(primes);
