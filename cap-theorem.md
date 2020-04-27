# CAP Theorem Notes

- **Consistency**: every read gets the latest write
- **Availability**: every request gets a response
- **Partition tolerance**: system works despite network splits

You can only pick 2 of 3 under partition:
- **CP**: MongoDB, HBase - refuse writes during partition
- **AP**: Cassandra, DynamoDB - accept writes, reconcile later
