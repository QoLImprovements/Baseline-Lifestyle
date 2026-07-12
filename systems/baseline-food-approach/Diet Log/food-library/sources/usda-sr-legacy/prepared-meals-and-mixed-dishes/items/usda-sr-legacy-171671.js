/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "tablespoon",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171671",
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
      "gramsPerUnit": 257.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals, corn grits, white, regular and quick, enriched, cooked with water, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 14.8,
    "energy_kcal": 298.0,
    "fat_g": 0.46,
    "fibre_g": 0.8,
    "folate_ug": 28.0,
    "iron_mg": 0.57,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 27.0,
    "protein_g": 1.71,
    "salt_g": 0.5575,
    "sat_fat_g": 0.066,
    "sodium_mg": 223.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171671",
  "state": "Cooked",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "cooked",
    "prepared-meals-and-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
