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
  "id": "usda-sr-legacy-173132",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON Double Chocolate Nut Bar",
  "nutritionPerBasis": {
    "calcium_mg": 1500.0,
    "carbs_g": 51.7,
    "energy_kcal": 377.0,
    "fat_g": 8.99,
    "fibre_g": 10.5,
    "folate_ug": 905.0,
    "iron_mg": 18.0,
    "magnesium_mg": 317.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 566.0,
    "potassium_mg": 0.0,
    "protein_g": 22.4,
    "salt_g": 0.8325,
    "sat_fat_g": 4.85,
    "sodium_mg": 333.0,
    "sugar_g": 22.7,
    "vitamin_a_ug": 4440.0,
    "vitamin_c_mg": 176.0,
    "vitamin_e_mg": 30.5,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173132",
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
