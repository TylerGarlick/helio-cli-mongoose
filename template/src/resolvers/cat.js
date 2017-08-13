let cats = [
  {
    name: 'Jones'
  },
  {
    name: 'PuddyTat'
  }
]

export default {
  Query: {
    async Cat (_doc, args, _context, _info) {
      try {
        return cats.find((cat) => cat.name === args.name)
      } catch (e) {
        throw e
      }
    },

    async allCats (_doc, _args, _context, _info) {
      try {
        return cats
      } catch (e) {
        throw e
      }
    }
  },

  Mutation: {
    async createCat (_doc, args, _context, _info) {
      try {
        const newCat = {
          name: args.name
        }
        cats.push(newCat)

        return newCat
      } catch (e) {
        throw e
      }
    },

    async updateCat (_doc, args, _context, _info) {
      try {
        const cat = cats.filter((cat) => {
          if (cat.name === args.name) {
            cat.name = args.newName
            return cat
          }

          return false
        })

        return (newCat.length > 0) ? newCat[0] : null
      } catch (e) {
        throw e
      }
    }
  }
}
