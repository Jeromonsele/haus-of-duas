/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface ServiceTier {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  year: string;
  description: string;
  gallery?: string[];
}

export interface Statistic {
  value: string;
  label: string;
  source?: string;
}