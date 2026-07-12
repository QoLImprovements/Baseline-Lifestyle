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
  "id": "usda-sr-legacy-171007",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, russian dressing, low calorie",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 27.6,
    "energy_kcal": 141.0,
    "fat_g": 4.0,
    "fibre_g": 0.3,
    "folate_ug": 3.0,
    "iron_mg": 0.6,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 157.0,
    "protein_g": 0.5,
    "salt_g": 2.17,
    "sat_fat_g": 0.6,
    "sodium_mg": 868.0,
    "sugar_g": 21.9,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171007",
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
