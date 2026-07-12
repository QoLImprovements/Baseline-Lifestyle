/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "egg-roll",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172105",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "egg-roll",
      "kind": "unit",
      "label": "egg roll"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Egg rolls, vegetable, frozen, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 31.8,
    "energy_kcal": 214.0,
    "fat_g": 6.97,
    "fibre_g": 2.4,
    "folate_ug": 71.0,
    "iron_mg": 1.95,
    "magnesium_mg": 23.0,
    "omega3_g": 0.345,
    "phosphorus_mg": 72.0,
    "potassium_mg": 222.0,
    "protein_g": 5.95,
    "salt_g": 1.225,
    "sat_fat_g": 1.14,
    "sodium_mg": 490.0,
    "sugar_g": 5.96,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 6.7,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 39.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172105",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
