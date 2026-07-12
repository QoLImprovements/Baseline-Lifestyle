/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Onions",
  "id": "usda-fndds-2709950",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Onions, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 11.0,
    "energy_kcal": 47.0,
    "fat_g": 0.12,
    "fibre_g": 2.0,
    "folate_ug": 19.0,
    "iron_mg": 0.25,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 171.0,
    "protein_g": 1.29,
    "salt_g": 0.3525,
    "sat_fat_g": 0.049,
    "sodium_mg": 141.0,
    "sugar_g": 4.97,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.4,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709950",
  "state": "Cooked",
  "subcategory": "Onions",
  "tags": [
    "cooked",
    "onions",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
