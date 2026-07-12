/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "oz",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172106",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Lasagna, Vegetable, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 14.2,
    "energy_kcal": 139.0,
    "fat_g": 6.04,
    "fibre_g": 1.9,
    "folate_ug": 14.0,
    "iron_mg": 0.55,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 170.0,
    "protein_g": 6.87,
    "salt_g": 1.1125,
    "sat_fat_g": 2.87,
    "sodium_mg": 445.0,
    "sugar_g": 2.54,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 17.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172106",
  "state": "Baked",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "baked",
    "meals-entrees-and-side-dishes",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
