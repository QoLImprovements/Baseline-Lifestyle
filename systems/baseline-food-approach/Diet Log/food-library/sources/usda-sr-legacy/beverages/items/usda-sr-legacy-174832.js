/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Beverages",
  "id": "usda-sr-legacy-174832",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beverages, almond milk, unsweetened, shelf stable",
  "nutritionPerBasis": {
    "calcium_mg": 184.0,
    "carbs_g": 1.31,
    "energy_kcal": 65.0,
    "fat_g": 0.96,
    "fibre_g": 0.2,
    "folate_ug": 1.0,
    "iron_mg": 0.28,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 67.0,
    "protein_g": 0.4,
    "salt_g": 0.18,
    "sat_fat_g": 0.08,
    "sodium_mg": 72.0,
    "sugar_g": 0.81,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174832",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
