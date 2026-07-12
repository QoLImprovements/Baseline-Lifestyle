/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707322",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    }
  ],
  "name": "Egg sandwich on croissant, with ham",
  "nutritionPerBasis": {
    "calcium_mg": 153.0,
    "carbs_g": 18.8,
    "energy_kcal": 284.0,
    "fat_g": 17.8,
    "fibre_g": 1.0,
    "folate_ug": 53.0,
    "iron_mg": 1.5,
    "magnesium_mg": 16.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 214.0,
    "potassium_mg": 150.0,
    "protein_g": 12.3,
    "salt_g": 1.23,
    "sat_fat_g": 8.45,
    "sodium_mg": 492.0,
    "sugar_g": 4.98,
    "vitamin_a_ug": 185.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707322",
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
