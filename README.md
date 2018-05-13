API End Points
==============================================
Base Path: https://91o3mlxvbb.execute-api.ap-southeast-2.amazonaws.com/Prod/

GET
--------
1. /accounts
    - Retrieve all accounts
2. /accountbalance?address={address}
    - Retrieves the balance for the account which belongs to the given address
    - e.g. ~/accountbalance?address=27c94Yy78VCJVvChYBpjJUWSzGCd9TKQnqb
3. /allblocks
    - get all blocks
4. /nodes 
    - Retrieve all active nodes
5. /witnesses
    - Retrieves all witnesses
6. /tokens
    - Retrieve all tokens
7. /latestblock
    - Retrieve latest block
8. /totalnumberoftransactions
    - Retrieve the total number of transactions
9. /tronprice
    - get tron price from CoinMarketCap

POST
---------
1. /voteforwitnesses 
    - Vote for witnesses, need to pass to body parameters: address and voteList. 
    - e.g. 
    {
    "address": "27c94Yy78VCJVvChYBpjJUWSzGCd9TKQnqb",
    "voteList": [{"address": "27fcHxDR7BxYnjjpDqn2mNrdUvkYUAVYyHf", "amount":10}, {"address": "27WWxDmewaSLrxZwSBapz728pDSm2CiuENu", "amount":5}]
    }
    - Use your TRX to vote for Super Representatives. For every TRX you hold in your account you have one vote to spend. TRX will not be consumed. You can vote as many times for the several representatives as you like. The votes are tallied once every 6 hours and the final election results will be updated at 0:00 AM (0:00) UTC, 6:00 AM (6:00) UTC, 12:00 PM (12:00) UTC and 6:00 PM (18:00) UTC, and the list of SuperRepresentatives will be updated.