
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed":0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "title": "Fix login bug",
        "description": "Resolve the login issue occurring on mobile devices.",
        "date": "2025-09-06",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "title": "Update README",
        "description": "Add project setup instructions in README.md.",
        "date": "2025-08-29",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "title": "API testing",
        "description": "Test all authentication APIs with Postman.",
        "date": "2025-09-05",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Ishita",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed":0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "title": "UI Design",
        "description": "Create a dashboard mockup in Figma.",
        "date": "2025-09-06",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "title": "Bug verification",
        "description": "Verify bug fixes deployed in staging.",
        "date": "2025-09-01",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "title": "CSS Refactor",
        "description": "Refactor global styles using Tailwind.",
        "date": "2025-09-04",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "title": "Team meeting",
        "description": "Weekly sync-up with team members.",
        "date": "2025-08-30",
        "category": "Management"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed":0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "title": "Database migration",
        "description": "Migrate database from MySQL 5.7 to 8.0.",
        "date": "2025-09-06",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "title": "Write unit tests",
        "description": "Increase test coverage for utils.js file.",
        "date": "2025-09-05",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "title": "Deploy app",
        "description": "Deploy latest build to staging server.",
        "date": "2025-09-02",
        "category": "Deployment"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed":0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "title": "Customer feedback",
        "description": "Compile customer feedback from last sprint.",
        "date": "2025-09-06",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "title": "Code review",
        "description": "Review PRs from backend team.",
        "date": "2025-09-03",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "title": "Onboarding docs",
        "description": "Prepare onboarding documentation for new hires.",
        "date": "2025-09-04",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "title": "Prepare slides",
        "description": "Make presentation slides for sprint demo.",
        "date": "2025-09-06",
        "category": "Management"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 3,
      "newTask": 1,
      "completed": 2,
      "failed":0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "title": "Optimize queries",
        "description": "Improve performance of slow SQL queries.",
        "date": "2025-09-06",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "title": "Bug fixing",
        "description": "Fix issue with pagination on reports page.",
        "date": "2025-09-01",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "title": "Write API docs",
        "description": "Document all endpoints in Swagger.",
        "date": "2025-09-05",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "title": "Regression testing",
        "description": "Run regression tests before production release.",
        "date": "2025-09-02",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "title": "Performance monitoring",
        "description": "Set up monitoring dashboard for API performance.",
        "date": "2025-09-06",
        "category": "Deployment"
      }
    ]
  }
]

const admins = [
  {
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
  },
]


export const setLocalStorage = ()=> {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admins))

}

 export const getLocalStorage = ()=>{
   const employees=JSON.parse(localStorage.getItem('employees'));
    const admins=JSON.parse(localStorage.getItem('admin'));
    return {employees,admins}
}

