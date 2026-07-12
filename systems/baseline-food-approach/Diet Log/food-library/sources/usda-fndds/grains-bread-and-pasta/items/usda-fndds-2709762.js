/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-sandwich-any-size",
  "description": "Vegetable sandwiches/burgers",
  "id": "usda-fndds-2709762",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tomato sandwich on wheat",
  "nutritionPerBasis": {
    "calcium_mg": 239.0,
    "carbs_g": 24.7,
    "energy_kcal": 199.0,
    "fat_g": 6.99,
    "fibre_g": 3.1,
    "folate_ug": 43.0,
    "iron_mg": 1.71,
    "magnesium_mg": 36.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 190.0,
    "potassium_mg": 194.0,
    "protein_g": 9.44,
    "salt_g": 1.2225,
    "sat_fat_g": 3.2,
    "sodium_mg": 489.0,
    "sugar_g": 3.92,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709762",
  "state": "Unspecified",
  "subcategory": "Vegetable sandwiches/burgers",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "vegetable-sandwiches-burgers"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
