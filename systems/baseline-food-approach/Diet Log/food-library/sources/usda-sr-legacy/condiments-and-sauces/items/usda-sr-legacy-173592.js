/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "serving",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-173592",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Salad dressing, ranch dressing, regular",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 5.9,
    "energy_kcal": 430.0,
    "fat_g": 44.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.3,
    "magnesium_mg": 5.0,
    "omega3_g": 3.284,
    "phosphorus_mg": 186.0,
    "potassium_mg": 64.0,
    "protein_g": 1.32,
    "salt_g": 2.2525,
    "sat_fat_g": 6.96,
    "sodium_mg": 901.0,
    "sugar_g": 4.69,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.22,
    "vitamin_k_ug": 134.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173592",
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
