/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "6-cracker-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171855",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "6-cracker-1-serving",
      "kind": "unit",
      "label": "6 cracker 1 serving"
    }
  ],
  "name": "Crackers, whole grain, sandwich-type, with peanut butter filling",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 54.6,
    "energy_kcal": 1950.0,
    "fat_g": 21.2,
    "fibre_g": 9.4,
    "folate_ug": 74.0,
    "iron_mg": 3.07,
    "magnesium_mg": 107.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 256.0,
    "potassium_mg": 330.0,
    "protein_g": 14.1,
    "salt_g": 1.5875,
    "sat_fat_g": 4.52,
    "sodium_mg": 635.0,
    "sugar_g": 9.41,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.63,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171855",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
