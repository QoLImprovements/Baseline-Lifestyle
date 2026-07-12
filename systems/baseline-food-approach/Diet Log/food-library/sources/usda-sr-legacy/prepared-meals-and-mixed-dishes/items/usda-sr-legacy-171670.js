/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "tbsp",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171670",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.7,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals, corn grits, yellow, regular and quick, unenriched, dry",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 79.6,
    "energy_kcal": 1550.0,
    "fat_g": 1.2,
    "fibre_g": 1.6,
    "folate_ug": 5.0,
    "iron_mg": 1.0,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 137.0,
    "protein_g": 8.8,
    "salt_g": 0.0025,
    "sat_fat_g": 0.155,
    "sodium_mg": 1.0,
    "sugar_g": 0.64,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171670",
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
