/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-sandwich",
  "description": "Cheese sandwiches",
  "id": "usda-fndds-2705799",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cheese sandwich, reduced fat cheese, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 342.0,
    "carbs_g": 33.3,
    "energy_kcal": 256.0,
    "fat_g": 7.92,
    "fibre_g": 1.4,
    "folate_ug": 73.0,
    "iron_mg": 2.06,
    "magnesium_mg": 29.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 408.0,
    "potassium_mg": 205.0,
    "protein_g": 12.8,
    "salt_g": 1.8975,
    "sat_fat_g": 4.13,
    "sodium_mg": 759.0,
    "sugar_g": 6.44,
    "vitamin_a_ug": 103.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705799",
  "state": "Unspecified",
  "subcategory": "Cheese sandwiches",
  "tags": [
    "cheese-sandwiches",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
