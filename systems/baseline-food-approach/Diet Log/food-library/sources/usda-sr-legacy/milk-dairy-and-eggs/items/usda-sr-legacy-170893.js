/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170893",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Egg, whole, raw, frozen, salted, pasteurized",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 0.83,
    "energy_kcal": 138.0,
    "fat_g": 10.1,
    "fibre_g": 0.0,
    "folate_ug": 69.0,
    "iron_mg": 1.71,
    "magnesium_mg": 9.0,
    "omega3_g": 0.081,
    "phosphorus_mg": 186.0,
    "potassium_mg": 128.0,
    "protein_g": 11.0,
    "salt_g": 9.15,
    "sat_fat_g": 3.18,
    "sodium_mg": 3660.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170893",
  "state": "Frozen",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
