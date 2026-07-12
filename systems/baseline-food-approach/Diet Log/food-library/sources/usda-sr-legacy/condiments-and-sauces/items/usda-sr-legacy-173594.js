/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-173594",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Salad dressing, mayonnaise, light",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 9.23,
    "energy_kcal": 238.0,
    "fat_g": 22.2,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.14,
    "magnesium_mg": 2.0,
    "omega3_g": 1.522,
    "phosphorus_mg": 15.0,
    "potassium_mg": 31.0,
    "protein_g": 0.37,
    "salt_g": 2.0675,
    "sat_fat_g": 3.45,
    "sodium_mg": 827.0,
    "sugar_g": 3.56,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.19,
    "vitamin_k_ug": 53.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173594",
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
