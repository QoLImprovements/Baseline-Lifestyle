/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-piece-slice",
  "description": "Carrots",
  "id": "usda-fndds-2709668",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
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
      "gramsPerUnit": 10.0,
      "key": "1-baby-carrot",
      "kind": "unit",
      "label": "1 baby carrot"
    }
  ],
  "name": "Carrots, fresh, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 10.4,
    "energy_kcal": 69.0,
    "fat_g": 2.63,
    "fibre_g": 3.1,
    "folate_ug": 32.0,
    "iron_mg": 0.15,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 41.0,
    "potassium_mg": 283.0,
    "protein_g": 0.96,
    "salt_g": 0.5575,
    "sat_fat_g": 1.02,
    "sodium_mg": 223.0,
    "sugar_g": 4.79,
    "vitamin_a_ug": 824.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 14.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709668",
  "state": "Cooked",
  "subcategory": "Carrots",
  "tags": [
    "carrots",
    "cooked",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
