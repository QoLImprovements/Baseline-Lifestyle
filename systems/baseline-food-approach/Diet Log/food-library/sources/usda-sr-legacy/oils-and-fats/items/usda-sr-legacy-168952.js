/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168952",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Rice and vermicelli mix, rice pilaf flavor, prepared with 80% margarine",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 25.7,
    "energy_kcal": 148.0,
    "fat_g": 3.7,
    "fibre_g": 0.6,
    "folate_ug": 0.0,
    "iron_mg": 0.85,
    "magnesium_mg": 11.0,
    "omega3_g": 0.144,
    "phosphorus_mg": 48.0,
    "potassium_mg": 69.0,
    "protein_g": 2.94,
    "salt_g": 1.075,
    "sat_fat_g": 0.744,
    "sodium_mg": 430.0,
    "sugar_g": 0.26,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168952",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
