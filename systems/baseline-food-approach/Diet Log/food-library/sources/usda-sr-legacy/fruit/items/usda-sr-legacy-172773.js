/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "pancake-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172773",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "pancake-4-dia",
      "kind": "unit",
      "label": "pancake (4\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "pancake-6-dia",
      "kind": "unit",
      "label": "pancake (6\" dia)"
    }
  ],
  "name": "Pancakes, blueberry, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 206.0,
    "carbs_g": 29.0,
    "energy_kcal": 929.0,
    "fat_g": 9.2,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 1.72,
    "magnesium_mg": 16.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 151.0,
    "potassium_mg": 138.0,
    "protein_g": 6.1,
    "salt_g": 1.03,
    "sat_fat_g": 1.99,
    "sodium_mg": 412.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172773",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
