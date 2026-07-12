/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168964",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 191.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Rice mix, white and wild, flavored, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 26.3,
    "energy_kcal": 595.0,
    "fat_g": 2.57,
    "fibre_g": 0.8,
    "folate_ug": 68.0,
    "iron_mg": 1.45,
    "magnesium_mg": 18.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 73.0,
    "potassium_mg": 113.0,
    "protein_g": 3.49,
    "salt_g": 1.1075,
    "sat_fat_g": 1.07,
    "sodium_mg": 443.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168964",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "grains-bread-and-pasta",
    "meals-entrees-and-side-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
