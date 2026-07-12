/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-stick",
  "description": "Baby food: meat and dinners",
  "id": "usda-fndds-2705904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-stick",
      "kind": "unit",
      "label": "1 stick"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Baby Toddler meat stick",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 1.4,
    "energy_kcal": 188.0,
    "fat_g": 14.2,
    "fibre_g": 0.2,
    "folate_ug": 11.0,
    "iron_mg": 0.92,
    "magnesium_mg": 10.0,
    "omega3_g": 0.102,
    "phosphorus_mg": 120.0,
    "potassium_mg": 120.0,
    "protein_g": 13.7,
    "salt_g": 0.7375,
    "sat_fat_g": 4.14,
    "sodium_mg": 295.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705904",
  "state": "Unspecified",
  "subcategory": "Baby food: meat and dinners",
  "tags": [
    "baby-food-meat-and-dinners",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
