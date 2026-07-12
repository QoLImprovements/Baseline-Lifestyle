/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173305",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "McDONALD'S, McCHICKEN Sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 28.0,
    "energy_kcal": 273.0,
    "fat_g": 13.2,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 1.74,
    "magnesium_mg": 20.0,
    "omega3_g": 0.435,
    "phosphorus_mg": 139.0,
    "potassium_mg": 173.0,
    "protein_g": 10.4,
    "salt_g": 1.56,
    "sat_fat_g": 2.35,
    "sodium_mg": 624.0,
    "sugar_g": 3.57,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173305",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
