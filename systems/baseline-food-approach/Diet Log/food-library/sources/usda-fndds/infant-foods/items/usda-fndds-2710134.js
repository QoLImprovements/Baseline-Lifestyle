/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-tray",
  "description": "Baby food: meat and dinners",
  "id": "usda-fndds-2710134",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-tray",
      "kind": "unit",
      "label": "1 tray"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Toddler meal, meat and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 8.33,
    "energy_kcal": 77.0,
    "fat_g": 3.34,
    "fibre_g": 1.0,
    "folate_ug": 11.0,
    "iron_mg": 0.51,
    "magnesium_mg": 14.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 41.0,
    "potassium_mg": 151.0,
    "protein_g": 3.49,
    "salt_g": 0.3925,
    "sat_fat_g": 0.505,
    "sodium_mg": 157.0,
    "sugar_g": 1.67,
    "vitamin_a_ug": 113.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710134",
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
