/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-tablespoon",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710198",
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
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bacon and tomato dressing",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 2.0,
    "energy_kcal": 326.0,
    "fat_g": 35.0,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 0.27,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 108.0,
    "protein_g": 1.8,
    "salt_g": 2.2625,
    "sat_fat_g": 5.44,
    "sodium_mg": 905.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 8.8,
    "vitamin_e_mg": 4.0,
    "vitamin_k_ug": 69.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710198",
  "state": "Unspecified",
  "subcategory": "Salad dressings and vegetable oils",
  "tags": [
    "meat-and-poultry",
    "salad-dressings-and-vegetable-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
