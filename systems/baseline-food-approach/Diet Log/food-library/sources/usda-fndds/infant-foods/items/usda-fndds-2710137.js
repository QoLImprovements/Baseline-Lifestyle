/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-tablespoon",
  "description": "Baby food: meat and dinners",
  "id": "usda-fndds-2710137",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
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
    }
  ],
  "name": "Toddler meal, pasta and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 13.5,
    "energy_kcal": 78.0,
    "fat_g": 1.41,
    "fibre_g": 1.1,
    "folate_ug": 29.0,
    "iron_mg": 0.66,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 88.0,
    "protein_g": 3.02,
    "salt_g": 0.33,
    "sat_fat_g": 0.742,
    "sodium_mg": 132.0,
    "sugar_g": 1.61,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710137",
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
