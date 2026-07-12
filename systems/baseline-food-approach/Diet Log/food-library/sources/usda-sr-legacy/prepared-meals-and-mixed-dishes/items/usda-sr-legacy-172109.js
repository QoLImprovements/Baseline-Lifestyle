/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "each",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172109",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "each",
      "kind": "unit",
      "label": "each"
    }
  ],
  "name": "Lean Pockets, Meatballs & Mozzarella",
  "nutritionPerBasis": {
    "calcium_mg": 196.0,
    "carbs_g": 32.3,
    "energy_kcal": 1010.0,
    "fat_g": 7.7,
    "fibre_g": 2.0,
    "folate_ug": 0.0,
    "iron_mg": 2.06,
    "magnesium_mg": 23.0,
    "omega3_g": 0.122,
    "phosphorus_mg": 180.0,
    "potassium_mg": 221.0,
    "protein_g": 10.5,
    "salt_g": 1.3925,
    "sat_fat_g": 3.09,
    "sodium_mg": 557.0,
    "sugar_g": 8.81,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172109",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
