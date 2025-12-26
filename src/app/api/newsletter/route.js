import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create database connection
    const connection = await mysql.createConnection(dbConfig);

    // Check if email already exists
    const [existingEmail] = await connection.execute(
      'SELECT email FROM subscribers WHERE email = ?',
      [email]
    );

    if (existingEmail.length > 0) {
      await connection.end();
      return Response.json(
        { success: false, message: 'This email is already subscribed' },
        { status: 409 }
      );
    }

    // Insert new email subscription
    await connection.execute(
      'INSERT INTO subscribers (email, created_at) VALUES (?, NOW())',
      [email]
    );

    await connection.end();

    return Response.json(
      { success: true, message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return Response.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}