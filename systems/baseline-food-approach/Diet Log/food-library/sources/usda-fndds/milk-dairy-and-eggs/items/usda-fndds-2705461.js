/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cone",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705461",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cone",
      "kind": "unit",
      "label": "1 cone"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Frozen yogurt cone, vanilla, waffle cone",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 25.3,
    "energy_kcal": 143.0,
    "fat_g": 3.61,
    "fibre_g": 0.1,
    "folate_ug": 12.0,
    "iron_mg": 0.69,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 155.0,
    "protein_g": 3.29,
    "salt_g": 0.1925,
    "sat_fat_g": 2.22,
    "sodium_mg": 77.0,
    "sugar_g": 20.3,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705461",
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
