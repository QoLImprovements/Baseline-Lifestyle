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
  "id": "usda-sr-legacy-173917",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 233.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals, farina, enriched, cooked with water, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 10.9,
    "energy_kcal": 53.0,
    "fat_g": 0.34,
    "fibre_g": 0.8,
    "folate_ug": 77.0,
    "iron_mg": 5.33,
    "magnesium_mg": 7.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 37.0,
    "potassium_mg": 23.0,
    "protein_g": 1.82,
    "salt_g": 0.315,
    "sat_fat_g": 0.066,
    "sodium_mg": 126.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173917",
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
