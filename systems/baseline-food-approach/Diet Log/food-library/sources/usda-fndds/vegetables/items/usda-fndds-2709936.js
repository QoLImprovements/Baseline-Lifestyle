/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-slice",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709936",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lotus root, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 15.5,
    "energy_kcal": 87.0,
    "fat_g": 2.61,
    "fibre_g": 3.0,
    "folate_ug": 8.0,
    "iron_mg": 0.87,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 352.0,
    "protein_g": 1.54,
    "salt_g": 0.4125,
    "sat_fat_g": 0.686,
    "sodium_mg": 165.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 26.5,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709936",
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
