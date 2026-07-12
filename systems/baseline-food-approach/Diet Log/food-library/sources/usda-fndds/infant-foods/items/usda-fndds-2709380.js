/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-pouch",
  "description": "Baby food: snacks and sweets",
  "id": "usda-fndds-2709380",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-tub",
      "kind": "unit",
      "label": "1 tub"
    }
  ],
  "name": "Baby Toddler pudding",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 17.6,
    "energy_kcal": 86.0,
    "fat_g": 0.98,
    "fibre_g": 0.2,
    "folate_ug": 6.0,
    "iron_mg": 0.22,
    "magnesium_mg": 5.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 55.0,
    "potassium_mg": 68.0,
    "protein_g": 1.76,
    "salt_g": 0.065,
    "sat_fat_g": 0.325,
    "sodium_mg": 26.0,
    "sugar_g": 12.2,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709380",
  "state": "Unspecified",
  "subcategory": "Baby food: snacks and sweets",
  "tags": [
    "baby-food-snacks-and-sweets",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
