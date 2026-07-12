/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-giant-jerk",
  "description": "Cold cuts and cured meats",
  "id": "usda-fndds-2705860",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-giant-jerk",
      "kind": "unit",
      "label": "1 Giant Jerk"
    },
    {
      "gramsPerUnit": 9.8,
      "key": "1-super-jerk",
      "kind": "unit",
      "label": "1 Super Jerk"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 9.6,
      "key": "1-slim-jim",
      "kind": "unit",
      "label": "1 Slim Jim"
    },
    {
      "gramsPerUnit": 6.7,
      "key": "1-big-jerk",
      "kind": "unit",
      "label": "1 Big Jerk"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup-pieces",
      "kind": "unit",
      "label": "1 cup, pieces"
    }
  ],
  "name": "Beef jerky",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 11.0,
    "energy_kcal": 410.0,
    "fat_g": 25.6,
    "fibre_g": 1.8,
    "folate_ug": 134.0,
    "iron_mg": 5.42,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 407.0,
    "potassium_mg": 597.0,
    "protein_g": 33.2,
    "salt_g": 4.45,
    "sat_fat_g": 10.8,
    "sodium_mg": 1780.0,
    "sugar_g": 9.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705860",
  "state": "Unspecified",
  "subcategory": "Cold cuts and cured meats",
  "tags": [
    "cold-cuts-and-cured-meats",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
