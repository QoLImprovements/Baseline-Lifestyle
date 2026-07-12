/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172948",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb-16-oz",
      "kind": "unit",
      "label": "lb 16 oz"
    }
  ],
  "name": "Sausage, turkey, pork, and beef, low fat, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 11.5,
    "energy_kcal": 423.0,
    "fat_g": 2.5,
    "fibre_g": 0.6,
    "folate_ug": 6.0,
    "iron_mg": 2.2,
    "magnesium_mg": 16.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 74.0,
    "potassium_mg": 243.0,
    "protein_g": 8.0,
    "salt_g": 1.99,
    "sat_fat_g": 0.85,
    "sodium_mg": 796.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172948",
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
