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
  "id": "usda-sr-legacy-168096",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, italian dressing, reduced calorie",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 6.7,
    "energy_kcal": 200.0,
    "fat_g": 20.0,
    "fibre_g": 0.2,
    "folate_ug": 3.0,
    "iron_mg": 0.13,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 33.0,
    "protein_g": 0.3,
    "salt_g": 2.675,
    "sat_fat_g": 2.88,
    "sodium_mg": 1070.0,
    "sugar_g": 1.94,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168096",
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
