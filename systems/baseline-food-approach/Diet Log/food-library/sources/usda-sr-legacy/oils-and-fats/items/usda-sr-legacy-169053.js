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
  "id": "usda-sr-legacy-169053",
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
  "name": "Margarine-like, vegetable oil-butter spread, reduced calorie, tub, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 1.0,
    "energy_kcal": 450.0,
    "fat_g": 50.0,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.09,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 37.0,
    "protein_g": 1.0,
    "salt_g": 1.5175,
    "sat_fat_g": 16.7,
    "sodium_mg": 607.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 819.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 5.7,
    "vitamin_k_ug": 57.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169053",
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
