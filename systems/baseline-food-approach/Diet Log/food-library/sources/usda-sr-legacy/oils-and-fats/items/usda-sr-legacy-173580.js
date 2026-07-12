/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-173580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Margarine-like, vegetable oil-butter spread, tub, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 1.0,
    "energy_kcal": 1520.0,
    "fat_g": 40.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.04,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 36.0,
    "protein_g": 1.0,
    "salt_g": 1.965,
    "sat_fat_g": 7.24,
    "sodium_mg": 786.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 819.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 4.47,
    "vitamin_k_ug": 46.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173580",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
