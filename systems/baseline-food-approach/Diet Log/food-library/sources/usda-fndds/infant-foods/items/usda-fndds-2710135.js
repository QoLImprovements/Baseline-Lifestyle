/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Baby food: meat and dinners",
  "id": "usda-fndds-2710135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-tray",
      "kind": "unit",
      "label": "1 tray"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Toddler meal, rice and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 13.4,
    "energy_kcal": 83.0,
    "fat_g": 1.4,
    "fibre_g": 0.9,
    "folate_ug": 27.0,
    "iron_mg": 0.82,
    "magnesium_mg": 14.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 47.0,
    "potassium_mg": 132.0,
    "protein_g": 4.02,
    "salt_g": 0.45,
    "sat_fat_g": 0.392,
    "sodium_mg": 180.0,
    "sugar_g": 1.47,
    "vitamin_a_ug": 117.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710135",
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
