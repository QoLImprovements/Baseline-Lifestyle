/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-whole",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709929",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 540.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Eggplant, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 6.3,
    "energy_kcal": 27.0,
    "fat_g": 0.19,
    "fibre_g": 3.2,
    "folate_ug": 20.0,
    "iron_mg": 0.25,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 246.0,
    "protein_g": 1.05,
    "salt_g": 0.3175,
    "sat_fat_g": 0.036,
    "sodium_mg": 127.0,
    "sugar_g": 3.78,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709929",
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
