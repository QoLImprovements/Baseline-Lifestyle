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
  "id": "usda-fndds-2709664",
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
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-regular-carrot",
      "kind": "unit",
      "label": "1 regular carrot"
    }
  ],
  "name": "Carrots, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 10.7,
    "energy_kcal": 50.0,
    "fat_g": 0.36,
    "fibre_g": 3.2,
    "folate_ug": 33.0,
    "iron_mg": 0.16,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 291.0,
    "protein_g": 0.98,
    "salt_g": 0.5275,
    "sat_fat_g": 0.033,
    "sodium_mg": 211.0,
    "sugar_g": 4.92,
    "vitamin_a_ug": 824.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 13.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709664",
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
