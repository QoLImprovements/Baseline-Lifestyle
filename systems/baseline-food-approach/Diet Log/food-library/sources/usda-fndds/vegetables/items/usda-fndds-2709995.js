/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup-mashed",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709995",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Summer squash, yellow or green, frozen, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 4.41,
    "energy_kcal": 43.0,
    "fat_g": 2.71,
    "fibre_g": 1.3,
    "folate_ug": 10.0,
    "iron_mg": 0.49,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 217.0,
    "protein_g": 1.18,
    "salt_g": 0.3125,
    "sat_fat_g": 0.699,
    "sodium_mg": 125.0,
    "sugar_g": 1.95,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709995",
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
