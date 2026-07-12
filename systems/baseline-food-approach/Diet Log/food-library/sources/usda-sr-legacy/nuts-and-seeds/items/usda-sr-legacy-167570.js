/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup-chips",
  "description": "Sweets",
  "id": "usda-sr-legacy-167570",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "cup-chips",
      "kind": "unit",
      "label": "cup chips"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Candies, confectioner's coating, peanut butter",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 46.9,
    "energy_kcal": 529.0,
    "fat_g": 29.8,
    "fibre_g": 5.0,
    "folate_ug": 77.0,
    "iron_mg": 1.7,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 505.0,
    "protein_g": 18.3,
    "salt_g": 0.625,
    "sat_fat_g": 13.1,
    "sodium_mg": 250.0,
    "sugar_g": 38.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.36,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167570",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "nuts-and-seeds",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
