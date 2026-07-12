/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707331",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 310.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Egg sandwich on bagel, with ham",
  "nutritionPerBasis": {
    "calcium_mg": 142.0,
    "carbs_g": 28.9,
    "energy_kcal": 238.0,
    "fat_g": 8.04,
    "fibre_g": 0.9,
    "folate_ug": 71.0,
    "iron_mg": 2.45,
    "magnesium_mg": 23.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 184.0,
    "potassium_mg": 136.0,
    "protein_g": 12.6,
    "salt_g": 1.275,
    "sat_fat_g": 3.19,
    "sodium_mg": 510.0,
    "sugar_g": 4.99,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707331",
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
