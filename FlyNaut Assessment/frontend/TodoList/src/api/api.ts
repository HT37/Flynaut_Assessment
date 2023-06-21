
const BASE_URL = 'http://localhost:3000'; 

export const createUser = async (email:string, username:string, password:string) => {
  try {
    const response = await fetch(`${BASE_URL}/user/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email,username, password })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};


export const login = async (username:string,password:string) => {
  try {
    const body = JSON.stringify({username, password});
    console.log(body);
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      credentials: 'include' as  RequestCredentials,
      headers: {
        'Content-Type': 'application/json',
      },
      body
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const createtodo = async (title:string, description: string) => {
    try {
      const response = await fetch(`${BASE_URL}/todo/createtodo`, {
        method: 'POST',
        headers: {
          
          'Content-Type': 'application/json',
        },credentials:'include',
        body: JSON.stringify({ title,description })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating todo:', error);
      throw error;
    }
};

export const fetchtodo = async () => {
  try {
    const response = await fetch(`${BASE_URL}/todo/all`, {
      method: 'GET',
      credentials:'include',
      
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

export const deletetodo = async (id:string) => {
  try {
    const response = await fetch(`${BASE_URL}/todo/${id}`, {
      method: 'DELETE',
      credentials:'include',
      
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};