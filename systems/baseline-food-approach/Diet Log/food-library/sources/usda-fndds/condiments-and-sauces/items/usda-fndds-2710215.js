/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-dipping-size-container",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710215",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 16.2,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    }
  ],
  "name": "Salad dressing, light, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 7.0,
    "energy_kcal": 160.0,
    "fat_g": 14.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.13,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 36.0,
    "protein_g": 1.5,
    "salt_g": 2.0825,
    "sat_fat_g": 2.12,
    "sodium_mg": 833.0,
    "sugar_g": 5.65,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 2.45,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710215",
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
