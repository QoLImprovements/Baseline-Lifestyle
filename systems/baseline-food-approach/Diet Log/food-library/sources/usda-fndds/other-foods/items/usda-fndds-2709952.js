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
  "id": "usda-fndds-2709952",
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
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-pearl-onion",
      "kind": "unit",
      "label": "1 pearl onion"
    }
  ],
  "name": "Onions, pearl, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 6.49,
    "energy_kcal": 50.0,
    "fat_g": 2.59,
    "fibre_g": 1.4,
    "folate_ug": 13.0,
    "iron_mg": 0.33,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 98.0,
    "protein_g": 0.7,
    "salt_g": 0.3225,
    "sat_fat_g": 0.675,
    "sodium_mg": 129.0,
    "sugar_g": 2.81,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 4.9,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709952",
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
