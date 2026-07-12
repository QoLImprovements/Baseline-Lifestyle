/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-tub",
  "description": "Baby food: fruit",
  "id": "usda-fndds-2709365",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-tub",
      "kind": "unit",
      "label": "1 tub"
    },
    {
      "gramsPerUnit": 90.0,
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
      "gramsPerUnit": 110.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Baby Toddler bananas, Stage 1",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 21.3,
    "energy_kcal": 91.0,
    "fat_g": 0.2,
    "fibre_g": 1.6,
    "folate_ug": 17.0,
    "iron_mg": 0.3,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 290.0,
    "protein_g": 1.0,
    "salt_g": 0.005,
    "sat_fat_g": 0.072,
    "sodium_mg": 2.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.9,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709365",
  "state": "Unspecified",
  "subcategory": "Baby food: fruit",
  "tags": [
    "baby-food-fruit",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
