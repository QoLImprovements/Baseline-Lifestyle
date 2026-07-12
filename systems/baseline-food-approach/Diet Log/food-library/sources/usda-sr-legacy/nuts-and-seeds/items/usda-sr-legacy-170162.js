/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170162",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Nuts, cashew nuts, raw",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 30.2,
    "energy_kcal": 2310.0,
    "fat_g": 43.8,
    "fibre_g": 3.3,
    "folate_ug": 25.0,
    "iron_mg": 6.68,
    "magnesium_mg": 292.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 593.0,
    "potassium_mg": 660.0,
    "protein_g": 18.2,
    "salt_g": 0.03,
    "sat_fat_g": 7.78,
    "sodium_mg": 12.0,
    "sugar_g": 5.91,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 34.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170162",
  "state": "Raw",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
