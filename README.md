
## NextJs - Client/Server side dynamic routing without full page refresh

Note as soon as we deviated away we should have altered the page structures.

Previously before when we had no server-side routing NextJS was handling the routing logic:

/categories/apple/watch

Mapped to the following folder inside pages:

* /pages
   +  /categories
	   + category.js

That would suffice, but now that we have a custom routes defined.

We need to flatten the structure and change the links

* /pages
	+ category

The server-side route now needs to reflect that change:

 ```javascript

server.get('/categories/*', (req, res) => {
  return app.render(req, res, '/category');
});
```

To see this working end to end:

```
  npm i
  npm run dev
```

If you want to see run this e2e through nginx

```
   npm i
   docker-compise up --build
```

If running through docker this will be on port 80
