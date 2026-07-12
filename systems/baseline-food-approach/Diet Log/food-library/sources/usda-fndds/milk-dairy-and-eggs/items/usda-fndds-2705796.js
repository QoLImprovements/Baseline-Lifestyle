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
  "id": "usda-fndds-2705796",
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
  "name": "Cheese sandwich, American cheese, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 532.0,
    "carbs_g": 29.7,
    "energy_kcal": 295.0,
    "fat_g": 13.5,
    "fibre_g": 3.2,
    "folate_ug": 48.0,
    "iron_mg": 2.16,
    "magnesium_mg": 45.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 362.0,
    "potassium_mg": 196.0,
    "protein_g": 13.6,
    "salt_g": 2.12,
    "sat_fat_g": 6.85,
    "sodium_mg": 848.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705796",
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
