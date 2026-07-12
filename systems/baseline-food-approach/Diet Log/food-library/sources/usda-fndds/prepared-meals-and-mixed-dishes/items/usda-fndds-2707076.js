/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-sandwich",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hot dog sandwich, vegetarian, on bun",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 24.3,
    "energy_kcal": 251.0,
    "fat_g": 9.89,
    "fibre_g": 3.1,
    "folate_ug": 77.0,
    "iron_mg": 2.2,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 238.0,
    "potassium_mg": 104.0,
    "protein_g": 15.8,
    "salt_g": 1.165,
    "sat_fat_g": 1.34,
    "sodium_mg": 466.0,
    "sugar_g": 2.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707076",
  "state": "Unspecified",
  "subcategory": "Frankfurter sandwiches",
  "tags": [
    "frankfurter-sandwiches",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
