/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-pouch",
  "description": "Baby food: mixtures",
  "id": "usda-fndds-2709356",
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
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
  "name": "Baby Toddler fruit, with yogurt",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 13.4,
    "energy_kcal": 76.0,
    "fat_g": 1.83,
    "fibre_g": 1.1,
    "folate_ug": 10.0,
    "iron_mg": 0.17,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 183.0,
    "protein_g": 1.87,
    "salt_g": 0.0425,
    "sat_fat_g": 0.911,
    "sodium_mg": 17.0,
    "sugar_g": 8.82,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 18.1,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709356",
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
