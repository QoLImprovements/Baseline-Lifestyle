/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-4-1-4-x-4-1-4-x-1-16",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173865",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice-4-1-4-x-4-1-4-x-1-16",
      "kind": "unit",
      "label": "slice (4-1/4\" x 4-1/4\" x 1/16\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Ham, minced",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 1.84,
    "energy_kcal": 1100.0,
    "fat_g": 20.7,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.79,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 157.0,
    "potassium_mg": 311.0,
    "protein_g": 16.3,
    "salt_g": 3.1,
    "sat_fat_g": 7.18,
    "sodium_mg": 1240.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173865",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
