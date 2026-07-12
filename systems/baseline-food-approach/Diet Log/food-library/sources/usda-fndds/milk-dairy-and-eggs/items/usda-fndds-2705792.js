/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2705792",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cheese souffle",
  "nutritionPerBasis": {
    "calcium_mg": 189.0,
    "carbs_g": 6.38,
    "energy_kcal": 207.0,
    "fat_g": 16.0,
    "fibre_g": 0.1,
    "folate_ug": 24.0,
    "iron_mg": 0.76,
    "magnesium_mg": 14.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 181.0,
    "potassium_mg": 131.0,
    "protein_g": 9.43,
    "salt_g": 0.785,
    "sat_fat_g": 8.27,
    "sodium_mg": 314.0,
    "sugar_g": 2.44,
    "vitamin_a_ug": 190.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705792",
  "state": "Unspecified",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
