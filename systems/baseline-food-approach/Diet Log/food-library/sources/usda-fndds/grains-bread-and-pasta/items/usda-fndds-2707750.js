/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-hot-dog-bun",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707750",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-hot-dog-bun",
      "kind": "unit",
      "label": "1 hot dog bun"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "1-foot-long-hot-dog-bun",
      "kind": "unit",
      "label": "1 foot long hot dog bun"
    }
  ],
  "name": "Roll, whole wheat, hot dog bun",
  "nutritionPerBasis": {
    "calcium_mg": 198.0,
    "carbs_g": 44.9,
    "energy_kcal": 269.0,
    "fat_g": 4.38,
    "fibre_g": 6.1,
    "folate_ug": 42.0,
    "iron_mg": 2.42,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 217.0,
    "potassium_mg": 242.0,
    "protein_g": 12.4,
    "salt_g": 1.1925,
    "sat_fat_g": 0.921,
    "sodium_mg": 477.0,
    "sugar_g": 5.92,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707750",
  "state": "Unspecified",
  "subcategory": "Rolls and buns",
  "tags": [
    "grains-bread-and-pasta",
    "rolls-and-buns",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
