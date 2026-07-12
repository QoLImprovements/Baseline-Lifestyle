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
  "id": "usda-fndds-2709930",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 565.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    }
  ],
  "name": "Eggplant, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 6.13,
    "energy_kcal": 51.0,
    "fat_g": 2.92,
    "fibre_g": 3.1,
    "folate_ug": 20.0,
    "iron_mg": 0.24,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 239.0,
    "protein_g": 1.03,
    "salt_g": 0.33,
    "sat_fat_g": 0.752,
    "sodium_mg": 132.0,
    "sugar_g": 3.68,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709930",
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
