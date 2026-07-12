/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable sandwiches/burgers",
  "id": "usda-fndds-2707481",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Veggie burger, on bun",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 30.8,
    "energy_kcal": 224.0,
    "fat_g": 5.2,
    "fibre_g": 3.5,
    "folate_ug": 110.0,
    "iron_mg": 2.88,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 158.0,
    "potassium_mg": 236.0,
    "protein_g": 13.0,
    "salt_g": 1.335,
    "sat_fat_g": 1.16,
    "sodium_mg": 534.0,
    "sugar_g": 3.94,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707481",
  "state": "Unspecified",
  "subcategory": "Vegetable sandwiches/burgers",
  "tags": [
    "unspecified",
    "vegetable-sandwiches-burgers",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
