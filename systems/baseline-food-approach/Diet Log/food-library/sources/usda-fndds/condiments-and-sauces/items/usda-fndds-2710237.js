/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-tablespoon",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710237",
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
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    }
  ],
  "name": "Salad dressing, fat free, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 20.0,
    "energy_kcal": 107.0,
    "fat_g": 2.7,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.25,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 133.0,
    "protein_g": 1.4,
    "salt_g": 2.2425,
    "sat_fat_g": 0.494,
    "sodium_mg": 897.0,
    "sugar_g": 5.35,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710237",
  "state": "Unspecified",
  "subcategory": "Salad dressings and vegetable oils",
  "tags": [
    "condiments-and-sauces",
    "salad-dressings-and-vegetable-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
