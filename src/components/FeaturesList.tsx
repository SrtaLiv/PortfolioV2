interface FeaturesListProps {
  features: string[];
}

export const FeaturesList = ({ features }: FeaturesListProps) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-indigo-600 mr-2">•</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
); 