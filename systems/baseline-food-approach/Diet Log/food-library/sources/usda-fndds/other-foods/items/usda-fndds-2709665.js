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
  "id": "usda-fndds-2709665",
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
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    }
  ],
  "name": "Carrots, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 7.9,
    "energy_kcal": 39.0,
    "fat_g": 0.47,
    "fibre_g": 3.2,
    "folate_ug": 7.0,
    "iron_mg": 0.43,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 209.0,
    "protein_g": 0.81,
    "salt_g": 0.455,
    "sat_fat_g": 0.0,
    "sodium_mg": 182.0,
    "sugar_g": 4.19,
    "vitamin_a_ug": 843.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 15.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709665",
  "state": "Frozen",
  "subcategory": "Carrots",
  "tags": [
    "carrots",
    "frozen",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
