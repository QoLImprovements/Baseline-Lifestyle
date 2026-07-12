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
  "id": "usda-sr-legacy-171023",
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
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, italian dressing, reduced fat, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 4.57,
    "energy_kcal": 317.0,
    "fat_g": 6.38,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.65,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 85.0,
    "protein_g": 0.47,
    "salt_g": 0.075,
    "sat_fat_g": 0.451,
    "sodium_mg": 30.0,
    "sugar_g": 4.55,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171023",
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
