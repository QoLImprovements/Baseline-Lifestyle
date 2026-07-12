/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "18-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-169627",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "18-pieces",
      "kind": "unit",
      "label": "18 pieces"
    }
  ],
  "name": "Candies, HERSHEY'S, ALMOND JOY BITES",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 57.5,
    "energy_kcal": 2360.0,
    "fat_g": 34.5,
    "fibre_g": 4.3,
    "folate_ug": 8.0,
    "iron_mg": 1.33,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 306.0,
    "protein_g": 5.58,
    "salt_g": 0.0975,
    "sat_fat_g": 20.6,
    "sodium_mg": 39.0,
    "sugar_g": 51.7,
    "vitamin_a_ug": 117.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169627",
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
