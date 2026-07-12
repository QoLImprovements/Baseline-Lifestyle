/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "tbsp",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170191",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Seeds, sesame butter, paste",
  "nutritionPerBasis": {
    "calcium_mg": 960.0,
    "carbs_g": 24.0,
    "energy_kcal": 586.0,
    "fat_g": 50.9,
    "fibre_g": 5.5,
    "folate_ug": 100.0,
    "iron_mg": 19.2,
    "magnesium_mg": 362.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 659.0,
    "potassium_mg": 582.0,
    "protein_g": 18.1,
    "salt_g": 0.03,
    "sat_fat_g": 7.12,
    "sodium_mg": 12.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170191",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
