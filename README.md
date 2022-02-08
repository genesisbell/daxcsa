# daxcsa
Daxcsa E-commerce orders


Clone repository 

  git clone https://github.com/genesisbell/daxcsa.git
  
 
 # To make backend work:
 1. Install a virtual enviroment with command
 
 
 
    python -m venv venvdaxcsa
    
    
 
 2. Activate virtual enviroment
 
     cd venvdaxcsa
     

     cd Script
     

     activate
     

 
 or run command if you are in Mac
 
    source venvdaxcsa/bin/activate
 
 3. Install requirements.txt. Go to the daxcsa_backend folder and run command 
 
 
    pip install -r requirements.txt
    
 
 4. Create .env file
 in the daxcsa_backend folder create a file with the name of '.env' with no extension and paste the following information on it and make sure to leave no white spaces in it
    
    ENV=local
    
    SECRET_KEY=django-insecure-mx#1c36@51@nh*pntu2%krf+nz^gra(&mq3rj!t=qo%_xyi*1o
  
 
 5. Run server
    
    python manage.py runserver
 
 
 You can go to http://127.0.0.1:8000/admin/ and introduce the following credentials:
  username: admin
  pass: gara2022
  
  
  # To make frontend work
  1. install npm modules
  go to the folder daxcsa_frontend and run command
      
      npm install
  
  2. Run project
  
    npm start
    
 # Important notes
 
 The inital route is set to not show an order. To vizualize an order you need to write its id as a url parameter like this 
 
    http://localhost:3000/4
    
 New orders and new products can be create from the backend admin.
  
