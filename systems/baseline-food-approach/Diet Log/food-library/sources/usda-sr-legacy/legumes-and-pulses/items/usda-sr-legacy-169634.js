/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "serving-28-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-169634",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "serving-28-pieces",
      "kind": "unit",
      "label": "serving 28 pieces"
    }
  ],
  "name": "Candies, dark chocolate coated coffee beans",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 60.0,
    "energy_kcal": 540.0,
    "fat_g": 30.0,
    "fibre_g": 7.5,
    "folate_ug": 3.0,
    "iron_mg": 2.7,
    "magnesium_mg": 107.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 135.0,
    "potassium_mg": 342.0,
    "protein_g": 7.5,
    "salt_g": 0.0625,
    "sat_fat_g": 15.0,
    "sodium_mg": 25.0,
    "sugar_g": 42.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169634",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "legumes-and-pulses",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
