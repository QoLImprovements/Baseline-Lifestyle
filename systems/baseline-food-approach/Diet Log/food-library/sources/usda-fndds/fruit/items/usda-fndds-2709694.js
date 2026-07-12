/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709694",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Winter squash, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 8.82,
    "energy_kcal": 37.0,
    "fat_g": 0.35,
    "fibre_g": 2.8,
    "folate_ug": 20.0,
    "iron_mg": 0.44,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 240.0,
    "protein_g": 0.89,
    "salt_g": 0.2925,
    "sat_fat_g": 0.072,
    "sodium_mg": 117.0,
    "sugar_g": 3.29,
    "vitamin_a_ug": 260.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709694",
  "state": "Cooked",
  "subcategory": "Other red and orange vegetables",
  "tags": [
    "cooked",
    "fruit",
    "other-red-and-orange-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
