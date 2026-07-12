/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-regular",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707316",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Egg sandwich on English muffin, with sausage",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 16.0,
    "energy_kcal": 264.0,
    "fat_g": 16.5,
    "fibre_g": 1.2,
    "folate_ug": 49.0,
    "iron_mg": 2.14,
    "magnesium_mg": 18.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 186.0,
    "potassium_mg": 165.0,
    "protein_g": 12.9,
    "salt_g": 1.2525,
    "sat_fat_g": 6.23,
    "sodium_mg": 501.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707316",
  "state": "Unspecified",
  "subcategory": "Egg/breakfast sandwiches",
  "tags": [
    "egg-breakfast-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
