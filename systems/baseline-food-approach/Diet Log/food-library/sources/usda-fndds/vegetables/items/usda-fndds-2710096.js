/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "guideline-amount-per-sandwich",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2710096",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "guideline-amount-per-sandwich",
      "kind": "unit",
      "label": "Guideline amount per sandwich"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Peppers, jalapenos",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 5.53,
    "energy_kcal": 26.0,
    "fat_g": 0.38,
    "fibre_g": 2.7,
    "folate_ug": 20.0,
    "iron_mg": 0.28,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 180.0,
    "protein_g": 0.86,
    "salt_g": 1.79,
    "sat_fat_g": 0.076,
    "sodium_mg": 716.0,
    "sugar_g": 2.86,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 65.4,
    "vitamin_e_mg": 2.24,
    "vitamin_k_ug": 20.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710096",
  "state": "Unspecified",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "other-vegetables-and-combinations",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
