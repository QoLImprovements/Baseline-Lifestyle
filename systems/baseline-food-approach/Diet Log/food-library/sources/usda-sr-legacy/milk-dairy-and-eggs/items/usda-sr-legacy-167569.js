/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-chips",
  "description": "Sweets",
  "id": "usda-sr-legacy-167569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup-chips",
      "kind": "unit",
      "label": "cup chips"
    }
  ],
  "name": "Candies, confectioner's coating, yogurt",
  "nutritionPerBasis": {
    "calcium_mg": 205.0,
    "carbs_g": 63.9,
    "energy_kcal": 2180.0,
    "fat_g": 27.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.14,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 157.0,
    "potassium_mg": 290.0,
    "protein_g": 5.87,
    "salt_g": 0.22,
    "sat_fat_g": 24.1,
    "sodium_mg": 88.0,
    "sugar_g": 62.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167569",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
