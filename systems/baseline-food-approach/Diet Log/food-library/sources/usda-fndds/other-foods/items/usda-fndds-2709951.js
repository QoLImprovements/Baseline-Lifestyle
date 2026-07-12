/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-slice",
  "description": "Onions",
  "id": "usda-fndds-2709951",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Onions, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 10.6,
    "energy_kcal": 73.0,
    "fat_g": 3.11,
    "fibre_g": 1.9,
    "folate_ug": 18.0,
    "iron_mg": 0.24,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 167.0,
    "protein_g": 1.26,
    "salt_g": 0.3675,
    "sat_fat_g": 0.831,
    "sodium_mg": 147.0,
    "sugar_g": 4.84,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 7.2,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709951",
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
