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
  "id": "usda-sr-legacy-172360",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.6,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 218.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 4.5,
      "key": "teaspoon",
      "kind": "unit",
      "label": "teaspoon"
    }
  ],
  "name": "Oil, industrial, canola (partially hydrogenated) oil for deep fat frying",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 0.0,
    "energy_kcal": 3700.0,
    "fat_g": 100.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 1.03,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.0,
    "salt_g": 0.0,
    "sat_fat_g": 10.1,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 17.5,
    "vitamin_k_ug": 71.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172360",
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
