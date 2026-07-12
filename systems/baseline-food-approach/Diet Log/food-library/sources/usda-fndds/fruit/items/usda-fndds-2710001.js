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
  "id": "usda-fndds-2710001",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Spaghetti squash, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 6.26,
    "energy_kcal": 49.0,
    "fat_g": 2.8,
    "fibre_g": 1.4,
    "folate_ug": 8.0,
    "iron_mg": 0.33,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 114.0,
    "protein_g": 0.65,
    "salt_g": 0.345,
    "sat_fat_g": 0.726,
    "sodium_mg": 138.0,
    "sugar_g": 2.45,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710001",
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
