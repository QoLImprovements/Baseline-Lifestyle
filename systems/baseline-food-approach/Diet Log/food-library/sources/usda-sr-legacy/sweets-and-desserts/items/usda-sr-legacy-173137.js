/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-173137",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Formulated bar, POWER BAR, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 504.0,
    "carbs_g": 69.6,
    "energy_kcal": 363.0,
    "fat_g": 3.11,
    "fibre_g": 5.7,
    "folate_ug": 615.0,
    "iron_mg": 11.7,
    "magnesium_mg": 248.0,
    "omega3_g": 0.025,
    "phosphorus_mg": 614.0,
    "potassium_mg": 362.0,
    "protein_g": 14.2,
    "salt_g": 0.77,
    "sat_fat_g": 1.32,
    "sodium_mg": 308.0,
    "sugar_g": 30.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 92.3,
    "vitamin_e_mg": 8.28,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173137",
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
