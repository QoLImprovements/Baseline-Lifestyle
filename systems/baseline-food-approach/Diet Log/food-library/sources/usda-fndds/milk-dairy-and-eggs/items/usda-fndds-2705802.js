/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cheese sandwiches",
  "id": "usda-fndds-2705802",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Grilled cheese sandwich, American cheese, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 496.0,
    "carbs_g": 28.1,
    "energy_kcal": 343.0,
    "fat_g": 20.8,
    "fibre_g": 1.2,
    "folate_ug": 54.0,
    "iron_mg": 2.01,
    "magnesium_mg": 25.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 293.0,
    "potassium_mg": 139.0,
    "protein_g": 11.0,
    "salt_g": 2.055,
    "sat_fat_g": 10.0,
    "sodium_mg": 822.0,
    "sugar_g": 4.51,
    "vitamin_a_ug": 189.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705802",
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
