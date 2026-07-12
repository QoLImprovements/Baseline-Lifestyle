/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-can-6-fl-oz",
  "description": "Fruit drinks",
  "id": "usda-fndds-2710572",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 219.0,
      "key": "1-can-6-fl-oz",
      "kind": "unit",
      "label": "1 can (6 fl oz)"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lemonade, frozen concentrate, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 49.9,
    "energy_kcal": 196.0,
    "fat_g": 0.7,
    "fibre_g": 0.3,
    "folate_ug": 7.0,
    "iron_mg": 0.09,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 72.0,
    "protein_g": 0.22,
    "salt_g": 0.0175,
    "sat_fat_g": 0.025,
    "sodium_mg": 7.0,
    "sugar_g": 44.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 13.1,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710572",
  "state": "Frozen",
  "subcategory": "Fruit drinks",
  "tags": [
    "frozen",
    "fruit",
    "fruit-drinks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
