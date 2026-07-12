/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-piece-slice",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709942",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Mushrooms, fresh, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 5.01,
    "energy_kcal": 62.0,
    "fat_g": 3.16,
    "fibre_g": 2.1,
    "folate_ug": 36.0,
    "iron_mg": 0.28,
    "magnesium_mg": 12.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 113.0,
    "potassium_mg": 450.0,
    "protein_g": 3.52,
    "salt_g": 0.4225,
    "sat_fat_g": 1.24,
    "sodium_mg": 169.0,
    "sugar_g": 2.41,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709942",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "oils-and-fats",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
