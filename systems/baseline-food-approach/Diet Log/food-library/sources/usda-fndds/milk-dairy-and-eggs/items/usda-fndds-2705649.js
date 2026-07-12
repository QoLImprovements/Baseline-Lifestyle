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
  "id": "usda-fndds-2705649",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cone",
      "kind": "unit",
      "label": "1 cone"
    }
  ],
  "name": "Ice cream cone, scooped, chocolate, waffle cone",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 31.5,
    "energy_kcal": 227.0,
    "fat_g": 10.6,
    "fibre_g": 1.2,
    "folate_ug": 23.0,
    "iron_mg": 1.14,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 243.0,
    "protein_g": 4.04,
    "salt_g": 0.2225,
    "sat_fat_g": 6.43,
    "sodium_mg": 89.0,
    "sugar_g": 25.4,
    "vitamin_a_ug": 111.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705649",
  "state": "Unspecified",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
