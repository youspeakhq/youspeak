import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'youSpeakStorage',
  access: (allow) => ({
    'profile-pictures/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'audio-recordings/*': [
      allow.authenticated.to(['read', 'write']),
    ],
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write']),
    ],
  }),
});

