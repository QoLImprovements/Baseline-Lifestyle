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
  "id": "usda-fndds-2709996",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    }
  ],
  "name": "Summer squash, yellow or green, canned, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 2.86,
    "energy_kcal": 35.0,
    "fat_g": 2.6,
    "fibre_g": 1.3,
    "folate_ug": 9.0,
    "iron_mg": 0.69,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 93.0,
    "protein_g": 0.6,
    "salt_g": 0.78,
    "sat_fat_g": 0.677,
    "sodium_mg": 312.0,
    "sugar_g": 1.15,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709996",
  "state": "Canned",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "canned",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
