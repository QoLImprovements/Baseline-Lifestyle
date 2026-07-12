/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Plant-based milk",
  "id": "usda-fndds-2707568",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Coconut milk, used in cooking",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 5.54,
    "energy_kcal": 230.0,
    "fat_g": 23.8,
    "fibre_g": 2.2,
    "folate_ug": 16.0,
    "iron_mg": 1.64,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 263.0,
    "protein_g": 2.29,
    "salt_g": 0.0375,
    "sat_fat_g": 21.1,
    "sodium_mg": 15.0,
    "sugar_g": 3.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707568",
  "state": "Unspecified",
  "subcategory": "Plant-based milk",
  "tags": [
    "milk-dairy-and-eggs",
    "plant-based-milk",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
