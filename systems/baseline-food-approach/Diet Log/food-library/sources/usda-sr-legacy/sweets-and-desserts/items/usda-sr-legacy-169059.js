/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece",
  "description": "Sweets",
  "id": "usda-sr-legacy-169059",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Candies, chocolate covered, caramel with nuts",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 60.7,
    "energy_kcal": 470.0,
    "fat_g": 21.0,
    "fibre_g": 4.3,
    "folate_ug": 92.0,
    "iron_mg": 1.7,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 445.0,
    "protein_g": 9.5,
    "salt_g": 0.39,
    "sat_fat_g": 4.66,
    "sodium_mg": 156.0,
    "sugar_g": 41.4,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169059",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
