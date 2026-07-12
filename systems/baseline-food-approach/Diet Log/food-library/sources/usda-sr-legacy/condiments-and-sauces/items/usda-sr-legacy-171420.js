/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171420",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Salad dressing, french dressing, fat-free",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 32.1,
    "energy_kcal": 132.0,
    "fat_g": 0.27,
    "fibre_g": 2.2,
    "folate_ug": 14.0,
    "iron_mg": 0.58,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 84.0,
    "protein_g": 0.2,
    "salt_g": 2.1325,
    "sat_fat_g": 0.037,
    "sodium_mg": 853.0,
    "sugar_g": 16.4,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171420",
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
