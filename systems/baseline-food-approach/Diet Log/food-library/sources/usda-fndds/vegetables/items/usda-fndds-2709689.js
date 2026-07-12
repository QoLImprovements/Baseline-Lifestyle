/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709689",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Peas and carrots, frozen, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 10.7,
    "energy_kcal": 80.0,
    "fat_g": 2.9,
    "fibre_g": 3.7,
    "folate_ug": 32.0,
    "iron_mg": 0.95,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 155.0,
    "protein_g": 2.89,
    "salt_g": 0.47,
    "sat_fat_g": 0.69,
    "sodium_mg": 188.0,
    "sugar_g": 4.17,
    "vitamin_a_ug": 472.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 21.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709689",
  "state": "Frozen",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "frozen",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
