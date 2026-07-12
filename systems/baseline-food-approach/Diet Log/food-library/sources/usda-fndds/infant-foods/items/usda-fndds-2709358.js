/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-jar",
  "description": "Baby food: mixtures",
  "id": "usda-fndds-2709358",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-tub",
      "kind": "unit",
      "label": "1 tub"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Baby Toddler fruit and vegetables, Stage 3",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 13.7,
    "energy_kcal": 59.0,
    "fat_g": 0.23,
    "fibre_g": 1.7,
    "folate_ug": 14.0,
    "iron_mg": 0.35,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 192.0,
    "protein_g": 0.98,
    "salt_g": 0.035,
    "sat_fat_g": 0.056,
    "sodium_mg": 14.0,
    "sugar_g": 7.46,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709358",
  "state": "Unspecified",
  "subcategory": "Baby food: mixtures",
  "tags": [
    "baby-food-mixtures",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
