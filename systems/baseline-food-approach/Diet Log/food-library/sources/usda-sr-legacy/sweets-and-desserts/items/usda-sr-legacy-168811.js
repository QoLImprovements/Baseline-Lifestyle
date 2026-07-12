/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "pouch",
  "description": "Snacks",
  "id": "usda-sr-legacy-168811",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "pouch",
      "kind": "unit",
      "label": "pouch"
    }
  ],
  "name": "Snacks, FARLEY CANDY, FARLEY Fruit Snacks, with vitamins A, C, and E",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 80.9,
    "energy_kcal": 1430.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 4.4,
    "salt_g": 0.09,
    "sat_fat_g": 0.0,
    "sodium_mg": 36.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5440.0,
    "vitamin_c_mg": 90.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168811",
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
