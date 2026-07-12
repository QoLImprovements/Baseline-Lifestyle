/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Carrots",
  "id": "usda-fndds-2709666",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    }
  ],
  "name": "Carrots, canned, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 5.54,
    "energy_kcal": 25.0,
    "fat_g": 0.19,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.64,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 179.0,
    "protein_g": 0.64,
    "salt_g": 0.605,
    "sat_fat_g": 0.036,
    "sodium_mg": 242.0,
    "sugar_g": 2.48,
    "vitamin_a_ug": 558.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709666",
  "state": "Canned",
  "subcategory": "Carrots",
  "tags": [
    "canned",
    "carrots",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
