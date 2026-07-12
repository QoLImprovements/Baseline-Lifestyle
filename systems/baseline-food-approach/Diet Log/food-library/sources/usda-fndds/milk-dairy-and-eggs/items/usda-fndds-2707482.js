/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable sandwiches/burgers",
  "id": "usda-fndds-2707482",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 181.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 181.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Veggie burger, on bun, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 245.0,
    "carbs_g": 27.2,
    "energy_kcal": 243.0,
    "fat_g": 8.43,
    "fibre_g": 3.0,
    "folate_ug": 97.0,
    "iron_mg": 2.54,
    "magnesium_mg": 39.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 216.0,
    "potassium_mg": 224.0,
    "protein_g": 14.0,
    "salt_g": 1.5,
    "sat_fat_g": 3.28,
    "sodium_mg": 600.0,
    "sugar_g": 3.78,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707482",
  "state": "Unspecified",
  "subcategory": "Vegetable sandwiches/burgers",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "vegetable-sandwiches-burgers"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
