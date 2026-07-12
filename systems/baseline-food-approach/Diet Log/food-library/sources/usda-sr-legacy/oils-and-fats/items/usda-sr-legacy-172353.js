/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-172353",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.6,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 233.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Margarine-like, vegetable oil spread, fat-free, tub",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 4.34,
    "energy_kcal": 184.0,
    "fat_g": 3.04,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.08,
    "magnesium_mg": 1.0,
    "omega3_g": 0.046,
    "phosphorus_mg": 2.0,
    "potassium_mg": 36.0,
    "protein_g": 0.1,
    "salt_g": 1.45,
    "sat_fat_g": 2.13,
    "sodium_mg": 580.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 993.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172353",
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
