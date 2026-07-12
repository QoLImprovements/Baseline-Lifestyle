/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-168112",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 232.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, mayonnaise and mayonnaise-type, low calorie",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 23.9,
    "energy_kcal": 263.0,
    "fat_g": 19.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.26,
    "magnesium_mg": 2.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 30.0,
    "potassium_mg": 24.0,
    "protein_g": 0.9,
    "salt_g": 2.0925,
    "sat_fat_g": 2.96,
    "sodium_mg": 837.0,
    "sugar_g": 4.34,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.07,
    "vitamin_k_ug": 24.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168112",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "condiments-and-sauces",
    "fats-and-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
