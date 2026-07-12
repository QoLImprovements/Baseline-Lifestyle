/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "biscuit-2-1-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174905",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "biscuit-2-1-4-dia",
      "kind": "unit",
      "label": "biscuit (2-1/4\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Biscuits, plain or buttermilk, refrigerated dough, lower fat, baked",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 51.6,
    "energy_kcal": 1340.0,
    "fat_g": 9.1,
    "fibre_g": 2.3,
    "folate_ug": 83.0,
    "iron_mg": 3.09,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 465.0,
    "potassium_mg": 185.0,
    "protein_g": 7.8,
    "salt_g": 2.405,
    "sat_fat_g": 3.65,
    "sodium_mg": 962.0,
    "sugar_g": 8.14,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174905",
  "state": "Baked",
  "subcategory": "Baked Products",
  "tags": [
    "baked",
    "baked-products",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
