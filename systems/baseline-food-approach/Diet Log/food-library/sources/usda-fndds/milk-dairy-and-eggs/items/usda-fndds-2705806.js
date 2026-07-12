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
  "id": "usda-fndds-2705806",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Grilled cheese sandwich, reduced fat cheese, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 303.0,
    "carbs_g": 29.3,
    "energy_kcal": 307.0,
    "fat_g": 16.0,
    "fibre_g": 1.2,
    "folate_ug": 55.0,
    "iron_mg": 1.82,
    "magnesium_mg": 26.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 361.0,
    "potassium_mg": 183.0,
    "protein_g": 11.3,
    "salt_g": 1.8475,
    "sat_fat_g": 7.55,
    "sodium_mg": 739.0,
    "sugar_g": 5.71,
    "vitamin_a_ug": 185.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705806",
  "state": "Grilled",
  "subcategory": "Cheese sandwiches",
  "tags": [
    "cheese-sandwiches",
    "grilled",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
