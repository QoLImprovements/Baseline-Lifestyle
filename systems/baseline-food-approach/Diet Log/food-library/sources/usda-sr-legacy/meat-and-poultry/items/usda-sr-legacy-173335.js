/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173335",
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
      "gramsPerUnit": 139.0,
      "key": "burrito-frozen",
      "kind": "unit",
      "label": "burrito frozen"
    }
  ],
  "name": "Burrito, beef and bean, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 30.8,
    "energy_kcal": 999.0,
    "fat_g": 9.61,
    "fibre_g": 4.2,
    "folate_ug": 80.0,
    "iron_mg": 2.96,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 72.0,
    "potassium_mg": 221.0,
    "protein_g": 7.26,
    "salt_g": 1.4675,
    "sat_fat_g": 2.95,
    "sodium_mg": 587.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173335",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
