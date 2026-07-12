/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "0-5-cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174640",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Cereals, QUAKER, Quick Oats with Iron, Dry",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 68.2,
    "energy_kcal": 371.0,
    "fat_g": 6.87,
    "fibre_g": 9.4,
    "folate_ug": 49.0,
    "iron_mg": 49.4,
    "magnesium_mg": 270.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 458.0,
    "potassium_mg": 358.0,
    "protein_g": 13.7,
    "salt_g": 0.0075,
    "sat_fat_g": 0.96,
    "sodium_mg": 3.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174640",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
