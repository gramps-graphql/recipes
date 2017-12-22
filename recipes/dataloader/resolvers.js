export default {
  Query: {
    capitalize: (root, args, context) => context.capitalizer.load(args.str),
  },
};
