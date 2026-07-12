/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172670",
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
      "gramsPerUnit": 101.0,
      "key": "biscuit-4-dia",
      "kind": "unit",
      "label": "biscuit (4\" dia)"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "small-1-1-2-dia",
      "kind": "unit",
      "label": "small (1-1/2\" dia)"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "biscuit-2-1-2-dia",
      "kind": "unit",
      "label": "biscuit (2-1/2\" dia)"
    }
  ],
  "name": "Biscuits, plain or buttermilk, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 235.0,
    "carbs_g": 44.6,
    "energy_kcal": 353.0,
    "fat_g": 16.3,
    "fibre_g": 1.5,
    "folate_ug": 61.0,
    "iron_mg": 2.9,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 164.0,
    "potassium_mg": 121.0,
    "protein_g": 7.0,
    "salt_g": 1.45,
    "sat_fat_g": 4.32,
    "sodium_mg": 580.0,
    "sugar_g": 2.18,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172670",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
