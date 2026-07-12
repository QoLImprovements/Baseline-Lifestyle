/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Fried vegetables",
  "id": "usda-fndds-2710054",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Fried okra",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 22.4,
    "energy_kcal": 219.0,
    "fat_g": 12.8,
    "fibre_g": 1.6,
    "folate_ug": 79.0,
    "iron_mg": 1.71,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 111.0,
    "protein_g": 3.88,
    "salt_g": 0.79,
    "sat_fat_g": 1.79,
    "sodium_mg": 316.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 2.43,
    "vitamin_k_ug": 30.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710054",
  "state": "Fried",
  "subcategory": "Fried vegetables",
  "tags": [
    "fried",
    "fried-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
