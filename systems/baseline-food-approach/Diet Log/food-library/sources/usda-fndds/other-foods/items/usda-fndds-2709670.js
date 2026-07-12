/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-baby-carrot",
  "description": "Carrots",
  "id": "usda-fndds-2709670",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-baby-carrot",
      "kind": "unit",
      "label": "1 baby carrot"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "1-regular-carrot",
      "kind": "unit",
      "label": "1 regular carrot"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    }
  ],
  "name": "Carrots, fresh, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 10.4,
    "energy_kcal": 72.0,
    "fat_g": 3.0,
    "fibre_g": 3.1,
    "folate_ug": 32.0,
    "iron_mg": 0.15,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 283.0,
    "protein_g": 0.96,
    "salt_g": 0.535,
    "sat_fat_g": 0.726,
    "sodium_mg": 214.0,
    "sugar_g": 4.78,
    "vitamin_a_ug": 812.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 15.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709670",
  "state": "Cooked",
  "subcategory": "Carrots",
  "tags": [
    "carrots",
    "cooked",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
