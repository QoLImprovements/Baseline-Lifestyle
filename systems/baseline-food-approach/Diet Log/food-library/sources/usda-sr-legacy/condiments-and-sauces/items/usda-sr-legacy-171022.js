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
  "id": "usda-sr-legacy-171022",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.7,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, italian dressing, commercial, regular, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 10.4,
    "energy_kcal": 292.0,
    "fat_g": 28.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.63,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 48.0,
    "protein_g": 0.38,
    "salt_g": 0.075,
    "sat_fat_g": 4.47,
    "sodium_mg": 30.0,
    "sugar_g": 8.32,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.61,
    "vitamin_k_ug": 56.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171022",
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
