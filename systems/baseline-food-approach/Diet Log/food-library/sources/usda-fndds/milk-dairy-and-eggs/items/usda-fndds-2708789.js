/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708789",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 169.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 169.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Tortellini, cheese-filled, meatless, with vinaigrette dressing",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 18.8,
    "energy_kcal": 193.0,
    "fat_g": 10.4,
    "fibre_g": 0.6,
    "folate_ug": 32.0,
    "iron_mg": 1.42,
    "magnesium_mg": 13.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 101.0,
    "potassium_mg": 113.0,
    "protein_g": 6.23,
    "salt_g": 1.5975,
    "sat_fat_g": 3.58,
    "sodium_mg": 639.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708789",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
