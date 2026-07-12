/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705454",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Frozen yogurt, soft serve, vanilla",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 24.2,
    "energy_kcal": 159.0,
    "fat_g": 5.6,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.3,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 211.0,
    "protein_g": 4.0,
    "salt_g": 0.2175,
    "sat_fat_g": 3.42,
    "sodium_mg": 87.0,
    "sugar_g": 24.0,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705454",
  "state": "Frozen",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "frozen",
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
