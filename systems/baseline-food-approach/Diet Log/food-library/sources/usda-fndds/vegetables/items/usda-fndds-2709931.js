/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709931",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Flowers or blossoms of sesbania, squash, or lily, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 3.2,
    "energy_kcal": 37.0,
    "fat_g": 2.62,
    "fibre_g": 0.9,
    "folate_ug": 40.0,
    "iron_mg": 0.86,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 103.0,
    "protein_g": 1.06,
    "salt_g": 0.3175,
    "sat_fat_g": 0.706,
    "sodium_mg": 127.0,
    "sugar_g": 2.33,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709931",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
