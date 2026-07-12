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
  "id": "usda-fndds-2709990",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Seaweed, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 7.71,
    "energy_kcal": 63.0,
    "fat_g": 3.06,
    "fibre_g": 0.7,
    "folate_ug": 144.0,
    "iron_mg": 2.21,
    "magnesium_mg": 74.0,
    "omega3_g": 0.088,
    "phosphorus_mg": 59.0,
    "potassium_mg": 161.0,
    "protein_g": 3.41,
    "salt_g": 0.955,
    "sat_fat_g": 0.816,
    "sodium_mg": 382.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 99.0,
    "vitamin_c_mg": 12.4,
    "vitamin_e_mg": 1.31,
    "vitamin_k_ug": 26.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709990",
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
