/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "0-33-cup",
      "kind": "unit",
      "label": "0.33 cup"
    }
  ],
  "name": "Cereals, oats, regular and quick, not fortified, dry",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 67.7,
    "energy_kcal": 379.0,
    "fat_g": 6.52,
    "fibre_g": 10.1,
    "folate_ug": 32.0,
    "iron_mg": 4.25,
    "magnesium_mg": 138.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 410.0,
    "potassium_mg": 362.0,
    "protein_g": 13.2,
    "salt_g": 0.015,
    "sat_fat_g": 1.11,
    "sodium_mg": 6.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173904",
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
