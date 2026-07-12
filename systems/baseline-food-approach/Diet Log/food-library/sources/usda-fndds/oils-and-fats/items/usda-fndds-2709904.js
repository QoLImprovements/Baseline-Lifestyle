/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cauliflower, frozen, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 3.63,
    "energy_kcal": 45.0,
    "fat_g": 3.12,
    "fibre_g": 2.6,
    "folate_ug": 40.0,
    "iron_mg": 0.4,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 135.0,
    "protein_g": 1.56,
    "salt_g": 0.325,
    "sat_fat_g": 0.421,
    "sodium_mg": 130.0,
    "sugar_g": 1.02,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 30.3,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 14.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709904",
  "state": "Frozen",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "frozen",
    "oils-and-fats",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
