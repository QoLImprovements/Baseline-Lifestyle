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
  "id": "usda-sr-legacy-173581",
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
  "name": "Butter, light, stick, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 0.0,
    "energy_kcal": 499.0,
    "fat_g": 55.1,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.09,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 71.0,
    "protein_g": 3.3,
    "salt_g": 1.125,
    "sat_fat_g": 34.3,
    "sodium_mg": 450.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 465.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.58,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173581",
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
