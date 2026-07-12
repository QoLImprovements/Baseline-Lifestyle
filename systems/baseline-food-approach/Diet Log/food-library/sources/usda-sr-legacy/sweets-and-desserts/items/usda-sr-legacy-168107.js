/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cubic-inch",
  "description": "Snacks",
  "id": "usda-sr-legacy-168107",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.2,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    }
  ],
  "name": "Rice cake, cracker (include hain mini rice cakes)",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 81.1,
    "energy_kcal": 392.0,
    "fat_g": 4.3,
    "fibre_g": 4.2,
    "folate_ug": 21.0,
    "iron_mg": 1.49,
    "magnesium_mg": 131.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 360.0,
    "potassium_mg": 428.0,
    "protein_g": 7.1,
    "salt_g": 0.1775,
    "sat_fat_g": 0.875,
    "sodium_mg": 71.0,
    "sugar_g": 0.88,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.24,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168107",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
